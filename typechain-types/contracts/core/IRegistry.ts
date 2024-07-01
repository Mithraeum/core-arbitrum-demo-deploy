/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace IRegistry {
  export type GameResourceStruct = {
    tokenName: string;
    tokenSymbol: string;
    resourceTypeId: BytesLike;
  };

  export type GameResourceStructOutput = [
    tokenName: string,
    tokenSymbol: string,
    resourceTypeId: string
  ] & { tokenName: string; tokenSymbol: string; resourceTypeId: string };

  export type GameUnitStruct = {
    tokenName: string;
    tokenSymbol: string;
    unitTypeId: BytesLike;
  };

  export type GameUnitStructOutput = [
    tokenName: string,
    tokenSymbol: string,
    unitTypeId: string
  ] & { tokenName: string; tokenSymbol: string; unitTypeId: string };

  export type UnitStatsStruct = {
    offenseStage1: BigNumberish;
    defenceStage1: BigNumberish;
    offenseStage2: BigNumberish;
    defenceStage2: BigNumberish;
    siegePower: BigNumberish;
    siegeSupport: BigNumberish;
  };

  export type UnitStatsStructOutput = [
    offenseStage1: bigint,
    defenceStage1: bigint,
    offenseStage2: bigint,
    defenceStage2: bigint,
    siegePower: bigint,
    siegeSupport: bigint
  ] & {
    offenseStage1: bigint;
    defenceStage1: bigint;
    offenseStage2: bigint;
    defenceStage2: bigint;
    siegePower: bigint;
    siegeSupport: bigint;
  };
}

export interface IRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getAdvancedProductionTileBonusByVariation"
      | "getArmyStunDurationByJoiningBattleAtAttackingSide"
      | "getArmyStunDurationPerRobberyMultiplier"
      | "getBaseBattleDuration"
      | "getBasicProductionBuildingCoefficient"
      | "getBattleDurationLosingArmyStunMultiplier"
      | "getBattleDurationWinningArmyStunMultiplier"
      | "getBuildingTokenTransferThresholdPercent"
      | "getBuildingTypeIds"
      | "getCaptureTileDurationPerTile"
      | "getChanceForTileWithBonusByRegionTier"
      | "getCorruptionIndexByResource"
      | "getCultistUnitTypeId"
      | "getCultistsNoDestructionDelay"
      | "getCultistsPerRegionMultiplier"
      | "getCultistsSummonDelay"
      | "getGameResources"
      | "getGameUnits"
      | "getGlobalMultiplier"
      | "getInitialCaptureProsperityBasicValue"
      | "getInitialCaptureProsperityPerTileValue"
      | "getInitialCorruptionIndexAmountPerRegionTier"
      | "getInitialCultistsAmountPerRegionTier"
      | "getManeuverDurationStunMultiplier"
      | "getMaxAdvancedProductionTileBuff"
      | "getMaxAllowedRobberyMultiplierIncreaseValue"
      | "getMaxAllowedUnitsToBuyPerTransaction"
      | "getMaxAllowedWorkersToBuyPerTransaction"
      | "getMaxCapturedTilesForSettlement"
      | "getMaxCultistsPerRegion"
      | "getMaxRegionTier"
      | "getMaxSettlementsPerRegion"
      | "getMinimumBattleDuration"
      | "getMinimumUserSettlementsCountInNeighboringRegionRequiredToIncludeRegion"
      | "getNecessaryProsperityPercentForClaimingTileCapture"
      | "getNewSettlementPriceIncreaseMultiplier"
      | "getNewSettlementStartingPrice"
      | "getNextCaptureProsperityBasicThreshold"
      | "getNextCaptureProsperityPerTileThreshold"
      | "getProductionTicksInSecond"
      | "getProsperityForUnitLiquidation"
      | "getRegionInclusionPrice"
      | "getRegionOwnerSettlementPurchasePercent"
      | "getResourceWeight"
      | "getRobberyPointsPerDamageMultiplier"
      | "getRobberyPointsToResourceMultiplier"
      | "getSettlementPayToDecreaseCorruptionIndexPenaltyMultiplier"
      | "getSettlementPriceMultiplierPerIncreasedRegionTier"
      | "getStunDurationMultiplierOfCancelledSecretManeuver"
      | "getTileCaptureCancellationFee"
      | "getToTreasuryPercent"
      | "getUnitBattleMultiplierTileBonusByVariation"
      | "getUnitHiringFortHpMultiplier"
      | "getUnitPoolType"
      | "getUnitPriceDropByUnitTypeId"
      | "getUnitPriceIncreaseForEachUnit"
      | "getUnitResourceUsagePer1SecondOfDecreasedManeuverDuration"
      | "getUnitStats"
      | "getUnitTypeIds"
      | "getWorkerCapacityCoefficient"
      | "getWorkerPriceDrop"
      | "getWorkerPriceIncreaseForEachWorker"
      | "getWorkersForUnitLiquidation"
      | "globalMultiplier"
      | "init"
      | "mightyCreator"
      | "setMightyCreator"
      | "setWorldAssetFactory"
      | "settlementStartingPrice"
      | "worldAssetFactory"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAdvancedProductionTileBonusByVariation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getArmyStunDurationByJoiningBattleAtAttackingSide",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getArmyStunDurationPerRobberyMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBaseBattleDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBasicProductionBuildingCoefficient",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBattleDurationLosingArmyStunMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBattleDurationWinningArmyStunMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBuildingTokenTransferThresholdPercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBuildingTypeIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCaptureTileDurationPerTile",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChanceForTileWithBonusByRegionTier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCorruptionIndexByResource",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCultistUnitTypeId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCultistsNoDestructionDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCultistsPerRegionMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCultistsSummonDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGameResources",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGameUnits",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGlobalMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInitialCaptureProsperityBasicValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInitialCaptureProsperityPerTileValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInitialCorruptionIndexAmountPerRegionTier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInitialCultistsAmountPerRegionTier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getManeuverDurationStunMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxAdvancedProductionTileBuff",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxAllowedRobberyMultiplierIncreaseValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxAllowedUnitsToBuyPerTransaction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxAllowedWorkersToBuyPerTransaction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxCapturedTilesForSettlement",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxCultistsPerRegion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxRegionTier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxSettlementsPerRegion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumBattleDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumUserSettlementsCountInNeighboringRegionRequiredToIncludeRegion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNecessaryProsperityPercentForClaimingTileCapture",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNewSettlementPriceIncreaseMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNewSettlementStartingPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextCaptureProsperityBasicThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextCaptureProsperityPerTileThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProductionTicksInSecond",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProsperityForUnitLiquidation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRegionInclusionPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRegionOwnerSettlementPurchasePercent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getResourceWeight",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRobberyPointsPerDamageMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRobberyPointsToResourceMultiplier",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSettlementPayToDecreaseCorruptionIndexPenaltyMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSettlementPriceMultiplierPerIncreasedRegionTier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStunDurationMultiplierOfCancelledSecretManeuver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTileCaptureCancellationFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getToTreasuryPercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitBattleMultiplierTileBonusByVariation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitHiringFortHpMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitPoolType",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitPriceDropByUnitTypeId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitPriceIncreaseForEachUnit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitResourceUsagePer1SecondOfDecreasedManeuverDuration",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitStats",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitTypeIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWorkerCapacityCoefficient",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getWorkerPriceDrop",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWorkerPriceIncreaseForEachWorker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWorkersForUnitLiquidation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "globalMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mightyCreator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMightyCreator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setWorldAssetFactory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "settlementStartingPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "worldAssetFactory",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getAdvancedProductionTileBonusByVariation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArmyStunDurationByJoiningBattleAtAttackingSide",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArmyStunDurationPerRobberyMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBaseBattleDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBasicProductionBuildingCoefficient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBattleDurationLosingArmyStunMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBattleDurationWinningArmyStunMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuildingTokenTransferThresholdPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuildingTypeIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCaptureTileDurationPerTile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getChanceForTileWithBonusByRegionTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCorruptionIndexByResource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCultistUnitTypeId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCultistsNoDestructionDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCultistsPerRegionMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCultistsSummonDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameResources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameUnits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGlobalMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInitialCaptureProsperityBasicValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInitialCaptureProsperityPerTileValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInitialCorruptionIndexAmountPerRegionTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInitialCultistsAmountPerRegionTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getManeuverDurationStunMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxAdvancedProductionTileBuff",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxAllowedRobberyMultiplierIncreaseValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxAllowedUnitsToBuyPerTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxAllowedWorkersToBuyPerTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxCapturedTilesForSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxCultistsPerRegion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxRegionTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxSettlementsPerRegion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumBattleDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumUserSettlementsCountInNeighboringRegionRequiredToIncludeRegion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNecessaryProsperityPercentForClaimingTileCapture",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNewSettlementPriceIncreaseMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNewSettlementStartingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextCaptureProsperityBasicThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextCaptureProsperityPerTileThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProductionTicksInSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProsperityForUnitLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegionInclusionPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegionOwnerSettlementPurchasePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResourceWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRobberyPointsPerDamageMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRobberyPointsToResourceMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSettlementPayToDecreaseCorruptionIndexPenaltyMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSettlementPriceMultiplierPerIncreasedRegionTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStunDurationMultiplierOfCancelledSecretManeuver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTileCaptureCancellationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getToTreasuryPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitBattleMultiplierTileBonusByVariation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitHiringFortHpMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitPoolType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitPriceDropByUnitTypeId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitPriceIncreaseForEachUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitResourceUsagePer1SecondOfDecreasedManeuverDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitTypeIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWorkerCapacityCoefficient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWorkerPriceDrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWorkerPriceIncreaseForEachWorker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWorkersForUnitLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "globalMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mightyCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMightyCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWorldAssetFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlementStartingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "worldAssetFactory",
    data: BytesLike
  ): Result;
}

export interface IRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): IRegistry;
  waitForDeployment(): Promise<this>;

  interface: IRegistryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getAdvancedProductionTileBonusByVariation: TypedContractMethod<
    [tileBonusVariation: BigNumberish],
    [
      [string, bigint] & {
        buildingTypeId: string;
        capacityAmountMultiplier: bigint;
      }
    ],
    "view"
  >;

  getArmyStunDurationByJoiningBattleAtAttackingSide: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getArmyStunDurationPerRobberyMultiplier: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getBaseBattleDuration: TypedContractMethod<[], [bigint], "view">;

  getBasicProductionBuildingCoefficient: TypedContractMethod<
    [buildingTypeId: BytesLike],
    [bigint],
    "view"
  >;

  getBattleDurationLosingArmyStunMultiplier: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getBattleDurationWinningArmyStunMultiplier: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getBuildingTokenTransferThresholdPercent: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getBuildingTypeIds: TypedContractMethod<[], [string[]], "view">;

  getCaptureTileDurationPerTile: TypedContractMethod<[], [bigint], "view">;

  getChanceForTileWithBonusByRegionTier: TypedContractMethod<
    [regionTier: BigNumberish],
    [bigint],
    "view"
  >;

  getCorruptionIndexByResource: TypedContractMethod<
    [resourceTypeId: BytesLike],
    [bigint],
    "view"
  >;

  getCultistUnitTypeId: TypedContractMethod<[], [string], "view">;

  getCultistsNoDestructionDelay: TypedContractMethod<[], [bigint], "view">;

  getCultistsPerRegionMultiplier: TypedContractMethod<[], [bigint], "view">;

  getCultistsSummonDelay: TypedContractMethod<[], [bigint], "view">;

  getGameResources: TypedContractMethod<
    [],
    [IRegistry.GameResourceStructOutput[]],
    "view"
  >;

  getGameUnits: TypedContractMethod<
    [],
    [IRegistry.GameUnitStructOutput[]],
    "view"
  >;

  getGlobalMultiplier: TypedContractMethod<[], [bigint], "view">;

  getInitialCaptureProsperityBasicValue: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getInitialCaptureProsperityPerTileValue: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getInitialCorruptionIndexAmountPerRegionTier: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getInitialCultistsAmountPerRegionTier: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getManeuverDurationStunMultiplier: TypedContractMethod<[], [bigint], "view">;

  getMaxAdvancedProductionTileBuff: TypedContractMethod<[], [bigint], "view">;

  getMaxAllowedRobberyMultiplierIncreaseValue: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getMaxAllowedUnitsToBuyPerTransaction: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getMaxAllowedWorkersToBuyPerTransaction: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getMaxCapturedTilesForSettlement: TypedContractMethod<
    [tileBonusType: BigNumberish],
    [bigint],
    "view"
  >;

  getMaxCultistsPerRegion: TypedContractMethod<[], [bigint], "view">;

  getMaxRegionTier: TypedContractMethod<[], [bigint], "view">;

  getMaxSettlementsPerRegion: TypedContractMethod<[], [bigint], "view">;

  getMinimumBattleDuration: TypedContractMethod<[], [bigint], "view">;

  getMinimumUserSettlementsCountInNeighboringRegionRequiredToIncludeRegion: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getNecessaryProsperityPercentForClaimingTileCapture: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getNewSettlementPriceIncreaseMultiplier: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getNewSettlementStartingPrice: TypedContractMethod<[], [bigint], "view">;

  getNextCaptureProsperityBasicThreshold: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getNextCaptureProsperityPerTileThreshold: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getProductionTicksInSecond: TypedContractMethod<[], [bigint], "view">;

  getProsperityForUnitLiquidation: TypedContractMethod<
    [unitTypeId: BytesLike],
    [bigint],
    "view"
  >;

  getRegionInclusionPrice: TypedContractMethod<
    [regionTier: BigNumberish],
    [bigint],
    "view"
  >;

  getRegionOwnerSettlementPurchasePercent: TypedContractMethod<
    [regionTier: BigNumberish],
    [bigint],
    "view"
  >;

  getResourceWeight: TypedContractMethod<
    [resourceTypeId: BytesLike],
    [bigint],
    "view"
  >;

  getRobberyPointsPerDamageMultiplier: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getRobberyPointsToResourceMultiplier: TypedContractMethod<
    [resourceTypeId: BytesLike],
    [bigint],
    "view"
  >;

  getSettlementPayToDecreaseCorruptionIndexPenaltyMultiplier: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getSettlementPriceMultiplierPerIncreasedRegionTier: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getStunDurationMultiplierOfCancelledSecretManeuver: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getTileCaptureCancellationFee: TypedContractMethod<[], [bigint], "view">;

  getToTreasuryPercent: TypedContractMethod<[], [bigint], "view">;

  getUnitBattleMultiplierTileBonusByVariation: TypedContractMethod<
    [tileBonusVariation: BigNumberish],
    [[string, bigint] & { unitTypeId: string; unitBattleMultiplier: bigint }],
    "view"
  >;

  getUnitHiringFortHpMultiplier: TypedContractMethod<[], [bigint], "view">;

  getUnitPoolType: TypedContractMethod<
    [unitTypeId: BytesLike],
    [string],
    "view"
  >;

  getUnitPriceDropByUnitTypeId: TypedContractMethod<
    [unitTypeId: BytesLike],
    [[bigint, bigint] & { numerator: bigint; denominator: bigint }],
    "view"
  >;

  getUnitPriceIncreaseForEachUnit: TypedContractMethod<
    [],
    [[bigint, bigint] & { numerator: bigint; denominator: bigint }],
    "view"
  >;

  getUnitResourceUsagePer1SecondOfDecreasedManeuverDuration: TypedContractMethod<
    [unitTypeId: BytesLike],
    [bigint],
    "view"
  >;

  getUnitStats: TypedContractMethod<
    [unitTypeId: BytesLike],
    [IRegistry.UnitStatsStructOutput],
    "view"
  >;

  getUnitTypeIds: TypedContractMethod<[], [string[]], "view">;

  getWorkerCapacityCoefficient: TypedContractMethod<
    [buildingTypeId: BytesLike],
    [bigint],
    "view"
  >;

  getWorkerPriceDrop: TypedContractMethod<
    [],
    [[bigint, bigint] & { numerator: bigint; denominator: bigint }],
    "view"
  >;

  getWorkerPriceIncreaseForEachWorker: TypedContractMethod<
    [],
    [[bigint, bigint] & { numerator: bigint; denominator: bigint }],
    "view"
  >;

  getWorkersForUnitLiquidation: TypedContractMethod<
    [unitTypeId: BytesLike],
    [bigint],
    "view"
  >;

  globalMultiplier: TypedContractMethod<[], [bigint], "view">;

  init: TypedContractMethod<
    [globalMultiplier: BigNumberish, settlementStartingPrice: BigNumberish],
    [void],
    "nonpayable"
  >;

  mightyCreator: TypedContractMethod<[], [string], "view">;

  setMightyCreator: TypedContractMethod<
    [newMightyCreator: AddressLike],
    [void],
    "nonpayable"
  >;

  setWorldAssetFactory: TypedContractMethod<
    [worldAssetFactoryAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  settlementStartingPrice: TypedContractMethod<[], [bigint], "view">;

  worldAssetFactory: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getAdvancedProductionTileBonusByVariation"
  ): TypedContractMethod<
    [tileBonusVariation: BigNumberish],
    [
      [string, bigint] & {
        buildingTypeId: string;
        capacityAmountMultiplier: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getArmyStunDurationByJoiningBattleAtAttackingSide"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getArmyStunDurationPerRobberyMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBaseBattleDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBasicProductionBuildingCoefficient"
  ): TypedContractMethod<[buildingTypeId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBattleDurationLosingArmyStunMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBattleDurationWinningArmyStunMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBuildingTokenTransferThresholdPercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBuildingTypeIds"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getCaptureTileDurationPerTile"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getChanceForTileWithBonusByRegionTier"
  ): TypedContractMethod<[regionTier: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCorruptionIndexByResource"
  ): TypedContractMethod<[resourceTypeId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCultistUnitTypeId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getCultistsNoDestructionDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCultistsPerRegionMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCultistsSummonDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getGameResources"
  ): TypedContractMethod<[], [IRegistry.GameResourceStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getGameUnits"
  ): TypedContractMethod<[], [IRegistry.GameUnitStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getGlobalMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getInitialCaptureProsperityBasicValue"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getInitialCaptureProsperityPerTileValue"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getInitialCorruptionIndexAmountPerRegionTier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getInitialCultistsAmountPerRegionTier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getManeuverDurationStunMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxAdvancedProductionTileBuff"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxAllowedRobberyMultiplierIncreaseValue"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxAllowedUnitsToBuyPerTransaction"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxAllowedWorkersToBuyPerTransaction"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxCapturedTilesForSettlement"
  ): TypedContractMethod<[tileBonusType: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxCultistsPerRegion"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxRegionTier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxSettlementsPerRegion"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMinimumBattleDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMinimumUserSettlementsCountInNeighboringRegionRequiredToIncludeRegion"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getNecessaryProsperityPercentForClaimingTileCapture"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getNewSettlementPriceIncreaseMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getNewSettlementStartingPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getNextCaptureProsperityBasicThreshold"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getNextCaptureProsperityPerTileThreshold"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getProductionTicksInSecond"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getProsperityForUnitLiquidation"
  ): TypedContractMethod<[unitTypeId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRegionInclusionPrice"
  ): TypedContractMethod<[regionTier: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRegionOwnerSettlementPurchasePercent"
  ): TypedContractMethod<[regionTier: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getResourceWeight"
  ): TypedContractMethod<[resourceTypeId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRobberyPointsPerDamageMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRobberyPointsToResourceMultiplier"
  ): TypedContractMethod<[resourceTypeId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSettlementPayToDecreaseCorruptionIndexPenaltyMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSettlementPriceMultiplierPerIncreasedRegionTier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getStunDurationMultiplierOfCancelledSecretManeuver"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTileCaptureCancellationFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getToTreasuryPercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getUnitBattleMultiplierTileBonusByVariation"
  ): TypedContractMethod<
    [tileBonusVariation: BigNumberish],
    [[string, bigint] & { unitTypeId: string; unitBattleMultiplier: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUnitHiringFortHpMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getUnitPoolType"
  ): TypedContractMethod<[unitTypeId: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getUnitPriceDropByUnitTypeId"
  ): TypedContractMethod<
    [unitTypeId: BytesLike],
    [[bigint, bigint] & { numerator: bigint; denominator: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUnitPriceIncreaseForEachUnit"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { numerator: bigint; denominator: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUnitResourceUsagePer1SecondOfDecreasedManeuverDuration"
  ): TypedContractMethod<[unitTypeId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getUnitStats"
  ): TypedContractMethod<
    [unitTypeId: BytesLike],
    [IRegistry.UnitStatsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUnitTypeIds"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getWorkerCapacityCoefficient"
  ): TypedContractMethod<[buildingTypeId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getWorkerPriceDrop"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { numerator: bigint; denominator: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getWorkerPriceIncreaseForEachWorker"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { numerator: bigint; denominator: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getWorkersForUnitLiquidation"
  ): TypedContractMethod<[unitTypeId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "globalMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "init"
  ): TypedContractMethod<
    [globalMultiplier: BigNumberish, settlementStartingPrice: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mightyCreator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setMightyCreator"
  ): TypedContractMethod<[newMightyCreator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setWorldAssetFactory"
  ): TypedContractMethod<
    [worldAssetFactoryAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "settlementStartingPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "worldAssetFactory"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
