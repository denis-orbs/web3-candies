/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface TraderJoeRouterAbi extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): TraderJoeRouterAbi;
  clone(): TraderJoeRouterAbi;
  methods: {
    WAVAX(): NonPayableTransactionObject<string>;

    addLiquidity(
      tokenA: string,
      tokenB: string,
      amountADesired: number | string | BN,
      amountBDesired: number | string | BN,
      amountAMin: number | string | BN,
      amountBMin: number | string | BN,
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<{
      amountA: string;
      amountB: string;
      liquidity: string;
      0: string;
      1: string;
      2: string;
    }>;

    addLiquidityAVAX(
      token: string,
      amountTokenDesired: number | string | BN,
      amountTokenMin: number | string | BN,
      amountAVAXMin: number | string | BN,
      to: string,
      deadline: number | string | BN
    ): PayableTransactionObject<{
      amountToken: string;
      amountAVAX: string;
      liquidity: string;
      0: string;
      1: string;
      2: string;
    }>;

    factory(): NonPayableTransactionObject<string>;

    getAmountIn(
      amountOut: number | string | BN,
      reserveIn: number | string | BN,
      reserveOut: number | string | BN
    ): NonPayableTransactionObject<string>;

    getAmountOut(
      amountIn: number | string | BN,
      reserveIn: number | string | BN,
      reserveOut: number | string | BN
    ): NonPayableTransactionObject<string>;

    getAmountsIn(
      amountOut: number | string | BN,
      path: string[]
    ): NonPayableTransactionObject<string[]>;

    getAmountsOut(
      amountIn: number | string | BN,
      path: string[]
    ): NonPayableTransactionObject<string[]>;

    quote(
      amountA: number | string | BN,
      reserveA: number | string | BN,
      reserveB: number | string | BN
    ): NonPayableTransactionObject<string>;

    removeLiquidity(
      tokenA: string,
      tokenB: string,
      liquidity: number | string | BN,
      amountAMin: number | string | BN,
      amountBMin: number | string | BN,
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<{
      amountA: string;
      amountB: string;
      0: string;
      1: string;
    }>;

    removeLiquidityAVAX(
      token: string,
      liquidity: number | string | BN,
      amountTokenMin: number | string | BN,
      amountAVAXMin: number | string | BN,
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<{
      amountToken: string;
      amountAVAX: string;
      0: string;
      1: string;
    }>;

    removeLiquidityAVAXSupportingFeeOnTransferTokens(
      token: string,
      liquidity: number | string | BN,
      amountTokenMin: number | string | BN,
      amountAVAXMin: number | string | BN,
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<string>;

    removeLiquidityAVAXWithPermit(
      token: string,
      liquidity: number | string | BN,
      amountTokenMin: number | string | BN,
      amountAVAXMin: number | string | BN,
      to: string,
      deadline: number | string | BN,
      approveMax: boolean,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<{
      amountToken: string;
      amountAVAX: string;
      0: string;
      1: string;
    }>;

    removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens(
      token: string,
      liquidity: number | string | BN,
      amountTokenMin: number | string | BN,
      amountAVAXMin: number | string | BN,
      to: string,
      deadline: number | string | BN,
      approveMax: boolean,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<string>;

    removeLiquidityWithPermit(
      tokenA: string,
      tokenB: string,
      liquidity: number | string | BN,
      amountAMin: number | string | BN,
      amountBMin: number | string | BN,
      to: string,
      deadline: number | string | BN,
      approveMax: boolean,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<{
      amountA: string;
      amountB: string;
      0: string;
      1: string;
    }>;

    swapAVAXForExactTokens(
      amountOut: number | string | BN,
      path: string[],
      to: string,
      deadline: number | string | BN
    ): PayableTransactionObject<string[]>;

    swapExactAVAXForTokens(
      amountOutMin: number | string | BN,
      path: string[],
      to: string,
      deadline: number | string | BN
    ): PayableTransactionObject<string[]>;

    swapExactAVAXForTokensSupportingFeeOnTransferTokens(
      amountOutMin: number | string | BN,
      path: string[],
      to: string,
      deadline: number | string | BN
    ): PayableTransactionObject<void>;

    swapExactTokensForAVAX(
      amountIn: number | string | BN,
      amountOutMin: number | string | BN,
      path: string[],
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    swapExactTokensForAVAXSupportingFeeOnTransferTokens(
      amountIn: number | string | BN,
      amountOutMin: number | string | BN,
      path: string[],
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<void>;

    swapExactTokensForTokens(
      amountIn: number | string | BN,
      amountOutMin: number | string | BN,
      path: string[],
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    swapExactTokensForTokensSupportingFeeOnTransferTokens(
      amountIn: number | string | BN,
      amountOutMin: number | string | BN,
      path: string[],
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<void>;

    swapTokensForExactAVAX(
      amountOut: number | string | BN,
      amountInMax: number | string | BN,
      path: string[],
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    swapTokensForExactTokens(
      amountOut: number | string | BN,
      amountInMax: number | string | BN,
      path: string[],
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<string[]>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}