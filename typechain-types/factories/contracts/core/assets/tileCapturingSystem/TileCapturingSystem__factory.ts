/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  TileCapturingSystem,
  TileCapturingSystemInterface,
} from "../../../../../contracts/core/assets/tileCapturingSystem/TileCapturingSystem";

const _abi = [
  {
    inputs: [],
    name: "CannotBeginTileCaptureBySettlementAlreadyHavingMaximumCapturedTilesWithSameBonus",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotBeginTileCaptureBySettlementWhichIsAlreadyCapturingTile",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotBeginTileCaptureDueToNonExistentPositionSpecified",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotBeginTileCaptureDueToNotHavingSpecifiedProsperity",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotBeginTileCaptureDueToNotReachedNextMinimumProsperityStake",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotBeginTileCaptureOfPositionWithoutBonus",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotBeginTileCaptureOnNotActivatedRegion",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotBeginTileCaptureOnPositionWithSettlement",
    type: "error",
  },
  {
    inputs: [],
    name: "CapturedTileCannotBeGivenUpByNonSettlementOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ClaimTileCaptureCannotBeDoneAtThisTime",
    type: "error",
  },
  {
    inputs: [],
    name: "ClaimTileCaptureCannotBeDoneByNonUsurperSettlement",
    type: "error",
  },
  {
    inputs: [],
    name: "ClaimTileCaptureCannotBeDoneWithoutNecessaryProsperity",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyActiveGame",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyMightyCreator",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyWorldAssetFromSameEra",
    type: "error",
  },
  {
    inputs: [],
    name: "TileCaptureCannotBeCancelledBySettlementWhichIsNotCurrentTileUsurper",
    type: "error",
  },
  {
    inputs: [],
    name: "UnknownTileBonus",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousSettlementOwnerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prosperityStake",
        type: "uint256",
      },
    ],
    name: "CapturedTileClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
    ],
    name: "CapturedTileGivenUp",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousUsurperAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prosperityStake",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "captureBeginTime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "captureEndTime",
        type: "uint64",
      },
    ],
    name: "TileCapturingBegan",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
    ],
    name: "TileCapturingCancelled",
    type: "event",
  },
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
    inputs: [
      {
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
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
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
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
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
    ],
    name: "claimTileCapture",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "era",
    outputs: [
      {
        internalType: "contract IEra",
        name: "",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "tileBonusType",
        type: "uint8",
      },
    ],
    name: "getCapturedTilesBySettlementAddress",
    outputs: [
      {
        internalType: "uint64[]",
        name: "",
        type: "uint64[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
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
        internalType: "uint64",
        name: "position",
        type: "uint64",
      },
    ],
    name: "handleSettlementCreatedOnPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initParams",
        type: "bytes",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract IRegistry",
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
        name: "",
        type: "address",
      },
    ],
    name: "settlementCapturingTile",
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
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "tilesInfo",
    outputs: [
      {
        internalType: "address",
        name: "ownerSettlementAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "usurperSettlementAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "usurperProsperityStake",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "usurperCaptureBeginTime",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "usurperCaptureEndTime",
        type: "uint64",
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
  {
    inputs: [],
    name: "worldAssetFactory",
    outputs: [
      {
        internalType: "contract IWorldAssetFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612e51806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d05760003560e01c80630b4e99c3146100d55780630d62a246146100f0578063123753dd14610105578063143e55e01461013b57806330b67baa14610150578063447b9aa0146101585780634ddf47d414610178578063793adbc41461018b5780637b1039991461019e5780637d884c74146101a657806384ba89e3146101ae578063cc307235146101b6578063db06797b1461024d578063e06ca91714610260578063ece56a1a14610273578063f21f493c1461027b575b600080fd5b6100dd61028e565b6040519081526020015b60405180910390f35b6101036100fe3660046129d7565b6102cb565b005b61012e610113366004612a10565b6002602052600090815260409020546001600160401b031681565b6040516100e79190612a2d565b6101436107cc565b6040516100e79190612a41565b610143610850565b61016b610166366004612a64565b61085a565b6040516100e79190612a92565b610103610186366004612af5565b61097b565b6101036101993660046129d7565b610a89565b610143610c53565b6100dd610c9a565b6100dd610cd7565b61020e6101c4366004612ba5565b600360208190526000918252604090912080546001820154600283015492909301546001600160a01b039182169390911691906001600160401b0380821691600160401b90041685565b604080516001600160a01b039687168152959094166020860152928401919091526001600160401b03908116606084015216608082015260a0016100e7565b61010361025b3660046129d7565b610d14565b61010361026e366004612ba5565b610fb9565b6101436111b9565b610103610289366004612bc2565b611200565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020607a60208301853c602001519392505050565b6102d3611d47565b816001600160a01b031663bea42f9c6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561030e57600080fd5b505af1158015610322573d6000803e3d6000fd5b5050506001600160401b03821660009081526003602052604081209150610347610850565b6001600160a01b031663f5f026a36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610384573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a89190612c03565b6001600160a01b0316630915dd5d846040518263ffffffff1660e01b81526004016103d39190612a2d565b6040805180830381865afa1580156103ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104139190612c20565b50905060006104228285611e13565b60018401549091506001600160a01b0386811691161461045557604051637de2716760e11b815260040160405180910390fd5b60038301546001600160401b03600160401b909104811642909116101561048f57604051630ec0969760e11b815260040160405180910390fd5b60028301546000670de0b6b3a76400006104a7610c53565b6001600160a01b031663b99cb62c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105089190612c54565b6105129084612c83565b61051c9190612c9a565b9050806105276107cc565b6001600160a01b031663c91b95666040518163ffffffff1660e01b8152600401602060405180830381865afa158015610564573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105889190612c03565b6001600160a01b03166370a08231896040518263ffffffff1660e01b81526004016105b39190612a41565b602060405180830381865afa1580156105d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f49190612c54565b101561061357604051634986900b60e11b815260040160405180910390fd5b84546001600160a01b03168015610697576001600160a01b0381166000908152600160205260408120855161068c926001600160401b038b169291600281111561065f5761065f612cbc565b600281111561067057610670612cbc565b815260200190815260200160002061207590919063ffffffff16565b506106978482612088565b85546001600160a01b0389166001600160a01b03199182168117885560006002808a0182905560018a0180549094169093556003890180546001600160801b03191690559081526020919091526040902080546001600160401b03191690556107008489612340565b6001600160a01b03881660009081526001602052604081208551610768926001600160401b038b169291600281111561073b5761073b612cbc565b600281111561074c5761074c612cbc565b81526020019081526020016000206125a690919063ffffffff16565b50604080516001600160a01b0383811682526001600160401b038a1660208301528a16818301526060810185905290517f243f020c0b528445e46dbed2ba6a0e6aaa422a61564ba614ad1f8cf30a8e56ce9181900360800190a15050505050505050565b60006107d6610850565b6001600160a01b031663720a70bd6107ec610c9a565b6040518263ffffffff1660e01b815260040161080a91815260200190565b602060405180830381865afa158015610827573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084b9190612c03565b905090565b600061084b6125b2565b6001600160a01b0382166000908152600160205260408120606091906108c5908260ff8616600281111561089057610890612cbc565b60028111156108a1576108a1612cbc565b60028111156108b2576108b2612cbc565b81526020019081526020016000206125ef565b9050600081516001600160401b038111156108e2576108e2612adf565b60405190808252806020026020018201604052801561090b578160200160208202803683370190505b50905060005b82518110156109705782818151811061092c5761092c612cd2565b602002602001015182828151811061094657610946612cd2565b6001600160401b03909216602092830291909101909101528061096881612ce8565b915050610911565b509150505b92915050565b600054610100900460ff161580801561099b5750600054600160ff909116105b806109b55750303b1580156109b5575060005460ff166001145b610a1c5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff191660011790558015610a3f576000805461ff0019166101001790555b8015610a85576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b610a91611d47565b6001600160401b038116600090815260036020526040902080546001600160a01b03848116911614610ad657604051632f7782c560e01b815260040160405180910390fd5b6000610ae0610850565b6001600160a01b031663f5f026a36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b419190612c03565b6001600160a01b0316630915dd5d846040518263ffffffff1660e01b8152600401610b6c9190612a2d565b6040805180830381865afa158015610b88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bac9190612c20565b5090506000610bbb8285611e13565b6001600160a01b03861660009081526001602052604081208251929350610bf9926001600160401b0388169290600281111561065f5761065f612cbc565b50610c048186612088565b82546001600160a01b03191683556040517f2d7ab882c89b34472559b612309227fb1b2652d3b6b12bcf260a9b4d628331a390610c449086908890612d01565b60405180910390a15050505050565b6000610c5d610850565b6001600160a01b0316637b1039996040518163ffffffff1660e01b8152600401602060405180830381865afa158015610827573d6000803e3d6000fd5b604080516020808252818301909252600091309183918291906020820181803683370190505090506020609a60208301853c602001519392505050565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020605a60208301853c602001519392505050565b610d1c611d47565b6001600160401b038116600090815260036020526040902060018101546001600160a01b03848116911614610d6457604051633ccbf74b60e21b815260040160405180910390fd5b60038101546001600160401b03600160401b9091048116429091161015610f2b57826001600160a01b031663bea42f9c6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610dc057600080fd5b505af1158015610dd4573d6000803e3d6000fd5b50505050610de06107cc565b6001600160a01b031663c91b95666040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e419190612c03565b6001600160a01b031663af7d6ca384670de0b6b3a7640000610e61610c53565b6001600160a01b031663a476a6c36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec29190612c54565b8560020154610ed19190612c83565b610edb9190612c9a565b6040518363ffffffff1660e01b8152600401610ef8929190612d23565b600060405180830381600087803b158015610f1257600080fd5b505af1158015610f26573d6000803e3d6000fd5b505050505b600060028083018290556001830180546001600160a01b03191690556003830180546001600160801b03191690556001600160a01b038516825260205260409081902080546001600160401b0319169055517fe569daab5509951e0f3c0f72e36514dfc13e05dfffffe224e5d727679b0164f590610fac9084908690612d01565b60405180910390a1505050565b610fc1611d47565b6000610fcb610850565b6001600160a01b031663f5f026a36040518163ffffffff1660e01b8152600401602060405180830381865afa158015611008573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102c9190612c03565b6001600160a01b0316630915dd5d836040518263ffffffff1660e01b81526004016110579190612a2d565b6040805180830381865afa158015611073573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110979190612c20565b50905060006110a68284611e13565b90506000815160028111156110bd576110bd612cbc565b036110c757505050565b6001600160401b038316600090815260036020526040902080546001600160a01b0316156111425780546001600160a01b03166000908152600160205260408120835161112b926001600160401b0388169291600281111561065f5761065f612cbc565b5080546111429083906001600160a01b0316612088565b60018101546001600160a01b0316156111805760018101546001600160a01b0316600090815260026020526040902080546001600160401b03191690555b80546001600160a01b0319908116825560006002830155600182018054909116905560030180546001600160801b031916905550505b50565b60006111c3610c53565b6001600160a01b031663ece56a1a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610827573d6000803e3d6000fd5b611208611d47565b6000839050806001600160a01b031663bea42f9c6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561124857600080fd5b505af115801561125c573d6000803e3d6000fd5b5050505060008061126b610850565b6001600160a01b031663f5f026a36040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cc9190612c03565b6001600160a01b0316630915dd5d866040518263ffffffff1660e01b81526004016112f79190612a2d565b6040805180830381865afa158015611313573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113379190612c20565b91509150806113595760405163099b856f60e41b815260040160405180910390fd5b60006113658387611e13565b905060006113716107cc565b6001600160a01b031663c5375e99856040518263ffffffff1660e01b815260040161139c9190612a2d565b602060405180830381865afa1580156113b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113dd9190612c03565b6001600160a01b0316036114045760405163e45913b360e01b815260040160405180910390fd5b600061140e610850565b6001600160a01b031663a8d66c756040518163ffffffff1660e01b8152600401602060405180830381865afa15801561144b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146f9190612c03565b6001600160a01b031663c4c31e85886040518263ffffffff1660e01b815260040161149a9190612a2d565b602060405180830381865afa1580156114b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114db9190612c03565b6001600160a01b031614611502576040516377dbcfb760e11b815260040160405180910390fd5b6001600160a01b0387166000908152600260205260409020546001600160401b0316156115425760405163d04ee71160e01b815260040160405180910390fd5b61154a610c53565b6001600160a01b03166357721c588260000151600281111561156e5761156e612cbc565b6040516001600160e01b031960e084901b16815260ff9091166004820152602401602060405180830381865afa1580156115ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d09190612c54565b6001600160a01b038816600090815260016020526040812083516116249290600281111561160057611600612cbc565b600281111561161157611611612cbc565b81526020019081526020016000206125fc565b0361164257604051637281145360e11b815260040160405180910390fd5b60008151600281111561165757611657612cbc565b036116755760405163053ca15f60e51b815260040160405180910390fd5b8461167e6107cc565b6001600160a01b031663c91b95666040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116df9190612c03565b6001600160a01b03166370a08231896040518263ffffffff1660e01b815260040161170a9190612a41565b602060405180830381865afa158015611727573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174b9190612c54565b101561176a576040516345f294f560e01b815260040160405180910390fd5b6001600160401b0386166000908152600360205260408120600181015490916001600160a01b0390911690816117a15760006117a7565b82600201545b905060006117b3610850565b6001600160a01b031663f5f026a36040518163ffffffff1660e01b8152600401602060405180830381865afa1580156117f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118149190612c03565b6001600160a01b03166340adb9d58b8a6001600160a01b03166309218e916040518163ffffffff1660e01b8152600401602060405180830381865afa158015611861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118859190612d3c565b6040516001600160e01b031960e085901b1681526001600160401b03928316600482015291166024820152604401602060405180830381865afa1580156118d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f49190612d3c565b6001600160401b031690506119098282612606565b89101561192957604051634f396a6f60e11b815260040160405180910390fd5b6001600160a01b03831615611af7576001600160a01b03831660008181526002602052604080822080546001600160401b03191690558051632fa90be760e21b8152905163bea42f9c9260048084019391929182900301818387803b15801561199157600080fd5b505af11580156119a5573d6000803e3d6000fd5b505050506119b16107cc565b6001600160a01b031663c91b95666040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a129190612c03565b6001600160a01b031663af7d6ca384670de0b6b3a7640000611a32610c53565b6001600160a01b031663a476a6c36040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a939190612c54565b611a9d9087612c83565b611aa79190612c9a565b6040518363ffffffff1660e01b8152600401611ac4929190612d23565b600060405180830381600087803b158015611ade57600080fd5b505af1158015611af2573d6000803e3d6000fd5b505050505b426000611b02610c53565b6001600160a01b031663781e0efe6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b639190612c54565b611b6b610c53565b6001600160a01b0316635c13c3bf6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ba8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bcc9190612c54565b611bd69085612c83565b611be09190612c9a565b611bea9042612d59565b90508a86600201819055508c8660010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550818660030160006101000a8154816001600160401b0302191690836001600160401b03160217905550808660030160086101000a8154816001600160401b0302191690836001600160401b031602179055508b600260008f6001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160401b0302191690836001600160401b031602179055507f9bd7a4d817ec097236552d2df9d28dfbddd8c3653b1c72a29c10e5820c5ff165858d8f8e8686604051611d30969594939291906001600160a01b0396871681526001600160401b039586166020820152939095166040840152606083019190915282166080820152911660a082015260c00190565b60405180910390a150505050505050505050505050565b611d4f610850565b6001600160a01b0316336001600160a01b031614158015611df357506000611d75610850565b6001600160a01b031663ebbe8034611d8b610c9a565b6040516001600160e01b031960e084901b1681526004810191909152336024820152604401602060405180830381865afa158015611dcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611df19190612c54565b145b15611e115760405163422656d160e01b815260040160405180910390fd5b565b60408051808201909152600080825260208201526000611e31610850565b90506000816001600160a01b031663f5f026a36040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e979190612c03565b90506000816001600160a01b03166366b9e256876040518263ffffffff1660e01b8152600401611ec79190612a2d565b602060405180830381865afa158015611ee4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f089190612c54565b90506000611f14610c53565b6001600160a01b0316638dcbb205836040518263ffffffff1660e01b8152600401611f4191815260200190565b602060405180830381865afa158015611f5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f829190612c54565b90506000846001600160a01b031663041cb8466040518163ffffffff1660e01b8152600401602060405180830381865afa158015611fc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fe89190612c54565b60405163d1331b0760e01b815260048101829052602481018490526001600160401b03891660448201529091506001600160a01b0385169063d1331b07906064016040805180830381865afa158015612045573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120699190612d6c565b98975050505050505050565b6000612081838361280f565b9392505050565b8060018351600281111561209e5761209e612cbc565b036121f4576000806120ae610c53565b6020860151604051632020e90160e01b815260ff90911660048201526001600160a01b039190911690632020e901906024016040805180830381865afa1580156120fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121209190612dce565b604051631b973c5760e21b81526004810183905291935091506001600160a01b03841690636e5cf15c90602401602060405180830381865afa15801561216a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061218e9190612c03565b6001600160a01b03166343e77f46826040518263ffffffff1660e01b81526004016121bb91815260200190565b600060405180830381600087803b1580156121d557600080fd5b505af11580156121e9573d6000803e3d6000fd5b505050505050505050565b60028351600281111561220957612209612cbc565b0361232757600080612219610c53565b602086015160405163c7738b6160e01b815260ff90911660048201526001600160a01b03919091169063c7738b61906024016040805180830381865afa158015612267573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061228b9190612dce565b91509150826001600160a01b031663f10e38af6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156122cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122f19190612c03565b604051630890b98560e21b815260048101849052602481018390526001600160a01b039190911690632242e614906044016121bb565b60405163a56cd49160e01b815260040160405180910390fd5b8060018351600281111561235657612356612cbc565b0361247357600080612366610c53565b6020860151604051632020e90160e01b815260ff90911660048201526001600160a01b039190911690632020e901906024016040805180830381865afa1580156123b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123d89190612dce565b604051631b973c5760e21b81526004810183905291935091506001600160a01b03841690636e5cf15c90602401602060405180830381865afa158015612422573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124469190612c03565b6001600160a01b031663ae6fd51d826040518263ffffffff1660e01b81526004016121bb91815260200190565b60028351600281111561248857612488612cbc565b0361232757600080612498610c53565b602086015160405163c7738b6160e01b815260ff90911660048201526001600160a01b03919091169063c7738b61906024016040805180830381865afa1580156124e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061250a9190612dce565b91509150826001600160a01b031663f10e38af6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561254c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125709190612c03565b60405163574f412560e01b815260048101849052602481018390526001600160a01b03919091169063574f4125906044016121bb565b60006120818383612902565b604080516014808252818301909252600091309183918291906020820181803683370190505090506014602a60208301853c601401519392505050565b6060600061208183612951565b6000610975825490565b6000826000036126fd57612618610c53565b6001600160a01b031663e7a76ce76040518163ffffffff1660e01b8152600401602060405180830381865afa158015612655573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126799190612c54565b6126839083612c83565b61268b610c53565b6001600160a01b031663e84959f26040518163ffffffff1660e01b8152600401602060405180830381865afa1580156126c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126ec9190612c54565b6126f69190612d59565b9050610975565b6000612707610c53565b6001600160a01b031663a7778ce06040518163ffffffff1660e01b8152600401602060405180830381865afa158015612744573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127689190612c54565b6127729084612c83565b61277a610c53565b6001600160a01b031663851424816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156127b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127db9190612c54565b6127e59190612d59565b90506000670de0b6b3a76400006127fc8387612c83565b6128069190612c9a565b95945050505050565b600081815260018301602052604081205480156128f8576000612833600183612df2565b855490915060009061284790600190612df2565b90508181146128ac57600086600001828154811061286757612867612cd2565b906000526020600020015490508087600001848154811061288a5761288a612cd2565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806128bd576128bd612e05565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610975565b6000915050610975565b600081815260018301602052604081205461294957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610975565b506000610975565b6060816000018054806020026020016040519081016040528092919081815260200182805480156129a157602002820191906000526020600020905b81548152602001906001019080831161298d575b50505050509050919050565b6001600160a01b03811681146111b657600080fd5b6001600160401b03811681146111b657600080fd5b600080604083850312156129ea57600080fd5b82356129f5816129ad565b91506020830135612a05816129c2565b809150509250929050565b600060208284031215612a2257600080fd5b8135612081816129ad565b6001600160401b0391909116815260200190565b6001600160a01b0391909116815260200190565b60ff811681146111b657600080fd5b60008060408385031215612a7757600080fd5b8235612a82816129ad565b91506020830135612a0581612a55565b6020808252825182820181905260009190848201906040850190845b81811015612ad35783516001600160401b031683529284019291840191600101612aae565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215612b0757600080fd5b81356001600160401b0380821115612b1e57600080fd5b818401915084601f830112612b3257600080fd5b813581811115612b4457612b44612adf565b604051601f8201601f19908116603f01168101908382118183101715612b6c57612b6c612adf565b81604052828152876020848701011115612b8557600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208284031215612bb757600080fd5b8135612081816129c2565b600080600060608486031215612bd757600080fd5b8335612be2816129ad565b92506020840135612bf2816129c2565b929592945050506040919091013590565b600060208284031215612c1557600080fd5b8151612081816129ad565b60008060408385031215612c3357600080fd5b8251612c3e816129c2565b60208401519092508015158114612a0557600080fd5b600060208284031215612c6657600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761097557610975612c6d565b600082612cb757634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600060018201612cfa57612cfa612c6d565b5060010190565b6001600160401b039290921682526001600160a01b0316602082015260400190565b6001600160a01b03929092168252602082015260400190565b600060208284031215612d4e57600080fd5b8151612081816129c2565b8082018082111561097557610975612c6d565b600060408284031215612d7e57600080fd5b604051604081018181106001600160401b0382111715612da057612da0612adf565b604052825160038110612db257600080fd5b81526020830151612dc281612a55565b60208201529392505050565b60008060408385031215612de157600080fd5b505080516020909101519092909150565b8181038181111561097557610975612c6d565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220ec0b2c880a5ed0b02fa95b0e74bd562163a9e256e9782156af76963dffb0a59d64736f6c63430008140033";

type TileCapturingSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TileCapturingSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TileCapturingSystem__factory extends ContractFactory {
  constructor(...args: TileCapturingSystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TileCapturingSystem & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TileCapturingSystem__factory {
    return super.connect(runner) as TileCapturingSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TileCapturingSystemInterface {
    return new Interface(_abi) as TileCapturingSystemInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TileCapturingSystem {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TileCapturingSystem;
  }
}
