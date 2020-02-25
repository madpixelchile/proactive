import React from 'react';

import './assets/css/main.scss';

import {HeaderComponent} from './Components/HeaderComponent/HeaderComponent';
import {MainComponent} from './Components/MainComponent/MainComponent';
import {FooterComponent} from './Components/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
        
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />

    </div>
  );
}

export default App;

