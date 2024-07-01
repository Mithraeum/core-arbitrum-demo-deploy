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
  WorkersPool,
  WorkersPoolInterface,
} from "../../../../../contracts/core/assets/workersPool/WorkersPool";

const _abi = [
  {
    inputs: [],
    name: "CannotHireWorkersDueToNotEnoughProsperityInSettlement",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotHireWorkersDueToTheirCostIsHigherThanMaxProsperityToSellSpecified",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotHireWorkersExceedingTransactionLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotHireWorkersInvalidWorkersToBuySpecified",
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
        name: "buyerSettlementAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boughtWorkersAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "spentProsperityAmount",
        type: "uint256",
      },
    ],
    name: "WorkersBought",
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
        internalType: "uint256",
        name: "unitsToBuy",
        type: "uint256",
      },
    ],
    name: "calculateProsperityForExactWorkers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "lastPurchaseTime",
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
        name: "settlementAddress",
        type: "address",
      },
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
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "workerPrice",
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
  "0x608060405234801561001057600080fd5b50611626806100206000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c80630b4e99c3146100b4578063126adfb5146100cf578063143e55e0146100f757806330b67baa1461010c5780634461be26146101145780634ddf47d4146101275780637b1039991461013c5780637d884c741461014457806384ba89e31461014c578063be5a391a14610154578063c14bafb11461015d578063e6c15c9914610166578063ece56a1a1461017f575b600080fd5b6100bc610187565b6040519081526020015b60405180910390f35b6100e26100dd3660046113c7565b6101c4565b604080519283526020830191909152016100c6565b6100ff61025a565b6040516100c691906113e0565b6100ff6102de565b6100bc61012236600461140c565b6102e8565b61013a610135366004611457565b6106cb565b005b6100ff610828565b6100bc61086f565b6100bc6108ac565b6100bc60025481565b6100bc60015481565b6000546100ff906201000090046001600160a01b031681565b6100ff6108e9565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020607a60208301853c602001519392505050565b6000806000806101d2610828565b6001600160a01b0316637e7d746e6040518163ffffffff1660e01b81526004016040805180830381865afa15801561020e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102329190611508565b9150915060006102428383610930565b905061024e8682610973565b94509450505050915091565b60006102646102de565b6001600160a01b031663720a70bd61027a61086f565b6040518263ffffffff1660e01b815260040161029891815260200190565b602060405180830381865afa1580156102b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d9919061152c565b905090565b60006102d9610a10565b60006102f2610a4d565b82158061030e575061030c83670de0b6b3a7640000610b19565b155b1561032c576040516301ccb96360e51b815260040160405180910390fd5b836001600160a01b031663bea42f9c6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561036757600080fd5b505af115801561037b573d6000803e3d6000fd5b50505050610387610828565b6001600160a01b031663fb5c6df46040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e89190611549565b83111561040857604051635a45d2a760e01b815260040160405180910390fd5b6000806104206100dd670de0b6b3a764000087611578565b915091508382111561044557604051633ec54df560e11b815260040160405180910390fd5b600061044f61025a565b6001600160a01b031663c91b95666040518163ffffffff1660e01b8152600401602060405180830381865afa15801561048c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b0919061152c565b905060006104bc61025a565b6001600160a01b031663cabb62f06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051d919061152c565b905083826001600160a01b03166370a082318a6040518263ffffffff1660e01b815260040161054c91906113e0565b602060405180830381865afa158015610569573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058d9190611549565b10156105ac57604051630465fa2d60e21b815260040160405180910390fd5b60405163af7d6ca360e01b81526001600160a01b0383169063af7d6ca3906105da908b90889060040161158c565b600060405180830381600087803b1580156105f457600080fd5b505af1158015610608573d6000803e3d6000fd5b50506040516340c10f1960e01b81526001600160a01b03841692506340c10f19915061063a908b908b9060040161158c565b600060405180830381600087803b15801561065457600080fd5b505af1158015610668573d6000803e3d6000fd5b50505060028490555042600155604080516001600160a01b038a168152602081018990529081018590527f342c134ff513e129f43ac7bed5ba83a44ae5101933f0f2471d8e2817a2d38e269060600160405180910390a150949695505050505050565b600054610100900460ff16158080156106eb5750600054600160ff909116105b806107055750303b158015610705575060005460ff166001145b61076c5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff19166001179055801561078f576000805461ff0019166101001790555b6000828060200190518101906107a5919061152c565b600080546001600160a01b03909216620100000262010000600160b01b03199092169190911790555042600155678ac7230489e800006002558015610824576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b60006108326102de565b6001600160a01b0316637b1039996040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102b5573d6000803e3d6000fd5b604080516020808252818301909252600091309183918291906020820181803683370190505090506020609a60208301853c602001519392505050565b604080516020808252818301909252600091309183918291906020820181803683370190505090506020605a60208301853c602001519392505050565b60006108f3610828565b6001600160a01b031663ece56a1a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102b5573d6000803e3d6000fd5b60008160000361093f57600080fd5b600061094b8484610b2d565b905060016001607f1b036001600160801b038216111561096a57600080fd5b90505b92915050565b6000806000610980610c91565b9050600061098e8587610e74565b905060006109b66109a8836109a36001611097565b6110b5565b6109b1886110e9565b611123565b905060006109c4848361117a565b905060006109d2858561117a565b905060006109e883670de0b6b3a76400006111b0565b905060006109fe83670de0b6b3a76400006111b0565b919b919a509098505050505050505050565b604080516014808252818301909252600091309183918291906020820181803683370190505090506014602a60208301853c601401519392505050565b610a556102de565b6001600160a01b0316336001600160a01b031614158015610af957506000610a7b6102de565b6001600160a01b031663ebbe8034610a9161086f565b6040516001600160e01b031960e084901b1681526004810191909152336024820152604401602060405180830381865afa158015610ad3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af79190611549565b145b15610b175760405163422656d160e01b815260040160405180910390fd5b565b6000610b2582846115a5565b159392505050565b600081600003610b3c57600080fd5b60006001600160c01b038411610b675782604085901b81610b5f57610b5f611562565b049050610c7d565b60c084811c600160201b8110610b7f576020918201911c5b620100008110610b91576010918201911c5b6101008110610ba2576008918201911c5b60108110610bb2576004918201911c5b60048110610bc2576002918201911c5b60028110610bd1576001820191505b60bf820360018603901c6001018260ff0387901b81610bf257610bf2611562565b0492506001600160801b03831115610c0957600080fd5b608085901c83026001600160801b038616840260c088901c604089901b82811015610c35576001820391505b608084901b92900382811015610c4c576001820391505b829003608084901c8214610c6257610c626115b9565b888181610c7157610c71611562565b04870196505050505050505b6001600160801b0381111561096a57600080fd5b60004281610c9d6102de565b6001600160a01b0316633c8ca83d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfe9190611549565b905080821015610d0c578091505b6000610d166102de565b6001600160a01b03166344d9bc5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d779190611549565b90508015610d8c57610d89838261126c565b92505b60015482811015610d9a5750815b6000610db0600254670de0b6b3a7640000610930565b9050848210610dc25795945050505050565b6000610dce83876115cf565b9050600080610ddb610828565b6001600160a01b031663569a52a56040518163ffffffff1660e01b81526004016040805180830381865afa158015610e17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3b9190611508565b915091506000610e4b8383610930565b90506000610e598286610e74565b9050610e65868261117a565b9a505050505050505050505090565b600080600084600f0b128015610e8d5750826001166001145b905060008085600f0b12610ea15784610ea6565b846000035b6001600160801b03169050600160801b600160401b8211610f3b57603f82901b91505b8415610f33576001851615610ede578102607f1c5b908002607f1c906002851615610ef4578102607f1c5b908002607f1c906004851615610f0a578102607f1c5b908002607f1c906008851615610f20578102607f1c5b60049490941c93908002607f1c90610ec9565b60401c611051565b603f600160601b831015610f555760209290921b91601f19015b600160701b831015610f6d5760109290921b91600f19015b600160781b831015610f855760089290921b91600719015b6001607c1b831015610f9d5760049290921b91600319015b6001607e1b831015610fb55760029290921b91600119015b6001607f1b831015610fcd5760019290921b91600019015b60005b861561103a5760408210610fe357600080fd5b600187161561100957918302607f1c918101600160801b83111561100957600192831c92015b928002607f1c9260019190911b90600160801b841061102e57600193841c9391909101905b600187901c9650610fd0565b6040811061104757600080fd5b6040039190911c90505b60008361105e5781611063565b816000035b905060016001607f1b03198112801590611084575060016001607f1b038113155b61108d57600080fd5b9695505050505050565b6000677fffffffffffffff8211156110ae57600080fd5b5060401b90565b6000600f82810b9084900b0360016001607f1b031981128015906110e0575060016001607f1b038113155b61096a57600080fd5b60008082600f0b136110fa57600080fd5b608061110583611282565b600f0b6fb17217f7d1cf79abc9e3b39803f2f6af02901c9050919050565b600081600f0b60000361113557600080fd5b600082600f0b604085600f0b901b8161115057611150611562565b05905060016001607f1b031981128015906110e0575060016001607f1b0381131561096a57600080fd5b6000600f83810b9083900b0260401d60016001607f1b031981128015906110e0575060016001607f1b0381131561096a57600080fd5b60006001607f1b600f84900b016111f4576002600160c01b031982121580156111dd5750600160c01b8213155b6111e657600080fd5b506000819003603f1b61096d565b60008084600f0b121561120c57836000039350600190505b600083121561121e5760009290920391155b600061122a858561135c565b9050811561124f57600160ff1b81111561124357600080fd5b600003915061096d9050565b6001600160ff1b0381111561126357600080fd5b915061096d9050565b600081831061127b578161096a565b5090919050565b60008082600f0b1361129357600080fd5b6000600f83900b600160401b81126112ad576040918201911d5b600160201b81126112c0576020918201911d5b6201000081126112d2576010918201911d5b61010081126112e3576008918201911d5b601081126112f3576004918201911d5b60048112611303576002918201911d5b60028112611312576001820191505b603f19820160401b600f85900b607f8490031b6001603f1b5b60008113156113515790800260ff81901c8281029390930192607f011c9060011d61132b565b509095945050505050565b60008160000361136e5750600061096d565b600083600f0b121561137f57600080fd5b600f83900b6001600160801b038316810260401c90608084901c026001600160c01b038111156113ae57600080fd5b60401b81198111156113bf57600080fd5b019392505050565b6000602082840312156113d957600080fd5b5035919050565b6001600160a01b0391909116815260200190565b6001600160a01b038116811461140957600080fd5b50565b60008060006060848603121561142157600080fd5b833561142c816113f4565b95602085013595506040909401359392505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561146957600080fd5b813567ffffffffffffffff8082111561148157600080fd5b818401915084601f83011261149557600080fd5b8135818111156114a7576114a7611441565b604051601f8201601f19908116603f011681019083821181831017156114cf576114cf611441565b816040528281528760208487010111156114e857600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000806040838503121561151b57600080fd5b505080516020909101519092909150565b60006020828403121561153e57600080fd5b815161096a816113f4565b60006020828403121561155b57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008261158757611587611562565b500490565b6001600160a01b03929092168252602082015260400190565b6000826115b4576115b4611562565b500690565b634e487b7160e01b600052600160045260246000fd5b8181038181111561096d57634e487b7160e01b600052601160045260246000fdfea264697066735822122059bcdb6d9ca002b3b389cb09633dbd117b2715d2e18c97a7c43274a4e66fe36364736f6c63430008140033";

type WorkersPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WorkersPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WorkersPool__factory extends ContractFactory {
  constructor(...args: WorkersPoolConstructorParams) {
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
      WorkersPool & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WorkersPool__factory {
    return super.connect(runner) as WorkersPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WorkersPoolInterface {
    return new Interface(_abi) as WorkersPoolInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): WorkersPool {
    return new Contract(address, _abi, runner) as unknown as WorkersPool;
  }
}
