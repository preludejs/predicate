const string_ =
  (value: unknown): value is string =>
    typeof value === 'string'

export default string_
