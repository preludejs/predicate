const regexp =
  (re: RegExp) =>
    (value: unknown): value is string =>
      typeof value === 'string' && !!value.match(re)

export default regexp
