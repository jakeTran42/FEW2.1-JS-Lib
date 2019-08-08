const stringLib = require('../src/index')

test("Sanity check", () => {

})

test('capitalized first char', () => {
    expect('hello'.capitalized()).toBe('Hello')
})

test('capitalized all', () => {
    expect('hello'.allCapitalized()).toBe('HELLO')
})

test('capitalized first char of each word', () => {
    expect('hello world'.firstCharsToUpper()).toBe('Hello World')
})

test('capitalized even letters', () => {
    expect('hello'.evenCaps()).toBe('hElLo')
})

test('capitalized odd letters', () => {
    expect('hello'.oddCaps()).toBe('HeLlO')
})

test('remove white space', () => {
    expect('  hello  '.removeSpaces()).toBe('hello')
})

test('kebob case with hyphen', () => {
    expect('hello world'.kabobCase()).toBe('hello-world')
})

test('snake case with underscore', () => {
    expect('hello world'.snakeCase()).toBe('hello_world')
})