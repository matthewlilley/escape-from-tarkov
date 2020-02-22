export interface Item {
  _id: string;
  _name: string;
  _parent: string;
  _type: Type;
  _props: ItemProps;
  _proto?: string;
}

export interface ItemProps {
  Name?: string;
  ShortName?: string;
  Description?: string;
  Weight?: number;
  BackgroundColor?: BackgroundColor;
  Width?: number;
  Height?: number;
  StackMaxSize?: number;
  Rarity?: Rarity;
  SpawnChance?: number;
  CreditsPrice?: number;
  ItemSound?: string;
  Prefab?: Prefab;
  UsePrefab?: Prefab;
  StackObjectsCount?: number;
  NotShownInSlot?: boolean;
  ExaminedByDefault?: boolean;
  ExamineTime?: number;
  IsUndiscardable?: boolean;
  IsUnsaleable?: boolean;
  IsUnbuyable?: boolean;
  IsUngivable?: boolean;
  IsLockedafterEquip?: boolean;
  QuestItem?: boolean;
  LootExperience?: number;
  ExamineExperience?: number;
  HideEntrails?: boolean;
  RepairCost?: number;
  RepairSpeed?: number;
  ExtraSizeLeft?: number;
  ExtraSizeRight?: number;
  ExtraSizeUp?: number;
  ExtraSizeDown?: number;
  ExtraSizeForceAdd?: boolean;
  MergesWithChildren?: boolean;
  CanSellOnRagfair?: boolean;
  CanRequireOnRagfair?: boolean;
  BannedFromRagfair?: boolean;
  ConflictingItems?: string[];
  FixedPrice?: boolean;
  Unlootable?: boolean;
  UnlootableFromSlot?: UnlootableFromSlot;
  UnlootableFromSide?: UnlootableFromSide[];
  ChangePriceCoef?: number;
  AllowSpawnOnLocations?: AllowSpawnOnLocation[];
  SendToClient?: boolean;
  AnimationVariantsNumber?: number;
  DiscardingBlock?: boolean;
  MaxResource?: number;
  Resource?: number;
  DogTagQualities?: boolean;
  Grids?: Grid[];
  Slots?: Slot[];
  CanPutIntoDuringTheRaid?: boolean;
  CantRemoveFromSlotsDuringRaid?: string[];
  KeyIds?: string[];
  TagColor?: number;
  TagName?: string;
  Durability?: number;
  Accuracy?: number;
  Recoil?: number;
  Loudness?: number;
  EffectiveDistance?: number;
  Ergonomics?: number;
  Velocity?: number;
  RaidModdable?: boolean;
  ToolModdable?: boolean;
  BlocksFolding?: boolean;
  BlocksCollapsible?: boolean;
  IsAnimated?: boolean;
  HasShoulderContact?: boolean;
  SightingRange?: number;
  ModesCount?: number;
  muzzleModType?: MuzzleModType;
  sightModType?: SightModType;
  variableZoom?: boolean;
  varZoomCount?: number;
  varZoomAdd?: number;
  aimingSensitivity?: number;
  SightModesCount?: number;
  OpticCalibrationDistances?: number[] | null;
  Intensity?: number;
  Mask?: string;
  MaskSize?: number;
  NoiseIntensity?: number;
  NoiseScale?: number;
  Color?: Color;
  DiffuseIntensity?: number;
  HasHinge?: boolean;
  RampPalette?: string;
  DepthFade?: number;
  RoughnessCoef?: number;
  SpecularCoef?: number;
  MainTexColorCoef?: number;
  MinimumTemperatureValue?: number;
  RampShift?: number;
  HeatMin?: number;
  ColdMax?: number;
  IsNoisy?: boolean;
  IsFpsStuck?: boolean;
  IsGlitch?: boolean;
  IsMotionBlurred?: boolean;
  IsPixelated?: boolean;
  PixelationBlockCount?: number;
  magAnimationIndex?: number;
  Cartridges?: Cartridge[];
  CanFast?: boolean;
  CanHit?: boolean;
  CanAdmin?: boolean;
  LoadUnloadModifier?: number;
  CheckTimeModifier?: number;
  CheckOverride?: number;
  ReloadMagType?: ReloadM;
  VisibleAmmoRangesString?: VisibleAmmoRangesString;
  IsShoulderContact?: boolean;
  Foldable?: boolean;
  Retractable?: boolean;
  SizeReduceRight?: number;
  CenterOfImpact?: number;
  ShotgunDispersion?: number;
  IsSilencer?: boolean;
  SearchSound?: string;
  BlocksArmorVest?: boolean;
  speedPenaltyPercent?: number;
  GridLayoutName?: GridLayoutName;
  SpawnFilter?: string[];
  containType?: any[];
  sizeWidth?: number;
  sizeHeight?: number;
  isSecured?: boolean;
  spawnTypes?: string;
  lootFilter?: any[];
  spawnRarity?: string;
  minCountSpawn?: number;
  maxCountSpawn?: number;
  openedByKeyID?: any[];
  RigLayoutName?: string;
  MaxDurability?: number;
  armorZone?: ArmorZone[];
  armorClass?: number | string;
  mousePenalty?: number;
  weaponErgonomicPenalty?: number;
  BluntThroughput?: number;
  ArmorMaterial?: ArmorMaterial;
  weapClass?: string;
  weapUseType?: WeapUseType;
  ammoCaliber?: string;
  OperatingResource?: number;
  RepairComplexity?: number;
  durabSpawnMin?: number;
  durabSpawnMax?: number;
  isFastReload?: boolean;
  RecoilForceUp?: number;
  RecoilForceBack?: number;
  Convergence?: number;
  RecoilAngle?: number;
  weapFireType?: WeapFireType[];
  RecolDispersion?: number;
  bFirerate?: number;
  bEffDist?: number;
  bHearDist?: number;
  isChamberLoad?: boolean;
  chamberAmmoCount?: number;
  isBoltCatch?: boolean;
  defMagType?: string;
  defAmmo?: string;
  shotgunDispersion?: number;
  Chambers?: Chamber[];
  CameraRecoil?: number;
  CameraSnap?: number;
  ReloadMode?: ReloadM;
  AimPlane?: number;
  DeviationCurve?: number;
  DeviationMax?: number;
  TacticalReloadStiffnes?: Blindness;
  TacticalReloadFixation?: number;
  RecoilCenter?: Blindness;
  RotationCenter?: Blindness;
  RotationCenterNoStock?: Blindness;
  FoldedSlot?: FoldedSlot;
  CompactHandling?: boolean;
  MinRepairDegradation?: number;
  MaxRepairDegradation?: number;
  IronSightRange?: number;
  MustBoltBeOpennedForExternalReload?: boolean;
  MustBoltBeOpennedForInternalReload?: boolean;
  BoltAction?: boolean;
  HipAccuracyRestorationDelay?: number;
  HipAccuracyRestorationSpeed?: number;
  HipInnaccuracyGain?: number;
  ManualBoltCatch?: boolean;
  BlocksEarpiece?: boolean;
  BlocksEyewear?: boolean;
  BlocksHeadwear?: boolean;
  BlocksFaceCover?: boolean;
  foodUseTime?: number;
  foodEffectType?: DEffectType;
  StimulatorBuffs?: string;
  effects_health?: EffectsHealth;
  effects_damage?: EffectsDamage;
  effects_speed?: EffectsSpeed;
  MaximumNumberOfUsage?: number;
  knifeHitDelay?: number;
  knifeHitSlashRate?: number;
  knifeHitStabRate?: number;
  knifeHitRadius?: number;
  knifeHitSlashDam?: number;
  knifeHitStabDam?: number;
  knifeDurab?: number;
  PrimaryDistance?: number;
  SecondryDistance?: number;
  SlashPenetration?: number;
  StabPenetration?: number;
  PrimaryConsumption?: number;
  SecondryConsumption?: number;
  DeflectionConsumption?: number;
  ConfigPathStr?: string;
  MaxMarkersCount?: number;
  scaleMin?: number;
  scaleMax?: number;
  medUseTime?: number;
  medEffectType?: DEffectType;
  MaxHpResource?: number;
  hpResourceRate?: number;
  MaxEfficiency?: number;
  Addiction?: number;
  Overdose?: number;
  OverdoseRecovery?: number;
  AddictionRecovery?: number;
  Buffs?: Buff[] | BuffsClass;
  apResource?: number;
  krResource?: number;
  StackMinRandom?: number;
  StackMaxRandom?: number;
  ammoType?: AmmoType;
  Damage?: number;
  ammoAccr?: number;
  ammoRec?: number;
  ammoDist?: number;
  buckshotBullets?: number;
  PenetrationPower?: number;
  PenetrationPowerDiviation?: number;
  ammoHear?: number;
  ammoSfx?: AmmoSfx;
  MisfireChance?: number;
  MinFragmentsCount?: number;
  MaxFragmentsCount?: number;
  ammoShiftChance?: number;
  casingName?: string;
  casingEjectPower?: number;
  casingMass?: number;
  casingSounds?: CasingSounds;
  ProjectileCount?: number;
  InitialSpeed?: number;
  PenetrationChance?: number;
  RicochetChance?: number;
  FragmentationChance?: number;
  BallisticCoeficient?: number;
  Deterioration?: number;
  SpeedRetardation?: number;
  Tracer?: boolean;
  TracerColor?: TracerColor;
  TracerDistance?: number;
  ArmorDamage?: number;
  Caliber?: string;
  StaminaBurnPerDamage?: number;
  ShowBullet?: boolean;
  HasGrenaderComponent?: boolean;
  FuzeArmTimeSec?: number;
  ExplosionStrength?: number;
  MinExplosionDistance?: number;
  MaxExplosionDistance?: number;
  FragmentsCount?: number;
  FragmentType?: FragmentType;
  ShowHitEffectOnExplode?: boolean;
  ExplosionType?: ExplosionType;
  AmmoLifeTimeSec?: number;
  StackSlots?: Cartridge[];
  type?: string;
  eqMin?: number;
  eqMax?: number;
  rate?: number;
  ThrowType?: string;
  ExplDelay?: number;
  Strength?: number;
  ContusionDistance?: number;
  throwDamMax?: number;
  explDelay?: number;
  Blindness?: Blindness;
  Contusion?: Blindness;
  EmitTime?: number;
  CanBeHiddenDuringThrow?: boolean;
  Indestructibility?: number;
  headSegments?: HeadSegment[];
  FaceShieldComponent?: boolean;
  FaceShieldMask?: FaceShieldMask;
  MaterialType?: MaterialType;
  RicochetParams?: Blindness;
  DeafStrength?: DeafStrength;
  Distortion?: number;
  CompressorTreshold?: number;
  CompressorAttack?: number;
  CompressorRelease?: number;
  CompressorGain?: number;
  CutoffFreq?: number;
  Resonance?: number;
  CompressorVolume?: number;
  AmbientVolume?: number;
  DryVolume?: number;
}

export enum AllowSpawnOnLocation {
  Bigmap = 'bigmap',
  Interchange = 'Interchange',
  Laboratory = 'laboratory',
  RezervBase = 'RezervBase',
  Shoreline = 'Shoreline',
  Woods = 'Woods',
}

export enum ArmorMaterial {
  Aluminium = 'Aluminium',
  Aramid = 'Aramid',
  ArmoredSteel = 'ArmoredSteel',
  Ceramic = 'Ceramic',
  Combined = 'Combined',
  Glass = 'Glass',
  Titan = 'Titan',
  Uhmwpe = 'UHMWPE',
}

export enum BackgroundColor {
  Black = 'black',
  Blue = 'blue',
  Default = 'default',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Red = 'red',
  Violet = 'violet',
  Yellow = 'yellow',
}

export interface Blindness {
  x: number;
  y: number;
  z: number;
}

export interface Buff {
  Skill?: string;
  FadeIn: number;
  Plato: number;
  FadeOut: number;
  PlatoValue: number;
}

export interface BuffsClass {
  Vitality: Buff;
}

export interface Cartridge {
  _name: CartridgeName;
  _id: string;
  _parent: string;
  _max_count: number;
  _props: CartridgeProps;
  _proto: CartridgeProto;
}

export enum CartridgeName {
  Cartridges = 'cartridges',
}

export interface CartridgeProps {
  filters: PurpleFilter[];
}

export interface PurpleFilter {
  Filter: string[];
}

export enum CartridgeProto {
  The5748538B2459770Af276A261 = '5748538b2459770af276a261',
}

export interface Chamber {
  _name: ChamberName;
  _id: string;
  _parent: string;
  _props: ChamberProps;
  _required: boolean;
  _mergeSlotWithChildren: boolean;
  _proto: ChamberProto;
}

export enum ChamberName {
  PatronInWeapon = 'patron_in_weapon',
}

export interface ChamberProps {
  filters: FluffyFilter[];
}

export interface FluffyFilter {
  Filter: string[];
  MaxStackCount?: number;
}

export enum ChamberProto {
  The55D30C394Bdc2Dae468B4577 = '55d30c394bdc2dae468b4577',
  The55D30C4C4Bdc2Db4468B457E = '55d30c4c4bdc2db4468b457e',
  The55D4Af244Bdc2D962F8B4571 = '55d4af244bdc2d962f8b4571',
  The55D721144Bdc2D89028B456F = '55d721144bdc2d89028b456f',
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export enum DeafStrength {
  High = 'High',
  Low = 'Low',
  None = 'None',
}

export enum ExplosionType {
  BigRoundImpact = 'big_round_impact',
  BigRoundImpactExplosive = 'big_round_impact_explosive',
  Empty = '',
  SmallgrenadeExpl = 'smallgrenade_expl',
}

export enum FaceShieldMask {
  Narrow = 'Narrow',
  NoMask = 'NoMask',
  Wide = 'Wide',
}

export enum FoldedSlot {
  Empty = '',
  ModStock = 'mod_stock',
  ModStock001 = 'mod_stock_001',
  ModStockAkms = 'mod_stock_akms',
  ModStockAxis = 'mod_stock_axis',
}

export enum FragmentType {
  The5485A8684Bdc2Da71D8B4567 = '5485a8684bdc2da71d8b4567',
  The5996F6Cb86F774678763A6CA = '5996f6cb86f774678763a6ca',
  The5996F6D686F77467977Ba6Cc = '5996f6d686f77467977ba6cc',
  The5996F6Fc86F7745E585B4De3 = '5996f6fc86f7745e585b4de3',
}

export enum GridLayoutName {
  Empty = '',
  Oakley = 'oakley',
  Paratus = 'Paratus',
}

export interface Grid {
  _name: string;
  _id: string;
  _parent: string;
  _props: GridProps;
  _proto: GridProto;
}

export interface GridProps {
  filters: TentacledFilter[];
  cellsH: number;
  cellsV: number;
  minCount: number;
  maxCount: number;
  maxWeight: number;
}

export interface TentacledFilter {
  Filter: string[];
  ExcludedFilter: ExcludedFilter[];
}

export enum ExcludedFilter {
  The5448Bf274Bdc2Dfc2F8B456A = '5448bf274bdc2dfc2f8b456a',
  The55818Aeb4Bdc2Ddc698B456A = '55818aeb4bdc2ddc698b456a',
  The587E08Ee245977446B4410CF = '587e08ee245977446b4410cf',
  The5A16B8A9Fcdbcb00165Aa6CA = '5a16b8a9fcdbcb00165aa6ca',
  The5A16B93Dfcdbcbcae6687261 = '5a16b93dfcdbcbcae6687261',
  The5A1Ead28Fcdbcb001912Fa9F = '5a1ead28fcdbcb001912fa9f',
  The5A341C4086F77401F2541505 = '5a341c4086f77401f2541505',
  The5B3B6Dc75Acfc47A8773Fb1E = '5b3b6dc75acfc47a8773fb1e',
  The5C0695860Db834001B735461 = '5c0695860db834001b735461',
  The5C11046Cd174Af02A012E42B = '5c11046cd174af02a012e42b',
}

export enum GridProto {
  The55D329C24Bdc2D892F8B4567 = '55d329c24bdc2d892f8b4567',
}

export enum MaterialType {
  BodyArmor = 'BodyArmor',
  GlassVisor = 'GlassVisor',
  Helmet = 'Helmet',
}

export interface Prefab {
  path: string;
  rcid: string;
}

export enum Rarity {
  Common = 'Common',
  NotExist = 'Not_exist',
  Rare = 'Rare',
  Superrare = 'Superrare',
}

export enum ReloadM {
  ExternalMagazine = 'ExternalMagazine',
  InternalMagazine = 'InternalMagazine',
}

export interface Slot {
  _name: string;
  _id: string;
  _parent: string;
  _props: SlotProps;
  _required: boolean;
  _mergeSlotWithChildren: boolean;
  _proto: ChamberProto;
}

export interface SlotProps {
  filters: StickyFilter[];
}

export interface StickyFilter {
  Filter: string[];
  Shift?: number;
  AnimationIndex?: number;
}

export enum TracerColor {
  Green = 'green',
  Red = 'red',
  TracerGreen = 'tracerGreen',
  TracerRed = 'tracerRed',
  TracerYellow = 'tracerYellow',
}

export enum UnlootableFromSide {
  Bear = 'Bear',
  Savage = 'Savage',
  Usec = 'Usec',
}

export enum UnlootableFromSlot {
  FirstPrimaryWeapon = 'FirstPrimaryWeapon',
  Scabbard = 'Scabbard',
}

export enum VisibleAmmoRangesString {
  The111830 = '1-1;18-30',
  The112 = '1-12',
  The11446688101012121414161618182020 = '1-1;4-4;6-6;8-8;10-10;12-12;14-14;16-16;18-18;20-20',
  The114581013151820 = '1-1;4-5;8-10;13-15;18-20',
  The1148 = '1-1;4-8',
  The12 = '1-2',
  The121927 = '1-2;19-27',
  The13 = '1-3',
  The141220 = '1-4;12-20',
}

export enum AmmoSfx {
  Standart = 'standart',
  Tracer = 'tracer',
  TracerRed = 'tracer_red',
}

export enum AmmoType {
  Buckshot = 'buckshot',
  Bullet = 'bullet',
  Grenade = 'grenade',
}

export enum ArmorZone {
  Chest = 'Chest',
  Head = 'Head',
  LeftArm = 'LeftArm',
  LeftLeg = 'LeftLeg',
  RightArm = 'RightArm',
  RightLeg = 'RightLeg',
  Stomach = 'Stomach',
}

export enum CasingSounds {
  PistolSmall = 'pistol_small',
  Rifle556 = 'rifle556',
  Rifle762 = 'rifle762',
  ShotgunBig = 'shotgun_big',
  ShotgunSmall = 'shotgun_small',
  The127Rifle = '127rifle',
  The40Mmgrenade = '40mmgrenade',
}

export interface EffectsDamage {
  bloodloss: Bloodloss;
  fracture: Bloodloss;
  pain: Bloodloss;
  contusion: Bloodloss;
  toxication: Bloodloss;
  radExposure: Bloodloss;
  destroyedPart?: Bloodloss;
}

export interface Bloodloss {
  remove: boolean;
  time: number;
  duration: number;
  fadeOut?: number;
  cost?: number;
  healthPenaltyMin?: number;
  healthPenaltyMax?: number;
}

export interface EffectsHealth {
  common: ArmLeft;
  head: ArmLeft;
  arm_left: ArmLeft;
  arm_right: ArmLeft;
  chest: ArmLeft;
  tummy: ArmLeft;
  leg_left: ArmLeft;
  leg_right: ArmLeft;
  energy: ArmLeft;
  hydration: ArmLeft;
}

export interface ArmLeft {
  value: number;
  percent: boolean;
  time: number;
  duration: number;
}

export interface EffectsSpeed {
  mobility: ArmLeft;
  recoil: ArmLeft;
  reloadSpeed: ArmLeft;
  lootSpeed: ArmLeft;
  unlockSpeed: ArmLeft;
}

export enum DEffectType {
  AfterUse = 'afterUse',
  DuringUse = 'duringUse',
}

export enum HeadSegment {
  Ears = 'Ears',
  Eyes = 'Eyes',
  Jaws = 'Jaws',
  Nape = 'Nape',
  Top = 'Top',
}

export enum MuzzleModType {
  Brake = 'brake',
  Conpensator = 'conpensator',
  MuzzleCombo = 'muzzleCombo',
  Pms = 'pms',
  Silencer = 'silencer',
}

export enum SightModType {
  Hybrid = 'hybrid',
  Iron = 'iron',
  Optic = 'optic',
  Reflex = 'reflex',
}

export enum WeapFireType {
  Burst = 'burst',
  Fullauto = 'fullauto',
  Single = 'single',
}

export enum WeapUseType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum Type {
  Item = 'Item',
  Node = 'Node',
}
