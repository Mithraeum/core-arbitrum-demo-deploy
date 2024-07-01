/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IGeography,
  IGeographyInterface,
} from "../../../../contracts/core/geography/IGeography";

const _abi = [
  {
    inputs: [],
    name: "CannotIncludeAlreadyIncludedRegion",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotIncludeRegionDueToInsufficientUserSettlementsCountInNeighboringRegion",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotIncludeRegionDueToInsufficientValueSent",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotIncludeRegionWithInvalidRegionInclusionProofProvided",
    type: "error",
  },
  {
    inputs: [],
    name: "FirstRegionCanOnlyBeIncludedByMightyCreator",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidNeighborDirectionSpecified",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTileBonusConfiguration",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "regionId",
        type: "uint64",
      },
    ],
    name: "RegionIncluded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "position1",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "position2",
        type: "uint64",
      },
    ],
    name: "getDistanceBetweenPositions",
    outputs: [
      {
        internalType: "uint64",
        name: "distance",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
    ],
    name: "getRegionIdByPosition",
    outputs: [
      {
        internalType: "uint64",
        name: "regionId",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "isPositionExist",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "regionId",
        type: "uint64",
      },
    ],
    name: "getRegionOwner",
    outputs: [
      {
        internalType: "address",
        name: "regionOwner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "regionId",
        type: "uint64",
      },
    ],
    name: "getRegionTier",
    outputs: [
      {
        internalType: "uint256",
        name: "regionTier",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRegionsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "regionsCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        name: "radius",
        type: "uint256",
      },
    ],
    name: "getRingPositions",
    outputs: [
      {
        internalType: "uint64[]",
        name: "ringPositions",
        type: "uint64[]",
      },
      {
        internalType: "uint256",
        name: "ringPositionsLength",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tileBonusesSeed",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "chanceForTileWithBonus",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
    ],
    name: "getTileBonus",
    outputs: [
      {
        components: [
          {
            internalType: "enum IGeography.TileBonusType",
            name: "tileBonusType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "tileBonusVariation",
            type: "uint8",
          },
        ],
        internalType: "struct IGeography.TileBonus",
        name: "tileBonus",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "newRegionPosition",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "neighborRegionPosition",
        type: "uint64",
      },
    ],
    name: "includeRegion",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "worldAddress",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "regionId",
        type: "uint64",
      },
    ],
    name: "isRegionIncluded",
    outputs: [
      {
        internalType: "bool",
        name: "isRegionIncluded",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IGeography__factory {
  static readonly abi = _abi;
  static createInterface(): IGeographyInterface {
    return new Interface(_abi) as IGeographyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IGeography {
    return new Contract(address, _abi, runner) as unknown as IGeography;
  }
}
