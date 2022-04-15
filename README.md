# Uniswap Adaptor

## Add liquidity

Before adding liquidity, you need to allow the `UniswapAdaptor` contract debit tokens from your account.

```shell
hh addLiq --token-a <first_token> --token-b <second_token> --amount-a-desired <amount-a> --amount-b-desired <amount-b> --amount-a-min <min_amount_a> --amount-b-min <min_amount_b> --to <recipient> --deadline <unix_time> --network rinkeby
```

## Remove liquidity

Before removing liquidity, you need to allow the `UniswapAdaptor` to send lp-tokens.

Call `approve(address of adaptor, amount of tokens)` method of the pair contract.

## Swap

Before swap, you need approve the `UniswapAdaptor` to send tokens for sale.

### Swap task

When you use the swap task you need to pass `path` arg as a like array string **ELEMENTS ARE SEPARATED BY A COMMA, WITHOU SPACE**

```shell
    "[first_address,second_address]"
```

## Check price for swap

Just run `price` task
