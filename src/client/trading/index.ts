import { Client } from '..';
import Debug from 'debug';
import { TarkovResponse } from '../../http';

const debug = Debug('tarkov:trading');

export class Trading {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async getTraders(): Promise<TarkovResponse> {
    const url = `https://trading.escapefromtarkov.com/client/trading/api/getTradersList`;
    return this.client.request(url);
  }

  async getTrader(id: string): Promise<TarkovResponse> {
    const url = `https://trading.escapefromtarkov.com/client/trading/api/getTrader/${id}`;
    return this.client.request(url);
  }

  async buy(
    traderId: string,
    itemId: string,
    count: number,
    schemeItems: any
  ): Promise<TarkovResponse> {
    const url =
      'https://prod.escapefromtarkov.com/client/game/profile/items/moving';

    const body = {
      data: [
        {
          Action: 'TradingConfirm',
          type: 'buy_from_trader',
          tid: traderId,
          item_id: itemId,
          count,
          scheme_id: 0,
          scheme_items: schemeItems,
        },
      ],
      tm: 0,
    };

    const response = await this.client.request(url, {
      body: JSON.stringify(body),
    });

    debug('Buy response:', JSON.stringify(response));

    this.client.profile.Inventory.update(response.data);

    return response;
  }
  async sell(
    traderId: string,
    itemId: string,
    count: number
  ): Promise<TarkovResponse> {
    const url =
      'https://prod.escapefromtarkov.com/client/game/profile/items/moving';

    const body = {
      data: [
        {
          Action: 'TradingConfirm',
          type: 'sell_to_trader',
          tid: traderId,
          items: [
            {
              id: itemId,
              count,
              scheme_id: 0,
            },
          ],
        },
      ],
      tm: 0,
    };

    const response = await this.client.request(url, {
      body: JSON.stringify(body),
    });

    debug('Sell response:', JSON.stringify(response));

    this.client.profile.Inventory.update(response.data);

    return response;
  }
}
