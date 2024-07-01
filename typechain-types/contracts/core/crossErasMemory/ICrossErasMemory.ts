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
} from "../../../common";

export interface ICrossErasMemoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addUserSettlement"
      | "changeRegionSettlementPrice"
      | "init"
      | "placeSettlementOnMap"
      | "regionSettlementPrice"
      | "regionSettlementPriceUpdateTime"
      | "regionUserSettlementsCount"
      | "removeUserSettlement"
      | "settlementByBannerId"
      | "settlementByPosition"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addUserSettlement",
    values: [BigNumberish, BigNumberish, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "changeRegionSettlementPrice",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "init", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "placeSettlementOnMap",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "regionSettlementPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "regionSettlementPriceUpdateTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "regionUserSettlementsCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeUserSettlement",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "settlementByBannerId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settlementByPosition",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addUserSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeRegionSettlementPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "placeSettlementOnMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "regionSettlementPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "regionSettlementPriceUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "regionUserSettlementsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeUserSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlementByBannerId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlementByPosition",
    data: BytesLike
  ): Result;
}

export interface ICrossErasMemory extends BaseContract {
  connect(runner?: ContractRunner | null): ICrossErasMemory;
  waitForDeployment(): Promise<this>;

  interface: ICrossErasMemoryInterface;

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

  addUserSettlement: TypedContractMethod<
    [
      bannerId: BigNumberish,
      regionId: BigNumberish,
      settlementAddress: AddressLike,
      isNewSettlement: boolean
    ],
    [void],
    "nonpayable"
  >;

  changeRegionSettlementPrice: TypedContractMethod<
    [
      regionId: BigNumberish,
      settlementPrice: BigNumberish,
      lastUpdateTime: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  init: TypedContractMethod<[worldAddress: AddressLike], [void], "nonpayable">;

  placeSettlementOnMap: TypedContractMethod<
    [position: BigNumberish, settlementAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  regionSettlementPrice: TypedContractMethod<
    [regionId: BigNumberish],
    [bigint],
    "view"
  >;

  regionSettlementPriceUpdateTime: TypedContractMethod<
    [regionId: BigNumberish],
    [bigint],
    "view"
  >;

  regionUserSettlementsCount: TypedContractMethod<
    [regionId: BigNumberish],
    [bigint],
    "view"
  >;

  removeUserSettlement: TypedContractMethod<
    [settlementAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  settlementByBannerId: TypedContractMethod<
    [bannerId: BigNumberish],
    [string],
    "view"
  >;

  settlementByPosition: TypedContractMethod<
    [position: BigNumberish],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addUserSettlement"
  ): TypedContractMethod<
    [
      bannerId: BigNumberish,
      regionId: BigNumberish,
      settlementAddress: AddressLike,
      isNewSettlement: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changeRegionSettlementPrice"
  ): TypedContractMethod<
    [
      regionId: BigNumberish,
      settlementPrice: BigNumberish,
      lastUpdateTime: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "init"
  ): TypedContractMethod<[worldAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "placeSettlementOnMap"
  ): TypedContractMethod<
    [position: BigNumberish, settlementAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "regionSettlementPrice"
  ): TypedContractMethod<[regionId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "regionSettlementPriceUpdateTime"
  ): TypedContractMethod<[regionId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "regionUserSettlementsCount"
  ): TypedContractMethod<[regionId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "removeUserSettlement"
  ): TypedContractMethod<
    [settlementAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "settlementByBannerId"
  ): TypedContractMethod<[bannerId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "settlementByPosition"
  ): TypedContractMethod<[position: BigNumberish], [string], "view">;

  filters: {};
}