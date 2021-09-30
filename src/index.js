import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css'

//const jsxElement = <h1>Our React App</h1>;
//Takes first param, injects it at second param
reactDom.render(<App />, document.getElementById("root"));