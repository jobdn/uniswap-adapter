//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "hardhat/console.sol";

contract UniswapAdaptor {
    using SafeERC20 for IERC20;
    address public immutable ROUTER_ADDRESS;
    address public immutable FACTORY_ADDRESS;

    constructor(address _router, address _factory) {
        ROUTER_ADDRESS = _router;
        FACTORY_ADDRESS = _factory;
    }

    function createPair(address _token0, address _token1) public {
        IUniswapV2Factory(FACTORY_ADDRESS).createPair(_token0, _token1);
    }

    /// @notice Transfers tokens to adaptor contract and approves tokens for ROUTER_ADDRESS to add liquidity
    /// @param _tokenAddress One of the two tokens in pair
    /// @param _tokenAmount Amount of tokens wich will be deposited ot pair
    function _prepareForAddLiquidity(
        address _tokenAddress,
        uint256 _tokenAmount
    ) private {
        IERC20(_tokenAddress).safeTransferFrom(
            msg.sender,
            address(this),
            _tokenAmount
        );

        IERC20(_tokenAddress).approve(ROUTER_ADDRESS, _tokenAmount);
    }

    function addLiquidity(
        address _tokenA,
        address _tokenB,
        uint256 _amountADesired,
        uint256 _amountBDesired,
        uint256 _amountAMin,
        uint256 _amountBMin,
        address _to,
        uint256 _deadline
    ) public {
        _prepareForAddLiquidity(_tokenA, _amountADesired);
        _prepareForAddLiquidity(_tokenB, _amountBDesired);

        IUniswapV2Router02(ROUTER_ADDRESS).addLiquidity(
            _tokenA,
            _tokenB,
            _amountADesired,
            _amountBDesired,
            _amountAMin,
            _amountBMin,
            _to,
            _deadline
        );
    }
}
