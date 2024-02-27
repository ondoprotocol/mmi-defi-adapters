/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { FluxLens, FluxLensInterface } from "../FluxLens";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "contract OToken",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "cTokenBalances",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balanceOf",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowBalanceCurrent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balanceOfUnderlying",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenAllowance",
            type: "uint256",
          },
        ],
        internalType: "struct CompoundLens.OTokenBalances",
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract OToken[]",
        name: "cTokens",
        type: "address[]",
      },
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "cTokenBalancesAll",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balanceOf",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowBalanceCurrent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balanceOfUnderlying",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenAllowance",
            type: "uint256",
          },
        ],
        internalType: "struct CompoundLens.OTokenBalances[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract OToken",
        name: "cToken",
        type: "address",
      },
    ],
    name: "cTokenMetadata",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "exchangeRateCurrent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "supplyRatePerBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowRatePerBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactorMantissa",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBorrows",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalReserves",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCash",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isListed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "collateralFactorMantissa",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "underlyingAssetAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cTokenDecimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "underlyingDecimals",
            type: "uint256",
          },
        ],
        internalType: "struct CompoundLens.OTokenMetadata",
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract OToken[]",
        name: "cTokens",
        type: "address[]",
      },
    ],
    name: "cTokenMetadataAll",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "exchangeRateCurrent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "supplyRatePerBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowRatePerBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactorMantissa",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBorrows",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalReserves",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCash",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isListed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "collateralFactorMantissa",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "underlyingAssetAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cTokenDecimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "underlyingDecimals",
            type: "uint256",
          },
        ],
        internalType: "struct CompoundLens.OTokenMetadata[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract OToken",
        name: "cToken",
        type: "address",
      },
    ],
    name: "cTokenUnderlyingPrice",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "underlyingPrice",
            type: "uint256",
          },
        ],
        internalType: "struct CompoundLens.OTokenUnderlyingPrice",
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract OToken[]",
        name: "cTokens",
        type: "address[]",
      },
    ],
    name: "cTokenUnderlyingPriceAll",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "underlyingPrice",
            type: "uint256",
          },
        ],
        internalType: "struct CompoundLens.OTokenUnderlyingPrice[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract ComptrollerLensInterface",
        name: "comptroller",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountLimits",
    outputs: [
      {
        components: [
          {
            internalType: "contract OToken[]",
            name: "markets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "liquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortfall",
            type: "uint256",
          },
        ],
        internalType: "struct CompoundLens.AccountLimits",
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class FluxLens__factory {
  static readonly abi = _abi;
  static createInterface(): FluxLensInterface {
    return new Interface(_abi) as FluxLensInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): FluxLens {
    return new Contract(address, _abi, runner) as unknown as FluxLens;
  }
}
