import type Predicate from './predicate.js'

const unique =
  <T, R extends number | string = T extends number | string ? T : never>(a: Predicate<T>, k?: (value: T) => R) =>
    (values: unknown): values is T[] => {
      if (!Array.isArray(values)) {
        return false
      }
      const k_ = k ?? (_ => _)
      const keys = new Set
      for (const value of values) {
        if (!a(value)) {
          return false
        }
        const key = k_(value)
        if (keys.has(key)) {
          return false
        }
        keys.add(key)
      }
      return true
    }

export default unique
