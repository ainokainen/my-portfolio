import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav';
import MainImage from './components/MainImage';
import WorkList from './components/WorkList';
import MyWork from './components/MyWork';
import CoverLetter from './components/CoverLetter';

import '../styles/main.css';


const App = () => (
  <section>
    <Nav />
    <MainImage/>
    <MyWork/>
    <CoverLetter/>
  </section>
)
export default App;
