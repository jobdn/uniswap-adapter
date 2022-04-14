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
        internalType: "uint256",
        name: "_amountOut",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_path",
        type: "address[]",
      },
    ],
    name: "getPriceFor",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_path",
        type: "address[]",
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
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611a0a806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063b94a6dfe1161005b578063b94a6dfe146100ec578063baa2abde1461010a578063c9c6539614610126578063e8e33700146101425761007d565b806369f5cb05146100825780638823151b146100b257806390f11e84146100d0575b600080fd5b61009c60048036038101906100979190610d91565b61015e565b6040516100a99190610dfc565b60405180910390f35b6100ba61021d565b6040516100c79190610e26565b60405180910390f35b6100ea60048036038101906100e59190610e9c565b610235565b005b6100f46103ed565b6040516101019190610e26565b60405180910390f35b610124600480360381019061011f9190610f36565b610405565b005b610140600480360381019061013b9190610fd8565b610670565b005b61015c60048036038101906101579190611018565b610707565b005b600080737a250d5630b4cf539739df2c5dacb4c659f2488d73ffffffffffffffffffffffffffffffffffffffff16631f00ca7485856040518363ffffffff1660e01b81526004016101b092919061118c565b600060405180830381865afa1580156101cd573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906101f69190611294565b90508060008151811061020c5761020b6112dd565b5b602002602001015191505092915050565b735c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f81565b61028a3330888787600081811061024f5761024e6112dd565b5b9050602002016020810190610264919061130c565b73ffffffffffffffffffffffffffffffffffffffff166107c6909392919063ffffffff16565b8383600081811061029e5761029d6112dd565b5b90506020020160208101906102b3919061130c565b73ffffffffffffffffffffffffffffffffffffffff1663095ea7b3737a250d5630b4cf539739df2c5dacb4c659f2488d886040518363ffffffff1660e01b8152600401610301929190611339565b6020604051808303816000875af1158015610320573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610344919061139a565b50737a250d5630b4cf539739df2c5dacb4c659f2488d73ffffffffffffffffffffffffffffffffffffffff166338ed17398787878787876040518763ffffffff1660e01b815260040161039c96959493929190611452565b6000604051808303816000875af11580156103bb573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103e49190611294565b50505050505050565b737a250d5630b4cf539739df2c5dacb4c659f2488d81565b6000735c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f73ffffffffffffffffffffffffffffffffffffffff1663e6a4390589896040518363ffffffff1660e01b81526004016104569291906114ae565b602060405180830381865afa158015610473573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049791906114ec565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610509576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050090611576565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663095ea7b3737a250d5630b4cf539739df2c5dacb4c659f2488d886040518363ffffffff1660e01b8152600401610558929190611339565b6020604051808303816000875af1158015610577573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059b919061139a565b506105c93330888473ffffffffffffffffffffffffffffffffffffffff166107c6909392919063ffffffff16565b737a250d5630b4cf539739df2c5dacb4c659f2488d73ffffffffffffffffffffffffffffffffffffffff1663baa2abde898989898989896040518863ffffffff1660e01b81526004016106229796959493929190611596565b60408051808303816000875af1158015610640573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106649190611605565b50505050505050505050565b735c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f73ffffffffffffffffffffffffffffffffffffffff1663c9c6539683836040518363ffffffff1660e01b81526004016106bf9291906114ae565b6020604051808303816000875af11580156106de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070291906114ec565b505050565b610711888761084f565b61071b878661084f565b737a250d5630b4cf539739df2c5dacb4c659f2488d73ffffffffffffffffffffffffffffffffffffffff1663e8e3370089898989898989896040518963ffffffff1660e01b8152600401610776989796959493929190611645565b6060604051808303816000875af1158015610795573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b991906116c3565b5050505050505050505050565b610849846323b872dd60e01b8585856040516024016107e793929190611716565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610913565b50505050565b61087c3330838573ffffffffffffffffffffffffffffffffffffffff166107c6909392919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3737a250d5630b4cf539739df2c5dacb4c659f2488d836040518363ffffffff1660e01b81526004016108cb929190611339565b6020604051808303816000875af11580156108ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090e919061139a565b505050565b6000610975826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166109da9092919063ffffffff16565b90506000815111156109d55780806020019051810190610995919061139a565b6109d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109cb906117bf565b60405180910390fd5b5b505050565b60606109e984846000856109f2565b90509392505050565b606082471015610a37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2e90611851565b60405180910390fd5b610a4085610b06565b610a7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a76906118bd565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610aa89190611957565b60006040518083038185875af1925050503d8060008114610ae5576040519150601f19603f3d011682016040523d82523d6000602084013e610aea565b606091505b5091509150610afa828286610b29565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610b3957829050610b89565b600083511115610b4c5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8091906119b2565b60405180910390fd5b9392505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610bb781610ba4565b8114610bc257600080fd5b50565b600081359050610bd481610bae565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610c2882610bdf565b810181811067ffffffffffffffff82111715610c4757610c46610bf0565b5b80604052505050565b6000610c5a610b90565b9050610c668282610c1f565b919050565b600067ffffffffffffffff821115610c8657610c85610bf0565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cc782610c9c565b9050919050565b610cd781610cbc565b8114610ce257600080fd5b50565b600081359050610cf481610cce565b92915050565b6000610d0d610d0884610c6b565b610c50565b90508083825260208201905060208402830185811115610d3057610d2f610c97565b5b835b81811015610d595780610d458882610ce5565b845260208401935050602081019050610d32565b5050509392505050565b600082601f830112610d7857610d77610bda565b5b8135610d88848260208601610cfa565b91505092915050565b60008060408385031215610da857610da7610b9a565b5b6000610db685828601610bc5565b925050602083013567ffffffffffffffff811115610dd757610dd6610b9f565b5b610de385828601610d63565b9150509250929050565b610df681610ba4565b82525050565b6000602082019050610e116000830184610ded565b92915050565b610e2081610cbc565b82525050565b6000602082019050610e3b6000830184610e17565b92915050565b600080fd5b60008083601f840112610e5c57610e5b610bda565b5b8235905067ffffffffffffffff811115610e7957610e78610e41565b5b602083019150836020820283011115610e9557610e94610c97565b5b9250929050565b60008060008060008060a08789031215610eb957610eb8610b9a565b5b6000610ec789828a01610bc5565b9650506020610ed889828a01610bc5565b955050604087013567ffffffffffffffff811115610ef957610ef8610b9f565b5b610f0589828a01610e46565b94509450506060610f1889828a01610ce5565b9250506080610f2989828a01610bc5565b9150509295509295509295565b600080600080600080600060e0888a031215610f5557610f54610b9a565b5b6000610f638a828b01610ce5565b9750506020610f748a828b01610ce5565b9650506040610f858a828b01610bc5565b9550506060610f968a828b01610bc5565b9450506080610fa78a828b01610bc5565b93505060a0610fb88a828b01610ce5565b92505060c0610fc98a828b01610bc5565b91505092959891949750929550565b60008060408385031215610fef57610fee610b9a565b5b6000610ffd85828601610ce5565b925050602061100e85828601610ce5565b9150509250929050565b600080600080600080600080610100898b03121561103957611038610b9a565b5b60006110478b828c01610ce5565b98505060206110588b828c01610ce5565b97505060406110698b828c01610bc5565b965050606061107a8b828c01610bc5565b955050608061108b8b828c01610bc5565b94505060a061109c8b828c01610bc5565b93505060c06110ad8b828c01610ce5565b92505060e06110be8b828c01610bc5565b9150509295985092959890939650565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61110381610cbc565b82525050565b600061111583836110fa565b60208301905092915050565b6000602082019050919050565b6000611139826110ce565b61114381856110d9565b935061114e836110ea565b8060005b8381101561117f5781516111668882611109565b975061117183611121565b925050600181019050611152565b5085935050505092915050565b60006040820190506111a16000830185610ded565b81810360208301526111b3818461112e565b90509392505050565b600067ffffffffffffffff8211156111d7576111d6610bf0565b5b602082029050602081019050919050565b6000815190506111f781610bae565b92915050565b600061121061120b846111bc565b610c50565b9050808382526020820190506020840283018581111561123357611232610c97565b5b835b8181101561125c578061124888826111e8565b845260208401935050602081019050611235565b5050509392505050565b600082601f83011261127b5761127a610bda565b5b815161128b8482602086016111fd565b91505092915050565b6000602082840312156112aa576112a9610b9a565b5b600082015167ffffffffffffffff8111156112c8576112c7610b9f565b5b6112d484828501611266565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561132257611321610b9a565b5b600061133084828501610ce5565b91505092915050565b600060408201905061134e6000830185610e17565b61135b6020830184610ded565b9392505050565b60008115159050919050565b61137781611362565b811461138257600080fd5b50565b6000815190506113948161136e565b92915050565b6000602082840312156113b0576113af610b9a565b5b60006113be84828501611385565b91505092915050565b6000819050919050565b60006113e06020840184610ce5565b905092915050565b6000602082019050919050565b600061140183856110d9565b935061140c826113c7565b8060005b858110156114455761142282846113d1565b61142c8882611109565b9750611437836113e8565b925050600181019050611410565b5085925050509392505050565b600060a0820190506114676000830189610ded565b6114746020830188610ded565b81810360408301526114878186886113f5565b90506114966060830185610e17565b6114a36080830184610ded565b979650505050505050565b60006040820190506114c36000830185610e17565b6114d06020830184610e17565b9392505050565b6000815190506114e681610cce565b92915050565b60006020828403121561150257611501610b9a565b5b6000611510848285016114d7565b91505092915050565b600082825260208201905092915050565b7f41646170746f723a206e6f6e6578697374656e74207061697200000000000000600082015250565b6000611560601983611519565b915061156b8261152a565b602082019050919050565b6000602082019050818103600083015261158f81611553565b9050919050565b600060e0820190506115ab600083018a610e17565b6115b86020830189610e17565b6115c56040830188610ded565b6115d26060830187610ded565b6115df6080830186610ded565b6115ec60a0830185610e17565b6115f960c0830184610ded565b98975050505050505050565b6000806040838503121561161c5761161b610b9a565b5b600061162a858286016111e8565b925050602061163b858286016111e8565b9150509250929050565b60006101008201905061165b600083018b610e17565b611668602083018a610e17565b6116756040830189610ded565b6116826060830188610ded565b61168f6080830187610ded565b61169c60a0830186610ded565b6116a960c0830185610e17565b6116b660e0830184610ded565b9998505050505050505050565b6000806000606084860312156116dc576116db610b9a565b5b60006116ea868287016111e8565b93505060206116fb868287016111e8565b925050604061170c868287016111e8565b9150509250925092565b600060608201905061172b6000830186610e17565b6117386020830185610e17565b6117456040830184610ded565b949350505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006117a9602a83611519565b91506117b48261174d565b604082019050919050565b600060208201905081810360008301526117d88161179c565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b600061183b602683611519565b9150611846826117df565b604082019050919050565b6000602082019050818103600083015261186a8161182e565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006118a7601d83611519565b91506118b282611871565b602082019050919050565b600060208201905081810360008301526118d68161189a565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156119115780820151818401526020810190506118f6565b83811115611920576000848401525b50505050565b6000611931826118dd565b61193b81856118e8565b935061194b8185602086016118f3565b80840191505092915050565b60006119638284611926565b915081905092915050565b600081519050919050565b60006119848261196e565b61198e8185611519565b935061199e8185602086016118f3565b6119a781610bdf565b840191505092915050565b600060208201905081810360008301526119cc8184611979565b90509291505056fea2646970667358221220ef1fcfba123901bb867872fa44ec2e3afa47d276cc9f2858bd55f00068a0b7b464736f6c634300080b0033";

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapAdaptor> {
    return super.deploy(overrides || {}) as Promise<UniswapAdaptor>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
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
