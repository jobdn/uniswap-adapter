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
        name: "_tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountADesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountBDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountBMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountBMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200190238038062001902833981810160405281019062000037919062000218565b6200006b7f1c8ea2001708fc769c7e3d459cce4c66b69335a3177beb023d0d60271d22fe3a60001b620001ab60201b60201c565b6200009f7f1750ae849f31c7b830e6a6ae3dc2bc70ccbaca3104b38872fe5505bf7583693f60001b620001ab60201b60201c565b620000d37f97ec74742ebc7992da111c0ba55863dbfccc563cc023368cb889e7827e76385f60001b620001ab60201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506200013b7f19070882551fa1f9837054f65a69a538186222e9db3c866d16ff23860e99984060001b620001ab60201b60201c565b6200016f7f4120414e4f13461c4d9c681ed3aef023ac25e1af32291d27d8e3d7fa7a8292f160001b620001ab60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505050506200025f565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001e082620001b3565b9050919050565b620001f281620001d3565b8114620001fe57600080fd5b50565b6000815190506200021281620001e7565b92915050565b60008060408385031215620002325762000231620001ae565b5b6000620002428582860162000201565b9250506020620002558582860162000201565b9150509250929050565b60805160a051611654620002ae6000396000818160ee015281816101bc0152610685015260008181610112015281816103ee0152818161054e015281816108700152610ad801526116546000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80638823151b1461005c578063b94a6dfe1461007a578063baa2abde14610098578063c9c65396146100b4578063e8e33700146100d0575b600080fd5b6100646100ec565b6040516100719190610e1b565b60405180910390f35b610082610110565b60405161008f9190610e1b565b60405180910390f35b6100b260048036038101906100ad9190610e9d565b610134565b005b6100ce60048036038101906100c99190610f3f565b6105ff565b005b6100ea60048036038101906100e59190610f7f565b610726565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6101607f7e7076b40acc9eac8ab584a574d1a1519bc9032c092d17ba7792ad3aa9d0e72760001b610925565b61018c7f4b9c4bed3dfdd035613efbe259c5924623bafd6af1d3928b7686cca59d9b91c760001b610925565b6101b87fd84db54b338a9c006f42350ea0cd21c5289b162da6c6ce05f1c63cedeed8ac6660001b610925565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e6a4390589896040518363ffffffff1660e01b8152600401610215929190611035565b602060405180830381865afa158015610232573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102569190611073565b90506102847ff3f09a56a3798cc1b28cf529afbe56e998c3aa9e9a6a6de62a3e87d767e8762e60001b610925565b6102b07f3757cef9a5ff6c77a60af08932dc15ae103c698f9e0053493fc5daf8d76f291360001b610925565b6102dc7feb78d2f02e3d7e07c69c25ce9c23f2bf032485957e08bdff856bb43fbb20520c60001b610925565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561034c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610343906110fd565b60405180910390fd5b6103787fb4cfa655119a40fc5b4dd5d721b05e4e3888fc303059bc8fdac308af6520def060001b610925565b6103a47f549ae0e6f1b3f9465a074c47d78929b54c1c9f95049dcb9131ef2ce107b2403e60001b610925565b6103d07fd3038162611698fb0c1a932b002d74195374b782c08693b6a567e545d329a71460001b610925565b8073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000886040518363ffffffff1660e01b815260040161042b92919061112c565b6020604051808303816000875af115801561044a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046e919061118d565b5061049b7fadf87e9b9e2f2264b9096c7c75d79ccf8f5da1396ee17c3b02018f584bc6990060001b610925565b6104c77f7c184b50b97ed076e75d74c4b7f9bc024eac28253445d29d4fbe87b2341bd1cd60001b610925565b6104f43330888473ffffffffffffffffffffffffffffffffffffffff16610928909392919063ffffffff16565b6105207f2f0a4d17af4a5ccce69a589d7dc5d363a2c73b675ab68f51b8bde77ce20249fd60001b610925565b61054c7f5315e7ef96b356cf9f9e977695830ebd937c1f17d28656c1b533d9b051e1ac7360001b610925565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663baa2abde898989898989896040518863ffffffff1660e01b81526004016105b197969594939291906111ba565b60408051808303816000875af11580156105cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f3919061123e565b50505050505050505050565b61062b7f91c1e7c1562c255079521479f82b9d19e74c4a00447e834cc44da78a183d463360001b610925565b6106577f27bca8655bb0bf1e248bf357371a8676fdffd14674828c3b4fe36676830f235460001b610925565b6106837f513f2662f0247b786456fbe1c98924cf3f9be2ef2588f781a5c0a8dcb4a3297560001b610925565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c9c6539683836040518363ffffffff1660e01b81526004016106de929190611035565b6020604051808303816000875af11580156106fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107219190611073565b505050565b6107527f707edcef02face5467ed9df8014d8f181ab5d382d462d4c4b45ecd75c47d0fcb60001b610925565b61077e7f4152b9025b1fb83c87fd045441e3c4f21b5294c3c7a287357e068651cf9fa44b60001b610925565b6107aa7faa5e6327cf7a266296ce933be0ac61f0e2592b8bbefaabccdcb36ccaf7b74d2060001b610925565b6107b488876109b1565b6107e07f0fa436ef53477dbf9bfbd9504a192d1232290b0e8c7567ee13543f6e2df8c7fa60001b610925565b61080c7f1b1773066fc7ddf2e648a7b40caa2454ce378d7f4d068536a56cfcf9d805d41460001b610925565b61081687866109b1565b6108427fd8e947552b74503e5d261c0d3c7d95b7080cc43803607c2843ab2aa399247bc060001b610925565b61086e7f34902344d4cd2e6f793147c70f2a067065abe00433eb19e335d46713718ba2e960001b610925565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e8e3370089898989898989896040518963ffffffff1660e01b81526004016108d598979695949392919061127e565b6060604051808303816000875af11580156108f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091891906112fc565b5050505050505050505050565b50565b6109ab846323b872dd60e01b8585856040516024016109499392919061134f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b5d565b50505050565b6109dd7f65c8eb5946cfccea24f02550bc85eb528f61a756c2b0608d6cd6e73930b780d860001b610925565b610a097f697c74f5e31b77b4e263f6a79ee7f1afad9024047a5c962aca0a409be4677b1060001b610925565b610a357fb65516793f99137238976e6c85089752b254ce694d93b65b35b4e0ec35ba02aa60001b610925565b610a623330838573ffffffffffffffffffffffffffffffffffffffff16610928909392919063ffffffff16565b610a8e7f4cf810d985f5d29801fe809134a154b8b00026a4c6b05fc8a61de749f5e7c2f160001b610925565b610aba7f354e41e3aa80b30f7b884739e7a0ebe2772fc9e81561f80acf84438adcf216b760001b610925565b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b8152600401610b1592919061112c565b6020604051808303816000875af1158015610b34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b58919061118d565b505050565b6000610bbf826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610c249092919063ffffffff16565b9050600081511115610c1f5780806020019051810190610bdf919061118d565b610c1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c15906113f8565b60405180910390fd5b5b505050565b6060610c338484600085610c3c565b90509392505050565b606082471015610c81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c789061148a565b60405180910390fd5b610c8a85610d50565b610cc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc0906114f6565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610cf29190611590565b60006040518083038185875af1925050503d8060008114610d2f576040519150601f19603f3d011682016040523d82523d6000602084013e610d34565b606091505b5091509150610d44828286610d73565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610d8357829050610dd3565b600083511115610d965782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dca91906115fc565b60405180910390fd5b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e0582610dda565b9050919050565b610e1581610dfa565b82525050565b6000602082019050610e306000830184610e0c565b92915050565b600080fd5b610e4481610dfa565b8114610e4f57600080fd5b50565b600081359050610e6181610e3b565b92915050565b6000819050919050565b610e7a81610e67565b8114610e8557600080fd5b50565b600081359050610e9781610e71565b92915050565b600080600080600080600060e0888a031215610ebc57610ebb610e36565b5b6000610eca8a828b01610e52565b9750506020610edb8a828b01610e52565b9650506040610eec8a828b01610e88565b9550506060610efd8a828b01610e88565b9450506080610f0e8a828b01610e88565b93505060a0610f1f8a828b01610e52565b92505060c0610f308a828b01610e88565b91505092959891949750929550565b60008060408385031215610f5657610f55610e36565b5b6000610f6485828601610e52565b9250506020610f7585828601610e52565b9150509250929050565b600080600080600080600080610100898b031215610fa057610f9f610e36565b5b6000610fae8b828c01610e52565b9850506020610fbf8b828c01610e52565b9750506040610fd08b828c01610e88565b9650506060610fe18b828c01610e88565b9550506080610ff28b828c01610e88565b94505060a06110038b828c01610e88565b93505060c06110148b828c01610e52565b92505060e06110258b828c01610e88565b9150509295985092959890939650565b600060408201905061104a6000830185610e0c565b6110576020830184610e0c565b9392505050565b60008151905061106d81610e3b565b92915050565b60006020828403121561108957611088610e36565b5b60006110978482850161105e565b91505092915050565b600082825260208201905092915050565b7f41646170746f723a206e6f6e6578697374656e74207061697200000000000000600082015250565b60006110e76019836110a0565b91506110f2826110b1565b602082019050919050565b60006020820190508181036000830152611116816110da565b9050919050565b61112681610e67565b82525050565b60006040820190506111416000830185610e0c565b61114e602083018461111d565b9392505050565b60008115159050919050565b61116a81611155565b811461117557600080fd5b50565b60008151905061118781611161565b92915050565b6000602082840312156111a3576111a2610e36565b5b60006111b184828501611178565b91505092915050565b600060e0820190506111cf600083018a610e0c565b6111dc6020830189610e0c565b6111e9604083018861111d565b6111f6606083018761111d565b611203608083018661111d565b61121060a0830185610e0c565b61121d60c083018461111d565b98975050505050505050565b60008151905061123881610e71565b92915050565b6000806040838503121561125557611254610e36565b5b600061126385828601611229565b925050602061127485828601611229565b9150509250929050565b600061010082019050611294600083018b610e0c565b6112a1602083018a610e0c565b6112ae604083018961111d565b6112bb606083018861111d565b6112c8608083018761111d565b6112d560a083018661111d565b6112e260c0830185610e0c565b6112ef60e083018461111d565b9998505050505050505050565b60008060006060848603121561131557611314610e36565b5b600061132386828701611229565b935050602061133486828701611229565b925050604061134586828701611229565b9150509250925092565b60006060820190506113646000830186610e0c565b6113716020830185610e0c565b61137e604083018461111d565b949350505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006113e2602a836110a0565b91506113ed82611386565b604082019050919050565b60006020820190508181036000830152611411816113d5565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006114746026836110a0565b915061147f82611418565b604082019050919050565b600060208201905081810360008301526114a381611467565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006114e0601d836110a0565b91506114eb826114aa565b602082019050919050565b6000602082019050818103600083015261150f816114d3565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561154a57808201518184015260208101905061152f565b83811115611559576000848401525b50505050565b600061156a82611516565b6115748185611521565b935061158481856020860161152c565b80840191505092915050565b600061159c828461155f565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b60006115ce826115a7565b6115d881856110a0565b93506115e881856020860161152c565b6115f1816115b2565b840191505092915050565b6000602082019050818103600083015261161681846115c3565b90509291505056fea26469706673582212203b49d9a012b59b857a6734df9ff3eba2e4afccee0ff54ef8efcafdda7b7af54f64736f6c634300080b0033";

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
