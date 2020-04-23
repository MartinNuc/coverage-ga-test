const {add} = require('./index');

it('should add numbers', () => {
  expect(add(1,3)).toBe(4);
})