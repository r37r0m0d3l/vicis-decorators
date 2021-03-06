import { Serialize } from "./Serialize.js";
import { argsAsArray } from "../utils/argsAsArray.js";

/**
 * @name Pick
 * @description Mark property or getter as serializable.
 * @param {Array.<string>|string=} propertiesToPick
 * @param {...string} pick
 * @returns {Function}
 */
export function Pick(propertiesToPick, ...pick) {
  return Serialize({ pick: argsAsArray(propertiesToPick, ...pick) });
}
