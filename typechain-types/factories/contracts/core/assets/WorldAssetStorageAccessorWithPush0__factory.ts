/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  WorldAssetStorageAccessorWithPush0,
  WorldAssetStorageAccessorWithPush0Interface,
} from "../../../../contracts/core/assets/WorldAssetStorageAccessorWithPush0";

const _abi = [
  {
    inputs: [],
    name: "assetGroupId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class WorldAssetStorageAccessorWithPush0__factory {
  static readonly abi = _abi;
  static createInterface(): WorldAssetStorageAccessorWithPush0Interface {
    return new Interface(_abi) as WorldAssetStorageAccessorWithPush0Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WorldAssetStorageAccessorWithPush0 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as WorldAssetStorageAccessorWithPush0;
  }
}
