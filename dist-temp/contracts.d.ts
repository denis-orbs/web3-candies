import { TransactionReceipt } from "web3-core";
import { CallOptions, Contract as ContractOrig, ContractOptions, SendOptions } from "web3-eth-contract";
import { BaseContract, BlockType } from "@typechain/web3-v1/static/types";
import { AbiItem } from "web3-utils";
import { BlockTransactionString } from "web3-eth";
export declare type Contract = ContractOrig | BaseContract;
export declare type Options = CallOptions | SendOptions | ContractOptions;
export declare type BlockNumber = BlockType;
export declare type BlockInfo = BlockTransactionString & {
    timestamp: number;
};
export declare type Receipt = TransactionReceipt;
export declare type Abi = AbiItem | AbiItem[];
export declare function contract<T extends Contract>(abi: Abi, address: string, options?: ContractOptions): T;
export declare function deployArtifact<T extends Contract>(contractName: string, opts: SendOptions, constructorArgs?: any[]): Promise<T>;
export declare function parseEvents(c: Contract, tx: TransactionReceipt): void;
