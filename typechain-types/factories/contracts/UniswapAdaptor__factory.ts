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
  "0x60c06040523480156200001157600080fd5b506040516200243638038062002436833981810160405281019062000037919062000218565b6200006b7f7a2532d15f8c66458630b0246a1f7e323667454ebd762d2648b51e0d74ae161960001b620001ab60201b60201c565b6200009f7f4363245294b3dda210300f04c94abf72b4c7f7c13c2ee401c76da4bf6772b28b60001b620001ab60201b60201c565b620000d37f36e0598ec732ba042b595ea0276c9b002cc635cd4b9762a50f543d34327b93ea60001b620001ab60201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506200013b7f824aa1aec35c56e4209c12a4cd65cd34d9dfa8dd534523cbbc4fea173a6f688b60001b620001ab60201b60201c565b6200016f7ff7a7a6fc88b02b419415c8583e1c6376d8383a43d494db332d7fb8b61f04bcf160001b620001ab60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505050506200025f565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001e082620001b3565b9050919050565b620001f281620001d3565b8114620001fe57600080fd5b50565b6000815190506200021281620001e7565b92915050565b60008060408385031215620002325762000231620001ae565b5b6000620002428582860162000201565b9250506020620002558582860162000201565b9150509250929050565b60805160a051612172620002c460003960008181610308015281816106da0152610ba30152600081816101e8015281816104a10152818161057c015281816106300152818161090c01528181610a6c01528181610d8e0152610ff601526121726000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063b94a6dfe1161005b578063b94a6dfe146100ec578063baa2abde1461010a578063c9c6539614610126578063e8e33700146101425761007d565b806369f5cb05146100825780638823151b146100b257806390f11e84146100d0575b600080fd5b61009c600480360381019061009791906114f9565b61015e565b6040516100a99190611564565b60405180910390f35b6100ba610306565b6040516100c7919061158e565b60405180910390f35b6100ea60048036038101906100e59190611604565b61032a565b005b6100f461062e565b604051610101919061158e565b60405180910390f35b610124600480360381019061011f919061169e565b610652565b005b610140600480360381019061013b9190611740565b610b1d565b005b61015c60048036038101906101579190611780565b610c44565b005b600061018c7f4b9c4bed3dfdd035613efbe259c5924623bafd6af1d3928b7686cca59d9b91c760001b610e43565b6101b87fd84db54b338a9c006f42350ea0cd21c5289b162da6c6ce05f1c63cedeed8ac6660001b610e43565b6101e47ff3f09a56a3798cc1b28cf529afbe56e998c3aa9e9a6a6de62a3e87d767e8762e60001b610e43565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631f00ca7485856040518363ffffffff1660e01b81526004016102419291906118f4565b600060405180830381865afa15801561025e573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061028791906119fc565b90506102b57f3757cef9a5ff6c77a60af08932dc15ae103c698f9e0053493fc5daf8d76f291360001b610e43565b6102e17feb78d2f02e3d7e07c69c25ce9c23f2bf032485957e08bdff856bb43fbb20520c60001b610e43565b806000815181106102f5576102f4611a45565b5b602002602001015191505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6103567fb4cfa655119a40fc5b4dd5d721b05e4e3888fc303059bc8fdac308af6520def060001b610e43565b6103827f549ae0e6f1b3f9465a074c47d78929b54c1c9f95049dcb9131ef2ce107b2403e60001b610e43565b6103ae7fd3038162611698fb0c1a932b002d74195374b782c08693b6a567e545d329a71460001b610e43565b610403333088878760008181106103c8576103c7611a45565b5b90506020020160208101906103dd9190611a74565b73ffffffffffffffffffffffffffffffffffffffff16610e46909392919063ffffffff16565b61042f7fadf87e9b9e2f2264b9096c7c75d79ccf8f5da1396ee17c3b02018f584bc6990060001b610e43565b61045b7f7c184b50b97ed076e75d74c4b7f9bc024eac28253445d29d4fbe87b2341bd1cd60001b610e43565b8383600081811061046f5761046e611a45565b5b90506020020160208101906104849190611a74565b73ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000886040518363ffffffff1660e01b81526004016104de929190611aa1565b6020604051808303816000875af11580156104fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105219190611b02565b5061054e7f2f0a4d17af4a5ccce69a589d7dc5d363a2c73b675ab68f51b8bde77ce20249fd60001b610e43565b61057a7f5315e7ef96b356cf9f9e977695830ebd937c1f17d28656c1b533d9b051e1ac7360001b610e43565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166338ed17398787878787876040518763ffffffff1660e01b81526004016105dd96959493929190611bba565b6000604051808303816000875af11580156105fc573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061062591906119fc565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61067e7f65c8eb5946cfccea24f02550bc85eb528f61a756c2b0608d6cd6e73930b780d860001b610e43565b6106aa7f697c74f5e31b77b4e263f6a79ee7f1afad9024047a5c962aca0a409be4677b1060001b610e43565b6106d67fb65516793f99137238976e6c85089752b254ce694d93b65b35b4e0ec35ba02aa60001b610e43565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e6a4390589896040518363ffffffff1660e01b8152600401610733929190611c16565b602060405180830381865afa158015610750573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107749190611c54565b90506107a27f4cf810d985f5d29801fe809134a154b8b00026a4c6b05fc8a61de749f5e7c2f160001b610e43565b6107ce7f354e41e3aa80b30f7b884739e7a0ebe2772fc9e81561f80acf84438adcf216b760001b610e43565b6107fa7f707edcef02face5467ed9df8014d8f181ab5d382d462d4c4b45ecd75c47d0fcb60001b610e43565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561086a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086190611cde565b60405180910390fd5b6108967f4152b9025b1fb83c87fd045441e3c4f21b5294c3c7a287357e068651cf9fa44b60001b610e43565b6108c27faa5e6327cf7a266296ce933be0ac61f0e2592b8bbefaabccdcb36ccaf7b74d2060001b610e43565b6108ee7f0fa436ef53477dbf9bfbd9504a192d1232290b0e8c7567ee13543f6e2df8c7fa60001b610e43565b8073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000886040518363ffffffff1660e01b8152600401610949929190611aa1565b6020604051808303816000875af1158015610968573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098c9190611b02565b506109b97f1b1773066fc7ddf2e648a7b40caa2454ce378d7f4d068536a56cfcf9d805d41460001b610e43565b6109e57fd8e947552b74503e5d261c0d3c7d95b7080cc43803607c2843ab2aa399247bc060001b610e43565b610a123330888473ffffffffffffffffffffffffffffffffffffffff16610e46909392919063ffffffff16565b610a3e7f34902344d4cd2e6f793147c70f2a067065abe00433eb19e335d46713718ba2e960001b610e43565b610a6a7f7e7076b40acc9eac8ab584a574d1a1519bc9032c092d17ba7792ad3aa9d0e72760001b610e43565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663baa2abde898989898989896040518863ffffffff1660e01b8152600401610acf9796959493929190611cfe565b60408051808303816000875af1158015610aed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b119190611d6d565b50505050505050505050565b610b497fd3cb74312aec90859155e2ec9812d73596f86a9c40d5beebdfef4ed9b473b16d60001b610e43565b610b757f33cf734350328f5836e387b22ef0fc67dce81a6b5ae9d4ff60243e713c08f4b760001b610e43565b610ba17f99ddab179f49486c0a49ea46c11c9c831221e6feaf66a3aade71f0c9b774b54860001b610e43565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c9c6539683836040518363ffffffff1660e01b8152600401610bfc929190611c16565b6020604051808303816000875af1158015610c1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3f9190611c54565b505050565b610c707f1750ae849f31c7b830e6a6ae3dc2bc70ccbaca3104b38872fe5505bf7583693f60001b610e43565b610c9c7f97ec74742ebc7992da111c0ba55863dbfccc563cc023368cb889e7827e76385f60001b610e43565b610cc87f19070882551fa1f9837054f65a69a538186222e9db3c866d16ff23860e99984060001b610e43565b610cd28887610ecf565b610cfe7f4120414e4f13461c4d9c681ed3aef023ac25e1af32291d27d8e3d7fa7a8292f160001b610e43565b610d2a7f91c1e7c1562c255079521479f82b9d19e74c4a00447e834cc44da78a183d463360001b610e43565b610d348786610ecf565b610d607f27bca8655bb0bf1e248bf357371a8676fdffd14674828c3b4fe36676830f235460001b610e43565b610d8c7f513f2662f0247b786456fbe1c98924cf3f9be2ef2588f781a5c0a8dcb4a3297560001b610e43565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e8e3370089898989898989896040518963ffffffff1660e01b8152600401610df3989796959493929190611dad565b6060604051808303816000875af1158015610e12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e369190611e2b565b5050505050505050505050565b50565b610ec9846323b872dd60e01b858585604051602401610e6793929190611e7e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061107b565b50505050565b610efb7f2107c1a527c34f2a8f94d6fbed56b180a290441c213cdf4c4129027fd462700c60001b610e43565b610f277f2cc8f0adc217452d82500b687311efad2ecfaf51177d04ac2614c7872e28f66860001b610e43565b610f537fc2f53e7962d2c3ea7bdfb05a9477f88e0e8b8a18638a553a0ff37aad807d71e860001b610e43565b610f803330838573ffffffffffffffffffffffffffffffffffffffff16610e46909392919063ffffffff16565b610fac7fef51f7cf99430bb2b7d962de1b9a0b97e19d4752a9d8923331b985a86606b16c60001b610e43565b610fd87f1c8ea2001708fc769c7e3d459cce4c66b69335a3177beb023d0d60271d22fe3a60001b610e43565b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b8152600401611033929190611aa1565b6020604051808303816000875af1158015611052573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110769190611b02565b505050565b60006110dd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111429092919063ffffffff16565b905060008151111561113d57808060200190518101906110fd9190611b02565b61113c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113390611f27565b60405180910390fd5b5b505050565b6060611151848460008561115a565b90509392505050565b60608247101561119f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119690611fb9565b60405180910390fd5b6111a88561126e565b6111e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111de90612025565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161121091906120bf565b60006040518083038185875af1925050503d806000811461124d576040519150601f19603f3d011682016040523d82523d6000602084013e611252565b606091505b5091509150611262828286611291565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606083156112a1578290506112f1565b6000835111156112b45782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e8919061211a565b60405180910390fd5b9392505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61131f8161130c565b811461132a57600080fd5b50565b60008135905061133c81611316565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61139082611347565b810181811067ffffffffffffffff821117156113af576113ae611358565b5b80604052505050565b60006113c26112f8565b90506113ce8282611387565b919050565b600067ffffffffffffffff8211156113ee576113ed611358565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061142f82611404565b9050919050565b61143f81611424565b811461144a57600080fd5b50565b60008135905061145c81611436565b92915050565b6000611475611470846113d3565b6113b8565b90508083825260208201905060208402830185811115611498576114976113ff565b5b835b818110156114c157806114ad888261144d565b84526020840193505060208101905061149a565b5050509392505050565b600082601f8301126114e0576114df611342565b5b81356114f0848260208601611462565b91505092915050565b600080604083850312156115105761150f611302565b5b600061151e8582860161132d565b925050602083013567ffffffffffffffff81111561153f5761153e611307565b5b61154b858286016114cb565b9150509250929050565b61155e8161130c565b82525050565b60006020820190506115796000830184611555565b92915050565b61158881611424565b82525050565b60006020820190506115a3600083018461157f565b92915050565b600080fd5b60008083601f8401126115c4576115c3611342565b5b8235905067ffffffffffffffff8111156115e1576115e06115a9565b5b6020830191508360208202830111156115fd576115fc6113ff565b5b9250929050565b60008060008060008060a0878903121561162157611620611302565b5b600061162f89828a0161132d565b965050602061164089828a0161132d565b955050604087013567ffffffffffffffff81111561166157611660611307565b5b61166d89828a016115ae565b9450945050606061168089828a0161144d565b925050608061169189828a0161132d565b9150509295509295509295565b600080600080600080600060e0888a0312156116bd576116bc611302565b5b60006116cb8a828b0161144d565b97505060206116dc8a828b0161144d565b96505060406116ed8a828b0161132d565b95505060606116fe8a828b0161132d565b945050608061170f8a828b0161132d565b93505060a06117208a828b0161144d565b92505060c06117318a828b0161132d565b91505092959891949750929550565b6000806040838503121561175757611756611302565b5b60006117658582860161144d565b92505060206117768582860161144d565b9150509250929050565b600080600080600080600080610100898b0312156117a1576117a0611302565b5b60006117af8b828c0161144d565b98505060206117c08b828c0161144d565b97505060406117d18b828c0161132d565b96505060606117e28b828c0161132d565b95505060806117f38b828c0161132d565b94505060a06118048b828c0161132d565b93505060c06118158b828c0161144d565b92505060e06118268b828c0161132d565b9150509295985092959890939650565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61186b81611424565b82525050565b600061187d8383611862565b60208301905092915050565b6000602082019050919050565b60006118a182611836565b6118ab8185611841565b93506118b683611852565b8060005b838110156118e75781516118ce8882611871565b97506118d983611889565b9250506001810190506118ba565b5085935050505092915050565b60006040820190506119096000830185611555565b818103602083015261191b8184611896565b90509392505050565b600067ffffffffffffffff82111561193f5761193e611358565b5b602082029050602081019050919050565b60008151905061195f81611316565b92915050565b600061197861197384611924565b6113b8565b9050808382526020820190506020840283018581111561199b5761199a6113ff565b5b835b818110156119c457806119b08882611950565b84526020840193505060208101905061199d565b5050509392505050565b600082601f8301126119e3576119e2611342565b5b81516119f3848260208601611965565b91505092915050565b600060208284031215611a1257611a11611302565b5b600082015167ffffffffffffffff811115611a3057611a2f611307565b5b611a3c848285016119ce565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611a8a57611a89611302565b5b6000611a988482850161144d565b91505092915050565b6000604082019050611ab6600083018561157f565b611ac36020830184611555565b9392505050565b60008115159050919050565b611adf81611aca565b8114611aea57600080fd5b50565b600081519050611afc81611ad6565b92915050565b600060208284031215611b1857611b17611302565b5b6000611b2684828501611aed565b91505092915050565b6000819050919050565b6000611b48602084018461144d565b905092915050565b6000602082019050919050565b6000611b698385611841565b9350611b7482611b2f565b8060005b85811015611bad57611b8a8284611b39565b611b948882611871565b9750611b9f83611b50565b925050600181019050611b78565b5085925050509392505050565b600060a082019050611bcf6000830189611555565b611bdc6020830188611555565b8181036040830152611bef818688611b5d565b9050611bfe606083018561157f565b611c0b6080830184611555565b979650505050505050565b6000604082019050611c2b600083018561157f565b611c38602083018461157f565b9392505050565b600081519050611c4e81611436565b92915050565b600060208284031215611c6a57611c69611302565b5b6000611c7884828501611c3f565b91505092915050565b600082825260208201905092915050565b7f41646170746f723a206e6f6e6578697374656e74207061697200000000000000600082015250565b6000611cc8601983611c81565b9150611cd382611c92565b602082019050919050565b60006020820190508181036000830152611cf781611cbb565b9050919050565b600060e082019050611d13600083018a61157f565b611d20602083018961157f565b611d2d6040830188611555565b611d3a6060830187611555565b611d476080830186611555565b611d5460a083018561157f565b611d6160c0830184611555565b98975050505050505050565b60008060408385031215611d8457611d83611302565b5b6000611d9285828601611950565b9250506020611da385828601611950565b9150509250929050565b600061010082019050611dc3600083018b61157f565b611dd0602083018a61157f565b611ddd6040830189611555565b611dea6060830188611555565b611df76080830187611555565b611e0460a0830186611555565b611e1160c083018561157f565b611e1e60e0830184611555565b9998505050505050505050565b600080600060608486031215611e4457611e43611302565b5b6000611e5286828701611950565b9350506020611e6386828701611950565b9250506040611e7486828701611950565b9150509250925092565b6000606082019050611e93600083018661157f565b611ea0602083018561157f565b611ead6040830184611555565b949350505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611f11602a83611c81565b9150611f1c82611eb5565b604082019050919050565b60006020820190508181036000830152611f4081611f04565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611fa3602683611c81565b9150611fae82611f47565b604082019050919050565b60006020820190508181036000830152611fd281611f96565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600061200f601d83611c81565b915061201a82611fd9565b602082019050919050565b6000602082019050818103600083015261203e81612002565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561207957808201518184015260208101905061205e565b83811115612088576000848401525b50505050565b600061209982612045565b6120a38185612050565b93506120b381856020860161205b565b80840191505092915050565b60006120cb828461208e565b915081905092915050565b600081519050919050565b60006120ec826120d6565b6120f68185611c81565b935061210681856020860161205b565b61210f81611347565b840191505092915050565b6000602082019050818103600083015261213481846120e1565b90509291505056fea2646970667358221220490b22fadbbb92f52018e9f8f1f6cb323c71d1507bf4d188d563e1c4ee02edee64736f6c634300080b0033";

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
