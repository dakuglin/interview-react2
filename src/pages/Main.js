import React, { useState } from "react";
import { Title } from "../components/Title";
// import { Activity } from "../components/Activity";
// import { Time } from "../components/Time";
import { Activity } from "../components/Activity";
// import { Container, Row, Col } from "react-bootstrap";
// import { MainContainer } from "../styles/Main";

//main component that will contain all of the application information, passed to the App.js 
export const Main = () => {

  // const [userActivity, setUserActivity] = useState([]);

  return (
    <>
    <Title /> 
    {/* <MainContainer> */}
      {/* <Container fluid> */}
      {/* <Activity /> */}
        {/* <Row>
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
            <h2>Duration [min : sec]</h2>
          </Col>
        </Row> */}
        {/* <Time /> */}
      {/* </Container> */}
        <Activity />
    {/* </MainContainer> */}
    </>
  );
};