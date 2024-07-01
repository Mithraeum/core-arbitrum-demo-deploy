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

export interface RegionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "assetGroupId"
      | "assetTypeId"
      | "buyUnitsBatch"
      | "corruptionIndex"
      | "createCultistsSettlement"
      | "cultistsSettlement"
      | "decreaseCorruptionIndex"
      | "era"
      | "eraNumber"
      | "getPenaltyFromCultists"
      | "getRegionTime"
      | "handleCultistsDefeated"
      | "handleCultistsSummoned"
      | "increaseCorruptionIndex"
      | "init"
      | "lastCultistsSummonIntervalNumber"
      | "lastUpdateRegionTime"
      | "lastUpdateTime"
      | "regionId"
      | "registry"
      | "settlementsMarket"
      | "unitsPools"
      | "updateRegionTime"
      | "updateState"
      | "workersPool"
      | "world"
      | "worldAssetFactory"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CorruptionIndexDecreased"
      | "CorruptionIndexIncreased"
      | "Initialized"
      | "LastCultistsSummonIntervalNumberUpdated"
      | "RegionCultistsChanged"
      | "RegionTimeChanged"
      | "SettlementsMarketCreated"
      | "UnitsPoolCreated"
      | "WorkersPoolCreated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "assetGroupId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetTypeId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyUnitsBatch",
    values: [
      AddressLike,
      AddressLike,
      BytesLike[],
      BigNumberish[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "corruptionIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createCultistsSettlement",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cultistsSettlement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseCorruptionIndex",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "era", values?: undefined): string;
  encodeFunctionData(functionFragment: "eraNumber", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPenaltyFromCultists",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRegionTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "handleCultistsDefeated",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "handleCultistsSummoned",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseCorruptionIndex",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "init", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "lastCultistsSummonIntervalNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateRegionTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "regionId", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "settlementsMarket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unitsPools",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRegionTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "workersPool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "world", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "worldAssetFactory",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "assetGroupId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetTypeId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyUnitsBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "corruptionIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCultistsSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cultistsSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseCorruptionIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "era", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eraNumber", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPenaltyFromCultists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleCultistsDefeated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleCultistsSummoned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseCorruptionIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastCultistsSummonIntervalNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateRegionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "regionId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "settlementsMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unitsPools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateRegionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workersPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "world", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "worldAssetFactory",
    data: BytesLike
  ): Result;
}

export namespace CorruptionIndexDecreasedEvent {
  export type InputTuple = [
    settlementAddress: AddressLike,
    reducedCorruptionIndexAmount: BigNumberish
  ];
  export type OutputTuple = [
    settlementAddress: string,
    reducedCorruptionIndexAmount: bigint
  ];
  export interface OutputObject {
    settlementAddress: string;
    reducedCorruptionIndexAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CorruptionIndexIncreasedEvent {
  export type InputTuple = [
    settlementAddress: AddressLike,
    addedCorruptionIndexAmount: BigNumberish
  ];
  export type OutputTuple = [
    settlementAddress: string,
    addedCorruptionIndexAmount: bigint
  ];
  export interface OutputObject {
    settlementAddress: string;
    addedCorruptionIndexAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LastCultistsSummonIntervalNumberUpdatedEvent {
  export type InputTuple = [newCultistsSummonIntervalNumber: BigNumberish];
  export type OutputTuple = [newCultistsSummonIntervalNumber: bigint];
  export interface OutputObject {
    newCultistsSummonIntervalNumber: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RegionCultistsChangedEvent {
  export type InputTuple = [newRegionCultistsAmount: BigNumberish];
  export type OutputTuple = [newRegionCultistsAmount: bigint];
  export interface OutputObject {
    newRegionCultistsAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RegionTimeChangedEvent {
  export type InputTuple = [
    lastUpdateTime: BigNumberish,
    lastUpdateRegionTime: BigNumberish
  ];
  export type OutputTuple = [
    lastUpdateTime: bigint,
    lastUpdateRegionTime: bigint
  ];
  export interface OutputObject {
    lastUpdateTime: bigint;
    lastUpdateRegionTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SettlementsMarketCreatedEvent {
  export type InputTuple = [settlementsMarketAddress: AddressLike];
  export type OutputTuple = [settlementsMarketAddress: string];
  export interface OutputObject {
    settlementsMarketAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnitsPoolCreatedEvent {
  export type InputTuple = [
    unitsPoolAddress: AddressLike,
    unitTypeId: BytesLike
  ];
  export type OutputTuple = [unitsPoolAddress: string, unitTypeId: string];
  export interface OutputObject {
    unitsPoolAddress: string;
    unitTypeId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WorkersPoolCreatedEvent {
  export type InputTuple = [workersPoolAddress: AddressLike];
  export type OutputTuple = [workersPoolAddress: string];
  export interface OutputObject {
    workersPoolAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Region extends BaseContract {
  connect(runner?: ContractRunner | null): Region;
  waitForDeployment(): Promise<this>;

  interface: RegionInterface;

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

  assetGroupId: TypedContractMethod<[], [string], "view">;

  assetTypeId: TypedContractMethod<[], [string], "view">;

  buyUnitsBatch: TypedContractMethod<
    [
      resourcesOwner: AddressLike,
      settlementAddress: AddressLike,
      unitTypeIds: BytesLike[],
      unitsAmounts: BigNumberish[],
      maxTokensToSell: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  corruptionIndex: TypedContractMethod<[], [bigint], "view">;

  createCultistsSettlement: TypedContractMethod<
    [cultistsPosition: BigNumberish],
    [void],
    "nonpayable"
  >;

  cultistsSettlement: TypedContractMethod<[], [string], "view">;

  decreaseCorruptionIndex: TypedContractMethod<
    [settlementAddress: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  era: TypedContractMethod<[], [string], "view">;

  eraNumber: TypedContractMethod<[], [bigint], "view">;

  getPenaltyFromCultists: TypedContractMethod<[], [bigint], "view">;

  getRegionTime: TypedContractMethod<
    [timestamp: BigNumberish],
    [bigint],
    "view"
  >;

  handleCultistsDefeated: TypedContractMethod<
    [value: BigNumberish],
    [void],
    "nonpayable"
  >;

  handleCultistsSummoned: TypedContractMethod<
    [value: BigNumberish],
    [void],
    "nonpayable"
  >;

  increaseCorruptionIndex: TypedContractMethod<
    [settlementAddress: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  init: TypedContractMethod<[initParams: BytesLike], [void], "nonpayable">;

  lastCultistsSummonIntervalNumber: TypedContractMethod<[], [bigint], "view">;

  lastUpdateRegionTime: TypedContractMethod<[], [bigint], "view">;

  lastUpdateTime: TypedContractMethod<[], [bigint], "view">;

  regionId: TypedContractMethod<[], [bigint], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  settlementsMarket: TypedContractMethod<[], [string], "view">;

  unitsPools: TypedContractMethod<[arg0: BytesLike], [string], "view">;

  updateRegionTime: TypedContractMethod<
    [globalTime: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateState: TypedContractMethod<[], [void], "nonpayable">;

  workersPool: TypedContractMethod<[], [string], "view">;

  world: TypedContractMethod<[], [string], "view">;

  worldAssetFactory: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "assetGroupId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "assetTypeId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "buyUnitsBatch"
  ): TypedContractMethod<
    [
      resourcesOwner: AddressLike,
      settlementAddress: AddressLike,
      unitTypeIds: BytesLike[],
      unitsAmounts: BigNumberish[],
      maxTokensToSell: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "corruptionIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "createCultistsSettlement"
  ): TypedContractMethod<
    [cultistsPosition: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cultistsSettlement"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "decreaseCorruptionIndex"
  ): TypedContractMethod<
    [settlementAddress: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "era"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "eraNumber"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPenaltyFromCultists"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRegionTime"
  ): TypedContractMethod<[timestamp: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "handleCultistsDefeated"
  ): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "handleCultistsSummoned"
  ): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "increaseCorruptionIndex"
  ): TypedContractMethod<
    [settlementAddress: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "init"
  ): TypedContractMethod<[initParams: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lastCultistsSummonIntervalNumber"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdateRegionTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdateTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "regionId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "settlementsMarket"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "unitsPools"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "updateRegionTime"
  ): TypedContractMethod<[globalTime: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateState"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "workersPool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "world"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "worldAssetFactory"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "CorruptionIndexDecreased"
  ): TypedContractEvent<
    CorruptionIndexDecreasedEvent.InputTuple,
    CorruptionIndexDecreasedEvent.OutputTuple,
    CorruptionIndexDecreasedEvent.OutputObject
  >;
  getEvent(
    key: "CorruptionIndexIncreased"
  ): TypedContractEvent<
    CorruptionIndexIncreasedEvent.InputTuple,
    CorruptionIndexIncreasedEvent.OutputTuple,
    CorruptionIndexIncreasedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "LastCultistsSummonIntervalNumberUpdated"
  ): TypedContractEvent<
    LastCultistsSummonIntervalNumberUpdatedEvent.InputTuple,
    LastCultistsSummonIntervalNumberUpdatedEvent.OutputTuple,
    LastCultistsSummonIntervalNumberUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RegionCultistsChanged"
  ): TypedContractEvent<
    RegionCultistsChangedEvent.InputTuple,
    RegionCultistsChangedEvent.OutputTuple,
    RegionCultistsChangedEvent.OutputObject
  >;
  getEvent(
    key: "RegionTimeChanged"
  ): TypedContractEvent<
    RegionTimeChangedEvent.InputTuple,
    RegionTimeChangedEvent.OutputTuple,
    RegionTimeChangedEvent.OutputObject
  >;
  getEvent(
    key: "SettlementsMarketCreated"
  ): TypedContractEvent<
    SettlementsMarketCreatedEvent.InputTuple,
    SettlementsMarketCreatedEvent.OutputTuple,
    SettlementsMarketCreatedEvent.OutputObject
  >;
  getEvent(
    key: "UnitsPoolCreated"
  ): TypedContractEvent<
    UnitsPoolCreatedEvent.InputTuple,
    UnitsPoolCreatedEvent.OutputTuple,
    UnitsPoolCreatedEvent.OutputObject
  >;
  getEvent(
    key: "WorkersPoolCreated"
  ): TypedContractEvent<
    WorkersPoolCreatedEvent.InputTuple,
    WorkersPoolCreatedEvent.OutputTuple,
    WorkersPoolCreatedEvent.OutputObject
  >;

  filters: {
    "CorruptionIndexDecreased(address,uint256)": TypedContractEvent<
      CorruptionIndexDecreasedEvent.InputTuple,
      CorruptionIndexDecreasedEvent.OutputTuple,
      CorruptionIndexDecreasedEvent.OutputObject
    >;
    CorruptionIndexDecreased: TypedContractEvent<
      CorruptionIndexDecreasedEvent.InputTuple,
      CorruptionIndexDecreasedEvent.OutputTuple,
      CorruptionIndexDecreasedEvent.OutputObject
    >;

    "CorruptionIndexIncreased(address,uint256)": TypedContractEvent<
      CorruptionIndexIncreasedEvent.InputTuple,
      CorruptionIndexIncreasedEvent.OutputTuple,
      CorruptionIndexIncreasedEvent.OutputObject
    >;
    CorruptionIndexIncreased: TypedContractEvent<
      CorruptionIndexIncreasedEvent.InputTuple,
      CorruptionIndexIncreasedEvent.OutputTuple,
      CorruptionIndexIncreasedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "LastCultistsSummonIntervalNumberUpdated(uint256)": TypedContractEvent<
      LastCultistsSummonIntervalNumberUpdatedEvent.InputTuple,
      LastCultistsSummonIntervalNumberUpdatedEvent.OutputTuple,
      LastCultistsSummonIntervalNumberUpdatedEvent.OutputObject
    >;
    LastCultistsSummonIntervalNumberUpdated: TypedContractEvent<
      LastCultistsSummonIntervalNumberUpdatedEvent.InputTuple,
      LastCultistsSummonIntervalNumberUpdatedEvent.OutputTuple,
      LastCultistsSummonIntervalNumberUpdatedEvent.OutputObject
    >;

    "RegionCultistsChanged(uint256)": TypedContractEvent<
      RegionCultistsChangedEvent.InputTuple,
      RegionCultistsChangedEvent.OutputTuple,
      RegionCultistsChangedEvent.OutputObject
    >;
    RegionCultistsChanged: TypedContractEvent<
      RegionCultistsChangedEvent.InputTuple,
      RegionCultistsChangedEvent.OutputTuple,
      RegionCultistsChangedEvent.OutputObject
    >;

    "RegionTimeChanged(uint256,uint256)": TypedContractEvent<
      RegionTimeChangedEvent.InputTuple,
      RegionTimeChangedEvent.OutputTuple,
      RegionTimeChangedEvent.OutputObject
    >;
    RegionTimeChanged: TypedContractEvent<
      RegionTimeChangedEvent.InputTuple,
      RegionTimeChangedEvent.OutputTuple,
      RegionTimeChangedEvent.OutputObject
    >;

    "SettlementsMarketCreated(address)": TypedContractEvent<
      SettlementsMarketCreatedEvent.InputTuple,
      SettlementsMarketCreatedEvent.OutputTuple,
      SettlementsMarketCreatedEvent.OutputObject
    >;
    SettlementsMarketCreated: TypedContractEvent<
      SettlementsMarketCreatedEvent.InputTuple,
      SettlementsMarketCreatedEvent.OutputTuple,
      SettlementsMarketCreatedEvent.OutputObject
    >;

    "UnitsPoolCreated(address,bytes32)": TypedContractEvent<
      UnitsPoolCreatedEvent.InputTuple,
      UnitsPoolCreatedEvent.OutputTuple,
      UnitsPoolCreatedEvent.OutputObject
    >;
    UnitsPoolCreated: TypedContractEvent<
      UnitsPoolCreatedEvent.InputTuple,
      UnitsPoolCreatedEvent.OutputTuple,
      UnitsPoolCreatedEvent.OutputObject
    >;

    "WorkersPoolCreated(address)": TypedContractEvent<
      WorkersPoolCreatedEvent.InputTuple,
      WorkersPoolCreatedEvent.OutputTuple,
      WorkersPoolCreatedEvent.OutputObject
    >;
    WorkersPoolCreated: TypedContractEvent<
      WorkersPoolCreatedEvent.InputTuple,
      WorkersPoolCreatedEvent.OutputTuple,
      WorkersPoolCreatedEvent.OutputObject
    >;
  };
}