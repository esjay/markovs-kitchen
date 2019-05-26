import React from 'react';
import { Waypoint } from 'react-waypoint';


const SeedText = () => <>{'Start '.repeat(999)}</>
const EndText = () => <>{'Cease '.repeat(999)}</>

const App = ({}) => (
    <>
        <SeedText/>
        <Waypoint
            bottomOffset={'-30%'}
            onEnter={({currentPosition, previousPosition}) => console.log('onEnter', {currentPosition, previousPosition})}
            debug={false}
        />
        <EndText/>
    </>
);

export default App;