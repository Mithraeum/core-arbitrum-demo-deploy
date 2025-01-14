/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IWorldAssetStorageAccessor,
  IWorldAssetStorageAccessorInterface,
} from "../../../../contracts/core/assets/IWorldAssetStorageAccessor";

const _abi = [
  {
    inputs: [],
    name: "assetGroupId",
    outputs: [
      {
        internalType: "bytes32",
        name: "assetGroupId",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetTypeId",
    outputs: [
      {
        internalType: "bytes32",
        name: "assetTypeId",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eraNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "eraNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "world",
    outputs: [
      {
        internalType: "contract IWorld",
        name: "world",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IWorldAssetStorageAccessor__factory {
  static readonly abi = _abi;
  static createInterface(): IWorldAssetStorageAccessorInterface {
    return new Interface(_abi) as IWorldAssetStorageAccessorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IWorldAssetStorageAccessor {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IWorldAssetStorageAccessor;
  }
}
