import type Predicate from './predicate.js'

const undefinedOr =
  <T>(a: Predicate<T>) =>
    (value: unknown): value is (undefined | T) =>
      typeof value === 'undefined' || a(value)

export default undefinedOr
