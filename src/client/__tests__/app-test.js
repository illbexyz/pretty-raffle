import test from 'tape';

import { sayHello } from '../app';

test('sayHello output', (assert) => {
  const expected = 'Hello boys and girls!';
  const actual = sayHello();
  assert.equal(expected, actual, "This is the only output of sayHello so it should be ok");
  assert.end();
});
