import React from 'react';
import {Button,Row, Col} from 'reactstrap';
import Moment from 'moment';

function NewsArticle({data} : {data:any}) {

  const date = Moment(data[0].publishedAt).format('MMMM Do YYYY');

    return (
    <>
      <Row>
          <Col className="thumbnail-wrap mb-2">
            <img src={data[0].urlToImage} className="news-thumbnail"></img>
          </Col>
      </Row>
      <Row>
        <Col className="title"><h4 className="">{data[0].title}</h4></Col>
      </Row>
      <Row>
            <Col className="news-date">{date}</Col>
          </Row>
      <Row>
        <Col className="news-desc"><p>{data[0].description}</p></Col>
      </Row>
      
      <Row className="mt-auto">
          <Row className="mb-2">
            <Col className="news-source">{data[0].source.name}</Col>
            <Col className="text-end news-author">{data[0].author}</Col>      
          </Row>
          <Button href={data[0].url} block color="primary" className="mt-auto">Read More</Button>  
      </Row>
      
    </>
    )
}

export default NewsArticle