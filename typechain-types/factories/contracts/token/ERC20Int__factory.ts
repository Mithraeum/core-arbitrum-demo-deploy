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
import type { NonPayableOverrides } from "../../../common";
import type {
  ERC20Int,
  ERC20IntInterface,
} from "../../../contracts/token/ERC20Int";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
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
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000a8838038062000a8883398101604081905262000034916200011f565b600362000042838262000218565b50600462000051828262000218565b505050620002e4565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008257600080fd5b81516001600160401b03808211156200009f576200009f6200005a565b604051601f8301601f19908116603f01168101908282118183101715620000ca57620000ca6200005a565b81604052838152602092508683858801011115620000e757600080fd5b600091505b838210156200010b5785820183015181830184015290820190620000ec565b600093810190920192909252949350505050565b600080604083850312156200013357600080fd5b82516001600160401b03808211156200014b57600080fd5b620001598683870162000070565b935060208501519150808211156200017057600080fd5b506200017f8582860162000070565b9150509250929050565b600181811c908216806200019e57607f821691505b602082108103620001bf57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021357600081815260208120601f850160051c81016020861015620001ee5750805b601f850160051c820191505b818110156200020f57828155600101620001fa565b5050505b505050565b81516001600160401b038111156200023457620002346200005a565b6200024c8162000245845462000189565b84620001c5565b602080601f8311600181146200028457600084156200026b5750858301515b600019600386901b1c1916600185901b1785556200020f565b600085815260208120601f198616915b82811015620002b55788860151825594840194600190910190840162000294565b5085821015620002d45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61079480620002f46000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806306fdde03146100b4578063095ea7b3146100d257806318160ddd146100f557806323b872dd1461010b578063313ce5671461011e578063395093511461012d57806370a082311461014057806395d89b411461015357806399a03c701461015b578063a457c2d714610184578063a9059cbb14610197578063dd62ed3e146101aa578063ef356a79146101bd575b600080fd5b6100bc6101c5565b6040516100c991906105ae565b60405180910390f35b6100e56100e0366004610618565b610257565b60405190151581526020016100c9565b6100fd610271565b6040519081526020016100c9565b6100e5610119366004610642565b61028a565b604051601281526020016100c9565b6100e561013b366004610618565b6102ae565b6100fd61014e36600461067e565b6102d0565b6100bc610314565b6100fd61016936600461067e565b6001600160a01b031660009081526020819052604090205490565b6100e5610192366004610618565b610323565b6100e56101a5366004610618565b610361565b6100fd6101b83660046106a0565b61036f565b6002546100fd565b6060600380546101d4906106d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610200906106d3565b801561024d5780601f106102225761010080835404028352916020019161024d565b820191906000526020600020905b81548152906001019060200180831161023057829003601f168201915b5050505050905090565b60003361026581858561039a565b60019150505b92915050565b60008060025412156102835750600090565b5060025490565b600033610298858285610449565b6102a3858585610494565b506001949350505050565b6000336102658185856102c1838361036f565b6102cb9190610723565b61039a565b6001600160a01b0381166000908152602081905260408120548113156102f857506000919050565b506001600160a01b031660009081526020819052604090205490565b6060600480546101d4906106d3565b60003381610331828661036f565b9050838110156103545760405163285af3b760e11b815260040160405180910390fd5b6102a3828686840361039a565b600033610265818585610494565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103c15760405163abe3697f60e01b815260040160405180910390fd5b6001600160a01b0382166103e8576040516396a1f38160e01b815260040160405180910390fd5b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610455848461036f565b9050600019811461048e57818110156104815760405163013d476760e61b815260040160405180910390fd5b61048e848484840361039a565b50505050565b6001600160a01b0383166104ba576040516246d99360e41b815260040160405180910390fd5b6001600160a01b0382166104e1576040516337af64f560e11b815260040160405180910390fd5b806001600160a01b0384166000908152602081905260409020548181121561051c57604051631b56476360e31b815260040160405180910390fd5b6001600160a01b03808616600090815260208190526040808220858503905591861681529081208054849290610553908490610736565b92505081905550836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405161059f91815260200190565b60405180910390a35050505050565b600060208083528351808285015260005b818110156105db578581018301518582016040015282016105bf565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461061357600080fd5b919050565b6000806040838503121561062b57600080fd5b610634836105fc565b946020939093013593505050565b60008060006060848603121561065757600080fd5b610660846105fc565b925061066e602085016105fc565b9150604084013590509250925092565b60006020828403121561069057600080fd5b610699826105fc565b9392505050565b600080604083850312156106b357600080fd5b6106bc836105fc565b91506106ca602084016105fc565b90509250929050565b600181811c908216806106e757607f821691505b60208210810361070757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561026b5761026b61070d565b80820182811260008312801582168215821617156107565761075661070d565b50509291505056fea264697066735822122078028e601b5b9fc51f18968e15b18ef259d049751cd12a14398124b5d12722d064736f6c63430008140033";

type ERC20IntConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20IntConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Int__factory extends ContractFactory {
  constructor(...args: ERC20IntConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override deploy(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<
      ERC20Int & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC20Int__factory {
    return super.connect(runner) as ERC20Int__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20IntInterface {
    return new Interface(_abi) as ERC20IntInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC20Int {
    return new Contract(address, _abi, runner) as unknown as ERC20Int;
  }
}