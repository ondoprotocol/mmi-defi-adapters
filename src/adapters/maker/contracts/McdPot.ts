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

export interface McdPotInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "Pie"
      | "cage"
      | "chi"
      | "deny"
      | "drip"
      | "dsr"
      | "exit"
      | "file(bytes32,uint256)"
      | "file(bytes32,address)"
      | "join"
      | "live"
      | "pie"
      | "rely"
      | "rho"
      | "vat"
      | "vow"
      | "wards"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "LogNote"): EventFragment;

  encodeFunctionData(functionFragment: "Pie", values?: undefined): string;
  encodeFunctionData(functionFragment: "cage", values?: undefined): string;
  encodeFunctionData(functionFragment: "chi", values?: undefined): string;
  encodeFunctionData(functionFragment: "deny", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "drip", values?: undefined): string;
  encodeFunctionData(functionFragment: "dsr", values?: undefined): string;
  encodeFunctionData(functionFragment: "exit", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,uint256)",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,address)",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "join", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "live", values?: undefined): string;
  encodeFunctionData(functionFragment: "pie", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "rely", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "rho", values?: undefined): string;
  encodeFunctionData(functionFragment: "vat", values?: undefined): string;
  encodeFunctionData(functionFragment: "vow", values?: undefined): string;
  encodeFunctionData(functionFragment: "wards", values: [AddressLike]): string;

  decodeFunctionResult(functionFragment: "Pie", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "drip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dsr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pie", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rho", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
}

export namespace LogNoteEvent {
  export type InputTuple = [
    sig: BytesLike,
    usr: AddressLike,
    arg1: BytesLike,
    arg2: BytesLike,
    data: BytesLike
  ];
  export type OutputTuple = [
    sig: string,
    usr: string,
    arg1: string,
    arg2: string,
    data: string
  ];
  export interface OutputObject {
    sig: string;
    usr: string;
    arg1: string;
    arg2: string;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface McdPot extends BaseContract {
  connect(runner?: ContractRunner | null): McdPot;
  waitForDeployment(): Promise<this>;

  interface: McdPotInterface;

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

  Pie: TypedContractMethod<[], [bigint], "view">;

  cage: TypedContractMethod<[], [void], "nonpayable">;

  chi: TypedContractMethod<[], [bigint], "view">;

  deny: TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;

  drip: TypedContractMethod<[], [bigint], "nonpayable">;

  dsr: TypedContractMethod<[], [bigint], "view">;

  exit: TypedContractMethod<[wad: BigNumberish], [void], "nonpayable">;

  "file(bytes32,uint256)": TypedContractMethod<
    [what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;

  "file(bytes32,address)": TypedContractMethod<
    [what: BytesLike, addr: AddressLike],
    [void],
    "nonpayable"
  >;

  join: TypedContractMethod<[wad: BigNumberish], [void], "nonpayable">;

  live: TypedContractMethod<[], [bigint], "view">;

  pie: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  rely: TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;

  rho: TypedContractMethod<[], [bigint], "view">;

  vat: TypedContractMethod<[], [string], "view">;

  vow: TypedContractMethod<[], [string], "view">;

  wards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "Pie"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "cage"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "chi"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deny"
  ): TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "drip"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "dsr"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "exit"
  ): TypedContractMethod<[wad: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "file(bytes32,uint256)"
  ): TypedContractMethod<
    [what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "file(bytes32,address)"
  ): TypedContractMethod<
    [what: BytesLike, addr: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "join"
  ): TypedContractMethod<[wad: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "live"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pie"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rely"
  ): TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rho"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "vat"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vow"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getEvent(
    key: "LogNote"
  ): TypedContractEvent<
    LogNoteEvent.InputTuple,
    LogNoteEvent.OutputTuple,
    LogNoteEvent.OutputObject
  >;

  filters: {
    "LogNote(bytes4,address,bytes32,bytes32,bytes)": TypedContractEvent<
      LogNoteEvent.InputTuple,
      LogNoteEvent.OutputTuple,
      LogNoteEvent.OutputObject
    >;
    LogNote: TypedContractEvent<
      LogNoteEvent.InputTuple,
      LogNoteEvent.OutputTuple,
      LogNoteEvent.OutputObject
    >;
  };
}
