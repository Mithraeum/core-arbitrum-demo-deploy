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
  Siege,
  SiegeInterface,
} from "../../../../../contracts/core/assets/siege/Siege";

const _abi = [
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
    name: "RobberyPointsSwapNotAllowedDueToNothingWasStolenAndBurned",
    type: "error",
  },
  {
    inputs: [],
    name: "RobberyPointsSwapNotAllowedDueToSpecifiedBuildingAddressDoesNotBelongToSettlementOfThisSiege",
    type: "error",
  },
  {
    inputs: [],
    name: "RobberyPointsSwapNotAllowedDueToSpecifiedBuildingAddressIsNotPartOfEra",
    type: "error",
  },
  {
    inputs: [],
    name: "RobberyPointsSwapNotAllowedDueToWrongMaxPointsToSpendSpecified",
    type: "error",
  },
  {
    inputs: [],
    name: "SiegeCannotBeModifiedDueToInvalidUnitsAmountSpecified",
    type: "error",
  },
  {
    inputs: [],
    name: "SiegeCannotLiquidateArmy",
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
    ],
    name: "ArmyLiquidated",
    type: "event",
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
        internalType: "bytes32[]",
        name: "unitTypeIds",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "toAddIndication",
        type: "bool[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "unitsAmounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRobberyMultiplier",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTotalSiegePower",
        type: "uint256",
      },
    ],
    name: "ArmySiegeModified",
    type: "event",
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
        internalType: "address",
        name: "buildingAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stolenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnedAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pointsSpent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRobberyPointsAmount",
        type: "uint256",
      },
    ],
    name: "BuildingRobbed",
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
    inputs: [
      {
        internalType: "uint256",
        name: "damage",
        type: "uint256",
      },
    ],
    name: "applyDamage",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "armyInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "robberyMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pointsDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "points",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "besiegingArmyUnitsByType",
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
        name: "armyAddress",
        type: "address",
      },
    ],
    name: "calculateArmyTotalSiegePower",
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
        name: "armyAddress",
        type: "address",
      },
    ],
    name: "calculateArmyUnitsSiegePower",
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
        name: "armyAddress",
        type: "address",
      },
    ],
    name: "canLiquidateArmyBesiegingUnits",
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
        name: "armyAddress",
        type: "address",
      },
    ],
    name: "getArmyBesiegingUnitsAmounts",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "armyAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getArmyRobberyPoints",
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
    inputs: [
      {
        internalType: "address",
        name: "armyAddress",
        type: "address",
      },
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "armyAddress",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "unitTypeIds",
        type: "bytes32[]",
      },
      {
        internalType: "bool[]",
        name: "toAddIndication",
        type: "bool[]",
      },
      {
        internalType: "uint256[]",
        name: "unitsAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "newRobberyMultiplier",
        type: "uint256",
      },
    ],
    name: "modifyArmySiege",
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
    inputs: [],
    name: "relatedSettlement",
    outputs: [
      {
        internalType: "contract ISettlement",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "robberyPointsPerOneDamage",
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
        name: "buildingAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxPointsToSpend",
        type: "uint256",
      },
    ],
    name: "swapRobberyPointsForResourceFromBuildingTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSiegePower",
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
  "0x608060405234801561001057600080fd5b506122d0806100206000396000f3fe608060405234801561001057600080fd5b50600436106101225760003560e01c806384ba89e3116100a857806384ba89e3146102265780639cf70dd81461022e578063a54f366e14610259578063b9767dfc14610262578063c45f100014610285578063c89e12671461029e578063cf35a3a9146102b1578063e34d7827146102ba578063eacaef90146102cd578063ece56a1a146102e0578063f09dbd5b146102e857600080fd5b80630b4e99c314610127578063143e55e0146101425780631abcf471146101575780632f8655681461016c57806330b67baa1461017f5780633eb233aa14610187578063417fbd1d146101d05780634ddf47d4146101f05780637b103999146102035780637d039f0c1461020b5780637d884c741461021e575b600080fd5b61012f6102fb565b6040519081526020015b60405180910390f35b61014a610338565b6040516101399190611bbd565b61016a610165366004611be6565b6103bc565b005b61016a61017a366004611c12565b6108a0565b61014a610c2e565b6101b5610195366004611c12565b600160208190526000918252604090912080549181015460029091015483565b60408051938452602084019290925290820152606001610139565b6101e36101de366004611c12565b610c38565b6040516101399190611c6a565b61016a6101fe366004611cc3565b610d7b565b61014a610ec8565b61012f610219366004611be6565b610f0f565b61012f6110e3565b61012f611120565b61012f61023c366004611be6565b600260209081526000928352604080842090915290825290205481565b61012f60035481565b610275610270366004611c12565b61115d565b6040519015158152602001610139565b60005461014a906201000090046001600160a01b031681565b61012f6102ac366004611c12565b6111d6565b61012f60045481565b61012f6102c8366004611c12565b611368565b61016a6102db366004611da2565b6113a2565b61014a611740565b61016a6102f6366004611e55565b611787565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020607a60208301853c602001519392505050565b6000610342610c2e565b6001600160a01b031663720a70bd6103586110e3565b6040518263ffffffff1660e01b815260040161037691815260200190565b602060405180830381865afa158015610393573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b79190611e6e565b905090565b6103c46117c7565b336103ce8161188c565b6001600160a01b038116600090815260016020908152604091829020825180840190935260088352676275696c64696e6760c01b929091019190915281907f010b6fd4eff8a0ca8c7925f2d29e6173e90462d56ae99e39fa817c79f4028518610435610c2e565b6001600160a01b031663ebbe803461044b6110e3565b886040518363ffffffff1660e01b8152600401610469929190611e8b565b602060405180830381865afa158015610486573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104aa9190611ea2565b146104c85760405163183e5eed60e01b815260040160405180910390fd5b83816002015410156104ed5760405163186c0f9b60e21b815260040160405180910390fd5b6000859050806001600160a01b031663c45f10006040518163ffffffff1660e01b8152600401602060405180830381865afa158015610530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105549190611e6e565b6000546201000090046001600160a01b0390811691161461058857604051632f781f0560e11b815260040160405180910390fd5b6000610592610ec8565b6001600160a01b031663ddc83819836001600160a01b03166304b10ac86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106029190611ea2565b6040518263ffffffff1660e01b815260040161062091815260200190565b602060405180830381865afa15801561063d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106619190611ea2565b90506000670de0b6b3a76400006106788389611ed1565b6106829190611efe565b9050826001600160a01b0316631d8557d76040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156106bf57600080fd5b505af11580156106d3573d6000803e3d6000fd5b50505050600080846001600160a01b031663589ae400886001600160a01b031663c45f10006040518163ffffffff1660e01b8152600401602060405180830381865afa158015610727573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074b9190611e6e565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810186905260440160408051808303816000875af1158015610797573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bb9190611f12565b915091508160001480156107cd575080155b156107eb576040516336ab9f2960e21b815260040160405180910390fd5b6000846107f88385611f36565b61080a90670de0b6b3a7640000611ed1565b6108149190611efe565b90508087600201600082825461082a9190611f49565b90915550506002870154604080516001600160a01b038c811682528e166020820152808201869052606081018590526080810184905260a0810192909252517f68a2b96508e3df357fd8fb4ff27dd7c97d0e321c30770fc502222930bde373949181900360c00190a15050505050505050505050565b6108a861197b565b600060029054906101000a90046001600160a01b03166001600160a01b031663aef281d36040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156108f857600080fd5b505af115801561090c573d6000803e3d6000fd5b505050506000819050806001600160a01b0316631d8557d76040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561095057600080fd5b505af1158015610964573d6000803e3d6000fd5b505050506109718261115d565b61098e576040516313c0818160e31b815260040160405180910390fd5b6000610998610ec8565b6001600160a01b0316635a28acb06040518163ffffffff1660e01b8152600401600060405180830381865afa1580156109d5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109fd9190810190611f5c565b9050600081516001600160401b03811115610a1a57610a1a611c7d565b604051908082528060200260200182016040528015610a43578160200160208202803683370190505b509050600082516001600160401b03811115610a6157610a61611c7d565b604051908082528060200260200182016040528015610a8a578160200160208202803683370190505b50905060005b8351811015610b31576000838281518110610aad57610aad612001565b9115156020928302919091018201526001600160a01b03871660009081526002909152604081208551909190869084908110610aeb57610aeb612001565b6020026020010151815260200190815260200160002054828281518110610b1457610b14612001565b602090810291909101015280610b2981612017565b915050610a90565b50604051630eacaef960e41b8152309063eacaef9090610b5e908890879087908790600090600401612030565b600060405180830381600087803b158015610b7857600080fd5b505af1158015610b8c573d6000803e3d6000fd5b50506040516389609e9f60e01b81526001600160a01b03871692506389609e9f9150610bbe90869085906004016120b3565b600060405180830381600087803b158015610bd857600080fd5b505af1158015610bec573d6000803e3d6000fd5b505050507f8c1485670613da39f0af37e94fc886c121013aa7275fc5b78a09a70f81ed792985604051610c1f9190611bbd565b60405180910390a15050505050565b60006103b7611aac565b60606000610c44610ec8565b6001600160a01b0316635a28acb06040518163ffffffff1660e01b8152600401600060405180830381865afa158015610c81573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ca99190810190611f5c565b9050600081516001600160401b03811115610cc657610cc6611c7d565b604051908082528060200260200182016040528015610cef578160200160208202803683370190505b50905060005b8251811015610d73576001600160a01b03851660009081526002602052604081208451909190859084908110610d2d57610d2d612001565b6020026020010151815260200190815260200160002054828281518110610d5657610d56612001565b602090810291909101015280610d6b81612017565b915050610cf5565b509392505050565b600054610100900460ff1615808015610d9b5750600054600160ff909116105b80610db55750303b158015610db5575060005460ff166001145b610e1c5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff191660011790558015610e3f576000805461ff0019166101001790555b600082806020019051810190610e559190611e6e565b600080546001600160a01b03909216620100000262010000600160b01b0319909216919091179055508015610ec4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6000610ed2610c2e565b6001600160a01b0316637b1039996040518163ffffffff1660e01b8152600401602060405180830381865afa158015610393573d6000803e3d6000fd5b600080546040805180820182526004808252631193d49560e21b6020909201919091529051631b973c5760e21b81527f2911d5ca388af24ed7f391a4eb24469bc0fd8935cd73bb1075ca7e702a42eb199181019190915282916201000090046001600160a01b031690636e5cf15c90602401602060405180830381865afa158015610f9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc29190611e6e565b60405163e2ac48c760e01b8152600481018590529091506000906001600160a01b0383169063e2ac48c790602401602060405180830381865afa15801561100d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110319190611ea2565b600454909150600081900361104c57600093505050506110dd565b6001600160a01b03861660009081526001602052604081209061106e886111d6565b90506000611080828460000154611ae9565b9050600061108e8686611b08565b90506000816003546110a09190611f36565b90506000856001015482856110b59190611ed1565b6110bf9190611f49565b90508086600201546110d19190611f36565b99505050505050505050505b92915050565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020609a60208301853c602001519392505050565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020605a60208301853c602001519392505050565b600080611169836111d6565b905080836001600160a01b031663ab6a9acb6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ce9190611ea2565b109392505050565b6000806111e1610ec8565b6001600160a01b0316635a28acb06040518163ffffffff1660e01b8152600401600060405180830381865afa15801561121e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112469190810190611f5c565b90506000805b8251811015610d7357600083828151811061126957611269612001565b6020908102919091018101516001600160a01b038816600090815260028352604080822083835290935291822054909250908190036112a9575050611356565b60006112b3610ec8565b6001600160a01b03166335ba7989846040518263ffffffff1660e01b81526004016112e091815260200190565b60c060405180830381865afa1580156112fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132191906120e1565b9050670de0b6b3a764000081608001518361133c9190611ed1565b6113469190611efe565b6113509086611f36565b94505050505b8061136081612017565b91505061124c565b600080611374836111d6565b6001600160a01b03841660009081526001602052604090205490915061139b908290611ae9565b9392505050565b6113aa6117c7565b6113b38861188c565b60006113be89611368565b905060005b878110156116605760008585838181106113df576113df612001565b905060200201359050806000036113f6575061164e565b61140881670de0b6b3a7640000611ba9565b611425576040516367c8babf60e11b815260040160405180910390fd5b60008a8a8481811061143957611439612001565b905060200201359050600061144c610338565b6001600160a01b031663feae7dc3836040518263ffffffff1660e01b815260040161147991815260200190565b602060405180830381865afa158015611496573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ba9190611e6e565b90508989858181106114ce576114ce612001565b90506020020160208101906114e39190612168565b1561159b576001600160a01b038d1660009081526002602090815260408083208584529091528120805485929061151b908490611f36565b92505081905550806001600160a01b03166323b872dd8e30866040518463ffffffff1660e01b815260040161155293929190612185565b6020604051808303816000875af1158015611571573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159591906121a9565b5061164a565b6001600160a01b038d166000908152600260209081526040808320858452909152812080548592906115ce908490611f49565b92505081905550806001600160a01b03166323b872dd308f866040518463ffffffff1660e01b815260040161160593929190612185565b6020604051808303816000875af1158015611624573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061164891906121a9565b505b5050505b8061165881612017565b9150506113c3565b506001600160a01b0389166000908152600160205260408120838155906116868b6111d6565b905060006116948286611ae9565b9050600354816116a49190611ed1565b600184015560008190036116b757600083555b8084146116e95783816004546116cd9190611f36565b6116d79190611f49565b60048190556000036116e95760006003555b7f2dec860ff69006eefd52e875bed95502113738d4d5578f09e539f8a6ebdb1d2e8c8c8c8c8c8c8c8c60045460405161172a999897969594939291906121f8565b60405180910390a1505050505050505050505050565b600061174a610ec8565b6001600160a01b031663ece56a1a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610393573d6000803e3d6000fd5b61178f6117c7565b600061179d82600454611b08565b9050806000036117ab575050565b80600360008282546117bd9190611f36565b9091555050505b50565b6117cf610c2e565b6001600160a01b0316336001600160a01b03161415801561186c575060006117f5610c2e565b6001600160a01b031663ebbe803461180b6110e3565b336040518363ffffffff1660e01b8152600401611829929190611e8b565b602060405180830381865afa158015611846573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061186a9190611ea2565b145b1561188a5760405163422656d160e01b815260040160405180910390fd5b565b600060029054906101000a90046001600160a01b03166001600160a01b031663aef281d36040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156118dc57600080fd5b505af11580156118f0573d6000803e3d6000fd5b5050506001600160a01b03821660009081526001602052604081209150611916836111d6565b90506000611928828460000154611ae9565b905060006003548261193a9190611ed1565b9050600084600101548261194e9190611f49565b9050801561196c578085600201546119669190611f36565b60028601555b50600190930192909255505050565b6000611985610c2e565b6001600160a01b0316633c8ca83d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119e69190611ea2565b905060006119f2610c2e565b6001600160a01b03166344d9bc5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a539190611ea2565b9050811580611a6157508142105b15611a7f5760405163a00eda6960e01b815260040160405180910390fd5b8015801590611a8e5750804210155b15610ec45760405163a00eda6960e01b815260040160405180910390fd5b604080516014808252818301909252600091309183918291906020820181803683370190505090506014602a60208301853c601401519392505050565b6000670de0b6b3a7640000611afe8385611ed1565b61139b9190611efe565b6000821580611b15575081155b15611b22575060006110dd565b81670de0b6b3a7640000611b34610ec8565b6001600160a01b031663d7ee90046040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b959190611ea2565b611b9f9086611ed1565b611afe9190611efe565b6000611bb58284612286565b159392505050565b6001600160a01b0391909116815260200190565b6001600160a01b03811681146117c457600080fd5b60008060408385031215611bf957600080fd5b8235611c0481611bd1565b946020939093013593505050565b600060208284031215611c2457600080fd5b813561139b81611bd1565b600081518084526020808501945080840160005b83811015611c5f57815187529582019590820190600101611c43565b509495945050505050565b60208152600061139b6020830184611c2f565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611cbb57611cbb611c7d565b604052919050565b60006020808385031215611cd657600080fd5b82356001600160401b0380821115611ced57600080fd5b818501915085601f830112611d0157600080fd5b813581811115611d1357611d13611c7d565b611d25601f8201601f19168501611c93565b91508082528684828501011115611d3b57600080fd5b8084840185840137600090820190930192909252509392505050565b60008083601f840112611d6957600080fd5b5081356001600160401b03811115611d8057600080fd5b6020830191508360208260051b8501011115611d9b57600080fd5b9250929050565b60008060008060008060008060a0898b031215611dbe57600080fd5b8835611dc981611bd1565b975060208901356001600160401b0380821115611de557600080fd5b611df18c838d01611d57565b909950975060408b0135915080821115611e0a57600080fd5b611e168c838d01611d57565b909750955060608b0135915080821115611e2f57600080fd5b50611e3c8b828c01611d57565b999c989b50969995989497949560800135949350505050565b600060208284031215611e6757600080fd5b5035919050565b600060208284031215611e8057600080fd5b815161139b81611bd1565b9182526001600160a01b0316602082015260400190565b600060208284031215611eb457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176110dd576110dd611ebb565b634e487b7160e01b600052601260045260246000fd5b600082611f0d57611f0d611ee8565b500490565b60008060408385031215611f2557600080fd5b505080516020909101519092909150565b808201808211156110dd576110dd611ebb565b818103818111156110dd576110dd611ebb565b60006020808385031215611f6f57600080fd5b82516001600160401b0380821115611f8657600080fd5b818501915085601f830112611f9a57600080fd5b815181811115611fac57611fac611c7d565b8060051b9150611fbd848301611c93565b8181529183018401918481019088841115611fd757600080fd5b938501935b83851015611ff557845182529385019390850190611fdc565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161202957612029611ebb565b5060010190565b6001600160a01b038616815260a0602080830182905260009161205590840188611c2f565b838103604085015286518082528288019183019060005b8181101561208a57835115158352928401929184019160010161206c565b5050848103606086015261209e8188611c2f565b93505050508260808301529695505050505050565b6040815260006120c66040830185611c2f565b82810360208401526120d88185611c2f565b95945050505050565b600060c082840312156120f357600080fd5b60405160c081018181106001600160401b038211171561211557612115611c7d565b8060405250825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b80151581146117c457600080fd5b60006020828403121561217a57600080fd5b813561139b8161215a565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082840312156121bb57600080fd5b815161139b8161215a565b81835260006001600160fb1b038311156121df57600080fd5b8260051b80836020870137939093016020019392505050565b6001600160a01b038a16815260c0602080830182905260009161221e9084018b8d6121c6565b83810360408501528881528990820160005b8a8110156122575782356122438161215a565b151582529183019190830190600101612230565b50848103606086015261226b81898b6121c6565b60808601979097525050505060a00152979650505050505050565b60008261229557612295611ee8565b50069056fea26469706673582212203fd733203a4a7f26034e1cc198fdaa9124fedb07f2b3c553d3316802af987c9764736f6c63430008140033";

type SiegeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SiegeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Siege__factory extends ContractFactory {
  constructor(...args: SiegeConstructorParams) {
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
      Siege & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Siege__factory {
    return super.connect(runner) as Siege__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SiegeInterface {
    return new Interface(_abi) as SiegeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Siege {
    return new Contract(address, _abi, runner) as unknown as Siege;
  }
}