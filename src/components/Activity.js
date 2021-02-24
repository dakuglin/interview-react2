import React, { useState } from "react";
import { Description } from "../components/Description";
// import { NewDescription } from "../components/NewDescripton";

function NewDescription({ addDescription }) {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefalut();
    addDescription(value);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Ex.'Running'"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit">Add Activity</button>
    </form> 
    </>
  );
};

export const Activity = () => {

  const [descriptions, setDescriptions] = useState([ 
    {
      title: "testing",
      started: false
    },
  ]);

  const addDescription = title => {
    const newDescriptions = [...descriptions, {title, started: false}];
    setDescriptions(newDescriptions);
  };

  return (
    <>
    <NewDescription addDescription={addDescription}/>
    <div>
      {descriptions.map((description, index) => (
        <Description 
          description={description}
          index={index}
          key={index}
        />
      ))}
    </div>
    </>
  );
};

