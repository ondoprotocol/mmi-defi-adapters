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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface SwEthInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "AccessControlManager"
      | "addToWhitelist"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "batchAddToWhitelist"
      | "batchRemoveFromWhitelist"
      | "decimals"
      | "decreaseAllowance"
      | "deposit"
      | "depositWithReferral"
      | "disableWhitelist"
      | "enableWhitelist"
      | "ethToSwETHRate"
      | "getRate"
      | "increaseAllowance"
      | "initialize"
      | "lastRepriceETHReserves"
      | "lastRepriceUNIX"
      | "maximumRepriceDifferencePercentage"
      | "maximumRepriceswETHDifferencePercentage"
      | "minimumRepriceTime"
      | "name"
      | "nodeOperatorRewardPercentage"
      | "removeFromWhitelist"
      | "reprice"
      | "setMaximumRepriceDifferencePercentage"
      | "setMaximumRepriceswETHDifferencePercentage"
      | "setMinimumRepriceTime"
      | "setNodeOperatorRewardPercentage"
      | "setSwellTreasuryRewardPercentage"
      | "swETHToETHRate"
      | "swellTreasuryRewardPercentage"
      | "symbol"
      | "totalETHDeposited"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "whitelistEnabled"
      | "whitelistedAddresses"
      | "withdrawERC20"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddedToWhitelist"
      | "Approval"
      | "ETHDepositReceived"
      | "ETHWithdrawn"
      | "Initialized"
      | "MaximumRepriceDifferencePercentageUpdated"
      | "MaximumRepriceswETHDifferencePercentageUpdated"
      | "MinimumRepriceTimeUpdated"
      | "NodeOperatorRewardPercentageUpdate"
      | "RemovedFromWhitelist"
      | "Reprice"
      | "SwellTreasuryRewardPercentageUpdate"
      | "Transfer"
      | "WhitelistDisabled"
      | "WhitelistEnabled"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "AccessControlManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addToWhitelist",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "batchAddToWhitelist",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchRemoveFromWhitelist",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositWithReferral",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "disableWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enableWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ethToSwETHRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getRate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastRepriceETHReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastRepriceUNIX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maximumRepriceDifferencePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maximumRepriceswETHDifferencePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumRepriceTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nodeOperatorRewardPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromWhitelist",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reprice",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaximumRepriceDifferencePercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaximumRepriceswETHDifferencePercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumRepriceTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setNodeOperatorRewardPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwellTreasuryRewardPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swETHToETHRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swellTreasuryRewardPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalETHDeposited",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistedAddresses",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "AccessControlManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchAddToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchRemoveFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositWithReferral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ethToSwETHRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastRepriceETHReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRepriceUNIX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maximumRepriceDifferencePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maximumRepriceswETHDifferencePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumRepriceTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nodeOperatorRewardPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reprice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMaximumRepriceDifferencePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaximumRepriceswETHDifferencePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumRepriceTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNodeOperatorRewardPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwellTreasuryRewardPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swETHToETHRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swellTreasuryRewardPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalETHDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20",
    data: BytesLike
  ): Result;
}

export namespace AddedToWhitelistEvent {
  export type InputTuple = [_address: AddressLike];
  export type OutputTuple = [_address: string];
  export interface OutputObject {
    _address: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ETHDepositReceivedEvent {
  export type InputTuple = [
    from: AddressLike,
    amount: BigNumberish,
    swETHMinted: BigNumberish,
    newTotalETHDeposited: BigNumberish,
    referral: AddressLike
  ];
  export type OutputTuple = [
    from: string,
    amount: bigint,
    swETHMinted: bigint,
    newTotalETHDeposited: bigint,
    referral: string
  ];
  export interface OutputObject {
    from: string;
    amount: bigint;
    swETHMinted: bigint;
    newTotalETHDeposited: bigint;
    referral: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ETHWithdrawnEvent {
  export type InputTuple = [
    to: AddressLike,
    swETHBurned: BigNumberish,
    ethReturned: BigNumberish
  ];
  export type OutputTuple = [
    to: string,
    swETHBurned: bigint,
    ethReturned: bigint
  ];
  export interface OutputObject {
    to: string;
    swETHBurned: bigint;
    ethReturned: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MaximumRepriceDifferencePercentageUpdatedEvent {
  export type InputTuple = [
    _oldMaximumRepriceDifferencePercentage: BigNumberish,
    _newMaximumRepriceDifferencePercentage: BigNumberish
  ];
  export type OutputTuple = [
    _oldMaximumRepriceDifferencePercentage: bigint,
    _newMaximumRepriceDifferencePercentage: bigint
  ];
  export interface OutputObject {
    _oldMaximumRepriceDifferencePercentage: bigint;
    _newMaximumRepriceDifferencePercentage: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MaximumRepriceswETHDifferencePercentageUpdatedEvent {
  export type InputTuple = [
    _oldMaximumRepriceswETHDifferencePercentage: BigNumberish,
    _newMaximumRepriceswETHDifferencePercentage: BigNumberish
  ];
  export type OutputTuple = [
    _oldMaximumRepriceswETHDifferencePercentage: bigint,
    _newMaximumRepriceswETHDifferencePercentage: bigint
  ];
  export interface OutputObject {
    _oldMaximumRepriceswETHDifferencePercentage: bigint;
    _newMaximumRepriceswETHDifferencePercentage: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MinimumRepriceTimeUpdatedEvent {
  export type InputTuple = [
    _oldMinimumRepriceTime: BigNumberish,
    _newMinimumRepriceTime: BigNumberish
  ];
  export type OutputTuple = [
    _oldMinimumRepriceTime: bigint,
    _newMinimumRepriceTime: bigint
  ];
  export interface OutputObject {
    _oldMinimumRepriceTime: bigint;
    _newMinimumRepriceTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NodeOperatorRewardPercentageUpdateEvent {
  export type InputTuple = [
    oldPercentage: BigNumberish,
    newPercentage: BigNumberish
  ];
  export type OutputTuple = [oldPercentage: bigint, newPercentage: bigint];
  export interface OutputObject {
    oldPercentage: bigint;
    newPercentage: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemovedFromWhitelistEvent {
  export type InputTuple = [_address: AddressLike];
  export type OutputTuple = [_address: string];
  export interface OutputObject {
    _address: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RepriceEvent {
  export type InputTuple = [
    newEthReserves: BigNumberish,
    newSwETHToETHRate: BigNumberish,
    nodeOperatorRewards: BigNumberish,
    swellTreasuryRewards: BigNumberish,
    totalETHDeposited: BigNumberish
  ];
  export type OutputTuple = [
    newEthReserves: bigint,
    newSwETHToETHRate: bigint,
    nodeOperatorRewards: bigint,
    swellTreasuryRewards: bigint,
    totalETHDeposited: bigint
  ];
  export interface OutputObject {
    newEthReserves: bigint;
    newSwETHToETHRate: bigint;
    nodeOperatorRewards: bigint;
    swellTreasuryRewards: bigint;
    totalETHDeposited: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SwellTreasuryRewardPercentageUpdateEvent {
  export type InputTuple = [
    oldPercentage: BigNumberish,
    newPercentage: BigNumberish
  ];
  export type OutputTuple = [oldPercentage: bigint, newPercentage: bigint];
  export interface OutputObject {
    oldPercentage: bigint;
    newPercentage: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WhitelistDisabledEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WhitelistEnabledEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SwEth extends BaseContract {
  connect(runner?: ContractRunner | null): SwEth;
  waitForDeployment(): Promise<this>;

  interface: SwEthInterface;

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

  AccessControlManager: TypedContractMethod<[], [string], "view">;

  addToWhitelist: TypedContractMethod<
    [_address: AddressLike],
    [void],
    "nonpayable"
  >;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  batchAddToWhitelist: TypedContractMethod<
    [_addresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  batchRemoveFromWhitelist: TypedContractMethod<
    [_addresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  decimals: TypedContractMethod<[], [bigint], "view">;

  decreaseAllowance: TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  deposit: TypedContractMethod<[], [void], "payable">;

  depositWithReferral: TypedContractMethod<
    [referral: AddressLike],
    [void],
    "payable"
  >;

  disableWhitelist: TypedContractMethod<[], [void], "nonpayable">;

  enableWhitelist: TypedContractMethod<[], [void], "nonpayable">;

  ethToSwETHRate: TypedContractMethod<[], [bigint], "view">;

  getRate: TypedContractMethod<[], [bigint], "view">;

  increaseAllowance: TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [_accessControlManager: AddressLike],
    [void],
    "nonpayable"
  >;

  lastRepriceETHReserves: TypedContractMethod<[], [bigint], "view">;

  lastRepriceUNIX: TypedContractMethod<[], [bigint], "view">;

  maximumRepriceDifferencePercentage: TypedContractMethod<[], [bigint], "view">;

  maximumRepriceswETHDifferencePercentage: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  minimumRepriceTime: TypedContractMethod<[], [bigint], "view">;

  name: TypedContractMethod<[], [string], "view">;

  nodeOperatorRewardPercentage: TypedContractMethod<[], [bigint], "view">;

  removeFromWhitelist: TypedContractMethod<
    [_address: AddressLike],
    [void],
    "nonpayable"
  >;

  reprice: TypedContractMethod<
    [
      _preRewardETHReserves: BigNumberish,
      _newETHRewards: BigNumberish,
      _swETHTotalSupply: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setMaximumRepriceDifferencePercentage: TypedContractMethod<
    [_maximumRepriceDifferencePercentage: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMaximumRepriceswETHDifferencePercentage: TypedContractMethod<
    [_maximumRepriceswETHDifferencePercentage: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMinimumRepriceTime: TypedContractMethod<
    [_minimumRepriceTime: BigNumberish],
    [void],
    "nonpayable"
  >;

  setNodeOperatorRewardPercentage: TypedContractMethod<
    [_newNodeOperatorRewardPercentage: BigNumberish],
    [void],
    "nonpayable"
  >;

  setSwellTreasuryRewardPercentage: TypedContractMethod<
    [_newSwellTreasuryRewardPercentage: BigNumberish],
    [void],
    "nonpayable"
  >;

  swETHToETHRate: TypedContractMethod<[], [bigint], "view">;

  swellTreasuryRewardPercentage: TypedContractMethod<[], [bigint], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  totalETHDeposited: TypedContractMethod<[], [bigint], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  whitelistEnabled: TypedContractMethod<[], [boolean], "view">;

  whitelistedAddresses: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  withdrawERC20: TypedContractMethod<
    [_token: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "AccessControlManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addToWhitelist"
  ): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "batchAddToWhitelist"
  ): TypedContractMethod<[_addresses: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "batchRemoveFromWhitelist"
  ): TypedContractMethod<[_addresses: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "depositWithReferral"
  ): TypedContractMethod<[referral: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "disableWhitelist"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "enableWhitelist"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "ethToSwETHRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "increaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_accessControlManager: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lastRepriceETHReserves"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastRepriceUNIX"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maximumRepriceDifferencePercentage"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maximumRepriceswETHDifferencePercentage"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minimumRepriceTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nodeOperatorRewardPercentage"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "removeFromWhitelist"
  ): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "reprice"
  ): TypedContractMethod<
    [
      _preRewardETHReserves: BigNumberish,
      _newETHRewards: BigNumberish,
      _swETHTotalSupply: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMaximumRepriceDifferencePercentage"
  ): TypedContractMethod<
    [_maximumRepriceDifferencePercentage: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMaximumRepriceswETHDifferencePercentage"
  ): TypedContractMethod<
    [_maximumRepriceswETHDifferencePercentage: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMinimumRepriceTime"
  ): TypedContractMethod<
    [_minimumRepriceTime: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setNodeOperatorRewardPercentage"
  ): TypedContractMethod<
    [_newNodeOperatorRewardPercentage: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSwellTreasuryRewardPercentage"
  ): TypedContractMethod<
    [_newSwellTreasuryRewardPercentage: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swETHToETHRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "swellTreasuryRewardPercentage"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalETHDeposited"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "whitelistEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "whitelistedAddresses"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "withdrawERC20"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AddedToWhitelist"
  ): TypedContractEvent<
    AddedToWhitelistEvent.InputTuple,
    AddedToWhitelistEvent.OutputTuple,
    AddedToWhitelistEvent.OutputObject
  >;
  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "ETHDepositReceived"
  ): TypedContractEvent<
    ETHDepositReceivedEvent.InputTuple,
    ETHDepositReceivedEvent.OutputTuple,
    ETHDepositReceivedEvent.OutputObject
  >;
  getEvent(
    key: "ETHWithdrawn"
  ): TypedContractEvent<
    ETHWithdrawnEvent.InputTuple,
    ETHWithdrawnEvent.OutputTuple,
    ETHWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "MaximumRepriceDifferencePercentageUpdated"
  ): TypedContractEvent<
    MaximumRepriceDifferencePercentageUpdatedEvent.InputTuple,
    MaximumRepriceDifferencePercentageUpdatedEvent.OutputTuple,
    MaximumRepriceDifferencePercentageUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "MaximumRepriceswETHDifferencePercentageUpdated"
  ): TypedContractEvent<
    MaximumRepriceswETHDifferencePercentageUpdatedEvent.InputTuple,
    MaximumRepriceswETHDifferencePercentageUpdatedEvent.OutputTuple,
    MaximumRepriceswETHDifferencePercentageUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "MinimumRepriceTimeUpdated"
  ): TypedContractEvent<
    MinimumRepriceTimeUpdatedEvent.InputTuple,
    MinimumRepriceTimeUpdatedEvent.OutputTuple,
    MinimumRepriceTimeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "NodeOperatorRewardPercentageUpdate"
  ): TypedContractEvent<
    NodeOperatorRewardPercentageUpdateEvent.InputTuple,
    NodeOperatorRewardPercentageUpdateEvent.OutputTuple,
    NodeOperatorRewardPercentageUpdateEvent.OutputObject
  >;
  getEvent(
    key: "RemovedFromWhitelist"
  ): TypedContractEvent<
    RemovedFromWhitelistEvent.InputTuple,
    RemovedFromWhitelistEvent.OutputTuple,
    RemovedFromWhitelistEvent.OutputObject
  >;
  getEvent(
    key: "Reprice"
  ): TypedContractEvent<
    RepriceEvent.InputTuple,
    RepriceEvent.OutputTuple,
    RepriceEvent.OutputObject
  >;
  getEvent(
    key: "SwellTreasuryRewardPercentageUpdate"
  ): TypedContractEvent<
    SwellTreasuryRewardPercentageUpdateEvent.InputTuple,
    SwellTreasuryRewardPercentageUpdateEvent.OutputTuple,
    SwellTreasuryRewardPercentageUpdateEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;
  getEvent(
    key: "WhitelistDisabled"
  ): TypedContractEvent<
    WhitelistDisabledEvent.InputTuple,
    WhitelistDisabledEvent.OutputTuple,
    WhitelistDisabledEvent.OutputObject
  >;
  getEvent(
    key: "WhitelistEnabled"
  ): TypedContractEvent<
    WhitelistEnabledEvent.InputTuple,
    WhitelistEnabledEvent.OutputTuple,
    WhitelistEnabledEvent.OutputObject
  >;

  filters: {
    "AddedToWhitelist(address)": TypedContractEvent<
      AddedToWhitelistEvent.InputTuple,
      AddedToWhitelistEvent.OutputTuple,
      AddedToWhitelistEvent.OutputObject
    >;
    AddedToWhitelist: TypedContractEvent<
      AddedToWhitelistEvent.InputTuple,
      AddedToWhitelistEvent.OutputTuple,
      AddedToWhitelistEvent.OutputObject
    >;

    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "ETHDepositReceived(address,uint256,uint256,uint256,address)": TypedContractEvent<
      ETHDepositReceivedEvent.InputTuple,
      ETHDepositReceivedEvent.OutputTuple,
      ETHDepositReceivedEvent.OutputObject
    >;
    ETHDepositReceived: TypedContractEvent<
      ETHDepositReceivedEvent.InputTuple,
      ETHDepositReceivedEvent.OutputTuple,
      ETHDepositReceivedEvent.OutputObject
    >;

    "ETHWithdrawn(address,uint256,uint256)": TypedContractEvent<
      ETHWithdrawnEvent.InputTuple,
      ETHWithdrawnEvent.OutputTuple,
      ETHWithdrawnEvent.OutputObject
    >;
    ETHWithdrawn: TypedContractEvent<
      ETHWithdrawnEvent.InputTuple,
      ETHWithdrawnEvent.OutputTuple,
      ETHWithdrawnEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "MaximumRepriceDifferencePercentageUpdated(uint256,uint256)": TypedContractEvent<
      MaximumRepriceDifferencePercentageUpdatedEvent.InputTuple,
      MaximumRepriceDifferencePercentageUpdatedEvent.OutputTuple,
      MaximumRepriceDifferencePercentageUpdatedEvent.OutputObject
    >;
    MaximumRepriceDifferencePercentageUpdated: TypedContractEvent<
      MaximumRepriceDifferencePercentageUpdatedEvent.InputTuple,
      MaximumRepriceDifferencePercentageUpdatedEvent.OutputTuple,
      MaximumRepriceDifferencePercentageUpdatedEvent.OutputObject
    >;

    "MaximumRepriceswETHDifferencePercentageUpdated(uint256,uint256)": TypedContractEvent<
      MaximumRepriceswETHDifferencePercentageUpdatedEvent.InputTuple,
      MaximumRepriceswETHDifferencePercentageUpdatedEvent.OutputTuple,
      MaximumRepriceswETHDifferencePercentageUpdatedEvent.OutputObject
    >;
    MaximumRepriceswETHDifferencePercentageUpdated: TypedContractEvent<
      MaximumRepriceswETHDifferencePercentageUpdatedEvent.InputTuple,
      MaximumRepriceswETHDifferencePercentageUpdatedEvent.OutputTuple,
      MaximumRepriceswETHDifferencePercentageUpdatedEvent.OutputObject
    >;

    "MinimumRepriceTimeUpdated(uint256,uint256)": TypedContractEvent<
      MinimumRepriceTimeUpdatedEvent.InputTuple,
      MinimumRepriceTimeUpdatedEvent.OutputTuple,
      MinimumRepriceTimeUpdatedEvent.OutputObject
    >;
    MinimumRepriceTimeUpdated: TypedContractEvent<
      MinimumRepriceTimeUpdatedEvent.InputTuple,
      MinimumRepriceTimeUpdatedEvent.OutputTuple,
      MinimumRepriceTimeUpdatedEvent.OutputObject
    >;

    "NodeOperatorRewardPercentageUpdate(uint256,uint256)": TypedContractEvent<
      NodeOperatorRewardPercentageUpdateEvent.InputTuple,
      NodeOperatorRewardPercentageUpdateEvent.OutputTuple,
      NodeOperatorRewardPercentageUpdateEvent.OutputObject
    >;
    NodeOperatorRewardPercentageUpdate: TypedContractEvent<
      NodeOperatorRewardPercentageUpdateEvent.InputTuple,
      NodeOperatorRewardPercentageUpdateEvent.OutputTuple,
      NodeOperatorRewardPercentageUpdateEvent.OutputObject
    >;

    "RemovedFromWhitelist(address)": TypedContractEvent<
      RemovedFromWhitelistEvent.InputTuple,
      RemovedFromWhitelistEvent.OutputTuple,
      RemovedFromWhitelistEvent.OutputObject
    >;
    RemovedFromWhitelist: TypedContractEvent<
      RemovedFromWhitelistEvent.InputTuple,
      RemovedFromWhitelistEvent.OutputTuple,
      RemovedFromWhitelistEvent.OutputObject
    >;

    "Reprice(uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      RepriceEvent.InputTuple,
      RepriceEvent.OutputTuple,
      RepriceEvent.OutputObject
    >;
    Reprice: TypedContractEvent<
      RepriceEvent.InputTuple,
      RepriceEvent.OutputTuple,
      RepriceEvent.OutputObject
    >;

    "SwellTreasuryRewardPercentageUpdate(uint256,uint256)": TypedContractEvent<
      SwellTreasuryRewardPercentageUpdateEvent.InputTuple,
      SwellTreasuryRewardPercentageUpdateEvent.OutputTuple,
      SwellTreasuryRewardPercentageUpdateEvent.OutputObject
    >;
    SwellTreasuryRewardPercentageUpdate: TypedContractEvent<
      SwellTreasuryRewardPercentageUpdateEvent.InputTuple,
      SwellTreasuryRewardPercentageUpdateEvent.OutputTuple,
      SwellTreasuryRewardPercentageUpdateEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;

    "WhitelistDisabled()": TypedContractEvent<
      WhitelistDisabledEvent.InputTuple,
      WhitelistDisabledEvent.OutputTuple,
      WhitelistDisabledEvent.OutputObject
    >;
    WhitelistDisabled: TypedContractEvent<
      WhitelistDisabledEvent.InputTuple,
      WhitelistDisabledEvent.OutputTuple,
      WhitelistDisabledEvent.OutputObject
    >;

    "WhitelistEnabled()": TypedContractEvent<
      WhitelistEnabledEvent.InputTuple,
      WhitelistEnabledEvent.OutputTuple,
      WhitelistEnabledEvent.OutputObject
    >;
    WhitelistEnabled: TypedContractEvent<
      WhitelistEnabledEvent.InputTuple,
      WhitelistEnabledEvent.OutputTuple,
      WhitelistEnabledEvent.OutputObject
    >;
  };
}