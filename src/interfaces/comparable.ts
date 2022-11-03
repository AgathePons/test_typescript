/**
 * comparable.ts : interface
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

// we want to compare a specific Type <T>
export interface Comparable<T> {
  /**
 * compare an element with the element given in argument
 * @param t any T type to compare
 * @returns {number} number regarding result of comparison
 * negative value if object smaller than comparable object
 * 0 value if both are equal
 * positive value if object bigger than comparable object
 */
  compare(t: T): number;
}