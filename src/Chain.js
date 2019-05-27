import MarkovGen from 'markov-generator';
import smittenTxt from './data/smitten';

const markov = new MarkovGen({
    input: smittenTxt
  });

export const Chain = ({minLength = 10, numSentences = 1}) => {
    return Array.from({ length: numSentences }).reduce((str) => {
        return str + ' ' + markov.makeChain(minLength);
    }, '');
};

export default Chain;
