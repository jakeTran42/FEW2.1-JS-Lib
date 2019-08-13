import D from '../src/index';

test('Sanity check', () => {
});

const date = new D(2017, 5, 12, 14, 14, 27)

test('returns the full year', () => {
  expect(date.getYear()).toBe(2017);
});

test('returns the month', () => {
  expect(date.getMonth()).toBe('May');
});

test('returns the day of the month', () => {
  expect(date.getDay()).toBe(12);
});

test('returns the hour of the day, starting at 0', () => {
  expect(date.getHour()).toBe(14);
});

test('returns the minutes of the hour, starting at 0', () => {
  expect(date.getMinute()).toBe(14);
});

test('returns the secounds of the minute, starting at 0', () => {
  expect(date.getSecond()).toBe(27);
});

test('format date from character forms', () => {
  expect(date.format()).toBe('May 12, 2017');
  expect(date.format('Y:M:D:H:I:S')).toBe('2017:May:12:14:12:12');
  expect(date.format('y:m:d:h:i:s')).toBe('17:May:12:14:14:27');
});

test('returns the years, months, or days from a given day', () => {
  const compare = new D(2019, 7, 17, 20);

  const before = new D(2019, 7, 11, 20);
  const after = new D(2019, 7, 29, 20);
  expect(before.when(compare)).toBe('6 days ago');
  expect(after.when(compare)).toBe('12 days from now');

  expect(compare.when(compare)).toBe('It is today');
});
