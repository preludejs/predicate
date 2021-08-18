import type Predicate from './predicate.js'
import type Predicated from './predicated.js'

const exact =
  <T extends Record<string, Predicate<unknown>>>(kvs: T) =>
    (value: unknown): value is { [k in keyof T]: Predicated<T[k]> } => {
      if (typeof value !== 'object' || value === null) {
        return false
      }
      for (const k in value) {
        if (!(k in kvs)) {
          return false
        }
      }
      for (const k in kvs) {
        if (!kvs[k](value[k as keyof typeof value])) {
          return false
        }
      }
      return true
    }

export default exact
