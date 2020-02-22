import { Client } from '.';
import Debug from 'debug';
import { TarkovResponse } from '../http';

const debug = Debug('tarkov:flea-market');

interface FleaMarketFilter {
  page?: number;
  limit?: number;
  sortType?: number;
  sortDirection?: number;
  currency?: number;
  priceFrom?: number;
  priceTo?: number;
  quantityFrom?: number;
  quantityTo?: number;
  conditionFrom?: number;
  conditionTo?: number;
  oneHourExpiration?: boolean;
  removeBartering?: boolean;
  offerOwnerType?: number;
  onlyFunctional?: boolean;
  updateOfferCount?: boolean;
  handbookId?: string;
  linkedSearchId?: string;
  neededSearchId?: string;
  tm?: number;
}

export interface FleaMarket {
  client: Client;
  search(filter: FleaMarketFilter): Promise<TarkovResponse>;
  buy(offerId: string, quantity: number, items: any): Promise<TarkovResponse>;
  sell(): Promise<void>;
}

export class FleaMarket {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
  async search(filter: FleaMarketFilter): Promise<TarkovResponse> {
    const url = 'https://ragfair.escapefromtarkov.com/client/ragfair/find';

    debug('Search filter:', JSON.stringify(filter));

    const body = {
      page: filter.page || 0,
      limit: filter.limit || 15,
      sortType: filter.sortType || 5,
      sortDirection: filter.sortDirection || 0,
      currency: filter.currency || 1,
      priceFrom: filter.priceFrom || 0,
      priceTo: filter.priceTo || 0,
      quantityFrom: filter.quantityFrom || 0,
      quantityTo: filter.quantityTo || 0,
      conditionFrom: filter.conditionFrom || 0,
      conditionTo: filter.conditionTo || 0,
      oneHourExpiration: filter.oneHourExpiration || false,
      removeBartering: filter.removeBartering || false,
      offerOwnerType: filter.offerOwnerType || 0,
      onlyFunctional: filter.onlyFunctional || true,
      updateOfferCount: true,
      handbookId: filter.handbookId || '',
      linkedSearchId: filter.linkedSearchId || '',
      neededSearchId: filter.neededSearchId || '',
      tm: 1,
    };

    return this.client.request(url, {
      body: JSON.stringify(body),
    });
  }
  async buy(
    offerId: string,
    quantity: number,
    items: any
  ): Promise<TarkovResponse> {
    const url =
      'https://prod.escapefromtarkov.com/client/game/profile/items/moving';

    const body = {
      data: [
        {
          Action: 'RagFairBuyOffer',
          offers: [
            {
              id: offerId,
              count: quantity,
              items,
            },
          ],
        },
      ],
      tm: 2,
    };

    const response = await this.client.request(url, {
      body: JSON.stringify(body),
    });

    debug('Buy offer response:', JSON.stringify(response));

    this.client.profile.Inventory.update(response.data);

    return response;
  }
  async sell() {
    //
  }
}
