//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

contract UniswapAdaptor {
    address public immutable ROUTER_ADDRESS;
    address public immutable FACTORY_ADDRESS;

    constructor(address _router, address _factory) {
        ROUTER_ADDRESS = _router;
        FACTORY_ADDRESS = _factory;
    }

    function createPair(address _token0, address _token1)
        public
        returns (address pair)
    {
        IUniswapV2Factory(FACTORY_ADDRESS).createPair(_token0, _token1);
        pair = IUniswapV2Factory(FACTORY_ADDRESS).getPair(_token0, _token1);
    }
}
