import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NewsContextProvider} from '../NewsContext';
import News from '../components/News';
import {Routing} from '../config';

function App() {
  return (
    <Routing/>
  );
}

export default App;
