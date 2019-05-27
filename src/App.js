import React, {useState, useEffect, useCallback} from 'react';
import { Waypoint } from 'react-waypoint';
import {Chain} from './Chain';

const ChainText = ({numSentences = 5}) => {
    const paragraphLength = 5;
    const numParagraphs = Math.ceil(numSentences / paragraphLength);
    const generateTextArray = useCallback(() => {
        let sentencesRemaining = numSentences;
        return Array.from({length: numParagraphs}).map(() => {
            let sentences = Math.round(sentencesRemaining / numParagraphs >= 1 ? sentencesRemaining / numParagraphs : sentencesRemaining % numParagraphs);
            sentencesRemaining -= sentences;
            return Chain({numSentences: sentences})
        });
    }, [numParagraphs, numSentences]);
    const [textArray, setTextArray] = useState(generateTextArray);
    useEffect(() => {
        setTextArray((previousTextArray) => [...previousTextArray, ...generateTextArray()])
    }, [numSentences, generateTextArray]);
    return (
        textArray.map((text, i) => (
            <p key={i}>{text}</p>
        ))
    );
};

const App = () => {
    const [sentenceLength, setSentenceLength] = useState(30);
    const [waypointTop, setWaypointTop] = useState(1);

    useEffect(() => {
        const {offsetHeight} = document.querySelector('body');
        if(waypointTop > 1) {
            const newHeight = Math.round((offsetHeight - waypointTop) / 10);
            setSentenceLength(newHeight);
        }
    }, [waypointTop]);
    return (
        <>
            <ChainText numSentences={10}/>
            <ChainText numSentences={sentenceLength}/>
            <Waypoint
                bottomOffset={'-50%'}
                onEnter={({waypointTop}) => {setWaypointTop(waypointTop);}}
                debug={true}
            >
            </Waypoint>
            <ChainText numSentences={10}/>
        </>
    );
};

export default App;