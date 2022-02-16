import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
const App = ()=>(
    <div>
        <div>Hello World!</div>
        <Game/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('app'));