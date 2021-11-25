import React, {useContext} from 'react';
import {NewsContext} from '../../NewsContext';
import '../App.css';
import {Spinner, Row, Col, Container} from 'reactstrap'

const Detail = () => {
    const { data } = useContext(NewsContext);
  return (
    <Container className="container">
        <h3></h3>
    </Container>
  );
}

export default Detail;
