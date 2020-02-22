export interface Profile {
  _id: string;
  aid: number;
  savage: string;
  Info: Info;
  Customization: Customization;
  Health: Health;
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

export interface BackendCounter {
  id: string;
  qid: string;
  value: number;
}

export interface Bonus {
  type: string;
  templateId?: string;
  value?: number;
  passive?: boolean;
  visible?: boolean;
  production?: boolean;
  filter?: string[];
  id?: string;
  icon?: string;
}

export interface ConditionCounters {
  Counters: Counter[];
}

export interface Counter {
  id: string;
  value: number;
}

export interface Customization {
  Head: string;
  Body: string;
  Feet: string;
  Hands: string;
}

export interface Health {
  Hydration: Energy;
  Energy: Energy;
  BodyParts: BodyParts;
  UpdateTime: number;
}

export interface BodyParts {
  Head: Chest;
  Chest: Chest;
  Stomach: Chest;
  LeftArm: Chest;
  RightArm: Chest;
  LeftLeg: Chest;
  RightLeg: Chest;
}

export interface Chest {
  Health: Energy;
}

export interface Energy {
  Current: number;
  Maximum: number;
}

export interface Hideout {
  Production: Production;
  Areas: Area[];
}

export interface Area {
  type: number;
  level: number;
  active: boolean;
  passiveBonusesEnabled: boolean;
  completeTime: number;
  constructing: boolean;
  slots: Slot[];
}

export interface Slot {
  item: SlotItem[] | null;
}

export interface SlotItem {
  _id: string;
  _tpl: string;
  upd: PurpleUpd;
}

export interface PurpleUpd {
  SpawnedInSession?: boolean;
  Resource: Resource;
}

export interface Resource {
  Value: number;
}

export interface Production {
  '10': The10;
}

export interface The10 {
  Progress: number;
  inProgress: boolean;
  RecipeId: string;
  Products: Product[];
}

export interface Product {
  _id: string;
  _tpl: string;
  upd: ProductUpd;
}

export interface ProductUpd {
  SpawnedInSession: boolean;
  StackObjectsCount: number;
}

export interface Info {
  Nickname: string;
  LowerNickname: string;
  Side: string;
  Voice: string;
  Level: number;
  Experience: number;
  RegistrationDate: number;
  GameVersion: string;
  AccountType: number;
  MemberCategory: string;
  lockedMoveCommands: boolean;
  SavageLockTime: number;
  LastTimePlayedAsSavage: number;
  Settings: Settings;
  NeedWipe: boolean;
  GlobalWipe: boolean;
  NicknameChangeDate: number;
  Bans: any[];
}

export interface Settings {
  Role: string;
  BotDifficulty: string;
  Experience: number;
}

export interface InsuredItem {
  tid: string;
  itemId: string;
}

export interface Inventory {
  items: InventoryItem[];
  equipment: string;
  stash: string;
  questRaidItems: string;
  questStashItems: string;
  fastPanel: TraderStandings;
}

export interface TraderStandings {}

export interface InventoryItem {
  _id: string;
  _tpl: string;
  parentId?: string;
  slotId?: string;
  upd?: FluffyUpd;
  location?: LocationClass | number;
}

export interface LocationClass {
  x: number;
  y: number;
  r: number;
  isSearched?: boolean;
}

export interface FluffyUpd {
  Repairable?: Repairable;
  MedKit?: MedKit;
  StackObjectsCount?: number;
  Tag?: Tag;
  Key?: Key;
  SpawnedInSession?: boolean;
  Resource?: Resource;
  FoodDrink?: FoodDrink;
  FireMode?: FireMode;
  Sight?: Sight;
  Foldable?: Foldable;
  Togglable?: Togglable;
  FaceShield?: FaceShield;
  Light?: Light;
}

export interface FaceShield {
  Hits: number;
  HitSeed: number;
}

export interface FireMode {
  FireMode: string;
}

export interface Foldable {
  Folded: boolean;
}

export interface FoodDrink {
  HpPercent: number;
}

export interface Key {
  NumberOfUsages: number;
}

export interface Light {
  IsActive: boolean;
  SelectedMode: number;
}

export interface MedKit {
  HpResource: number;
}

export interface Repairable {
  MaxDurability: number;
  Durability: number;
}

export interface Sight {
  SelectedSightMode: number;
}

export interface Tag {
  Name: string;
  Color?: number;
}

export interface Togglable {
  On: boolean;
}

export interface Notes {
  Notes: any[];
}

export interface Quest {
  qid: string;
  startTime: number;
  status: number;
  statusTimers: { [key: string]: number };
}

export interface RagfairInfo {
  rating: number;
  isRatingGrowing: boolean;
  offers: any[];
}

export interface Skills {
  Common: Common[];
  Mastering: Mastering[];
  Points: number;
}

export interface Common {
  Id: string;
  Progress: number;
  PointsEarnedDuringSession: number;
  LastAccess: number;
}

export interface Mastering {
  Id: string;
  Progress: number;
}

export interface Stats {
  SessionCounters: Counters;
  OverallCounters: Counters;
  SessionExperienceMult: number;
  ExperienceBonusMult: number;
  TotalSessionExperience: number;
  LastSessionDate: number;
  Aggressor: Aggressor;
  DroppedItems: DroppedItem[];
  FoundInRaidItems: any[];
  Victims: Victim[];
  CarriedQuestItems: string[];
  TotalInGameTime: number;
  SurvivorClass: string;
}

export interface Aggressor {
  Name: string;
  Side: string;
  BodyPart: string;
  HeadSegment: string;
  WeaponName: string;
  Category: string;
}

export interface DroppedItem {
  QuestId: string;
  ItemId: string;
  ZoneId: string;
}

export interface Counters {
  Items: Item[];
}

export interface Item {
  Key: string[];
  Value: number;
}

export interface Victim {
  Name: string;
  Side: string;
  Time: string;
  Level: number;
  BodyPart: string;
  Weapon: string;
}
