const nonBlankString =
  (value: unknown): value is string =>
    typeof value === 'string' && value.trim() !== ''

export default nonBlankString
