import Debug from 'debug';
import { TarkovError } from '../src/http';
import config from './config.json';
import { createTarkov } from '../src';
import { promisify } from 'util';

const sleep = promisify(setTimeout);

const debug = Debug('tarkov:worker');

// watch object, k (item id) => v (price limit)
const watch = {
  '5d1b39a386f774252339976f': 13500, // tubes
  '5734773724597737fd047c14': 18000, // condensed milk
};

(async () => {
  const tarkov = createTarkov(config);

  await tarkov.login();

  const traders = await tarkov.getTraders();

  const therepist = traders.find(trader => trader.nickname === 'Терапевт');

  for (;;) {
    for (const [id, price] of Object.entries(watch)) {
      const { data } = await tarkov.fleaMarket.search({
        handbookId: id,
        priceTo: price,
      });

      if (data && data.offersCount && data.offersCount > 0) {
        debug(`${data.offersCount} offers found!`, JSON.stringify(data.offers));

        for (const offer of data.offers) {
          // debug("Offer:", offer);
          const stacks = await tarkov.getCurrencyStacks(offer.requirementsCost);

          // debug('Stacks:', stacks);

          try {
            await tarkov.fleaMarket.buy(offer._id, 1, stacks);
            debug('Offer bought!');

            const item = tarkov.inventory.items.find(i => i._tpl === id);

            await sleep(500);

            debug('Item:', item);

            await tarkov.trading.sell(therepist._id, item._id, 1);
            debug('Sold item!');
          } catch (e) {
            debug('Buy error!', e);
          }
        }
      }
    }
    await sleep(1000);
  }
})();
