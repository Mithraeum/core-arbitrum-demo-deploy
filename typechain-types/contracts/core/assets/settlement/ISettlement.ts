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

export interface ISettlementInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addGovernor"
      | "army"
      | "assignResourcesAndWorkersToBuilding"
      | "bannerId"
      | "beginTileCapture"
      | "buildings"
      | "cancelTileCapture"
      | "claimCapturedTile"
      | "currentGovernorsGeneration"
      | "decreaseProducedCorruptionIndex"
      | "destroyRottenSettlement"
      | "extendProsperity"
      | "extendedProsperityAmount"
      | "getSettlementOwner"
      | "giveUpCapturedTile"
      | "governors"
      | "increaseProducedCorruptionIndex"
      | "isRottenSettlement"
      | "isRuler"
      | "payToDecreaseCorruptionIndex"
      | "position"
      | "producedCorruptionIndex"
      | "relatedRegion"
      | "removeGovernor"
      | "removeGovernors"
      | "siege"
      | "swapProsperityForExactWorkers"
      | "updateFortHealth"
      | "updateProsperityAmount"
      | "withdrawResources"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ArmyCreated"
      | "BuildingCreated"
      | "Destroyed"
      | "GovernorStatusChanged"
      | "GovernorsGenerationChanged"
      | "SiegeCreated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addGovernor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "army", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "assignResourcesAndWorkersToBuilding",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "bannerId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "beginTileCapture",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buildings",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelTileCapture",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimCapturedTile",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentGovernorsGeneration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseProducedCorruptionIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyRottenSettlement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "extendProsperity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "extendedProsperityAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSettlementOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "giveUpCapturedTile",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "governors",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseProducedCorruptionIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isRottenSettlement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isRuler",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "payToDecreaseCorruptionIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "position", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "producedCorruptionIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "relatedRegion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeGovernor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeGovernors",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "siege", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swapProsperityForExactWorkers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFortHealth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateProsperityAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawResources",
    values: [BytesLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "army", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assignResourcesAndWorkersToBuilding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bannerId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beginTileCapture",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buildings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelTileCapture",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimCapturedTile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentGovernorsGeneration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseProducedCorruptionIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destroyRottenSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extendProsperity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extendedProsperityAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSettlementOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "giveUpCapturedTile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseProducedCorruptionIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRottenSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isRuler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payToDecreaseCorruptionIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "position", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "producedCorruptionIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relatedRegion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGovernors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "siege", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapProsperityForExactWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFortHealth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateProsperityAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawResources",
    data: BytesLike
  ): Result;
}

export namespace ArmyCreatedEvent {
  export type InputTuple = [armyAddress: AddressLike, position: BigNumberish];
  export type OutputTuple = [armyAddress: string, position: bigint];
  export interface OutputObject {
    armyAddress: string;
    position: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BuildingCreatedEvent {
  export type InputTuple = [
    buildingAddress: AddressLike,
    buildingTypeId: BytesLike
  ];
  export type OutputTuple = [buildingAddress: string, buildingTypeId: string];
  export interface OutputObject {
    buildingAddress: string;
    buildingTypeId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DestroyedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GovernorStatusChangedEvent {
  export type InputTuple = [
    currentGovernorsGeneration: BigNumberish,
    governorAddress: AddressLike,
    modifiedByAddress: AddressLike,
    newStatus: boolean
  ];
  export type OutputTuple = [
    currentGovernorsGeneration: bigint,
    governorAddress: string,
    modifiedByAddress: string,
    newStatus: boolean
  ];
  export interface OutputObject {
    currentGovernorsGeneration: bigint;
    governorAddress: string;
    modifiedByAddress: string;
    newStatus: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GovernorsGenerationChangedEvent {
  export type InputTuple = [newGovernorsGeneration: BigNumberish];
  export type OutputTuple = [newGovernorsGeneration: bigint];
  export interface OutputObject {
    newGovernorsGeneration: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SiegeCreatedEvent {
  export type InputTuple = [siegeAddress: AddressLike];
  export type OutputTuple = [siegeAddress: string];
  export interface OutputObject {
    siegeAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ISettlement extends BaseContract {
  connect(runner?: ContractRunner | null): ISettlement;
  waitForDeployment(): Promise<this>;

  interface: ISettlementInterface;

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

  addGovernor: TypedContractMethod<
    [governorAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  army: TypedContractMethod<[], [string], "view">;

  assignResourcesAndWorkersToBuilding: TypedContractMethod<
    [
      resourcesOwner: AddressLike,
      buildingAddress: AddressLike,
      workersAmount: BigNumberish,
      resourceTypeIds: BytesLike[],
      resourcesAmounts: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  bannerId: TypedContractMethod<[], [bigint], "view">;

  beginTileCapture: TypedContractMethod<
    [position: BigNumberish, prosperityStake: BigNumberish],
    [void],
    "nonpayable"
  >;

  buildings: TypedContractMethod<[buildingTypeId: BytesLike], [string], "view">;

  cancelTileCapture: TypedContractMethod<
    [position: BigNumberish],
    [void],
    "nonpayable"
  >;

  claimCapturedTile: TypedContractMethod<
    [position: BigNumberish],
    [void],
    "nonpayable"
  >;

  currentGovernorsGeneration: TypedContractMethod<[], [bigint], "view">;

  decreaseProducedCorruptionIndex: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  destroyRottenSettlement: TypedContractMethod<[], [void], "nonpayable">;

  extendProsperity: TypedContractMethod<
    [prosperityAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  extendedProsperityAmount: TypedContractMethod<[], [bigint], "view">;

  getSettlementOwner: TypedContractMethod<[], [string], "view">;

  giveUpCapturedTile: TypedContractMethod<
    [position: BigNumberish],
    [void],
    "nonpayable"
  >;

  governors: TypedContractMethod<
    [era: BigNumberish, isGovernor: AddressLike],
    [boolean],
    "view"
  >;

  increaseProducedCorruptionIndex: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  isRottenSettlement: TypedContractMethod<[], [boolean], "nonpayable">;

  isRuler: TypedContractMethod<
    [potentialRuler: AddressLike],
    [boolean],
    "view"
  >;

  payToDecreaseCorruptionIndex: TypedContractMethod<
    [tokensAmount: BigNumberish],
    [void],
    "payable"
  >;

  position: TypedContractMethod<[], [bigint], "view">;

  producedCorruptionIndex: TypedContractMethod<[], [bigint], "view">;

  relatedRegion: TypedContractMethod<[], [string], "view">;

  removeGovernor: TypedContractMethod<
    [governorAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  removeGovernors: TypedContractMethod<[], [void], "nonpayable">;

  siege: TypedContractMethod<[], [string], "view">;

  swapProsperityForExactWorkers: TypedContractMethod<
    [workersToBuy: BigNumberish, maxProsperityToSell: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateFortHealth: TypedContractMethod<[], [void], "nonpayable">;

  updateProsperityAmount: TypedContractMethod<[], [void], "nonpayable">;

  withdrawResources: TypedContractMethod<
    [resourceTypeId: BytesLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addGovernor"
  ): TypedContractMethod<[governorAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "army"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "assignResourcesAndWorkersToBuilding"
  ): TypedContractMethod<
    [
      resourcesOwner: AddressLike,
      buildingAddress: AddressLike,
      workersAmount: BigNumberish,
      resourceTypeIds: BytesLike[],
      resourcesAmounts: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bannerId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "beginTileCapture"
  ): TypedContractMethod<
    [position: BigNumberish, prosperityStake: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buildings"
  ): TypedContractMethod<[buildingTypeId: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "cancelTileCapture"
  ): TypedContractMethod<[position: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimCapturedTile"
  ): TypedContractMethod<[position: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "currentGovernorsGeneration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseProducedCorruptionIndex"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "destroyRottenSettlement"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "extendProsperity"
  ): TypedContractMethod<
    [prosperityAmount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "extendedProsperityAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSettlementOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "giveUpCapturedTile"
  ): TypedContractMethod<[position: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "governors"
  ): TypedContractMethod<
    [era: BigNumberish, isGovernor: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "increaseProducedCorruptionIndex"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isRottenSettlement"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "isRuler"
  ): TypedContractMethod<[potentialRuler: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "payToDecreaseCorruptionIndex"
  ): TypedContractMethod<[tokensAmount: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "position"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "producedCorruptionIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "relatedRegion"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeGovernor"
  ): TypedContractMethod<[governorAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeGovernors"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "siege"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "swapProsperityForExactWorkers"
  ): TypedContractMethod<
    [workersToBuy: BigNumberish, maxProsperityToSell: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateFortHealth"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateProsperityAmount"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawResources"
  ): TypedContractMethod<
    [resourceTypeId: BytesLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ArmyCreated"
  ): TypedContractEvent<
    ArmyCreatedEvent.InputTuple,
    ArmyCreatedEvent.OutputTuple,
    ArmyCreatedEvent.OutputObject
  >;
  getEvent(
    key: "BuildingCreated"
  ): TypedContractEvent<
    BuildingCreatedEvent.InputTuple,
    BuildingCreatedEvent.OutputTuple,
    BuildingCreatedEvent.OutputObject
  >;
  getEvent(
    key: "Destroyed"
  ): TypedContractEvent<
    DestroyedEvent.InputTuple,
    DestroyedEvent.OutputTuple,
    DestroyedEvent.OutputObject
  >;
  getEvent(
    key: "GovernorStatusChanged"
  ): TypedContractEvent<
    GovernorStatusChangedEvent.InputTuple,
    GovernorStatusChangedEvent.OutputTuple,
    GovernorStatusChangedEvent.OutputObject
  >;
  getEvent(
    key: "GovernorsGenerationChanged"
  ): TypedContractEvent<
    GovernorsGenerationChangedEvent.InputTuple,
    GovernorsGenerationChangedEvent.OutputTuple,
    GovernorsGenerationChangedEvent.OutputObject
  >;
  getEvent(
    key: "SiegeCreated"
  ): TypedContractEvent<
    SiegeCreatedEvent.InputTuple,
    SiegeCreatedEvent.OutputTuple,
    SiegeCreatedEvent.OutputObject
  >;

  filters: {
    "ArmyCreated(address,uint64)": TypedContractEvent<
      ArmyCreatedEvent.InputTuple,
      ArmyCreatedEvent.OutputTuple,
      ArmyCreatedEvent.OutputObject
    >;
    ArmyCreated: TypedContractEvent<
      ArmyCreatedEvent.InputTuple,
      ArmyCreatedEvent.OutputTuple,
      ArmyCreatedEvent.OutputObject
    >;

    "BuildingCreated(address,bytes32)": TypedContractEvent<
      BuildingCreatedEvent.InputTuple,
      BuildingCreatedEvent.OutputTuple,
      BuildingCreatedEvent.OutputObject
    >;
    BuildingCreated: TypedContractEvent<
      BuildingCreatedEvent.InputTuple,
      BuildingCreatedEvent.OutputTuple,
      BuildingCreatedEvent.OutputObject
    >;

    "Destroyed()": TypedContractEvent<
      DestroyedEvent.InputTuple,
      DestroyedEvent.OutputTuple,
      DestroyedEvent.OutputObject
    >;
    Destroyed: TypedContractEvent<
      DestroyedEvent.InputTuple,
      DestroyedEvent.OutputTuple,
      DestroyedEvent.OutputObject
    >;

    "GovernorStatusChanged(uint256,address,address,bool)": TypedContractEvent<
      GovernorStatusChangedEvent.InputTuple,
      GovernorStatusChangedEvent.OutputTuple,
      GovernorStatusChangedEvent.OutputObject
    >;
    GovernorStatusChanged: TypedContractEvent<
      GovernorStatusChangedEvent.InputTuple,
      GovernorStatusChangedEvent.OutputTuple,
      GovernorStatusChangedEvent.OutputObject
    >;

    "GovernorsGenerationChanged(uint256)": TypedContractEvent<
      GovernorsGenerationChangedEvent.InputTuple,
      GovernorsGenerationChangedEvent.OutputTuple,
      GovernorsGenerationChangedEvent.OutputObject
    >;
    GovernorsGenerationChanged: TypedContractEvent<
      GovernorsGenerationChangedEvent.InputTuple,
      GovernorsGenerationChangedEvent.OutputTuple,
      GovernorsGenerationChangedEvent.OutputObject
    >;

    "SiegeCreated(address)": TypedContractEvent<
      SiegeCreatedEvent.InputTuple,
      SiegeCreatedEvent.OutputTuple,
      SiegeCreatedEvent.OutputObject
    >;
    SiegeCreated: TypedContractEvent<
      SiegeCreatedEvent.InputTuple,
      SiegeCreatedEvent.OutputTuple,
      SiegeCreatedEvent.OutputObject
    >;
  };
}