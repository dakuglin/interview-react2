import React from "react";
import { Title } from "../components/Title";
import { Container, Row, Col } from "react-bootstrap";
import { MainContainer } from "../styles/Main";

//main component that will contain all of the application information, passed to the App.js 
export const Main = () => {
  return (
    <>
    <Title />
    <MainContainer>
      <Container fluid>
        <Row>
          <Col className="col-3">
            <h2>Description</h2>
          </Col>
          <Col className="col-3">
            <h2>Start Time</h2>
          </Col>
          <Col className="col-3">
            <h2>End Time</h2>
          </Col>
          <Col className="col-3">
            <h2>Duration</h2>
          </Col>
        </Row>
    </Container>
    </MainContainer>
    </>
  );
};