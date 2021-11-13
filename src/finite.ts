const finite =
  (value: unknown): value is number =>
    Number.isFinite(value)

export default finite
