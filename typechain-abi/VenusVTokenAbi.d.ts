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

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;

export interface VenusVTokenAbi extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VenusVTokenAbi;
  clone(): VenusVTokenAbi;
  methods: {
    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    balanceOf(account: string): NonPayableTransactionObject<string>;

    balanceOfUnderlying(account: string): NonPayableTransactionObject<string>;

    borrow(
      borrowAmount: number | string | BN
    ): NonPayableTransactionObject<string>;

    borrowBalanceCurrent(account: string): NonPayableTransactionObject<string>;

    borrowRatePerBlock(): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    exchangeRateCurrent(): NonPayableTransactionObject<string>;

    getAccountSnapshot(account: string): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    getCash(): NonPayableTransactionObject<string>;

    mint(mintAmount: number | string | BN): NonPayableTransactionObject<string>;

    name(): NonPayableTransactionObject<string>;

    redeem(
      redeemTokens: number | string | BN
    ): NonPayableTransactionObject<string>;

    redeemUnderlying(
      redeemAmount: number | string | BN
    ): NonPayableTransactionObject<string>;

    repayBorrow(
      repayAmount: number | string | BN
    ): NonPayableTransactionObject<string>;

    supplyRatePerBlock(): NonPayableTransactionObject<string>;

    symbol(): NonPayableTransactionObject<string>;

    totalBorrowsCurrent(): NonPayableTransactionObject<string>;

    totalReserves(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}