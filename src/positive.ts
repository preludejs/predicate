const positive =
  (value: unknown): value is number =>
    typeof value === 'number' && value > 0

export default positive
