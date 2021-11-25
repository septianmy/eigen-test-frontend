import React from 'react';
import '../App.css';
import {Row, Col,} from 'reactstrap'
import {NewsContextProvider} from '../../NewsContext';
import News from '../../components/News';
import Header from '../../components/Header';

const Home = () => {
  return (
    <NewsContextProvider>
      <Header />
      <News/>
    </NewsContextProvider>
  );
}

export default Home;
