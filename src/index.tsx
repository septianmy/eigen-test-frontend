import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {NewsContextProvider} from './NewsContext';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <NewsContextProvider>
    <App />
  </NewsContextProvider>
    
  ,
  document.getElementById('root')
);

