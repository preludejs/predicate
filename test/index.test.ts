import * as $ from '../index.js'

test('string', () => {
  const x = JSON.parse('"a"')
  if ($.string(x)) {
    expect(x === 'a').toBe(true)
  }
})
