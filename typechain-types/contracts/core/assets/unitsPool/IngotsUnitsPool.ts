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

export interface IngotsUnitsPoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "assetGroupId"
      | "assetTypeId"
      | "calculateTokensForExactUnits"
      | "era"
      | "eraNumber"
      | "init"
      | "lastPurchaseTime"
      | "registry"
      | "relatedRegion"
      | "swapTokensForExactUnits"
      | "swapTokensForExactUnitsByRegion"
      | "unitPrice"
      | "unitTypeId"
      | "world"
      | "worldAssetFactory"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Initialized" | "UnitsBought"
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
    functionFragment: "calculateTokensForExactUnits",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "era", values?: undefined): string;
  encodeFunctionData(functionFragment: "eraNumber", values?: undefined): string;
  encodeFunctionData(functionFragment: "init", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "lastPurchaseTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "relatedRegion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactUnits",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactUnitsByRegion",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unitPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unitTypeId",
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
    functionFragment: "calculateTokensForExactUnits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "era", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eraNumber", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastPurchaseTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "relatedRegion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactUnits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactUnitsByRegion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unitPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unitTypeId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "world", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "worldAssetFactory",
    data: BytesLike
  ): Result;
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

export namespace UnitsBoughtEvent {
  export type InputTuple = [
    spender: AddressLike,
    armyAddress: AddressLike,
    boughtUnitsAmount: BigNumberish,
    spentTokensAmount: BigNumberish,
    newUnitPrice: BigNumberish
  ];
  export type OutputTuple = [
    spender: string,
    armyAddress: string,
    boughtUnitsAmount: bigint,
    spentTokensAmount: bigint,
    newUnitPrice: bigint
  ];
  export interface OutputObject {
    spender: string;
    armyAddress: string;
    boughtUnitsAmount: bigint;
    spentTokensAmount: bigint;
    newUnitPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IngotsUnitsPool extends BaseContract {
  connect(runner?: ContractRunner | null): IngotsUnitsPool;
  waitForDeployment(): Promise<this>;

  interface: IngotsUnitsPoolInterface;

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

  calculateTokensForExactUnits: TypedContractMethod<
    [unitsToBuy: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;

  era: TypedContractMethod<[], [string], "view">;

  eraNumber: TypedContractMethod<[], [bigint], "view">;

  init: TypedContractMethod<[initParams: BytesLike], [void], "nonpayable">;

  lastPurchaseTime: TypedContractMethod<[], [bigint], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  relatedRegion: TypedContractMethod<[], [string], "view">;

  swapTokensForExactUnits: TypedContractMethod<
    [
      tokensOwner: AddressLike,
      settlementAddress: AddressLike,
      unitsToBuy: BigNumberish,
      maxTokensToSell: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  swapTokensForExactUnitsByRegion: TypedContractMethod<
    [
      tokensOwner: AddressLike,
      msgSender: AddressLike,
      settlementAddress: AddressLike,
      unitsToBuy: BigNumberish,
      maxTokensToSell: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  unitPrice: TypedContractMethod<[], [bigint], "view">;

  unitTypeId: TypedContractMethod<[], [string], "view">;

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
    nameOrSignature: "calculateTokensForExactUnits"
  ): TypedContractMethod<
    [unitsToBuy: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "era"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "eraNumber"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "init"
  ): TypedContractMethod<[initParams: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lastPurchaseTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "relatedRegion"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "swapTokensForExactUnits"
  ): TypedContractMethod<
    [
      tokensOwner: AddressLike,
      settlementAddress: AddressLike,
      unitsToBuy: BigNumberish,
      maxTokensToSell: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapTokensForExactUnitsByRegion"
  ): TypedContractMethod<
    [
      tokensOwner: AddressLike,
      msgSender: AddressLike,
      settlementAddress: AddressLike,
      unitsToBuy: BigNumberish,
      maxTokensToSell: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unitPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "unitTypeId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "world"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "worldAssetFactory"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "UnitsBought"
  ): TypedContractEvent<
    UnitsBoughtEvent.InputTuple,
    UnitsBoughtEvent.OutputTuple,
    UnitsBoughtEvent.OutputObject
  >;

  filters: {
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

    "UnitsBought(address,address,uint256,uint256,uint256)": TypedContractEvent<
      UnitsBoughtEvent.InputTuple,
      UnitsBoughtEvent.OutputTuple,
      UnitsBoughtEvent.OutputObject
    >;
    UnitsBought: TypedContractEvent<
      UnitsBoughtEvent.InputTuple,
      UnitsBoughtEvent.OutputTuple,
      UnitsBoughtEvent.OutputObject
    >;
  };
}
