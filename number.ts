const number_ =
  (value: unknown): value is number =>
    typeof value === 'number'

export default number_
