import type Predicate from './predicate.js'

type Predicated<P> = P extends Predicate<infer U> ? U : never

export default Predicated
