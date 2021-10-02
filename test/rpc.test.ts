import * as $ from '../index.js'

class Api {
  @$.rpc($.tuple($.number, $.number))
  add(a: number, b: number): number {
    return a + b
  }
}

const api = new Api

const call =
  (target: unknown, method: string, ...params: unknown[]): unknown =>
    typeof target === 'object' && target !== null && method in target ?
      target[method](...params) :
      undefined

test('rpc', () => {
  expect(call(api, 'add', 1, 2)).toEqual(3)
  expect(() => call(api, 'add', '1', '2')).toThrow('Invalid argument(s).')
})
