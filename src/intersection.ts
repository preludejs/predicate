import type Predicate from './predicate.js'
import type Predicated from './predicated.js'

type IntersectionOfUnion<T> =
  (T extends unknown ? (_: T) => void : never) extends ((_: infer U) => void) ? U : never

const intersection =
  <Ps extends Predicate<unknown>[]>(...as: Ps) =>
    (value: unknown): value is IntersectionOfUnion<Predicated<Ps[number]>> =>
      as.every(_ => _(value))

export default intersection
