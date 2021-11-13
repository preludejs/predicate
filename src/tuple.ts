import type Predicate from './predicate.js'
import type Predicated from './predicated.js'

const tuple =
  <Ps extends [...Predicate<unknown>[]]>(...ps: Ps) =>
    (value: unknown): value is { [I in keyof Ps]: Predicated<Ps[I]> } => {
      if (!Array.isArray(value)) {
        return false
      }
      if (value.length > ps.length) {
        return false
      }
      return ps.every((p, i) => p(value[i]))
    }

export default tuple
