import {
  Inventory as InventoryContract,
  InventoryItem,
  TraderStandings,
} from '../contracts/profile';

import Debug from 'debug';

const debug = Debug('tarkov:inventory');

export interface InventoryUpdate {
  items: {
    new: InventoryItem[];
    change: InventoryItem[];
    del: InventoryItem[];
  };
}

export class Inventory implements InventoryContract {
  items: InventoryItem[];
  equipment: string;
  stash: string;
  questRaidItems: string;
  questStashItems: string;
  fastPanel: TraderStandings;
  update(data: InventoryUpdate): void {
    if (data.items.new) {
      debug('New Items: ', data.items.new);
      this.items = [...this.items, ...data.items.new];
    }
    if (data.items.change) {
      debug('Change Items: ', data.items.change);
      for (const change of data.items.change) {
        this.items[this.items.findIndex(i => i._id === change._id)] = change;
      }
    }
    if (data.items.del) {
      debug('Deleted Items: ', data.items.del);
      for (const d of data.items.del) {
        this.items.splice(
          this.items.findIndex(i => i._id === d._id),
          1
        );
      }
    }
  }

  // TODO: Clean this up
  async getCurrencyStacks(
    value: number,
    currency = '5449016a4bdc2d6f028b456f'
  ): Promise<{ id: string; count: number }[]> {
    let remaining = value;

    const stacks = [];

    for (const stack of this.items.filter(i => i._tpl === currency)) {
      if (stack.upd && stack.upd.StackObjectsCount) {
        if (stack.upd.StackObjectsCount >= remaining) {
          stacks.push({
            id: stack._id,
            count: remaining,
          });
          break;
        } else {
          remaining = remaining - stack.upd.StackObjectsCount;
          stacks.push({
            id: stack._id,
            count: stack.upd.StackObjectsCount,
          });
        }
      }
    }

    return stacks;
  }
}
