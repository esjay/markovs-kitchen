import React, {useState} from 'react';
import { Waypoint } from 'react-waypoint';


const SeedText = () => <>{'Begin '.repeat(999)}</>
const EndText = () => <>{'End '.repeat(999)}</>

const App = () => {
    const [middle, setMiddle] = useState('');
    const [length, setLength] = useState(0);
    return <>
        <SeedText/>
        <span>{middle.repeat(length)}</span>
        <Waypoint
            bottomOffset={'-30%'}
            onEnter={({waypointTop}) => {setMiddle('Middle '); setLength(waypointTop*10);}}
            debug={false}
        >
        </Waypoint>
        <EndText/>
    </>
};

export default App;