import { TarkovResponse, request } from '../http';
import { createHash, randomBytes } from 'crypto';

import Debug from 'debug';
import { LocalStorage } from 'node-localstorage';
import { RequestInit } from 'node-fetch';

const debug = Debug('tarkov:launcher');

// Flow:
// - getDistribution
// - login
// - getConfig
// - getPatches
// - start

export interface Config {
  email: string;
  pass: string;
  launcherVersion: string;
  clientVersion: string;
  storagePath: string;
}

export interface Launcher {
  //
}

export class Launcher {
  token: string;
  store: LocalStorage;
  config: Config;

  constructor(config: Config) {
    this.config = config;
    this.store = new LocalStorage(`${config.storagePath}/${config.email}`);
  }

  defaultHeaders(): { [key: string]: string } {
    return {
      'Content-Type': 'application/json',
      'User-Agent': `BSG Launcher ${this.config.launcherVersion}`,
    };
  }

  headers(): { [key: string]: string } {
    return !this.token
      ? this.defaultHeaders()
      : {
          ...this.defaultHeaders(),
          Authorization: this.token,
        };
  }

  async getDistribution(): Promise<TarkovResponse> {
    const url = `https://launcher.escapefromtarkov.com/launcher/GetLauncherDistrib?launcherVersion=${this.config.launcherVersion}`;
    return this.request(url);
  }

  async login(): Promise<TarkovResponse> {
    if (this.store.getItem('hwCode') === null) {
      this.store.setItem('hwCode', await this.generateHawrdwareCode());
    }

    debug('Logging in...');

    const url = `https://launcher.escapefromtarkov.com/launcher/login?launcherVersion=${this.config.launcherVersion}&branch=live`;

    const body = {
      email: this.config.email,
      pass: createHash('md5')
        .update(this.config.pass)
        .digest('hex'),
      hwCode: this.store.getItem('hwCode'),
    };

    debug('Login Body:', body);

    const response = await this.request(url, {
      body: JSON.stringify(body),
    });

    debug('Login Response:', response);

    this.token = response.data.access_token;

    return response;
  }

  async getConfig(): Promise<TarkovResponse> {
    const url = `https://launcher.escapefromtarkov.com/launcher/config?launcherVersion=${this.config.launcherVersion}`;
    return this.request(url);
  }

  async getPatches(): Promise<TarkovResponse> {
    const url = `https://launcher.escapefromtarkov.com/launcher/GetPatchList?launcherVersion=${this.config.launcherVersion}&branch=live`;
    return this.request(url);
  }

  async start(): Promise<TarkovResponse> {
    const url = `https://prod.escapefromtarkov.com/launcher/game/start?launcherVersion=${this.config.launcherVersion}&branch=live`;

    const body = {
      version: {
        major: this.config.clientVersion,
        game: 'live',
        backend: '6',
      },
      hwCode: this.store.getItem('hwCode'),
    };

    return this.request(url, {
      body: JSON.stringify(body),
    });
  }

  // Hardware

  async createMd5Hash(): Promise<string> {
    const buffer: Buffer = await new Promise((resolve, reject) => {
      randomBytes(16, (error, buffer) => {
        if (error) {
          reject(error);
        }
        resolve(buffer);
      });
    });
    return createHash('md5')
      .update(buffer)
      .digest('hex');
  }

  async generateHawrdwareCode(): Promise<string> {
    return `#1-${(
      await Promise.all([...Array(3)].map(async () => this.createMd5Hash()))
    ).join(':')}-${(
      await Promise.all([...Array(4)].map(async () => this.createMd5Hash()))
    ).join('-')}-${(await this.createMd5Hash()).slice(0, 24)}`;
  }

  async activateHardware(activateCode: string): Promise<TarkovResponse> {
    debug('Activate hardware: ', this.store.getItem('hwCode'));

    const url = `https://launcher.escapefromtarkov.com/launcher/hardwareCode/activate?launcherVersion=${this.config.launcherVersion}`;

    const body = {
      email: this.config.email,
      hwCode: this.store.getItem('hwCode'),
      activateCode,
    };

    debug('Activate body:', body);

    const response = await this.request(url, {
      body: JSON.stringify(body),
    });
    debug('Activate response:', response);

    return response;
  }

  async request(
    url: string,
    options: RequestInit = {}
  ): Promise<TarkovResponse> {
    const headers = this.headers();
    return request(url, {
      headers,
      ...options,
    });
  }
}
