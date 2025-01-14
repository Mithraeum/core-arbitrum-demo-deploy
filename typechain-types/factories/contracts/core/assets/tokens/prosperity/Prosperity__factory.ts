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
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  Prosperity,
  ProsperityInterface,
} from "../../../../../../contracts/core/assets/tokens/prosperity/Prosperity";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CannotApproveFromZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotApproveToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotBurnFromZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotDecreaseAllowanceBelowZero",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotMintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotSpendMoreAllowanceThanCurrentValue",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotTransferFromZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotTransferHigherThanOwnedAmountOfTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotTransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "Disabled",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    inputs: [
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "prosperitySpent",
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
        name: "account",
        type: "address",
      },
    ],
    name: "realBalanceOf",
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
    name: "realTotalSupply",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "spend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
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
        name: "from",
        type: "address",
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
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b506040805160208082018352600080835283519182019093529182529060036200003c8382620000f9565b5060046200004b8282620000f9565b505050620001c5565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200007f57607f821691505b602082108103620000a057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620000f457600081815260208120601f850160051c81016020861015620000cf5750805b601f850160051c820191505b81811015620000f057828155600101620000db565b5050505b505050565b81516001600160401b0381111562000115576200011562000054565b6200012d816200012684546200006a565b84620000a6565b602080601f8311600181146200016557600084156200014c5750858301515b600019600386901b1c1916600185901b178555620000f0565b600085815260208120601f198616915b82811015620001965788860151825594840194600190910190840162000175565b5085821015620001b55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61125a80620001d56000396000f3fe608060405234801561001057600080fd5b506004361061014e5760003560e01c806379cc6790116100be57806379cc67901461025d5780637b103999146102705780637d884c741461027857806384ba89e31461028057806395d89b411461028857806399a03c7014610290578063a457c2d7146102b9578063a9059cbb146102cc578063af7d6ca3146102df578063cd9641a4146102f2578063dd62ed3e14610312578063ece56a1a14610325578063ef356a791461032d57600080fd5b806306fdde0314610153578063095ea7b3146101715780630b4e99c314610194578063143e55e0146101aa57806318160ddd146101ca57806323b872dd146101d257806330b67baa146101e5578063313ce567146101ed57806339509351146101fc57806340c10f191461020f57806342966c68146102245780634ddf47d41461023757806370a082311461024a575b600080fd5b61015b610335565b6040516101689190610e73565b60405180910390f35b61018461017f366004610ebb565b61036b565b6040519015158152602001610168565b61019c610385565b604051908152602001610168565b6101b26103c2565b6040516001600160a01b039091168152602001610168565b61019c610446565b6101846101e0366004610ee7565b61045f565b6101b26104a2565b60405160128152602001610168565b61018461020a366004610ebb565b6104ac565b61022261021d366004610ebb565b6104ce565b005b610222610232366004610f28565b6104e4565b610222610245366004610f57565b6104f1565b61019c610258366004611008565b6105fe565b61022261026b366004610ebb565b610642565b6101b2610664565b61019c6106ab565b61019c6106e8565b61015b610725565b61019c61029e366004611008565b6001600160a01b031660009081526020819052604090205490565b6101846102c7366004610ebb565b610742565b6101846102da366004610ebb565b61078b565b6102226102ed366004610ebb565b6107a6565b61019c610300366004611008565b60066020526000908152604090205481565b61019c610320366004611025565b6107e6565b6101b2610811565b60025461019c565b60606103476103426106ab565b610858565b604051602001610357919061105e565b604051602081830303815290604052905090565b600033610379818585610961565b60019150505b92915050565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020607a60208301853c602001519392505050565b60006103cc6104a2565b6001600160a01b031663720a70bd6103e26106ab565b6040518263ffffffff1660e01b815260040161040091815260200190565b602060405180830381865afa15801561041d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104419190611092565b905090565b60008060025412156104585750600090565b5060025490565b600061046a33610a11565b156104825761047a848484610abc565b50600161049b565b604051633ac4266d60e11b815260040160405180910390fd5b9392505050565b6000610441610bc4565b6000336103798185856104bf83836107e6565b6104c991906110c5565b610961565b6104d6610c01565b6104e08282610cc6565b5050565b6104ee3382610d64565b50565b600554610100900460ff16158080156105115750600554600160ff909116105b8061052b5750303b15801561052b575060055460ff166001145b6105925760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6005805460ff1916600117905580156105b5576005805461ff0019166101001790555b80156104e0576005805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6001600160a01b03811660009081526020819052604081205481131561062657506000919050565b506001600160a01b031660009081526020819052604090205490565b61064b33610a11565b1561065a576104e08282610d64565b6104e08282610def565b600061066e6104a2565b6001600160a01b0316637b1039996040518163ffffffff1660e01b8152600401602060405180830381865afa15801561041d573d6000803e3d6000fd5b604080516020808252818301909252600091309183918291906020820181803683370190505090506020609a60208301853c602001519392505050565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020605a60208301853c602001519392505050565b60606107326103426106ab565b60405160200161035791906110d8565b6000338161075082866107e6565b9050838110156107735760405163285af3b760e11b815260040160405180910390fd5b6107808286868403610961565b506001949350505050565b6000604051633ac4266d60e11b815260040160405180910390fd5b6107ae610c01565b6001600160a01b038216600090815260066020526040812080548392906107d69084906110c5565b909155506104e090508282610d64565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600061081b610664565b6001600160a01b031663ece56a1a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561041d573d6000803e3d6000fd5b60608160000361087f5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156108a9578061089381611105565b91506108a29050600a83611134565b9150610883565b60008167ffffffffffffffff8111156108c4576108c4610f41565b6040519080825280601f01601f1916602001820160405280156108ee576020820181803683370190505b5090505b841561095957610903600183611148565b9150610910600a8661115b565b61091b9060306110c5565b60f81b8183815181106109305761093061116f565b60200101906001600160f81b031916908160001a905350610952600a86611134565b94506108f2565b949350505050565b6001600160a01b0383166109885760405163abe3697f60e01b815260040160405180910390fd5b6001600160a01b0382166109af576040516396a1f38160e01b815260040160405180910390fd5b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6000610a1b6104a2565b6001600160a01b0316826001600160a01b0316148061037f57506000610a3f6104a2565b6001600160a01b031663ebbe8034610a556106ab565b856040518363ffffffff1660e01b8152600401610a73929190611185565b602060405180830381865afa158015610a90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab4919061119c565b141592915050565b6001600160a01b038316610ae2576040516246d99360e41b815260040160405180910390fd5b6001600160a01b038216610b09576040516337af64f560e11b815260040160405180910390fd5b806001600160a01b03841660009081526020819052604090205481811215610b4457604051631b56476360e31b815260040160405180910390fd5b6001600160a01b03808616600090815260208190526040808220858503905591861681529081208054849290610b7b9084906111b5565b92505081905550836001600160a01b0316856001600160a01b031660008051602061120583398151915285604051610bb591815260200190565b60405180910390a35050505050565b604080516014808252818301909252600091309183918291906020820181803683370190505090506014602a60208301853c601401519392505050565b610c096104a2565b6001600160a01b0316336001600160a01b031614158015610ca657506000610c2f6104a2565b6001600160a01b031663ebbe8034610c456106ab565b336040518363ffffffff1660e01b8152600401610c63929190611185565b602060405180830381865afa158015610c80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca4919061119c565b145b15610cc45760405163422656d160e01b815260040160405180910390fd5b565b6001600160a01b038216610ced576040516389a4ea1960e01b815260040160405180910390fd5b8060026000828254610cff91906111b5565b90915550506001600160a01b03821660009081526020819052604081208054839290610d2c9084906111b5565b90915550506040518181526001600160a01b038316906000906000805160206112058339815191529060200160405180910390a35050565b6001600160a01b038216610d8b5760405163a30d2d8760e01b815260040160405180910390fd5b6001600160a01b038216600090815260208190526040812080548381039091556002805491928492610dbe9084906111dd565b90915550506040518281526000906001600160a01b0385169060008051602061120583398151915290602001610a04565b610dfa823383610e04565b6104e08282610d64565b6000610e1084846107e6565b90506000198114610e495781811015610e3c5760405163013d476760e61b815260040160405180910390fd5b610e498484848403610961565b50505050565b60005b83811015610e6a578181015183820152602001610e52565b50506000910152565b6020815260008251806020840152610e92816040850160208701610e4f565b601f01601f19169190910160400192915050565b6001600160a01b03811681146104ee57600080fd5b60008060408385031215610ece57600080fd5b8235610ed981610ea6565b946020939093013593505050565b600080600060608486031215610efc57600080fd5b8335610f0781610ea6565b92506020840135610f1781610ea6565b929592945050506040919091013590565b600060208284031215610f3a57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610f6957600080fd5b813567ffffffffffffffff80821115610f8157600080fd5b818401915084601f830112610f9557600080fd5b813581811115610fa757610fa7610f41565b604051601f8201601f19908116603f01168101908382118183101715610fcf57610fcf610f41565b81604052828152876020848701011115610fe857600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020828403121561101a57600080fd5b813561049b81610ea6565b6000806040838503121561103857600080fd5b823561104381610ea6565b9150602083013561105381610ea6565b809150509250929050565b6b0141c9bdcdc195c9a5d1e48160a61b81526000825161108581600c850160208701610e4f565b91909101600c0192915050565b6000602082840312156110a457600080fd5b815161049b81610ea6565b634e487b7160e01b600052601160045260246000fd5b8082018082111561037f5761037f6110af565b640141494c8160de1b8152600082516110f8816005850160208701610e4f565b9190910160050192915050565b600060018201611117576111176110af565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826111435761114361111e565b500490565b8181038181111561037f5761037f6110af565b60008261116a5761116a61111e565b500690565b634e487b7160e01b600052603260045260246000fd5b9182526001600160a01b0316602082015260400190565b6000602082840312156111ae57600080fd5b5051919050565b80820182811260008312801582168215821617156111d5576111d56110af565b505092915050565b81810360008312801583831316838312821617156111fd576111fd6110af565b509291505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220f31cf7fe1281d972cb047f23eccbee183e5633c3768688f50ae5d4b790ce90c164736f6c63430008140033";

type ProsperityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProsperityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Prosperity__factory extends ContractFactory {
  constructor(...args: ProsperityConstructorParams) {
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
      Prosperity & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Prosperity__factory {
    return super.connect(runner) as Prosperity__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProsperityInterface {
    return new Interface(_abi) as ProsperityInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Prosperity {
    return new Contract(address, _abi, runner) as unknown as Prosperity;
  }
}
