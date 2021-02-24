import React, { useState } from "react";
import { Container } from "react-bootstrap";


function CreatActivity({ addActivity }) { //handles the creating of a new activity by the user

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
  return (
    <>
    <div>
      {description.userActivity}
      <button onClick={() => (console.log("starting activity"))}>Start Activity</button>
    </div>
    </>
  );
};
///////////////////////////////////////////////

export const StartActivity = () => {

  const [descriptions, setDescriptions] = useState([
    {
      userActivity: 'Swimming',
      started: false
    },
    
  ]);

  const addActivity = userActivity => {
    const newActivity = [...descriptions, {userActivity, started: false}];
    setDescriptions(newActivity);
  }

  return (
    <>
    <Container>
      <CreatActivity addActivity={addActivity}/>
      <div>
      {descriptions.map((description, index) => (
        <Description 
          description={description}
          index={index}
          key={index}
        />
        ))}
      </div>
    </Container>
    </>
  );
};
