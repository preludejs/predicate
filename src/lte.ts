const lte =
  (than: number) =>
    (value: unknown): value is number =>
      typeof value === 'number' && value <= than

export default lte
