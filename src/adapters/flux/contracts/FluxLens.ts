/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace CompoundLens {
  export type OTokenBalancesStruct = {
    cToken: AddressLike;
    balanceOf: BigNumberish;
    borrowBalanceCurrent: BigNumberish;
    balanceOfUnderlying: BigNumberish;
    tokenBalance: BigNumberish;
    tokenAllowance: BigNumberish;
  };

  export type OTokenBalancesStructOutput = [
    cToken: string,
    balanceOf: bigint,
    borrowBalanceCurrent: bigint,
    balanceOfUnderlying: bigint,
    tokenBalance: bigint,
    tokenAllowance: bigint
  ] & {
    cToken: string;
    balanceOf: bigint;
    borrowBalanceCurrent: bigint;
    balanceOfUnderlying: bigint;
    tokenBalance: bigint;
    tokenAllowance: bigint;
  };

  export type OTokenMetadataStruct = {
    cToken: AddressLike;
    exchangeRateCurrent: BigNumberish;
    supplyRatePerBlock: BigNumberish;
    borrowRatePerBlock: BigNumberish;
    reserveFactorMantissa: BigNumberish;
    totalBorrows: BigNumberish;
    totalReserves: BigNumberish;
    totalSupply: BigNumberish;
    totalCash: BigNumberish;
    isListed: boolean;
    collateralFactorMantissa: BigNumberish;
    underlyingAssetAddress: AddressLike;
    cTokenDecimals: BigNumberish;
    underlyingDecimals: BigNumberish;
  };

  export type OTokenMetadataStructOutput = [
    cToken: string,
    exchangeRateCurrent: bigint,
    supplyRatePerBlock: bigint,
    borrowRatePerBlock: bigint,
    reserveFactorMantissa: bigint,
    totalBorrows: bigint,
    totalReserves: bigint,
    totalSupply: bigint,
    totalCash: bigint,
    isListed: boolean,
    collateralFactorMantissa: bigint,
    underlyingAssetAddress: string,
    cTokenDecimals: bigint,
    underlyingDecimals: bigint
  ] & {
    cToken: string;
    exchangeRateCurrent: bigint;
    supplyRatePerBlock: bigint;
    borrowRatePerBlock: bigint;
    reserveFactorMantissa: bigint;
    totalBorrows: bigint;
    totalReserves: bigint;
    totalSupply: bigint;
    totalCash: bigint;
    isListed: boolean;
    collateralFactorMantissa: bigint;
    underlyingAssetAddress: string;
    cTokenDecimals: bigint;
    underlyingDecimals: bigint;
  };

  export type OTokenUnderlyingPriceStruct = {
    cToken: AddressLike;
    underlyingPrice: BigNumberish;
  };

  export type OTokenUnderlyingPriceStructOutput = [
    cToken: string,
    underlyingPrice: bigint
  ] & { cToken: string; underlyingPrice: bigint };

  export type AccountLimitsStruct = {
    markets: AddressLike[];
    liquidity: BigNumberish;
    shortfall: BigNumberish;
  };

  export type AccountLimitsStructOutput = [
    markets: string[],
    liquidity: bigint,
    shortfall: bigint
  ] & { markets: string[]; liquidity: bigint; shortfall: bigint };
}

export interface FluxLensInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "cTokenBalances"
      | "cTokenBalancesAll"
      | "cTokenMetadata"
      | "cTokenMetadataAll"
      | "cTokenUnderlyingPrice"
      | "cTokenUnderlyingPriceAll"
      | "getAccountLimits"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cTokenBalances",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cTokenBalancesAll",
    values: [AddressLike[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cTokenMetadata",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cTokenMetadataAll",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cTokenUnderlyingPrice",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cTokenUnderlyingPriceAll",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountLimits",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "cTokenBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cTokenBalancesAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cTokenMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cTokenMetadataAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cTokenUnderlyingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cTokenUnderlyingPriceAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountLimits",
    data: BytesLike
  ): Result;
}

export interface FluxLens extends BaseContract {
  connect(runner?: ContractRunner | null): FluxLens;
  waitForDeployment(): Promise<this>;

  interface: FluxLensInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  cTokenBalances: TypedContractMethod<
    [cToken: AddressLike, account: AddressLike],
    [CompoundLens.OTokenBalancesStructOutput],
    "nonpayable"
  >;

  cTokenBalancesAll: TypedContractMethod<
    [cTokens: AddressLike[], account: AddressLike],
    [CompoundLens.OTokenBalancesStructOutput[]],
    "nonpayable"
  >;

  cTokenMetadata: TypedContractMethod<
    [cToken: AddressLike],
    [CompoundLens.OTokenMetadataStructOutput],
    "nonpayable"
  >;

  cTokenMetadataAll: TypedContractMethod<
    [cTokens: AddressLike[]],
    [CompoundLens.OTokenMetadataStructOutput[]],
    "nonpayable"
  >;

  cTokenUnderlyingPrice: TypedContractMethod<
    [cToken: AddressLike],
    [CompoundLens.OTokenUnderlyingPriceStructOutput],
    "nonpayable"
  >;

  cTokenUnderlyingPriceAll: TypedContractMethod<
    [cTokens: AddressLike[]],
    [CompoundLens.OTokenUnderlyingPriceStructOutput[]],
    "nonpayable"
  >;

  getAccountLimits: TypedContractMethod<
    [comptroller: AddressLike, account: AddressLike],
    [CompoundLens.AccountLimitsStructOutput],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cTokenBalances"
  ): TypedContractMethod<
    [cToken: AddressLike, account: AddressLike],
    [CompoundLens.OTokenBalancesStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cTokenBalancesAll"
  ): TypedContractMethod<
    [cTokens: AddressLike[], account: AddressLike],
    [CompoundLens.OTokenBalancesStructOutput[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cTokenMetadata"
  ): TypedContractMethod<
    [cToken: AddressLike],
    [CompoundLens.OTokenMetadataStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cTokenMetadataAll"
  ): TypedContractMethod<
    [cTokens: AddressLike[]],
    [CompoundLens.OTokenMetadataStructOutput[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cTokenUnderlyingPrice"
  ): TypedContractMethod<
    [cToken: AddressLike],
    [CompoundLens.OTokenUnderlyingPriceStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cTokenUnderlyingPriceAll"
  ): TypedContractMethod<
    [cTokens: AddressLike[]],
    [CompoundLens.OTokenUnderlyingPriceStructOutput[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAccountLimits"
  ): TypedContractMethod<
    [comptroller: AddressLike, account: AddressLike],
    [CompoundLens.AccountLimitsStructOutput],
    "nonpayable"
  >;

  filters: {};
}
