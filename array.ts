import type Predicate from './predicate.js'
import unknown from './unknown.js'

const array =
  <T>(a: Predicate<T>) =>
    (value: unknown): value is T[] => {
      if (!Array.isArray(value)) {
        return false
      }
      if (a && a !== unknown) {
        let i = 0
        for (const _ of value) {
          if (!a(value[i++])) {
            return false
          }
        }
      }
      return true
    }

export default array
