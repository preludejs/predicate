const nil =
  (value: unknown): value is (undefined | null) =>
    value == null

export default nil
