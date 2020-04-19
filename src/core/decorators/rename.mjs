import { serialize } from "./serialize";

/**
 * @name rename
 * @description Rename property to another name and remove original.
 * @param {string} name
 * @returns {Function}
 */
export function rename(name) {
  return serialize(name);
}
