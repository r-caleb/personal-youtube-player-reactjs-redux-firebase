import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Videos from "../../components/video/Videos";

const HomeScreen = () => {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map(()=>(
        <Col lg={3} md={4} >
          <Videos />
        </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
