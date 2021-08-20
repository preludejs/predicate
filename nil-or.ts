import type Predicate from './predicate.js'

const nilOr =
  <T>(a: Predicate<T>) =>
    (value: unknown): value is (undefined | null | T) =>
      value == null || a(value)

export default nilOr
