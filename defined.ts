const defined =
  <T>(value: T): value is Exclude<T, undefined> =>
    typeof value !== 'undefined'

export default defined
