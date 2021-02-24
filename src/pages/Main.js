import React from "react";
import { Title } from "../components/Title";
import { StartActivity } from "../components/StartActivity";


//main component that will contain all of the application information, passed to the App.js 
export const Main = () => {
  return (
    <>
    <Title /> 
    <StartActivity />
    </>
  );
};
