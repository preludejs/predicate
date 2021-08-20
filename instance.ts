const instance =
  <T extends new (...args: unknown[]) => unknown>(class_: T) =>
    (value: unknown): value is InstanceType<T> =>
      value instanceof class_

export default instance
