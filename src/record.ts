import type Predicate from './predicate.js'
import string_ from './string.js'

const record =
  <V, K extends symbol | number | string = string>(v: Predicate<V>, k?: Predicate<K>) =>
    (value: unknown): value is Record<K, V> => {
      if (typeof value !== 'object' || value === null) {
        return false
      }
      const k_ = k ?? string_
      for (const key in value) {
        if (!k_(key) || !v(value[key as keyof typeof value])) {
          return false
        }
      }
      return true
    }

export default record
