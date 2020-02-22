import { TarkovResponse, request } from '../http';

import { FleaMarket } from './flea-market';
import { Item } from './contracts/item';
import { Profile } from './profile';
import { RequestInit } from 'node-fetch';
import { Trading } from './trading';

export interface Client {
  config: Config;

  session: string;

  profiles: Profile[];

  profile: Profile;

  requestId: number;

  items: Item[];

  fleaMarket: FleaMarket;

  trading: Trading;
}

interface Config {
  clientVersion: string;
  unityVersion: string;
}

export class Client {
  config: Config;

  session: string;

  profiles: Profile[];

  profile: Profile;

  requestId = 1;

  items: Item[];

  fleaMarket: FleaMarket;

  trading: Trading;

  constructor(config: Config) {
    this.config = config;
    this.fleaMarket = new FleaMarket(this);
    this.trading = new Trading(this);
  }

  async getItems(): Promise<TarkovResponse> {
    const url = `https://prod.escapefromtarkov.com/client/items`;
    return this.request(url);
  }

  async getProfiles(): Promise<TarkovResponse> {
    const url = `https://prod.escapefromtarkov.com/client/game/profile/list`;
    return this.request(url);
  }

  async selectProfile(uid: string): Promise<TarkovResponse> {
    const url = `https://prod.escapefromtarkov.com/client/game/profile/select`;
    return this.request(url, {
      body: JSON.stringify({ uid }),
    });
  }

  async request(
    url: string,
    options: RequestInit = {}
  ): Promise<TarkovResponse> {
    if (!this.session) {
      throw new Error('No session!');
    }

    const headers = this.headers();

    this.requestId++;

    return request(url, {
      headers,
      ...options,
    });
  }

  headers(): { [key: string]: string } {
    return {
      'Content-Type': 'application/json',
      'User-Agent': `UnityPlayer/${this.config.unityVersion} (UnityWebRequest/1.0, libcurl/7.52.0-DEV)`,
      'App-Version': `EFT Client ${this.config.clientVersion}`,
      'X-Unity-Version': this.config.unityVersion,
      Cookie: `PHPSESSID=${this.session}`,
      'GClient-RequestId': this.requestId.toString(),
    };
  }
}
