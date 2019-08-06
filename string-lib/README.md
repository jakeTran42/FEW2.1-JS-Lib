## Stringily

A basic library to manipulate strings. Methods are generated with prototypes.

### Methods

| Methods  | Descriptions  | Examples  |
|---|---|---|
| capitalized()  | This method will capitalize the first character in your sentence/string | 'hello'.capitalized() -> 'Hello'  |
| allCapitalized()  | This method will capitalized everything that is passed in as string  | 'hello'.allCapitalized() -> 'HELLO'  |
| firstCharsToUpper()  | This method will capitalize first character of every word  |  'hello work'.firstCharsToUpper() -> 'Hello World' |
| evenCaps()  | Capitalize every even character in a string  | 'hello'.evenCaps() -> 'hElLo'  |
| oddCaps()  | Capitalize every odd character in a string | 'hello'.oddCaps() -> 'HeLlO'  |
| kabobCase()  | Remove extra space and replace with hyphen -  | 'hello world'.kabobCase() -> 'hello-world'  |
| snakeCase()  | Removes extra space and replaces spaces with an underscore _  | 'hello world'.snakeCase() -> 'hello_world'  |
| removeSpaces() | Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.  | '  hello world  '.removeSpaces() -> 'helloworld' |

### NPM package

[stringily-lib](https://www.npmjs.com/package/stringily-lib)