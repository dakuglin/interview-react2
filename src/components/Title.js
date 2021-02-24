import React from "react";
import { Header } from "../styles/Title";

// compnent containing all of the application title and directions
export const Title = () => { 
  return (
    <>
      <Header>
        <h1>Activity Tracker</h1>
      <p>
        Add an activity in the input field below and press enter. Press the start button to activate activity tracking, and the stop button to log activity duration. 
      </p>

      </Header>
    </>
  );
};