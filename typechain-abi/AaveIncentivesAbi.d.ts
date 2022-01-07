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

export type AssetConfigUpdated = ContractEventLog<{
  asset: string;
  emission: string;
  0: string;
  1: string;
}>;
export type AssetIndexUpdated = ContractEventLog<{
  asset: string;
  index: string;
  0: string;
  1: string;
}>;
export type ClaimerSet = ContractEventLog<{
  user: string;
  claimer: string;
  0: string;
  1: string;
}>;
export type DistributionEndUpdated = ContractEventLog<{
  newDistributionEnd: string;
  0: string;
}>;
export type RewardsAccrued = ContractEventLog<{
  user: string;
  amount: string;
  0: string;
  1: string;
}>;
export type RewardsClaimed = ContractEventLog<{
  user: string;
  to: string;
  claimer: string;
  amount: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type UserIndexUpdated = ContractEventLog<{
  user: string;
  asset: string;
  index: string;
  0: string;
  1: string;
  2: string;
}>;

export interface AaveIncentivesAbi extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): AaveIncentivesAbi;
  clone(): AaveIncentivesAbi;
  methods: {
    DISTRIBUTION_END(): NonPayableTransactionObject<string>;

    EMISSION_MANAGER(): NonPayableTransactionObject<string>;

    PRECISION(): NonPayableTransactionObject<string>;

    REVISION(): NonPayableTransactionObject<string>;

    REWARD_TOKEN(): NonPayableTransactionObject<string>;

    STAKE_TOKEN(): NonPayableTransactionObject<string>;

    assets(arg0: string): NonPayableTransactionObject<{
      emissionPerSecond: string;
      index: string;
      lastUpdateTimestamp: string;
      0: string;
      1: string;
      2: string;
    }>;

    claimRewards(
      assets: string[],
      amount: number | string | BN,
      to: string
    ): NonPayableTransactionObject<string>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: number | string | BN,
      user: string,
      to: string
    ): NonPayableTransactionObject<string>;

    configureAssets(
      assets: string[],
      emissionsPerSecond: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    getAssetData(asset: string): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string;
    }>;

    getClaimer(user: string): NonPayableTransactionObject<string>;

    getDistributionEnd(): NonPayableTransactionObject<string>;

    getRewardsBalance(
      assets: string[],
      user: string
    ): NonPayableTransactionObject<string>;

    getUserAssetData(
      user: string,
      asset: string
    ): NonPayableTransactionObject<string>;

    getUserUnclaimedRewards(_user: string): NonPayableTransactionObject<string>;

    handleAction(
      user: string,
      totalSupply: number | string | BN,
      userBalance: number | string | BN
    ): NonPayableTransactionObject<void>;

    initialize(addressesProvider: string): NonPayableTransactionObject<void>;

    setClaimer(user: string, caller: string): NonPayableTransactionObject<void>;

    setDistributionEnd(
      distributionEnd: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    AssetConfigUpdated(cb?: Callback<AssetConfigUpdated>): EventEmitter;
    AssetConfigUpdated(
      options?: EventOptions,
      cb?: Callback<AssetConfigUpdated>
    ): EventEmitter;

    AssetIndexUpdated(cb?: Callback<AssetIndexUpdated>): EventEmitter;
    AssetIndexUpdated(
      options?: EventOptions,
      cb?: Callback<AssetIndexUpdated>
    ): EventEmitter;

    ClaimerSet(cb?: Callback<ClaimerSet>): EventEmitter;
    ClaimerSet(options?: EventOptions, cb?: Callback<ClaimerSet>): EventEmitter;

    DistributionEndUpdated(cb?: Callback<DistributionEndUpdated>): EventEmitter;
    DistributionEndUpdated(
      options?: EventOptions,
      cb?: Callback<DistributionEndUpdated>
    ): EventEmitter;

    RewardsAccrued(cb?: Callback<RewardsAccrued>): EventEmitter;
    RewardsAccrued(
      options?: EventOptions,
      cb?: Callback<RewardsAccrued>
    ): EventEmitter;

    RewardsClaimed(cb?: Callback<RewardsClaimed>): EventEmitter;
    RewardsClaimed(
      options?: EventOptions,
      cb?: Callback<RewardsClaimed>
    ): EventEmitter;

    UserIndexUpdated(cb?: Callback<UserIndexUpdated>): EventEmitter;
    UserIndexUpdated(
      options?: EventOptions,
      cb?: Callback<UserIndexUpdated>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AssetConfigUpdated", cb: Callback<AssetConfigUpdated>): void;
  once(
    event: "AssetConfigUpdated",
    options: EventOptions,
    cb: Callback<AssetConfigUpdated>
  ): void;

  once(event: "AssetIndexUpdated", cb: Callback<AssetIndexUpdated>): void;
  once(
    event: "AssetIndexUpdated",
    options: EventOptions,
    cb: Callback<AssetIndexUpdated>
  ): void;

  once(event: "ClaimerSet", cb: Callback<ClaimerSet>): void;
  once(
    event: "ClaimerSet",
    options: EventOptions,
    cb: Callback<ClaimerSet>
  ): void;

  once(
    event: "DistributionEndUpdated",
    cb: Callback<DistributionEndUpdated>
  ): void;
  once(
    event: "DistributionEndUpdated",
    options: EventOptions,
    cb: Callback<DistributionEndUpdated>
  ): void;

  once(event: "RewardsAccrued", cb: Callback<RewardsAccrued>): void;
  once(
    event: "RewardsAccrued",
    options: EventOptions,
    cb: Callback<RewardsAccrued>
  ): void;

  once(event: "RewardsClaimed", cb: Callback<RewardsClaimed>): void;
  once(
    event: "RewardsClaimed",
    options: EventOptions,
    cb: Callback<RewardsClaimed>
  ): void;

  once(event: "UserIndexUpdated", cb: Callback<UserIndexUpdated>): void;
  once(
    event: "UserIndexUpdated",
    options: EventOptions,
    cb: Callback<UserIndexUpdated>
  ): void;
}