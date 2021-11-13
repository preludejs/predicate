/** Function decorator precondition on parameter arguments. */
function rpc<Args extends unknown[], F extends (...args: Args) => any>(predicate: (args: unknown) => args is Args) {
  return (_target: unknown, _propertyKey: unknown, descriptor: TypedPropertyDescriptor<F>) => {
    const { value } = descriptor
    if (!value) {
      throw new TypeError('Undefined descriptor value.')
    }
    return {
      ...descriptor,
      value(...args: Args) {
        if (!predicate(args)) {
          throw new TypeError('Invalid argument(s).')
        }
        return value.apply(this, args)
      }
    }
  }
}

export default rpc
