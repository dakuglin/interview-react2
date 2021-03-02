import React, { useState } from "react";
import { ActivityContainer } from "../styles/StartActivity";
import { Container, Row, Col, Button } from "react-bootstrap";


function CreatActivity({ addActivity }) { //handles the creating of a new activity by the user

    //define state using react hooks
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      addActivity(value);
      if (!value) return;
      setValue("");
  }
  
  const handleInputChange = (e) => { //user input on change
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Ex.'Running'"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </form> 
  );
};
///////////////////////////////////////////////

function Description({ description }) {

  var startTime = new Date();
  return (
    <>
    <br />
    <div>
      {description.userActivity}
      <br />
      <Button onClick={() => 
        console.log(startTime)}>
          Start
      </Button>
      <Button onClick={() => (console.log("stopping activity"))}>Stop</Button>
    </div>
    </>
  );
};
///////////////////////////////////////////////

export const StartActivity = () => {

  //define state using react hooks
  const [descriptions, setDescriptions] = useState([
    {
      userActivity: 'Swimming',
      started: false
    },
  ]);

  const addActivity = userActivity => {
    const newActivity = [...descriptions, {userActivity, started: false}];
    setDescriptions(newActivity);
  };

  return (
    <>
    <ActivityContainer>
    <Container fluid>
      <CreatActivity addActivity={addActivity}/>
      <br />
      <br />
      <Row>
        <Col className="col-3"> {/* column 1 - description */}
          <h2>Description</h2>
          <div>
            {descriptions.map((description, index) => (
              <Description 
                description={description}
                index={index}
                key={index}
              />
            ))}
          </div>
        </Col>
        <Col className="col-3"> {/* column 2 - start time */}
          <h2>Start Time</h2>
        </Col>
        <Col className="col-3"> {/* column 3 - end time */}
          <h2>End Time</h2>
        </Col>
        <Col className="col-3"> {/* column  - duration */}
          <h2>Duration [min : sec]</h2>
        </Col>
      </Row>
    </Container>
    </ActivityContainer>
    </>
  );
};
