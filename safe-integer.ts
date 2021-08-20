const safeInteger =
  (value: unknown): value is number =>
    Number.isSafeInteger(value)

export default safeInteger
