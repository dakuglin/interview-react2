import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";

//component that will track the time for activities
export const Time = () => {

  //difine state using react hooks
  const [seconds, setSeconds] = useState('00');
  const [minuets, setMinutes] = useState('00');
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => { //useEffect for application timer
    var interval = null;
    if (isActive) { 
      interval = setInterval(() => { //setInterval funcion will only run if isActive is equal to true

        const secondsCounter = (count % 60);
        const minutesCounter = Math.floor(count / 60);

        const calcSeconds = String(secondsCounter).length === 1 ? `0${secondsCounter}`: secondsCounter;
        const calcMinutes = String(minutesCounter).length === 1 ? `0${minutesCounter}`: minutesCounter;

        setSeconds(calcSeconds);
        setMinutes(calcMinutes);
        setCount(count => count + 1);

      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, count])

  //onClick function to handle stoping the timer
  function stopTime() {
    setSeconds(0);
    setIsActive(false);
  };

 /////////////////////////////////////////////////////////////////////////

  function handler() {
    const timeStamp = new Date();
    console.log(timeStamp);
    setTime(time + timeStamp);
  };

  useEffect(() => {
    document.addEventListener("click", handler);
  }, []);

  return (
    <>
    <Row>
      <Col className="col-3"> {/* column 1 - description */}
        <div>
          <Button onClick={() => setIsActive(!isActive)} className="start">
            {isActive ? "Stop" : "Start"}
          </Button>
          <Button onClick={stopTime} className="stop">Stop</Button>
        </div>
      </Col>
      <Col className="col-3"> {/* column 2 - start time */}
        <div>{time}</div>
      </Col>
      <Col className="col-3"> {/* column 3 - end time */}
        <div>{time}</div>
      </Col> 
      <Col className="col-3"> {/* column  - duration */}
        <div className="start-time">
          <span className="minuet">{minuets}</span>
          <span> : </span>
          <span className="second">{seconds}</span>
        </div>
      </Col>
    </Row>
    </>
  );
};