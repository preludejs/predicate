const oneOf =
  <T extends undefined | null | boolean | number | string | symbol>(...values: readonly T[]) =>
    (value: unknown): value is T =>
      values.includes(value as T)

export default oneOf
