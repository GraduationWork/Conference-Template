import React from 'react';
//import ReactApp from './components/ReactApp';

import Speaker from './components/Speaker';
import Timedown from './components/Timedown';
 
React.render(<Timedown time={1457933605}  />, document.getElementById('timedown'));
React.render(<Speaker />, document.getElementById('speaker'));

//React.render(<ReactApp />, document.getElementById('timedown'));    

