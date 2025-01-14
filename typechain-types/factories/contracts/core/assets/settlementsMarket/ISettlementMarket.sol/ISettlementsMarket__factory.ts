/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ISettlementsMarket,
  ISettlementsMarketInterface,
} from "../../../../../../contracts/core/assets/settlementsMarket/ISettlementMarket.sol/ISettlementsMarket";

const _abi = [
  {
    inputs: [],
    name: "SettlementCannotBeBoughtDueInsufficientValueSent",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotBeBoughtDueToCostIsHigherThanMaxTokensToUseSpecified",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotBeBoughtForFreeAfterGameBegan",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotBeBoughtForNotOwnerBannerNft",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotBeBoughtOnNonExistentPosition",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotBeBoughtOnPositionWhichIsNotRelatedToThisSettlementMarket",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "settlementCost",
        type: "uint256",
      },
    ],
    name: "SettlementBought",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "bannerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTokensToUse",
        type: "uint256",
      },
    ],
    name: "buySettlement",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "bannerId",
        type: "uint256",
      },
    ],
    name: "buySettlementForFreeByMightyCreator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getNewSettlementCost",
    outputs: [
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketCreationTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "relatedRegion",
    outputs: [
      {
        internalType: "contract IRegion",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISettlementsMarket__factory {
  static readonly abi = _abi;
  static createInterface(): ISettlementsMarketInterface {
    return new Interface(_abi) as ISettlementsMarketInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ISettlementsMarket {
    return new Contract(address, _abi, runner) as unknown as ISettlementsMarket;
  }
}
