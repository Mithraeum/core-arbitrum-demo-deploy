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
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";

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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620013b7380380620013b783398101604081905262000034916200011f565b600062000042838262000218565b50600162000051828262000218565b505050620002e4565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008257600080fd5b81516001600160401b03808211156200009f576200009f6200005a565b604051601f8301601f19908116603f01168101908282118183101715620000ca57620000ca6200005a565b81604052838152602092508683858801011115620000e757600080fd5b600091505b838210156200010b5785820183015181830184015290820190620000ec565b600093810190920192909252949350505050565b600080604083850312156200013357600080fd5b82516001600160401b03808211156200014b57600080fd5b620001598683870162000070565b935060208501519150808211156200017057600080fd5b506200017f8582860162000070565b9150509250929050565b600181811c908216806200019e57607f821691505b602082108103620001bf57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021357600081815260208120601f850160051c81016020861015620001ee5750805b601f850160051c820191505b818110156200020f57828155600101620001fa565b5050505b505050565b81516001600160401b038111156200023457620002346200005a565b6200024c8162000245845462000189565b84620001c5565b602080601f8311600181146200028457600084156200026b5750858301515b600019600386901b1c1916600185901b1785556200020f565b600085815260208120601f198616915b82811015620002b55788860151825594840194600190910190840162000294565b5085821015620002d45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6110c380620002f46000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806301ffc9a7146100b457806306fdde03146100dc578063081812fc146100f1578063095ea7b31461011c57806323b872dd1461013157806342842e0e146101445780636352211e1461015757806370a082311461016a57806395d89b411461018b578063a22cb46514610193578063b88d4fde146101a6578063c87b56dd146101b9578063e985e9c5146101cc575b600080fd5b6100c76100c2366004610bb8565b6101df565b60405190151581526020015b60405180910390f35b6100e4610231565b6040516100d39190610c25565b6101046100ff366004610c38565b6102c3565b6040516001600160a01b0390911681526020016100d3565b61012f61012a366004610c6d565b6102ea565b005b61012f61013f366004610c97565b610404565b61012f610152366004610c97565b610435565b610104610165366004610c38565b610450565b61017d610178366004610cd3565b610485565b6040519081526020016100d3565b6100e461050b565b61012f6101a1366004610cee565b61051a565b61012f6101b4366004610d40565b610529565b6100e46101c7366004610c38565b610561565b6100c76101da366004610e1c565b6105d5565b60006001600160e01b031982166380ac58cd60e01b148061021057506001600160e01b03198216635b5e139f60e01b145b8061022b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461024090610e4f565b80601f016020809104026020016040519081016040528092919081815260200182805461026c90610e4f565b80156102b95780601f1061028e576101008083540402835291602001916102b9565b820191906000526020600020905b81548152906001019060200180831161029c57829003601f168201915b5050505050905090565b60006102ce82610603565b506000908152600460205260409020546001600160a01b031690565b60006102f582610450565b9050806001600160a01b0316836001600160a01b0316036103675760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b0382161480610383575061038381336105d5565b6103f55760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161035e565b6103ff838361063a565b505050565b61040e33826106a8565b61042a5760405162461bcd60e51b815260040161035e90610e89565b6103ff838383610707565b6103ff83838360405180602001604052806000815250610529565b6000818152600260205260408120546001600160a01b03168061022b5760405162461bcd60e51b815260040161035e90610ed7565b60006001600160a01b0382166104ef5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161035e565b506001600160a01b031660009081526003602052604090205490565b60606001805461024090610e4f565b6105253383836108a3565b5050565b61053333836106a8565b61054f5760405162461bcd60e51b815260040161035e90610e89565b61055b8484848461096d565b50505050565b606061056c82610603565b600061058360408051602081019091526000815290565b905060008151116105a357604051806020016040528060008152506105ce565b806105ad846109a0565b6040516020016105be929190610f09565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000818152600260205260409020546001600160a01b03166106375760405162461bcd60e51b815260040161035e90610ed7565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061066f82610450565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806106b483610450565b9050806001600160a01b0316846001600160a01b031614806106db57506106db81856105d5565b806106ff5750836001600160a01b03166106f4846102c3565b6001600160a01b0316145b949350505050565b826001600160a01b031661071a82610450565b6001600160a01b03161461077e5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161035e565b6001600160a01b0382166107e05760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161035e565b6107eb60008261063a565b6001600160a01b0383166000908152600360205260408120805460019290610814908490610f4e565b90915550506001600160a01b0382166000908152600360205260408120805460019290610842908490610f61565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b0316036109005760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015260640161035e565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610978848484610707565b61098484848484610aa1565b61055b5760405162461bcd60e51b815260040161035e90610f74565b6060816000036109c75750506040805180820190915260018152600360fc1b602082015290565b8160005b81156109f157806109db81610fc6565b91506109ea9050600a83610ff5565b91506109cb565b60008167ffffffffffffffff811115610a0c57610a0c610d2a565b6040519080825280601f01601f191660200182016040528015610a36576020820181803683370190505b5090505b84156106ff57610a4b600183610f4e565b9150610a58600a86611009565b610a63906030610f61565b60f81b818381518110610a7857610a7861101d565b60200101906001600160f81b031916908160001a905350610a9a600a86610ff5565b9450610a3a565b60006001600160a01b0384163b15610b9757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610ae5903390899088908890600401611033565b6020604051808303816000875af1925050508015610b20575060408051601f3d908101601f19168201909252610b1d91810190611070565b60015b610b7d573d808015610b4e576040519150601f19603f3d011682016040523d82523d6000602084013e610b53565b606091505b508051600003610b755760405162461bcd60e51b815260040161035e90610f74565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506106ff565b506001949350505050565b6001600160e01b03198116811461063757600080fd5b600060208284031215610bca57600080fd5b81356105ce81610ba2565b60005b83811015610bf0578181015183820152602001610bd8565b50506000910152565b60008151808452610c11816020860160208601610bd5565b601f01601f19169290920160200192915050565b6020815260006105ce6020830184610bf9565b600060208284031215610c4a57600080fd5b5035919050565b80356001600160a01b0381168114610c6857600080fd5b919050565b60008060408385031215610c8057600080fd5b610c8983610c51565b946020939093013593505050565b600080600060608486031215610cac57600080fd5b610cb584610c51565b9250610cc360208501610c51565b9150604084013590509250925092565b600060208284031215610ce557600080fd5b6105ce82610c51565b60008060408385031215610d0157600080fd5b610d0a83610c51565b915060208301358015158114610d1f57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610d5657600080fd5b610d5f85610c51565b9350610d6d60208601610c51565b925060408501359150606085013567ffffffffffffffff80821115610d9157600080fd5b818701915087601f830112610da557600080fd5b813581811115610db757610db7610d2a565b604051601f8201601f19908116603f01168101908382118183101715610ddf57610ddf610d2a565b816040528281528a6020848701011115610df857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610e2f57600080fd5b610e3883610c51565b9150610e4660208401610c51565b90509250929050565b600181811c90821680610e6357607f821691505b602082108103610e8357634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b60008351610f1b818460208801610bd5565b835190830190610f2f818360208801610bd5565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561022b5761022b610f38565b8082018082111561022b5761022b610f38565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600060018201610fd857610fd8610f38565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261100457611004610fdf565b500490565b60008261101857611018610fdf565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061106690830184610bf9565b9695505050505050565b60006020828403121561108257600080fd5b81516105ce81610ba256fea26469706673582212204879dbd90db87f4537ab11c101acddd53afcde5d21005c4a6f9d967ec1561d7d64736f6c63430008140033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
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
      ERC721 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC721__factory {
    return super.connect(runner) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC721 {
    return new Contract(address, _abi, runner) as unknown as ERC721;
  }
}
