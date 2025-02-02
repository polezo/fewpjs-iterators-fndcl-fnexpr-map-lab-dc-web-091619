// const titleize = require('titleize');

const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleFace = (word) => {return word.replace(word[0], word[0].toUpperCase()) };

const titleCased = () => {
  return tutorials.map( line => {
    let words = line.split(' ')
    let capitalizedWords = (wordz) => wordz.map(titleFace)
    let answer = capitalizedWords(words).join(' ')
    return answer
  })
}
