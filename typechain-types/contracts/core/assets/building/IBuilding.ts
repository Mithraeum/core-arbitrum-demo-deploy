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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export declare namespace IBuilding {
  export type ProductionConfigItemStruct = {
    resourceTypeId: BytesLike;
    amountPerTick: BigNumberish;
    isProducing: boolean;
  };

  export type ProductionConfigItemStructOutput = [
    resourceTypeId: string,
    amountPerTick: bigint,
    isProducing: boolean
  ] & { resourceTypeId: string; amountPerTick: bigint; isProducing: boolean };

  export type ProductionResultItemStruct = {
    resourceTypeId: BytesLike;
    balanceDelta: BigNumberish;
    isProduced: boolean;
  };

  export type ProductionResultItemStructOutput = [
    resourceTypeId: string,
    balanceDelta: bigint,
    isProduced: boolean
  ] & { resourceTypeId: string; balanceDelta: bigint; isProduced: boolean };
}

export interface IBuildingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "advancedProduction"
      | "basicProduction"
      | "buildingTypeId"
      | "burnTreasury"
      | "decreaseAdditionalWorkersCapacityMultiplier"
      | "distributeToAllShareholders"
      | "distributeToSingleShareholder"
      | "distributionId"
      | "getAdditionalWorkersFromAdditionalWorkersCapacityMultiplier"
      | "getAdvancedUpgradeCooldownDuration"
      | "getAssignedWorkers"
      | "getAvailableForAdvancedProductionWorkersCapacity"
      | "getBasicUpgradeCooldownDuration"
      | "getBuildingCoefficient"
      | "getBuildingLevel"
      | "getConfig"
      | "getMaxTreasuryByLevel"
      | "getProducingResourceTypeId"
      | "getProductionResult"
      | "getResourcesAmount"
      | "getTreasuryAmount"
      | "getUpgradePrice"
      | "getWorkersCapacity"
      | "givenProsperityAmount"
      | "handleProductionResourcesChanged"
      | "increaseAdditionalWorkersCapacityMultiplier"
      | "isResourceAcceptable"
      | "producedResourceDebt"
      | "productionInfo"
      | "relatedSettlement"
      | "removeResourcesAndWorkers"
      | "resetDistribution"
      | "stealTreasury"
      | "updateDebtsAccordingToNewDistributionsAmounts"
      | "updateState"
      | "upgradeAdvancedProduction"
      | "upgradeBasicProduction"
      | "upgradeCooldownEndTime"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdvancedProductionAdditionalWorkersCapacityMultiplierUpdated"
      | "AdvancedProductionUpgraded"
      | "BasicProductionUpgraded"
      | "DistributedToShareHolder"
      | "DistributionCreated"
      | "ProducedResourceDebtUpdated"
      | "ProductionInfoUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "advancedProduction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "basicProduction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buildingTypeId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burnTreasury",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseAdditionalWorkersCapacityMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeToAllShareholders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributeToSingleShareholder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "distributionId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAdditionalWorkersFromAdditionalWorkersCapacityMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAdvancedUpgradeCooldownDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssignedWorkers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAvailableForAdvancedProductionWorkersCapacity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBasicUpgradeCooldownDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuildingCoefficient",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuildingLevel",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getConfig", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getMaxTreasuryByLevel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProducingResourceTypeId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProductionResult",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getResourcesAmount",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTreasuryAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpgradePrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWorkersCapacity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "givenProsperityAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "handleProductionResourcesChanged",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAdditionalWorkersCapacityMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isResourceAcceptable",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "producedResourceDebt",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "productionInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "relatedSettlement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeResourcesAndWorkers",
    values: [
      AddressLike,
      BigNumberish,
      AddressLike,
      BytesLike[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "resetDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stealTreasury",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDebtsAccordingToNewDistributionsAmounts",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeAdvancedProduction",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeBasicProduction",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeCooldownEndTime",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "advancedProduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "basicProduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildingTypeId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAdditionalWorkersCapacityMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeToAllShareholders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeToSingleShareholder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAdditionalWorkersFromAdditionalWorkersCapacityMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAdvancedUpgradeCooldownDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssignedWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAvailableForAdvancedProductionWorkersCapacity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBasicUpgradeCooldownDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuildingCoefficient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuildingLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMaxTreasuryByLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProducingResourceTypeId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProductionResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResourcesAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTreasuryAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpgradePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWorkersCapacity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "givenProsperityAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleProductionResourcesChanged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAdditionalWorkersCapacityMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isResourceAcceptable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "producedResourceDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productionInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relatedSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeResourcesAndWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stealTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDebtsAccordingToNewDistributionsAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeAdvancedProduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeBasicProduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeCooldownEndTime",
    data: BytesLike
  ): Result;
}

export namespace AdvancedProductionAdditionalWorkersCapacityMultiplierUpdatedEvent {
  export type InputTuple = [
    newAdditionalWorkersCapacityMultiplier: BigNumberish
  ];
  export type OutputTuple = [newAdditionalWorkersCapacityMultiplier: bigint];
  export interface OutputObject {
    newAdditionalWorkersCapacityMultiplier: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AdvancedProductionUpgradedEvent {
  export type InputTuple = [
    newAdvancedProductionLevel: BigNumberish,
    newAdvancedProductionCoefficient: BigNumberish
  ];
  export type OutputTuple = [
    newAdvancedProductionLevel: bigint,
    newAdvancedProductionCoefficient: bigint
  ];
  export interface OutputObject {
    newAdvancedProductionLevel: bigint;
    newAdvancedProductionCoefficient: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BasicProductionUpgradedEvent {
  export type InputTuple = [
    newBasicProductionLevel: BigNumberish,
    newBasicProductionCoefficient: BigNumberish
  ];
  export type OutputTuple = [
    newBasicProductionLevel: bigint,
    newBasicProductionCoefficient: bigint
  ];
  export interface OutputObject {
    newBasicProductionLevel: bigint;
    newBasicProductionCoefficient: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DistributedToShareHolderEvent {
  export type InputTuple = [
    resourceTypeId: BytesLike,
    holder: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    resourceTypeId: string,
    holder: string,
    amount: bigint
  ];
  export interface OutputObject {
    resourceTypeId: string;
    holder: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DistributionCreatedEvent {
  export type InputTuple = [newDistributionId: BigNumberish];
  export type OutputTuple = [newDistributionId: bigint];
  export interface OutputObject {
    newDistributionId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProducedResourceDebtUpdatedEvent {
  export type InputTuple = [
    distributionNftHolder: AddressLike,
    newDebt: BigNumberish
  ];
  export type OutputTuple = [distributionNftHolder: string, newDebt: bigint];
  export interface OutputObject {
    distributionNftHolder: string;
    newDebt: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProductionInfoUpdatedEvent {
  export type InputTuple = [
    lastUpdateStateTime: BigNumberish,
    lastUpdateStateRegionTime: BigNumberish,
    readyToBeDistributed: BigNumberish,
    totalDebt: BigNumberish
  ];
  export type OutputTuple = [
    lastUpdateStateTime: bigint,
    lastUpdateStateRegionTime: bigint,
    readyToBeDistributed: bigint,
    totalDebt: bigint
  ];
  export interface OutputObject {
    lastUpdateStateTime: bigint;
    lastUpdateStateRegionTime: bigint;
    readyToBeDistributed: bigint;
    totalDebt: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IBuilding extends BaseContract {
  connect(runner?: ContractRunner | null): IBuilding;
  waitForDeployment(): Promise<this>;

  interface: IBuildingInterface;

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

  advancedProduction: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        level: bigint;
        coefficient: bigint;
        additionalWorkersCapacityMultiplier: bigint;
        toBeProducedTicks: bigint;
      }
    ],
    "view"
  >;

  basicProduction: TypedContractMethod<
    [],
    [[bigint, bigint] & { level: bigint; coefficient: bigint }],
    "view"
  >;

  buildingTypeId: TypedContractMethod<[], [string], "view">;

  burnTreasury: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  decreaseAdditionalWorkersCapacityMultiplier: TypedContractMethod<
    [capacityAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  distributeToAllShareholders: TypedContractMethod<[], [void], "nonpayable">;

  distributeToSingleShareholder: TypedContractMethod<
    [holder: AddressLike],
    [void],
    "nonpayable"
  >;

  distributionId: TypedContractMethod<[], [bigint], "view">;

  getAdditionalWorkersFromAdditionalWorkersCapacityMultiplier: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getAdvancedUpgradeCooldownDuration: TypedContractMethod<
    [level: BigNumberish],
    [bigint],
    "view"
  >;

  getAssignedWorkers: TypedContractMethod<[], [bigint], "view">;

  getAvailableForAdvancedProductionWorkersCapacity: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  getBasicUpgradeCooldownDuration: TypedContractMethod<
    [level: BigNumberish],
    [bigint],
    "view"
  >;

  getBuildingCoefficient: TypedContractMethod<
    [level: BigNumberish],
    [bigint],
    "view"
  >;

  getBuildingLevel: TypedContractMethod<[], [bigint], "view">;

  getConfig: TypedContractMethod<
    [],
    [IBuilding.ProductionConfigItemStructOutput[]],
    "view"
  >;

  getMaxTreasuryByLevel: TypedContractMethod<
    [level: BigNumberish],
    [bigint],
    "view"
  >;

  getProducingResourceTypeId: TypedContractMethod<[], [string], "view">;

  getProductionResult: TypedContractMethod<
    [timestamp: BigNumberish],
    [IBuilding.ProductionResultItemStructOutput[]],
    "view"
  >;

  getResourcesAmount: TypedContractMethod<
    [resourceTypeId: BytesLike, timestamp: BigNumberish],
    [bigint],
    "view"
  >;

  getTreasuryAmount: TypedContractMethod<
    [timestamp: BigNumberish],
    [bigint],
    "view"
  >;

  getUpgradePrice: TypedContractMethod<[level: BigNumberish], [bigint], "view">;

  getWorkersCapacity: TypedContractMethod<[], [bigint], "view">;

  givenProsperityAmount: TypedContractMethod<[], [bigint], "view">;

  handleProductionResourcesChanged: TypedContractMethod<
    [],
    [void],
    "nonpayable"
  >;

  increaseAdditionalWorkersCapacityMultiplier: TypedContractMethod<
    [capacityAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  isResourceAcceptable: TypedContractMethod<
    [resourceTypeId: BytesLike],
    [boolean],
    "view"
  >;

  producedResourceDebt: TypedContractMethod<
    [holder: AddressLike],
    [bigint],
    "view"
  >;

  productionInfo: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        lastUpdateStateTime: bigint;
        lastUpdateStateRegionTime: bigint;
        readyToBeDistributed: bigint;
        totalDebt: bigint;
      }
    ],
    "view"
  >;

  relatedSettlement: TypedContractMethod<[], [string], "view">;

  removeResourcesAndWorkers: TypedContractMethod<
    [
      workersReceiverAddress: AddressLike,
      workersAmount: BigNumberish,
      resourcesReceiverAddress: AddressLike,
      resourceTypeIds: BytesLike[],
      resourcesAmounts: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  resetDistribution: TypedContractMethod<[], [void], "nonpayable">;

  stealTreasury: TypedContractMethod<
    [stealerSettlementAddress: AddressLike, amount: BigNumberish],
    [[bigint, bigint] & { stolenAmount: bigint; burnedAmount: bigint }],
    "nonpayable"
  >;

  updateDebtsAccordingToNewDistributionsAmounts: TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateState: TypedContractMethod<[], [void], "nonpayable">;

  upgradeAdvancedProduction: TypedContractMethod<
    [resourcesOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeBasicProduction: TypedContractMethod<
    [resourcesOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeCooldownEndTime: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "advancedProduction"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        level: bigint;
        coefficient: bigint;
        additionalWorkersCapacityMultiplier: bigint;
        toBeProducedTicks: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "basicProduction"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { level: bigint; coefficient: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "buildingTypeId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "burnTreasury"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "decreaseAdditionalWorkersCapacityMultiplier"
  ): TypedContractMethod<[capacityAmount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "distributeToAllShareholders"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "distributeToSingleShareholder"
  ): TypedContractMethod<[holder: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "distributionId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAdditionalWorkersFromAdditionalWorkersCapacityMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAdvancedUpgradeCooldownDuration"
  ): TypedContractMethod<[level: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAssignedWorkers"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAvailableForAdvancedProductionWorkersCapacity"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBasicUpgradeCooldownDuration"
  ): TypedContractMethod<[level: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBuildingCoefficient"
  ): TypedContractMethod<[level: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBuildingLevel"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getConfig"
  ): TypedContractMethod<
    [],
    [IBuilding.ProductionConfigItemStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getMaxTreasuryByLevel"
  ): TypedContractMethod<[level: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getProducingResourceTypeId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getProductionResult"
  ): TypedContractMethod<
    [timestamp: BigNumberish],
    [IBuilding.ProductionResultItemStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getResourcesAmount"
  ): TypedContractMethod<
    [resourceTypeId: BytesLike, timestamp: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTreasuryAmount"
  ): TypedContractMethod<[timestamp: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getUpgradePrice"
  ): TypedContractMethod<[level: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getWorkersCapacity"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "givenProsperityAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "handleProductionResourcesChanged"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "increaseAdditionalWorkersCapacityMultiplier"
  ): TypedContractMethod<[capacityAmount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isResourceAcceptable"
  ): TypedContractMethod<[resourceTypeId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "producedResourceDebt"
  ): TypedContractMethod<[holder: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "productionInfo"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        lastUpdateStateTime: bigint;
        lastUpdateStateRegionTime: bigint;
        readyToBeDistributed: bigint;
        totalDebt: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "relatedSettlement"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeResourcesAndWorkers"
  ): TypedContractMethod<
    [
      workersReceiverAddress: AddressLike,
      workersAmount: BigNumberish,
      resourcesReceiverAddress: AddressLike,
      resourceTypeIds: BytesLike[],
      resourcesAmounts: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "resetDistribution"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stealTreasury"
  ): TypedContractMethod<
    [stealerSettlementAddress: AddressLike, amount: BigNumberish],
    [[bigint, bigint] & { stolenAmount: bigint; burnedAmount: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateDebtsAccordingToNewDistributionsAmounts"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateState"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeAdvancedProduction"
  ): TypedContractMethod<[resourcesOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeBasicProduction"
  ): TypedContractMethod<[resourcesOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeCooldownEndTime"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "AdvancedProductionAdditionalWorkersCapacityMultiplierUpdated"
  ): TypedContractEvent<
    AdvancedProductionAdditionalWorkersCapacityMultiplierUpdatedEvent.InputTuple,
    AdvancedProductionAdditionalWorkersCapacityMultiplierUpdatedEvent.OutputTuple,
    AdvancedProductionAdditionalWorkersCapacityMultiplierUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "AdvancedProductionUpgraded"
  ): TypedContractEvent<
    AdvancedProductionUpgradedEvent.InputTuple,
    AdvancedProductionUpgradedEvent.OutputTuple,
    AdvancedProductionUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "BasicProductionUpgraded"
  ): TypedContractEvent<
    BasicProductionUpgradedEvent.InputTuple,
    BasicProductionUpgradedEvent.OutputTuple,
    BasicProductionUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "DistributedToShareHolder"
  ): TypedContractEvent<
    DistributedToShareHolderEvent.InputTuple,
    DistributedToShareHolderEvent.OutputTuple,
    DistributedToShareHolderEvent.OutputObject
  >;
  getEvent(
    key: "DistributionCreated"
  ): TypedContractEvent<
    DistributionCreatedEvent.InputTuple,
    DistributionCreatedEvent.OutputTuple,
    DistributionCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ProducedResourceDebtUpdated"
  ): TypedContractEvent<
    ProducedResourceDebtUpdatedEvent.InputTuple,
    ProducedResourceDebtUpdatedEvent.OutputTuple,
    ProducedResourceDebtUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "ProductionInfoUpdated"
  ): TypedContractEvent<
    ProductionInfoUpdatedEvent.InputTuple,
    ProductionInfoUpdatedEvent.OutputTuple,
    ProductionInfoUpdatedEvent.OutputObject
  >;

  filters: {
    "AdvancedProductionAdditionalWorkersCapacityMultiplierUpdated(uint256)": TypedContractEvent<
      AdvancedProductionAdditionalWorkersCapacityMultiplierUpdatedEvent.InputTuple,
      AdvancedProductionAdditionalWorkersCapacityMultiplierUpdatedEvent.OutputTuple,
      AdvancedProductionAdditionalWorkersCapacityMultiplierUpdatedEvent.OutputObject
    >;
    AdvancedProductionAdditionalWorkersCapacityMultiplierUpdated: TypedContractEvent<
      AdvancedProductionAdditionalWorkersCapacityMultiplierUpdatedEvent.InputTuple,
      AdvancedProductionAdditionalWorkersCapacityMultiplierUpdatedEvent.OutputTuple,
      AdvancedProductionAdditionalWorkersCapacityMultiplierUpdatedEvent.OutputObject
    >;

    "AdvancedProductionUpgraded(uint256,uint256)": TypedContractEvent<
      AdvancedProductionUpgradedEvent.InputTuple,
      AdvancedProductionUpgradedEvent.OutputTuple,
      AdvancedProductionUpgradedEvent.OutputObject
    >;
    AdvancedProductionUpgraded: TypedContractEvent<
      AdvancedProductionUpgradedEvent.InputTuple,
      AdvancedProductionUpgradedEvent.OutputTuple,
      AdvancedProductionUpgradedEvent.OutputObject
    >;

    "BasicProductionUpgraded(uint256,uint256)": TypedContractEvent<
      BasicProductionUpgradedEvent.InputTuple,
      BasicProductionUpgradedEvent.OutputTuple,
      BasicProductionUpgradedEvent.OutputObject
    >;
    BasicProductionUpgraded: TypedContractEvent<
      BasicProductionUpgradedEvent.InputTuple,
      BasicProductionUpgradedEvent.OutputTuple,
      BasicProductionUpgradedEvent.OutputObject
    >;

    "DistributedToShareHolder(bytes32,address,uint256)": TypedContractEvent<
      DistributedToShareHolderEvent.InputTuple,
      DistributedToShareHolderEvent.OutputTuple,
      DistributedToShareHolderEvent.OutputObject
    >;
    DistributedToShareHolder: TypedContractEvent<
      DistributedToShareHolderEvent.InputTuple,
      DistributedToShareHolderEvent.OutputTuple,
      DistributedToShareHolderEvent.OutputObject
    >;

    "DistributionCreated(uint256)": TypedContractEvent<
      DistributionCreatedEvent.InputTuple,
      DistributionCreatedEvent.OutputTuple,
      DistributionCreatedEvent.OutputObject
    >;
    DistributionCreated: TypedContractEvent<
      DistributionCreatedEvent.InputTuple,
      DistributionCreatedEvent.OutputTuple,
      DistributionCreatedEvent.OutputObject
    >;

    "ProducedResourceDebtUpdated(address,uint256)": TypedContractEvent<
      ProducedResourceDebtUpdatedEvent.InputTuple,
      ProducedResourceDebtUpdatedEvent.OutputTuple,
      ProducedResourceDebtUpdatedEvent.OutputObject
    >;
    ProducedResourceDebtUpdated: TypedContractEvent<
      ProducedResourceDebtUpdatedEvent.InputTuple,
      ProducedResourceDebtUpdatedEvent.OutputTuple,
      ProducedResourceDebtUpdatedEvent.OutputObject
    >;

    "ProductionInfoUpdated(uint256,uint256,uint256,uint256)": TypedContractEvent<
      ProductionInfoUpdatedEvent.InputTuple,
      ProductionInfoUpdatedEvent.OutputTuple,
      ProductionInfoUpdatedEvent.OutputObject
    >;
    ProductionInfoUpdated: TypedContractEvent<
      ProductionInfoUpdatedEvent.InputTuple,
      ProductionInfoUpdatedEvent.OutputTuple,
      ProductionInfoUpdatedEvent.OutputObject
    >;
  };
}
