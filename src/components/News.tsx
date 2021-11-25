import React, {useContext} from 'react';
import {NewsContext} from '../NewsContext';
import NewsArticle from "./NewsArticle";
import {Spinner, Row, Col, Container} from 'reactstrap'

function News(props: any) {
    const { data } = useContext(NewsContext);
  return (
    <div className="list-article">
    <Container className="container">
      <Row>
        {data
          ? data.articles.map((news: {url: string}, index: {index: number}) => (
            <Col className="mb-4 news-list card-body d-flex flex-column" xs="3">
                <NewsArticle data={[news,index]} key={news.url}/>
            </Col>
            ))
          : <Spinner color="info" type="grow">Loading...</Spinner>}
      </Row>
    </Container>
    </div>
  );
}

export default News;