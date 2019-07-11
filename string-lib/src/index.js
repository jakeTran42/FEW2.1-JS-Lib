// CAPITALIZE
String.prototype.capitalized = function() {
    if (this.length == 0) return ''
    return this.charAt(0).toUpperCase() + this.slice(1)
}

// ALL CAPS
String.prototype.allCapitalized = function() {
    return this.toUpperCase()
}

// CAPITALIZE WORDS
String.prototype.firstCharsToUpper = function() {
    return this.split(' ').map(word => word.capitalized()).join(' ')
}

// Even CAPS
String.prototype.evenCaps = function () {
    const letterList = Array.from(this)
    let finalString = ""
    letterList.forEach((char, index) => {
      if(index % 2 === 1) {
        let upperLetter = char.toUpperCase()
        finalString = finalString.concat(upperLetter)
      } else {
        finalString = finalString.concat(char)
      }
    })
    return finalString
}

// Odd CAPS
String.prototype.oddCaps = function () {
    const letterList = Array.from(this)
    let finalString = ""
    letterList.forEach((char, index) => {
      if(index % 2 === 0) {
        let upperLetter = char.toUpperCase()
        finalString = finalString.concat(upperLetter)
      } else {
        finalString = finalString.concat(char)
      }
    })
    return finalString
}

// Remove White Space
String.prototype.removeSpaces = function () {
	return this.replace(/\s/g,'')
}

// KABOB CASE
String.prototype.kabobCase = function () {
    return this.removeWhiteSpace().split(' ').join('-')
}

// SNAKE CASE
String.prototype.snakeCase = function () {
    return this.removeWhiteSpace().split(' ').join('_')
}

// module.exports.capitalized = capitalized