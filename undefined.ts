const undefined_ =
  (value: unknown): value is undefined =>
    typeof value === 'undefined'

export default undefined_
