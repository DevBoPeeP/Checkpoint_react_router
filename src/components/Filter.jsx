import React from "react";
import { useState } from "react";

const Filter = ({ onFilterChange }) => {
  // Initialize the state for the input values
  const [inputValues, setInputValues] = useState({
    title: "",
    rating: "",
  });

  return (
    <div style={{ marginBottom: "10px" }}>
      <h1>Filter Movies</h1>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={inputValues.title}
          onChange={(e) => {
            setInputValues({ ...inputValues, title: e.target.value });
            onFilterChange(e.target.value, inputValues.rating);
          }}
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          min={1}
          max={5}
          step={0.1}
          value={inputValues.rating}
          onChange={(e) => {
            setInputValues({
              ...inputValues,
              rating: e.target.value,
            });
            onFilterChange(inputValues.title, e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
