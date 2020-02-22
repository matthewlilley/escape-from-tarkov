import {
  Insurance,
  Loyalty,
  Repair,
  Trader as TraderContract,
} from './contracts/trader';

export class Trader implements TraderContract {
  _id: string;
  working: boolean;
  customization_seller: boolean;
  name: string;
  surname: string;
  nickname: string;
  location: string;
  avatar: string;
  balance_rub: number;
  balance_dol: number;
  balance_eur: number;
  display: boolean;
  discount: number;
  discount_end: number;
  buyer_up: boolean;
  currency: string;
  supply_next_time: number;
  repair: Repair;
  insurance: Insurance;
  gridHeight: number;
  loyalty: Loyalty;
  sell_category: any[];
}
