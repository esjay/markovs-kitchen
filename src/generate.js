// const MarkovGen = require('markov-generator');
// const fs = require('fs');

// const init = () => {
//   try {
//     const input = fs.readFileSync('data/smitten.txt').toString().split("\n");
//     // console.log(input)
//     const markov = new MarkovGen({
//       input,
//       minLength: 10
//     });

//     const sentence = markov.makeChain();
//     console.log(sentence);
//   } catch (e) {
//     console.error(e);
//   }
// }

// init();
const Gen = require('sentence-generator');

const gen = Gen('data/smitten.txt');
console.log(gen.take(6));
