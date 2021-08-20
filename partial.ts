import type Predicate from './predicate.js'
import type Predicated from './predicated.js'

const partial =
  <T extends Record<string, Predicate<unknown>>(kvs: T) =>
    (value: unknown): value is { [k in keyof T]?: Predicated<T[k]> } => {
      if (typeof value !== 'object' || value === null) {
        return false
      }
      for (const k in kvs) {
        if (typeof value[k as keyof typeof value] === 'undefined') {
          continue
        }
        if (!kvs[k](value[k as keyof typeof value])) {
          return false
        }
      }
      return true
    }

export default partial
