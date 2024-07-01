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
import type { NonPayableOverrides } from "../../../../common";
import type {
  CrossErasMemory,
  CrossErasMemoryInterface,
} from "../../../../contracts/core/crossErasMemory/CrossErasMemory";

const _abi = [
  {
    inputs: [],
    name: "OnlyActiveEra",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyActiveGame",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyWorldAssetFromActiveEra",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyWorldAssetFromOldEra",
    type: "error",
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
        name: "bannerId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "regionId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isNewSettlement",
        type: "bool",
      },
    ],
    name: "addUserSettlement",
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
      {
        internalType: "uint256",
        name: "settlementPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateTime",
        type: "uint256",
      },
    ],
    name: "changeRegionSettlementPrice",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "position",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
    ],
    name: "placeSettlementOnMap",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "regionSettlementPrice",
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
        name: "",
        type: "uint64",
      },
    ],
    name: "regionSettlementPriceUpdateTime",
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
        name: "",
        type: "uint64",
      },
    ],
    name: "regionUserSettlementsCount",
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
    ],
    name: "removeUserSettlement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "settlementByBannerId",
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
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "settlementByPosition",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c62806100206000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c8063197040391461009e57806319ab453c146100d157806330b67baa146100e65780639b9a21e814610117578063a57415d914610137578063c29f8ac214610157578063c4c31e851461016a578063dc39f80914610193578063e301e640146101a6578063ebe63ec8146101b9578063ff033673146101e2575b600080fd5b6100be6100ac366004610a47565b60046020526000908152604090205481565b6040519081526020015b60405180910390f35b6100e46100df366004610a80565b6101f5565b005b6000546100ff906201000090046001600160a01b031681565b6040516001600160a01b0390911681526020016100c8565b6100be610125366004610a47565b60036020526000908152604090205481565b6100be610145366004610a47565b60056020526000908152604090205481565b6100e4610165366004610a9d565b61030d565b6100ff610178366004610a47565b6001602052600090815260409020546001600160a01b031681565b6100e46101a1366004610ad2565b61033d565b6100e46101b4366004610a80565b61037e565b6100ff6101c7366004610b0b565b6002602052600090815260409020546001600160a01b031681565b6100e46101f0366004610b24565b610585565b600054610100900460ff16158080156102155750600054600160ff909116105b8061022f5750303b15801561022f575060005460ff166001145b6102975760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156102ba576000805461ff0019166101001790555b6102c3826105ea565b8015610309576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b61031561067f565b6001600160401b03909216600090815260046020908152604080832093909355600590522055565b610345610796565b6001600160401b0391909116600090815260016020526040902080546001600160a01b0319166001600160a01b03909216919091179055565b6103866108b3565b60008190506000816001600160a01b03166309218e916040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ef9190610b7c565b90506000826001600160a01b031663e6c15c996040518163ffffffff1660e01b8152600401602060405180830381865afa158015610431573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104559190610b99565b6001600160a01b031663b2fd89336040518163ffffffff1660e01b8152600401602060405180830381865afa158015610492573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b69190610b7c565b90506000836001600160a01b031663d63a68ec6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051c9190610bb6565b6001600160401b03808516600090815260016020908152604080832080546001600160a01b0319908116909155858452600283528184208054909116905592861682526003905290812080549293509091908261057883610be5565b9190505550505050505050565b61058d610796565b600084815260026020526040902080546001600160a01b0319166001600160a01b03841617905580156105e4576001600160401b03831660009081526003602052604081208054916105de83610bfc565b91905055505b50505050565b600054610100900460ff166106555760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161028e565b600080546001600160a01b03909216620100000262010000600160b01b0319909216919091179055565b60008060029054906101000a90046001600160a01b03166001600160a01b031663704f63a16040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f79190610bb6565b60008054604051633aefa00d60e21b81529293509091620100009091046001600160a01b03169063ebbe8034906107349085903390600401610c15565b602060405180830381865afa158015610751573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107759190610bb6565b03610793576040516305016ca360e41b815260040160405180910390fd5b50565b60008060029054906101000a90046001600160a01b03166001600160a01b031663704f63a16040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080e9190610bb6565b60005460405163720a70bd60e01b8152600481018390529192506201000090046001600160a01b03169063720a70bd90602401602060405180830381865afa15801561085e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108829190610b99565b6001600160a01b0316336001600160a01b03161461079357604051633833078760e01b815260040160405180910390fd5b6000336001600160a01b0316637d884c746040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109179190610bb6565b9050600060029054906101000a90046001600160a01b03166001600160a01b031663704f63a16040518163ffffffff1660e01b8152600401602060405180830381865afa15801561096c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109909190610bb6565b81101580610a14575060008054604051633aefa00d60e21b8152620100009091046001600160a01b03169063ebbe8034906109d19085903390600401610c15565b602060405180830381865afa1580156109ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a129190610bb6565b145b15610793576040516373f0ba8360e11b815260040160405180910390fd5b6001600160401b038116811461079357600080fd5b600060208284031215610a5957600080fd5b8135610a6481610a32565b9392505050565b6001600160a01b038116811461079357600080fd5b600060208284031215610a9257600080fd5b8135610a6481610a6b565b600080600060608486031215610ab257600080fd5b8335610abd81610a32565b95602085013595506040909401359392505050565b60008060408385031215610ae557600080fd5b8235610af081610a32565b91506020830135610b0081610a6b565b809150509250929050565b600060208284031215610b1d57600080fd5b5035919050565b60008060008060808587031215610b3a57600080fd5b843593506020850135610b4c81610a32565b92506040850135610b5c81610a6b565b915060608501358015158114610b7157600080fd5b939692955090935050565b600060208284031215610b8e57600080fd5b8151610a6481610a32565b600060208284031215610bab57600080fd5b8151610a6481610a6b565b600060208284031215610bc857600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600081610bf457610bf4610bcf565b506000190190565b600060018201610c0e57610c0e610bcf565b5060010190565b9182526001600160a01b031660208201526040019056fea2646970667358221220d9fd8570bf56dae01c2dc75d1fb04606b51ccdffd649fc119604030a5c3335b264736f6c63430008140033";

type CrossErasMemoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossErasMemoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossErasMemory__factory extends ContractFactory {
  constructor(...args: CrossErasMemoryConstructorParams) {
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
      CrossErasMemory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CrossErasMemory__factory {
    return super.connect(runner) as CrossErasMemory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossErasMemoryInterface {
    return new Interface(_abi) as CrossErasMemoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CrossErasMemory {
    return new Contract(address, _abi, runner) as unknown as CrossErasMemory;
  }
}
