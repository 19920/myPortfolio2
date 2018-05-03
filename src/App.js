import React, { Component } from 'react';
import './App.css';




import Skills from './components/Skills';

import knowledge from './data/knowledge';
import language from './data/language';
import Spokenlanguages from './components/Spokenlanguages';


class App extends Component {
  render() {

    return (

    <div id ="skills">
      <Skills knowledge={knowledge} />
      <Spokenlanguages language={language} />
      </div>

    );
  }
}

export default App;
