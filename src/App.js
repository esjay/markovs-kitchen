import React, {useState, useLayoutEffect} from 'react';
import { Waypoint } from 'react-waypoint';
import {Chain, mockGen} from './Chain';

const ChainParagraph = ({numSentences = 5}) => {
    const [text, setText] = useState(Chain.bind(this, {numSentences}));
    return (<p>{text}</p>);
};

const App = () => {
    const [middle, setMiddle] = useState('');
    const [length, setLength] = useState(0);
    useLayoutEffect(() => {

    });
    return (
        <>
            <ChainParagraph numSentences={10}/>
            <span>{middle.repeat(length)}</span>
            <Waypoint
                bottomOffset={'-30%'}
                onEnter={({waypointTop}) => {setMiddle(mockGen); setLength(waypointTop*10);}}
                debug={true}
            >
            </Waypoint>
            <ChainParagraph numSentences={10}/>
        </>
    );
};

export default App;