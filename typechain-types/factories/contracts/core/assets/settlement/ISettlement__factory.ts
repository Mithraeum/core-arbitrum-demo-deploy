/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ISettlement,
  ISettlementInterface,
} from "../../../../../contracts/core/assets/settlement/ISettlement";

const _abi = [
  {
    inputs: [],
    name: "GovernorCannotBeAddedIfSenderNotSettlementOwnerOrAnotherGovernor",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyRulerOrWorldAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlySettlementOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotBeDestroyedIfItsAlreadyRebuilt",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotBeDestroyedIfItsNotRotten",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotDecreaseCorruptionIndexViaPaymentInInactiveEra",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotDecreaseCorruptionIndexViaPaymentWrongParamProvided",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotSendWorkersToBuildingOverMaximumAllowedCapacity",
    type: "error",
  },
  {
    inputs: [],
    name: "SettlementCannotSendWorkersWithFractions",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "armyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
    ],
    name: "ArmyCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buildingAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "buildingTypeId",
        type: "bytes32",
      },
    ],
    name: "BuildingCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Destroyed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentGovernorsGeneration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "governorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "modifiedByAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "newStatus",
        type: "bool",
      },
    ],
    name: "GovernorStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newGovernorsGeneration",
        type: "uint256",
      },
    ],
    name: "GovernorsGenerationChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "siegeAddress",
        type: "address",
      },
    ],
    name: "SiegeCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "governorAddress",
        type: "address",
      },
    ],
    name: "addGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "army",
    outputs: [
      {
        internalType: "contract IArmy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resourcesOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "buildingAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "workersAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "resourceTypeIds",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "resourcesAmounts",
        type: "uint256[]",
      },
    ],
    name: "assignResourcesAndWorkersToBuilding",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bannerId",
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
    inputs: [
      {
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "prosperityStake",
        type: "uint256",
      },
    ],
    name: "beginTileCapture",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "buildingTypeId",
        type: "bytes32",
      },
    ],
    name: "buildings",
    outputs: [
      {
        internalType: "contract IBuilding",
        name: "",
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
        name: "position",
        type: "uint64",
      },
    ],
    name: "cancelTileCapture",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "claimCapturedTile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentGovernorsGeneration",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseProducedCorruptionIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "destroyRottenSettlement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prosperityAmount",
        type: "uint256",
      },
    ],
    name: "extendProsperity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "extendedProsperityAmount",
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
    name: "getSettlementOwner",
    outputs: [
      {
        internalType: "address",
        name: "settlementOwner",
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
        name: "position",
        type: "uint64",
      },
    ],
    name: "giveUpCapturedTile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "era",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "isGovernor",
        type: "address",
      },
    ],
    name: "governors",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseProducedCorruptionIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isRottenSettlement",
    outputs: [
      {
        internalType: "bool",
        name: "isRottenSettlement",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "potentialRuler",
        type: "address",
      },
    ],
    name: "isRuler",
    outputs: [
      {
        internalType: "bool",
        name: "isRuler",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokensAmount",
        type: "uint256",
      },
    ],
    name: "payToDecreaseCorruptionIndex",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "position",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "producedCorruptionIndex",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
    inputs: [
      {
        internalType: "address",
        name: "governorAddress",
        type: "address",
      },
    ],
    name: "removeGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeGovernors",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "siege",
    outputs: [
      {
        internalType: "contract ISiege",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "workersToBuy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxProsperityToSell",
        type: "uint256",
      },
    ],
    name: "swapProsperityForExactWorkers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateFortHealth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateProsperityAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceTypeId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawResources",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISettlement__factory {
  static readonly abi = _abi;
  static createInterface(): ISettlementInterface {
    return new Interface(_abi) as ISettlementInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ISettlement {
    return new Contract(address, _abi, runner) as unknown as ISettlement;
  }
}