const boolean_ =
  (value: unknown): value is boolean =>
    typeof value === 'boolean'

export default boolean_
