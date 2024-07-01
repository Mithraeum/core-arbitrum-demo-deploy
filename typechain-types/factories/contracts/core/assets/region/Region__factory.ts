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
  Region,
  RegionInterface,
} from "../../../../../contracts/core/assets/region/Region";

const _abi = [
  {
    inputs: [],
    name: "OnlyActiveGame",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyEraUnits",
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
        name: "reducedCorruptionIndexAmount",
        type: "uint256",
      },
    ],
    name: "CorruptionIndexDecreased",
    type: "event",
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
        name: "addedCorruptionIndexAmount",
        type: "uint256",
      },
    ],
    name: "CorruptionIndexIncreased",
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
        internalType: "uint256",
        name: "newCultistsSummonIntervalNumber",
        type: "uint256",
      },
    ],
    name: "LastCultistsSummonIntervalNumberUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRegionCultistsAmount",
        type: "uint256",
      },
    ],
    name: "RegionCultistsChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lastUpdateTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastUpdateRegionTime",
        type: "uint256",
      },
    ],
    name: "RegionTimeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "settlementsMarketAddress",
        type: "address",
      },
    ],
    name: "SettlementsMarketCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "unitsPoolAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "unitTypeId",
        type: "bytes32",
      },
    ],
    name: "UnitsPoolCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "workersPoolAddress",
        type: "address",
      },
    ],
    name: "WorkersPoolCreated",
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
        name: "resourcesOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "unitTypeIds",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "unitsAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "maxTokensToSell",
        type: "uint256[]",
      },
    ],
    name: "buyUnitsBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "corruptionIndex",
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
    inputs: [
      {
        internalType: "uint64",
        name: "cultistsPosition",
        type: "uint64",
      },
    ],
    name: "createCultistsSettlement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cultistsSettlement",
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
    inputs: [
      {
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "decreaseCorruptionIndex",
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
    inputs: [],
    name: "getPenaltyFromCultists",
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
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getRegionTime",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "handleCultistsDefeated",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "handleCultistsSummoned",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "increaseCorruptionIndex",
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
    name: "lastCultistsSummonIntervalNumber",
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
    name: "lastUpdateRegionTime",
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
    name: "lastUpdateTime",
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
    name: "regionId",
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
    name: "settlementsMarket",
    outputs: [
      {
        internalType: "contract ISettlementsMarket",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "unitsPools",
    outputs: [
      {
        internalType: "contract IUnitsPool",
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
        name: "globalTime",
        type: "uint256",
      },
    ],
    name: "updateRegionTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "workersPool",
    outputs: [
      {
        internalType: "contract IWorkersPool",
        name: "",
        type: "address",
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
  "0x608060405234801561001057600080fd5b506127a8806100206000396000f3fe608060405234801561001057600080fd5b50600436106101595760003560e01c80637d884c74116100c95780637d884c741461024c57806384ba89e3146102545780638ee6bc111461025c578063901c282814610275578063b2fd89331461027e578063c20c9250146102a9578063c8f33c91146102bc578063d2bb2eae146102c5578063d99d7d81146102cd578063e85b89d9146102e0578063ece56a1a146102f3578063f8ed0fe8146102fb578063facb94fb1461030e578063ffd7a09f1461031757600080fd5b80630b4e99c31461015e578063143e55e0146101795780631d8557d71461018e57806324ea75c61461019857806325fc9289146101a157806330b67baa146101b4578063403e2e43146101bc5780634ddf47d4146101cf5780635053c299146101e257806354082260146101f557806358a445c51461020857806377065817146102315780637b10399914610244575b600080fd5b61016661032a565b6040519081526020015b60405180910390f35b610181610367565b60405161017091906121e2565b6101966103eb565b005b61016660085481565b6101666101af3660046121f6565b6103fd565b610181610579565b6101966101ca3660046121f6565b610583565b6101966101dd366004612255565b610630565b6101966101f03660046122fe565b610cff565b6101966102033660046121f6565b610d19565b6101816102163660046121f6565b6001602052600090815260409020546001600160a01b031681565b61019661023f3660046121f6565b610d56565b610181610db4565b610166610dfb565b610166610e38565b600054610181906201000090046001600160a01b031681565b61016660045481565b600654610291906001600160401b031681565b6040516001600160401b039091168152602001610170565b600354610181906001600160a01b031681565b61016660075481565b610166610e75565b6101966102db36600461233f565b610f31565b6101966102ee3660046122fe565b611293565b6101816112ad565b6101966103093660046123ea565b6112f4565b61016660055481565b600254610181906001600160a01b031681565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020607a60208301853c602001519392505050565b6000610371610579565b6001600160a01b031663720a70bd610387610dfb565b6040518263ffffffff1660e01b81526004016103a591815260200190565b602060405180830381865afa1580156103c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e691906124ee565b905090565b6103f361142b565b6103fb611630565b565b60008160000361040b574291505b6000610415610579565b6001600160a01b0316633c8ca83d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610452573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610476919061250b565b905080831015610484578092505b600061048e610579565b6001600160a01b03166344d9bc5f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ef919061250b565b905080158015906104ff57508084115b15610508578093505b6007546008548382101561051d575082905060005b81861161052d5795945050505050565b6000610539838861253a565b90506000610545610e75565b905061055981670de0b6b3a764000061253a565b610563908361254d565b61056d9084612564565b98975050505050505050565b60006103e66117cf565b61058b61180c565b610593610367565b6001600160a01b031663c096b3f7826040518263ffffffff1660e01b81526004016105c091815260200190565b600060405180830381600087803b1580156105da57600080fd5b505af11580156105ee573d6000803e3d6000fd5b505050507fe6537ef9de80c86b778fd21bbf662464035e006f3e89b6074fe3280b4d9dd2a561061b611910565b6040519081526020015b60405180910390a150565b600054610100900460ff16158080156106505750600054600160ff909116105b8061066a5750303b15801561066a575060005460ff166001145b6106d15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff1916600117905580156106f4576000805461ff0019166101001790555b60008280602001905181019061070a9190612577565b6006805467ffffffffffffffff19166001600160401b038316179055426007819055909150610738906103fd565b6008556000610745610db4565b905060006107516112ad565b90506000816001600160a01b031663c19755fd61076c610579565b610774610dfb565b604080518082018252600b81526a1ddbdc9ad95c9cd41bdbdb60aa1b602091820152815180830183526005815264424153494360d81b9082015290517f6dd10f5694032abddf028b131aa9186f0ec727b5d419b1e0623133ed6f122928917fdc0ae866100b2876ab26eb62a50ca2cd083944f439e6d78aab2fc402e669e9ee91610800913091016121e2565b6040516020818303038152906040526040518663ffffffff1660e01b815260040161082f959493929190612594565b6020604051808303816000875af115801561084e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087291906124ee565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040519091507fe7ddd620fd16596faeb8a1d8afc92f00debed651f475b643ce469a07c0c247ec906108c79083906121e2565b60405180910390a16000826001600160a01b031663c19755fd6108e8610579565b6108f0610dfb565b60408051808201825260118152701cd95d1d1b195b595b9d1cd3585c9ad95d607a1b602091820152815180830183526005815264424153494360d81b9082015290517f91517c2ebe3f5c03da0b048b13e3f173bc97ca7f2da46cc37c1cae7177d7646c917fdc0ae866100b2876ab26eb62a50ca2cd083944f439e6d78aab2fc402e669e9ee91610982913091016121e2565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016109b1959493929190612594565b6020604051808303816000875af11580156109d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f491906124ee565b600280546001600160a01b0319166001600160a01b0383161790556040519091507f02d56eb340d542c3f5a451aead2c3d806238d3e9d81723b46e944bebb3a3877690610a429083906121e2565b60405180910390a16000610a54610db4565b6001600160a01b0316635a28acb06040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a91573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ab99190810190612607565b905060005b8151811015610cad576000828281518110610adb57610adb612697565b602002602001015190506000866001600160a01b031663c19755fd610afe610579565b610b06610dfb565b60408051808201825260098152681d5b9a5d1cd41bdbdb60ba1b6020909101525163dbfb0ea160e01b8152600481018790527f14ee5cfb3dc8725e4e101c5cf564476f0e48040af6629fec85a678334699c997906001600160a01b038e169063dbfb0ea190602401602060405180830381865afa158015610b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baf919061250b565b3088604051602001610bc29291906126ad565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401610bf1959493929190612594565b6020604051808303816000875af1158015610c10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3491906124ee565b6000838152600160205260409081902080546001600160a01b0319166001600160a01b038416179055519091507f0dff9287540f6a481d1b54c7a56eb3db3d44b60de42dca1cd0d4a51cb135591790610c9090839085906126ad565b60405180910390a150508080610ca5906126c6565b915050610abe565b505050505050508015610cfb576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a15b5050565b610d07611ad2565b610d0f6103eb565b610cfb8282611b9c565b610d2161180c565b610d29610367565b6001600160a01b031663558c31ce826040518263ffffffff1660e01b81526004016105c091815260200190565b610d5e611ad2565b6007548114610db157610d70816103fd565b600881905560078290556040805183815260208101929092527f6c12308e84d8918db07724ca628050fa45134651fb4e77f6db452c7a54e392429101610625565b50565b6000610dbe610579565b6001600160a01b0316637b1039996040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103c2573d6000803e3d6000fd5b604080516020808252818301909252600091309183918291906020820181803683370190505090506020609a60208301853c602001519392505050565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020605a60208301853c602001519392505050565b600080610e80611910565b90506000610e8c610db4565b6001600160a01b031663c89239466040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ec9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eed919061250b565b610eff83670de0b6b3a764000061254d565b610f0991906126df565b9050670de0b6b3a7640000811115610f2b57670de0b6b3a76400009250505090565b92915050565b610f39611ad2565b6000610f43610367565b600654604080518082018252600881526743554c544953545360c01b6020909101525163d6ea8dc360e01b8152600060048201526001600160401b03918216602482015290841660448201527f68df48fcd9cdb73398d3d230d42cb2c985c02b74e432f851c9e661aec1cc00f060648201526001600160a01b03919091169063d6ea8dc3906084016020604051808303816000875af1158015610fea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100e91906124ee565b600380546001600160a01b0319166001600160a01b03831617905590506000611035610579565b6001600160a01b031663f5f026a36040518163ffffffff1660e01b8152600401602060405180830381865afa158015611072573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109691906124ee565b60065460405163335cf12b60e11b81526001600160401b0390911660048201526001600160a01b0391909116906366b9e25690602401602060405180830381865afa1580156110e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110d919061250b565b611115610db4565b6001600160a01b0316636795d4a06040518163ffffffff1660e01b8152600401602060405180830381865afa158015611152573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611176919061250b565b611180919061253a565b9050600061118c610db4565b6001600160a01b031663bda261396040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ed919061250b565b6111f7908361254d565b905061120a81611205611ccd565b611eaf565b6000611214610db4565b6001600160a01b031663f644c0ce6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611251573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611275919061250b565b61127f908461254d565b905061128c600082612097565b5050505050565b61129b611ad2565b6112a36103eb565b610cfb8282612097565b60006112b7610db4565b6001600160a01b031663ece56a1a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103c2573d6000803e3d6000fd5b60005b8351811015611423576001600085838151811061131657611316612697565b6020026020010151815260200190815260200160002060009054906101000a90046001600160a01b03166001600160a01b0316637725845187338887868151811061136357611363612697565b602002602001015187878151811061137d5761137d612697565b60209081029190910101516040516001600160e01b031960e088901b1681526001600160a01b03958616600482015293851660248501529390911660448301526064820152608481019190915260a4016020604051808303816000875af11580156113ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611410919061250b565b508061141b816126c6565b9150506112f7565b505050505050565b6003546040805163f10e38af60e01b815290516000926001600160a01b03169163f10e38af9160048083019260209291908290030181865afa158015611475573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149991906124ee565b6001600160a01b03166344e445456040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114fa91906124ee565b90506001600160a01b038116158015906115735750806001600160a01b0316631852b5af6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561154d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115719190612701565b155b80156115dc5750806001600160a01b0316639d4095fe6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115dc9190612701565b15610db157806001600160a01b031663d1c986186040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561161c57600080fd5b505af115801561128c573d6000803e3d6000fd5b611638610579565b6001600160a01b031663704f63a16040518163ffffffff1660e01b8152600401602060405180830381865afa158015611675573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611699919061250b565b6116a1610dfb565b146116a857565b60006116b2611ccd565b905080600454106116c05750565b600080600554136116d25760006116d6565b6005545b9050600081156117c05760006116ea611910565b90506116f7600a846126df565b6117026002836126df565b116117b9576117b461173b6117186002846126df565b611723600a876126df565b61172d919061253a565b670de0b6b3a764000061219e565b82611744610db4565b6001600160a01b031663c89239466040518163ffffffff1660e01b8152600401602060405180830381865afa158015611781573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a5919061250b565b6117af919061253a565b6121bc565b6117bc565b60005b9150505b6117ca8184611eaf565b505050565b604080516014808252818301909252600091309183918291906020820181803683370190505090506014602a60208301853c601401519392505050565b6000336001600160a01b0316635920c5436040518163ffffffff1660e01b8152600401602060405180830381865afa15801561184c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611870919061250b565b90503361187b610367565b6001600160a01b031663feae7dc3836040518263ffffffff1660e01b81526004016118a891815260200190565b602060405180830381865afa1580156118c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e991906124ee565b6001600160a01b031614610db15760405163140e5a6960e01b815260040160405180910390fd5b600061191a610367565b6001600160a01b031663feae7dc3611930610db4565b6001600160a01b0316632e6259856040518163ffffffff1660e01b8152600401602060405180830381865afa15801561196d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611991919061250b565b6040518263ffffffff1660e01b81526004016119af91815260200190565b602060405180830381865afa1580156119cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119f091906124ee565b6001600160a01b03166370a08231600360009054906101000a90046001600160a01b03166001600160a01b031663f10e38af6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a7591906124ee565b6040518263ffffffff1660e01b8152600401611a9191906121e2565b602060405180830381865afa158015611aae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e6919061250b565b611ada610579565b6001600160a01b0316336001600160a01b031614158015611b7e57506000611b00610579565b6001600160a01b031663ebbe8034611b16610dfb565b6040516001600160e01b031960e084901b1681526004810191909152336024820152604401602060405180830381865afa158015611b58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b7c919061250b565b145b156103fb5760405163422656d160e01b815260040160405180910390fd5b611ba4610579565b6001600160a01b031663704f63a16040518163ffffffff1660e01b8152600401602060405180830381865afa158015611be1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c05919061250b565b611c0d610dfb565b14611c16575050565b8060056000828254611c289190612723565b90915550506040517fe96dd1d5d4c15a71bae1b7b1403f6ca0b4804ec59aeadead4d33fbefa4c971bc90611c5f90849084906126ad565b60405180910390a16001600160a01b03821615610cfb576040516304164b8960e21b8152600481018290526001600160a01b038316906310592e24906024015b600060405180830381600087803b158015611cb957600080fd5b505af1158015611423573d6000803e3d6000fd5b600080611cd8610db4565b90506000611db6611ce7610367565b6001600160a01b031663d8270dce6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611d24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d48919061250b565b611d50610579565b6001600160a01b0316633c8ca83d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611db1919061250b565b6121d2565b9050804211611dc6576000611ea8565b816001600160a01b031663781e0efe6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e28919061250b565b826001600160a01b031663a53a3bb76040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e8a919061250b565b611e9491906126df565b611e9e824261253a565b611ea891906126df565b9250505090565b611eb7610367565b6001600160a01b031663feae7dc3611ecd610db4565b6001600160a01b0316632e6259856040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2e919061250b565b6040518263ffffffff1660e01b8152600401611f4c91815260200190565b602060405180830381865afa158015611f69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8d91906124ee565b6001600160a01b03166340c10f19600360009054906101000a90046001600160a01b03166001600160a01b031663f10e38af6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611fee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061201291906124ee565b846040518363ffffffff1660e01b81526004016120309291906126ad565b600060405180830381600087803b15801561204a57600080fd5b505af115801561205e573d6000803e3d6000fd5b5050506004829055506040518181527fdf8b38cd05460b94bf10085f7d4c200121bf794f70fbfda02a150a0c7c6f1cde90602001610cf2565b61209f610579565b6001600160a01b031663704f63a16040518163ffffffff1660e01b8152600401602060405180830381865afa1580156120dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612100919061250b565b612108610dfb565b14612111575050565b8060056000828254612123919061274a565b90915550506040517f7315efea3152f63ef4c3f7859af79e8e8619fadb38cbd344b9c9dd5ebb9f32fc9061215a90849084906126ad565b60405180910390a16001600160a01b03821615610cfb5760405163ca82504360e01b8152600481018290526001600160a01b0383169063ca82504390602401611c9f565b6000816121ab81856126df565b6121b5919061254d565b9392505050565b60008183106121cb57816121b5565b5090919050565b6000818310156121cb57816121b5565b6001600160a01b0391909116815260200190565b60006020828403121561220857600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561224d5761224d61220f565b604052919050565b6000602080838503121561226857600080fd5b82356001600160401b038082111561227f57600080fd5b818501915085601f83011261229357600080fd5b8135818111156122a5576122a561220f565b6122b7601f8201601f19168501612225565b915080825286848285010111156122cd57600080fd5b8084840185840137600090820190930192909252509392505050565b6001600160a01b0381168114610db157600080fd5b6000806040838503121561231157600080fd5b823561231c816122e9565b946020939093013593505050565b6001600160401b0381168114610db157600080fd5b60006020828403121561235157600080fd5b81356121b58161232a565b60006001600160401b038211156123755761237561220f565b5060051b60200190565b600082601f83011261239057600080fd5b813560206123a56123a08361235c565b612225565b82815260059290921b840181019181810190868411156123c457600080fd5b8286015b848110156123df57803583529183019183016123c8565b509695505050505050565b600080600080600060a0868803121561240257600080fd5b853561240d816122e9565b945060208681013561241e816122e9565b945060408701356001600160401b038082111561243a57600080fd5b818901915089601f83011261244e57600080fd5b813561245c6123a08261235c565b81815260059190911b8301840190848101908c83111561247b57600080fd5b938501935b8285101561249957843582529385019390850190612480565b9750505060608901359250808311156124b157600080fd5b6124bd8a848b0161237f565b945060808901359250808311156124d357600080fd5b50506124e18882890161237f565b9150509295509295909350565b60006020828403121561250057600080fd5b81516121b5816122e9565b60006020828403121561251d57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610f2b57610f2b612524565b8082028115828204841417610f2b57610f2b612524565b80820180821115610f2b57610f2b612524565b60006020828403121561258957600080fd5b81516121b58161232a565b60018060a01b038616815260006020868184015285604084015284606084015260a0608084015283518060a085015260005b818110156125e25785810183015185820160c0015282016125c6565b50600060c0828601015260c0601f19601f830116850101925050509695505050505050565b6000602080838503121561261a57600080fd5b82516001600160401b0381111561263057600080fd5b8301601f8101851361264157600080fd5b805161264f6123a08261235c565b81815260059190911b8201830190838101908783111561266e57600080fd5b928401925b8284101561268c57835182529284019290840190612673565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03929092168252602082015260400190565b6000600182016126d8576126d8612524565b5060010190565b6000826126fc57634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561271357600080fd5b815180151581146121b557600080fd5b818103600083128015838313168383128216171561274357612743612524565b5092915050565b808201828112600083128015821682158216171561276a5761276a612524565b50509291505056fea26469706673582212202b993059ac1bed0c5fc3ba7a4a092a6729a25dc7677e655decae8019630ea8a364736f6c63430008140033";

type RegionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RegionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Region__factory extends ContractFactory {
  constructor(...args: RegionConstructorParams) {
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
      Region & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Region__factory {
    return super.connect(runner) as Region__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RegionInterface {
    return new Interface(_abi) as RegionInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Region {
    return new Contract(address, _abi, runner) as unknown as Region;
  }
}