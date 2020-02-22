import {
  BackendCounter,
  Bonus,
  ConditionCounters,
  Customization,
  Health,
  Hideout,
  Info,
  InsuredItem,
  Notes,
  Profile as ProfileContract,
  Quest,
  RagfairInfo,
  Skills,
  Stats,
  TraderStandings,
} from '../contracts/profile';

import { Inventory } from './inventory';
import { Type } from 'class-transformer';

export class Profile implements ProfileContract {
  _id: string;
  aid: number;
  savage: string;
  Info: Info;
  Customization: Customization;
  Health: Health;
  @Type(() => Inventory)
  Inventory: Inventory;
  Skills: Skills;
  Stats: Stats;
  Encyclopedia: { [key: string]: boolean };
  ConditionCounters: ConditionCounters;
  BackendCounters: { [key: string]: BackendCounter };
  InsuredItems: InsuredItem[];
  Hideout: Hideout;
  Bonuses: Bonus[];
  Notes: Notes;
  Quests: Quest[];
  TraderStandings: TraderStandings;
  RagfairInfo: RagfairInfo;
  WishList: string[];
}
