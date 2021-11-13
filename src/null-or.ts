import type Predicate from './predicate.js'

const nullOr =
  <T>(a: Predicate<T>) =>
    (value: unknown): value is (null | T) =>
      value === null || a(value)

export default nullOr
