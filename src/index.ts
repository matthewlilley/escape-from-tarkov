import 'reflect-metadata';

import { Client } from './client';
import Debug from 'debug';
import { FleaMarket } from './client/flea-market';
import { Inventory } from './client/profile/inventory';
import { Item } from './client/contracts/item';
import { Launcher } from './launcher';
import { Profile } from './client/profile';
import { TarkovError } from './http';
import { Trader } from './client/trading/trader';
import { Trading } from './client/trading';
import { format } from 'url';
import { plainToClass } from 'class-transformer';
import readline from 'readline';

const debug = Debug('tarkov');

export interface Config {
  email: string;
  pass: string;
  launcherVersion: string;
  clientVersion: string;
  unityVersion: string;
  storagePath: string;
}

export interface Tarkov {
  config: Config;
  launcher: Launcher;
  client: Client;
  fleaMarket: FleaMarket;
  trading: Trading;
  inventory: Inventory;
}

// The wrapper
export class Tarkov implements Tarkov {
  config: Config;

  launcher: Launcher;

  client: Client;

  fleaMarket: FleaMarket;

  trading: Trading;

  inventory: Inventory;

  constructor(config: Config) {
    this.config = config;
    this.launcher = new Launcher({
      email: this.config.email,
      pass: this.config.pass,
      launcherVersion: this.config.launcherVersion,
      clientVersion: this.config.clientVersion,
      storagePath: this.config.storagePath,
    });
    this.client = new Client({
      clientVersion: this.config.clientVersion,
      unityVersion: this.config.unityVersion,
    });
    this.fleaMarket = this.client.fleaMarket;
    this.trading = this.client.trading;
  }

  // Launcher

  async login(): Promise<void> {
    debug('Login flow start!');

    await this.checkLauncherVersion();

    try {
      await this.launcher.login();

      const config = await this.launcher.getConfig();
      debug('Launcher config', config);

      await this.checkClientVersion();

      await this.start();

      this.client.profiles = await this.getProfiles();
      // debug('Profiles:', this.client.profiles);

      this.client.profile = plainToClass(Profile, await this.getProfile());
      // debug('Profile:', this.client.profile);

      this.inventory = this.client.profile.Inventory;

      await this.client.selectProfile(this.client.profile._id);
      debug('Selected profile!');

      debug('Log in flow complete!');
    } catch (error) {
      debug('Login in error:', error);
      if (error instanceof TarkovError) {
        if (error.code === 209) {
          const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });

          const activateCode: string = await new Promise(resolve =>
            rl.question('Code: ', (activateCode: string) => {
              rl.close();
              resolve(activateCode);
            })
          );
          debug('Hardware Activation Code:', activateCode);

          await this.launcher.activateHardware(activateCode);

          debug('Re-login...');
          await this.login();
        }
      } else {
        throw new Error(error);
      }
    }
  }

  async start(): Promise<void> {
    const response = await this.launcher.start();

    debug('Session:', response.data.session);

    this.client.session = response.data.session;
  }

  // Client API

  async getProfiles(): Promise<Profile[]> {
    if (!this.client.profiles) {
      const { data } = await this.client.getProfiles();
      this.client.profiles = data;
    }

    // debug("Profiles:", this.client.profiles);

    return this.client.profiles;
  }

  async getProfile(): Promise<Profile> {
    if (!this.client.profiles) {
      await this.client.getProfiles();
    }

    if (!this.client.profile) {
      const profile = this.client.profiles.find(
        (profile: Profile) => profile.Info.Side !== 'Savage'
      );

      if (!profile) {
        throw Error("Couldn't find profile.");
      }

      this.client.profile = profile;
    }

    // debug("Profile:", this.client.profile);

    return this.client.profile;
  }

  async getTraders(): Promise<Trader[]> {
    const { data } = await this.trading.getTraders();

    return data.map((trader: Trader) => plainToClass(Trader, trader));
  }

  async getTrader(id: string): Promise<Trader> {
    const { data } = await this.trading.getTrader(id);

    return plainToClass(Trader, data);
  }

  async getItems(): Promise<Item[]> {
    if (!this.client.items) {
      const { data } = await this.client.getItems();
      this.client.items = data;
    }

    // debug('Items:', this.client.items);

    return this.client.items;
  }

  // TODO: Grid optimization algorithm
  async orginise() {
    //
  }

  // TODO: Move item
  async move() {
    //
  }

  async getCurrencyStacks(
    value: number,
    currency = '5449016a4bdc2d6f028b456f'
  ): Promise<{ id: string; count: number }[]> {
    return this.inventory.getCurrencyStacks(value, currency);
  }

  async checkLauncherVersion() {
    debug('Checking launcher version');
    const distribtion = await this.launcher.getDistribution();
    // debug('Launcher distribtion:', distribtion);

    debug('Configured launcher version', this.config.launcherVersion);

    debug('Latest launcher version', distribtion.data.Version);

    if (distribtion.data.Version !== this.config.launcherVersion) {
      debug(`Reconfigured launcher version to ${distribtion.data.Version}`);
      this.config.launcherVersion = distribtion.data.Version;
    }
  }

  async checkClientVersion() {
    debug('Checking client version');
    const patches = await this.launcher.getPatches();

    // debug('Patches:', patches);

    debug('Configured client version', this.config.clientVersion);

    debug('Latest client version', patches.data[0].Version);

    if (patches.data[0].Version !== this.config.clientVersion) {
      debug(`Reconfigured client version to ${patches.data[0].Version}`);
      this.config.clientVersion = patches.data[0].Version;
    }
  }
}

export function createTarkov(config: Config): Tarkov {
  return new Tarkov(config);
}
