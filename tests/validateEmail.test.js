const validateEmail = require('../validateEmail');

test('It should validate emails', () => {
  expect(validateEmail('@edabit.com')).toBeFalsy();
  expect(validateEmail('@edabit')).toBeFalsy();
  expect(validateEmail('matt@edabit.com')).toBeTruthy();
  expect(validateEmail('')).toBeFalsy();
  expect(validateEmail('hello.gmail@com')).toBeFalsy();
  expect(validateEmail('bill.gates@microsoft.com')).toBeTruthy();
  expect(validateEmail('hello@email')).toBeFalsy();
  expect(validateEmail('%^%$#%^%')).toBeFalsy();
  expect(validateEmail('www.email.com')).toBeFalsy();
  expect(validateEmail('email')).toBeFalsy();
});
