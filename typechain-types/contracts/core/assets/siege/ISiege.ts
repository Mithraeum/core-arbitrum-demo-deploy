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

export interface ISiegeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "applyDamage"
      | "armyInfo"
      | "besiegingArmyUnitsByType"
      | "calculateArmyTotalSiegePower"
      | "calculateArmyUnitsSiegePower"
      | "canLiquidateArmyBesiegingUnits"
      | "getArmyBesiegingUnitsAmounts"
      | "getArmyRobberyPoints"
      | "liquidate"
      | "modifyArmySiege"
      | "relatedSettlement"
      | "robberyPointsPerOneDamage"
      | "swapRobberyPointsForResourceFromBuildingTreasury"
      | "totalSiegePower"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ArmyLiquidated"
      | "ArmySiegeModified"
      | "BuildingRobbed"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "applyDamage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "armyInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "besiegingArmyUnitsByType",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateArmyTotalSiegePower",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateArmyUnitsSiegePower",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "canLiquidateArmyBesiegingUnits",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getArmyBesiegingUnitsAmounts",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getArmyRobberyPoints",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyArmySiege",
    values: [AddressLike, BytesLike[], boolean[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "relatedSettlement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "robberyPointsPerOneDamage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapRobberyPointsForResourceFromBuildingTreasury",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSiegePower",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "applyDamage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "armyInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "besiegingArmyUnitsByType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateArmyTotalSiegePower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateArmyUnitsSiegePower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canLiquidateArmyBesiegingUnits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArmyBesiegingUnitsAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArmyRobberyPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "modifyArmySiege",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relatedSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "robberyPointsPerOneDamage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapRobberyPointsForResourceFromBuildingTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSiegePower",
    data: BytesLike
  ): Result;
}

export namespace ArmyLiquidatedEvent {
  export type InputTuple = [armyAddress: AddressLike];
  export type OutputTuple = [armyAddress: string];
  export interface OutputObject {
    armyAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ArmySiegeModifiedEvent {
  export type InputTuple = [
    armyAddress: AddressLike,
    unitTypeIds: BytesLike[],
    toAddIndication: boolean[],
    unitsAmounts: BigNumberish[],
    newRobberyMultiplier: BigNumberish,
    newTotalSiegePower: BigNumberish
  ];
  export type OutputTuple = [
    armyAddress: string,
    unitTypeIds: string[],
    toAddIndication: boolean[],
    unitsAmounts: bigint[],
    newRobberyMultiplier: bigint,
    newTotalSiegePower: bigint
  ];
  export interface OutputObject {
    armyAddress: string;
    unitTypeIds: string[];
    toAddIndication: boolean[];
    unitsAmounts: bigint[];
    newRobberyMultiplier: bigint;
    newTotalSiegePower: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BuildingRobbedEvent {
  export type InputTuple = [
    armyAddress: AddressLike,
    buildingAddress: AddressLike,
    stolenAmount: BigNumberish,
    burnedAmount: BigNumberish,
    pointsSpent: BigNumberish,
    newRobberyPointsAmount: BigNumberish
  ];
  export type OutputTuple = [
    armyAddress: string,
    buildingAddress: string,
    stolenAmount: bigint,
    burnedAmount: bigint,
    pointsSpent: bigint,
    newRobberyPointsAmount: bigint
  ];
  export interface OutputObject {
    armyAddress: string;
    buildingAddress: string;
    stolenAmount: bigint;
    burnedAmount: bigint;
    pointsSpent: bigint;
    newRobberyPointsAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ISiege extends BaseContract {
  connect(runner?: ContractRunner | null): ISiege;
  waitForDeployment(): Promise<this>;

  interface: ISiegeInterface;

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

  applyDamage: TypedContractMethod<
    [damage: BigNumberish],
    [void],
    "nonpayable"
  >;

  armyInfo: TypedContractMethod<
    [armyAddress: AddressLike],
    [
      [bigint, bigint, bigint] & {
        robberyMultiplier: bigint;
        pointsDebt: bigint;
        points: bigint;
      }
    ],
    "view"
  >;

  besiegingArmyUnitsByType: TypedContractMethod<
    [armyAddress: AddressLike, unitTypeId: BytesLike],
    [bigint],
    "view"
  >;

  calculateArmyTotalSiegePower: TypedContractMethod<
    [armyAddress: AddressLike],
    [bigint],
    "nonpayable"
  >;

  calculateArmyUnitsSiegePower: TypedContractMethod<
    [armyAddress: AddressLike],
    [bigint],
    "nonpayable"
  >;

  canLiquidateArmyBesiegingUnits: TypedContractMethod<
    [armyAddress: AddressLike],
    [boolean],
    "view"
  >;

  getArmyBesiegingUnitsAmounts: TypedContractMethod<
    [armyAddress: AddressLike],
    [bigint[]],
    "view"
  >;

  getArmyRobberyPoints: TypedContractMethod<
    [armyAddress: AddressLike, timestamp: BigNumberish],
    [bigint],
    "view"
  >;

  liquidate: TypedContractMethod<
    [armyAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  modifyArmySiege: TypedContractMethod<
    [
      armyAddress: AddressLike,
      unitTypeIds: BytesLike[],
      toAddIndication: boolean[],
      unitsAmounts: BigNumberish[],
      newRobberyMultiplier: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  relatedSettlement: TypedContractMethod<[], [string], "view">;

  robberyPointsPerOneDamage: TypedContractMethod<[], [bigint], "view">;

  swapRobberyPointsForResourceFromBuildingTreasury: TypedContractMethod<
    [buildingAddress: AddressLike, pointsToSpend: BigNumberish],
    [void],
    "nonpayable"
  >;

  totalSiegePower: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "applyDamage"
  ): TypedContractMethod<[damage: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "armyInfo"
  ): TypedContractMethod<
    [armyAddress: AddressLike],
    [
      [bigint, bigint, bigint] & {
        robberyMultiplier: bigint;
        pointsDebt: bigint;
        points: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "besiegingArmyUnitsByType"
  ): TypedContractMethod<
    [armyAddress: AddressLike, unitTypeId: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calculateArmyTotalSiegePower"
  ): TypedContractMethod<[armyAddress: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "calculateArmyUnitsSiegePower"
  ): TypedContractMethod<[armyAddress: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "canLiquidateArmyBesiegingUnits"
  ): TypedContractMethod<[armyAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "getArmyBesiegingUnitsAmounts"
  ): TypedContractMethod<[armyAddress: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getArmyRobberyPoints"
  ): TypedContractMethod<
    [armyAddress: AddressLike, timestamp: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "liquidate"
  ): TypedContractMethod<[armyAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "modifyArmySiege"
  ): TypedContractMethod<
    [
      armyAddress: AddressLike,
      unitTypeIds: BytesLike[],
      toAddIndication: boolean[],
      unitsAmounts: BigNumberish[],
      newRobberyMultiplier: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "relatedSettlement"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "robberyPointsPerOneDamage"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "swapRobberyPointsForResourceFromBuildingTreasury"
  ): TypedContractMethod<
    [buildingAddress: AddressLike, pointsToSpend: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "totalSiegePower"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "ArmyLiquidated"
  ): TypedContractEvent<
    ArmyLiquidatedEvent.InputTuple,
    ArmyLiquidatedEvent.OutputTuple,
    ArmyLiquidatedEvent.OutputObject
  >;
  getEvent(
    key: "ArmySiegeModified"
  ): TypedContractEvent<
    ArmySiegeModifiedEvent.InputTuple,
    ArmySiegeModifiedEvent.OutputTuple,
    ArmySiegeModifiedEvent.OutputObject
  >;
  getEvent(
    key: "BuildingRobbed"
  ): TypedContractEvent<
    BuildingRobbedEvent.InputTuple,
    BuildingRobbedEvent.OutputTuple,
    BuildingRobbedEvent.OutputObject
  >;

  filters: {
    "ArmyLiquidated(address)": TypedContractEvent<
      ArmyLiquidatedEvent.InputTuple,
      ArmyLiquidatedEvent.OutputTuple,
      ArmyLiquidatedEvent.OutputObject
    >;
    ArmyLiquidated: TypedContractEvent<
      ArmyLiquidatedEvent.InputTuple,
      ArmyLiquidatedEvent.OutputTuple,
      ArmyLiquidatedEvent.OutputObject
    >;

    "ArmySiegeModified(address,bytes32[],bool[],uint256[],uint256,uint256)": TypedContractEvent<
      ArmySiegeModifiedEvent.InputTuple,
      ArmySiegeModifiedEvent.OutputTuple,
      ArmySiegeModifiedEvent.OutputObject
    >;
    ArmySiegeModified: TypedContractEvent<
      ArmySiegeModifiedEvent.InputTuple,
      ArmySiegeModifiedEvent.OutputTuple,
      ArmySiegeModifiedEvent.OutputObject
    >;

    "BuildingRobbed(address,address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      BuildingRobbedEvent.InputTuple,
      BuildingRobbedEvent.OutputTuple,
      BuildingRobbedEvent.OutputObject
    >;
    BuildingRobbed: TypedContractEvent<
      BuildingRobbedEvent.InputTuple,
      BuildingRobbedEvent.OutputTuple,
      BuildingRobbedEvent.OutputObject
    >;
  };
}
