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
} from "../../common";

export declare namespace SettlementsListings {
  export type SharesInfoStruct = {
    buildingTypeId: BytesLike;
    minSharesAmount: BigNumberish;
  };

  export type SharesInfoStructOutput = [
    buildingTypeId: string,
    minSharesAmount: bigint
  ] & { buildingTypeId: string; minSharesAmount: bigint };
}

export interface SettlementsListingsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOrder"
      | "banners"
      | "bannersOrders"
      | "cancelOrder"
      | "createOrder"
      | "lastOrderId"
      | "modifyOrder"
      | "orders"
      | "world"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OrderAccepted"
      | "OrderCancelled"
      | "OrderCreated"
      | "OrderModified"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOrder",
    values: [BigNumberish, SettlementsListings.SharesInfoStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "banners", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bannersOrders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "lastOrderId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyOrder",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "orders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "world", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "banners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bannersOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastOrderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "world", data: BytesLike): Result;
}

export namespace OrderAcceptedEvent {
  export type InputTuple = [orderId: BigNumberish];
  export type OutputTuple = [orderId: bigint];
  export interface OutputObject {
    orderId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderCancelledEvent {
  export type InputTuple = [orderId: BigNumberish];
  export type OutputTuple = [orderId: bigint];
  export interface OutputObject {
    orderId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderCreatedEvent {
  export type InputTuple = [
    orderId: BigNumberish,
    bannerId: BigNumberish,
    sellingTokenAddress: AddressLike,
    price: BigNumberish,
    allowedAddressToAcceptOrder: AddressLike,
    orderStartTime: BigNumberish,
    orderEndTime: BigNumberish
  ];
  export type OutputTuple = [
    orderId: bigint,
    bannerId: bigint,
    sellingTokenAddress: string,
    price: bigint,
    allowedAddressToAcceptOrder: string,
    orderStartTime: bigint,
    orderEndTime: bigint
  ];
  export interface OutputObject {
    orderId: bigint;
    bannerId: bigint;
    sellingTokenAddress: string;
    price: bigint;
    allowedAddressToAcceptOrder: string;
    orderStartTime: bigint;
    orderEndTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderModifiedEvent {
  export type InputTuple = [
    orderId: BigNumberish,
    sellingTokenAddress: AddressLike,
    price: BigNumberish,
    allowedAddressToAcceptOrder: AddressLike,
    orderStartTime: BigNumberish,
    orderEndTime: BigNumberish
  ];
  export type OutputTuple = [
    orderId: bigint,
    sellingTokenAddress: string,
    price: bigint,
    allowedAddressToAcceptOrder: string,
    orderStartTime: bigint,
    orderEndTime: bigint
  ];
  export interface OutputObject {
    orderId: bigint;
    sellingTokenAddress: string;
    price: bigint;
    allowedAddressToAcceptOrder: string;
    orderStartTime: bigint;
    orderEndTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SettlementsListings extends BaseContract {
  connect(runner?: ContractRunner | null): SettlementsListings;
  waitForDeployment(): Promise<this>;

  interface: SettlementsListingsInterface;

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

  acceptOrder: TypedContractMethod<
    [
      orderId: BigNumberish,
      minBuildingsSharesToReceive: SettlementsListings.SharesInfoStruct[]
    ],
    [void],
    "payable"
  >;

  banners: TypedContractMethod<[], [string], "view">;

  bannersOrders: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  cancelOrder: TypedContractMethod<
    [orderId: BigNumberish],
    [void],
    "nonpayable"
  >;

  createOrder: TypedContractMethod<
    [
      bannerId: BigNumberish,
      sellingTokenAddress: AddressLike,
      price: BigNumberish,
      allowedAddressToAcceptOrder: AddressLike,
      orderStartTime: BigNumberish,
      orderEndTime: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  lastOrderId: TypedContractMethod<[], [bigint], "view">;

  modifyOrder: TypedContractMethod<
    [
      orderId: BigNumberish,
      sellingTokenAddress: AddressLike,
      price: BigNumberish,
      allowedAddressToAcceptOrder: AddressLike,
      orderStartTime: BigNumberish,
      orderEndTime: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  orders: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, string, bigint, bigint, bigint, bigint, bigint] & {
        orderOwner: string;
        sellingTokenAddress: string;
        allowedAddressToAcceptOrder: string;
        orderStartTime: bigint;
        orderEndTime: bigint;
        price: bigint;
        bannerId: bigint;
        status: bigint;
      }
    ],
    "view"
  >;

  world: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOrder"
  ): TypedContractMethod<
    [
      orderId: BigNumberish,
      minBuildingsSharesToReceive: SettlementsListings.SharesInfoStruct[]
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "banners"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bannersOrders"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "cancelOrder"
  ): TypedContractMethod<[orderId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createOrder"
  ): TypedContractMethod<
    [
      bannerId: BigNumberish,
      sellingTokenAddress: AddressLike,
      price: BigNumberish,
      allowedAddressToAcceptOrder: AddressLike,
      orderStartTime: BigNumberish,
      orderEndTime: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lastOrderId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "modifyOrder"
  ): TypedContractMethod<
    [
      orderId: BigNumberish,
      sellingTokenAddress: AddressLike,
      price: BigNumberish,
      allowedAddressToAcceptOrder: AddressLike,
      orderStartTime: BigNumberish,
      orderEndTime: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "orders"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, string, bigint, bigint, bigint, bigint, bigint] & {
        orderOwner: string;
        sellingTokenAddress: string;
        allowedAddressToAcceptOrder: string;
        orderStartTime: bigint;
        orderEndTime: bigint;
        price: bigint;
        bannerId: bigint;
        status: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "world"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "OrderAccepted"
  ): TypedContractEvent<
    OrderAcceptedEvent.InputTuple,
    OrderAcceptedEvent.OutputTuple,
    OrderAcceptedEvent.OutputObject
  >;
  getEvent(
    key: "OrderCancelled"
  ): TypedContractEvent<
    OrderCancelledEvent.InputTuple,
    OrderCancelledEvent.OutputTuple,
    OrderCancelledEvent.OutputObject
  >;
  getEvent(
    key: "OrderCreated"
  ): TypedContractEvent<
    OrderCreatedEvent.InputTuple,
    OrderCreatedEvent.OutputTuple,
    OrderCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OrderModified"
  ): TypedContractEvent<
    OrderModifiedEvent.InputTuple,
    OrderModifiedEvent.OutputTuple,
    OrderModifiedEvent.OutputObject
  >;

  filters: {
    "OrderAccepted(uint256)": TypedContractEvent<
      OrderAcceptedEvent.InputTuple,
      OrderAcceptedEvent.OutputTuple,
      OrderAcceptedEvent.OutputObject
    >;
    OrderAccepted: TypedContractEvent<
      OrderAcceptedEvent.InputTuple,
      OrderAcceptedEvent.OutputTuple,
      OrderAcceptedEvent.OutputObject
    >;

    "OrderCancelled(uint256)": TypedContractEvent<
      OrderCancelledEvent.InputTuple,
      OrderCancelledEvent.OutputTuple,
      OrderCancelledEvent.OutputObject
    >;
    OrderCancelled: TypedContractEvent<
      OrderCancelledEvent.InputTuple,
      OrderCancelledEvent.OutputTuple,
      OrderCancelledEvent.OutputObject
    >;

    "OrderCreated(uint256,uint256,address,uint256,address,uint256,uint256)": TypedContractEvent<
      OrderCreatedEvent.InputTuple,
      OrderCreatedEvent.OutputTuple,
      OrderCreatedEvent.OutputObject
    >;
    OrderCreated: TypedContractEvent<
      OrderCreatedEvent.InputTuple,
      OrderCreatedEvent.OutputTuple,
      OrderCreatedEvent.OutputObject
    >;

    "OrderModified(uint256,address,uint256,address,uint256,uint256)": TypedContractEvent<
      OrderModifiedEvent.InputTuple,
      OrderModifiedEvent.OutputTuple,
      OrderModifiedEvent.OutputObject
    >;
    OrderModified: TypedContractEvent<
      OrderModifiedEvent.InputTuple,
      OrderModifiedEvent.OutputTuple,
      OrderModifiedEvent.OutputObject
    >;
  };
}
