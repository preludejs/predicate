type Primitive =
  | undefined
  | null
  | boolean
  | number
  | string
  | symbol

const eq =
  <T extends Primitive>(expected: T) =>
    (value: unknown): value is T =>
      value === expected

export default eq
