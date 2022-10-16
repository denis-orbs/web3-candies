import { BigNumber } from "bignumber.js";
import BN from "bn.js";

export { BigNumber } from "bignumber.js";

export type BigNumberish = number | string | BigNumber | BN;

export const zero = BigNumber(0);
export const one = BigNumber(1);
export const ten = BigNumber(10);
export const ether = BigNumber(1e18);
export const maxUint256 = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
export const zeroAddress = "0x0000000000000000000000000000000000000000";

// Almost never return exponential notation:
BigNumber.config({ EXPONENTIAL_AT: 1e9 });

/**
 * @returns n value exponentiated integer: bne(123.456789, 3) ==> 123456
 */
export const bne = (n: BigNumberish, exponent: number = 18) => bn(n).times(ten.pow(exponent)).integerValue(BigNumber.ROUND_DOWN);
/**
 * @returns n value mantissa: bnm(123456.789, 3) ==> 123.456789
 */
export const bnm = (n: BigNumberish, exponent: number = 18) => bn(n).div(ten.pow(exponent));

/**
 * @returns n exponentiated to 18 decimals
 */
export const bn18 = (n: BigNumberish = 1) => bne(n, 18);

/**
 * @returns n exponentiated to 9 decimals
 */
export const bn9 = (n: BigNumberish = 1) => bne(n, 9);

/**
 * @returns n exponentiated to 6 decimals
 */
export const bn6 = (n: BigNumberish = 1) => bne(n, 6);

export function bn(n: BigNumberish, base?: number): BigNumber {
  if (n instanceof BigNumber) return n;
  if (!n) return zero;
  return BigNumber(n instanceof BN ? n.toString() : n, base);
}

/**
 * @returns parsed BigNumber from formatted string. The opposite of `BigNumber.toFormat`
 */
export function parsebn(n: BigNumberish, defaultValue?: BigNumber, fmt?: BigNumber.Format): BigNumber {
  if (typeof n !== "string") return bn(n);

  const decimalSeparator = fmt?.decimalSeparator || ".";
  const str = n.replace(new RegExp(`[^${decimalSeparator}\\d-]+`, "g"), "");
  const result = bn(decimalSeparator === "." ? str : str.replace(decimalSeparator, "."));
  if (defaultValue && (!result.isFinite() || result.lte(zero))) return defaultValue;
  else return result;
}

/**
 * increase or decrease `n` decimal percision from `decimals` to `targetDecimals`
 */
export function convertDecimals(n: BigNumberish, sourceDecimals: number, targetDecimals: number): BigNumber {
  if (sourceDecimals === targetDecimals) return bn(n);
  else if (sourceDecimals > targetDecimals) return bn(n).idiv(ten.pow(sourceDecimals - targetDecimals));
  else return bn(n).times(ten.pow(targetDecimals - sourceDecimals));
}

export function eqIgnoreCase(a: string, b: string) {
  return a === b || a.toLowerCase() === b.toLowerCase();
}
