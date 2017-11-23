import React, { Component } from 'react';
import './App.css';

import Scroll from './Scroll';

//import {hamletScripts} from '../json/hamlet-7k-lines'
import {hamletScripts} from './json/hamlet-500k-lines'

class App extends Component {
  render() {
    return (
      <div>
          <Scroll names ={hamletScripts} displayItems={20} scrollStep={1}/>
      </div>
    );
  }
}

export default App;
