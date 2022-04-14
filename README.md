# Uniswap Adaptor

## Add liquidity

Before adding liquidity, you need to allow the `UniswapAdaptor` contract debit tokens from your account.

```shell
hh addLiq --token-a 0x65eF1bfaE803EE16119C15CBD50522fb88a9A4fd --token-b 0xc729FF477035efBf155989905BEBc002488ea10b --amount-a-desired <amount-a> --amount-b-desired <amount-b> --amount-a-min 0 --amount-b-min 0 --to 0x81B2D62ABa2Fb18575f8F8D7bf9fCb2ad7A50c46 --deadline 1649969221 --network rinkeby
```

## Remove liquidity

Before removing liquidity, you need to allow the `UniswapAdaptor` to send lp-tokens.

Call `approve(address of adaptor, amount of tokens)` method of the pair contract.

## Swap

Before swap, you need approve the `UniswapAdaptor` to send tokens for sale.

## Templates
