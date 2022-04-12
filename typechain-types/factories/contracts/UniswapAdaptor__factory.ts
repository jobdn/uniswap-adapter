/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapAdaptor,
  UniswapAdaptorInterface,
} from "../../contracts/UniswapAdaptor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FACTORY_ADDRESS",
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
    inputs: [],
    name: "ROUTER_ADDRESS",
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
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516105e93803806105e983398181016040528101906100329190610201565b6100647feb78d2f02e3d7e07c69c25ce9c23f2bf032485957e08bdff856bb43fbb20520c60001b61019b60201b60201c565b6100967fb4cfa655119a40fc5b4dd5d721b05e4e3888fc303059bc8fdac308af6520def060001b61019b60201b60201c565b6100c87f549ae0e6f1b3f9465a074c47d78929b54c1c9f95049dcb9131ef2ce107b2403e60001b61019b60201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505061012e7fd3038162611698fb0c1a932b002d74195374b782c08693b6a567e545d329a71460001b61019b60201b60201c565b6101607fadf87e9b9e2f2264b9096c7c75d79ccf8f5da1396ee17c3b02018f584bc6990060001b61019b60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050610241565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101ce826101a3565b9050919050565b6101de816101c3565b81146101e957600080fd5b50565b6000815190506101fb816101d5565b92915050565b600080604083850312156102185761021761019e565b5b6000610226858286016101ec565b9250506020610237858286016101ec565b9150509250929050565b60805160a05161037e61026b6000396000818160a0015261016c0152600060c4015261037e6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638823151b14610046578063b94a6dfe14610064578063c9c6539614610082575b600080fd5b61004e61009e565b60405161005b9190610251565b60405180910390f35b61006c6100c2565b6040516100799190610251565b60405180910390f35b61009c6004803603810190610097919061029d565b6100e6565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6101127f7c184b50b97ed076e75d74c4b7f9bc024eac28253445d29d4fbe87b2341bd1cd60001b61020d565b61013e7f2f0a4d17af4a5ccce69a589d7dc5d363a2c73b675ab68f51b8bde77ce20249fd60001b61020d565b61016a7f5315e7ef96b356cf9f9e977695830ebd937c1f17d28656c1b533d9b051e1ac7360001b61020d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c9c6539683836040518363ffffffff1660e01b81526004016101c59291906102dd565b6020604051808303816000875af11580156101e4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610208919061031b565b505050565b50565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061023b82610210565b9050919050565b61024b81610230565b82525050565b60006020820190506102666000830184610242565b92915050565b600080fd5b61027a81610230565b811461028557600080fd5b50565b60008135905061029781610271565b92915050565b600080604083850312156102b4576102b361026c565b5b60006102c285828601610288565b92505060206102d385828601610288565b9150509250929050565b60006040820190506102f26000830185610242565b6102ff6020830184610242565b9392505050565b60008151905061031581610271565b92915050565b6000602082840312156103315761033061026c565b5b600061033f84828501610306565b9150509291505056fea264697066735822122050fa4374b511589e72cde21c4d7500482145a6f05ebde12296daa2e9e62f751a64736f6c634300080b0033";

type UniswapAdaptorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapAdaptorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapAdaptor__factory extends ContractFactory {
  constructor(...args: UniswapAdaptorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _router: string,
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapAdaptor> {
    return super.deploy(
      _router,
      _factory,
      overrides || {}
    ) as Promise<UniswapAdaptor>;
  }
  override getDeployTransaction(
    _router: string,
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_router, _factory, overrides || {});
  }
  override attach(address: string): UniswapAdaptor {
    return super.attach(address) as UniswapAdaptor;
  }
  override connect(signer: Signer): UniswapAdaptor__factory {
    return super.connect(signer) as UniswapAdaptor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapAdaptorInterface {
    return new utils.Interface(_abi) as UniswapAdaptorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapAdaptor {
    return new Contract(address, _abi, signerOrProvider) as UniswapAdaptor;
  }
}
