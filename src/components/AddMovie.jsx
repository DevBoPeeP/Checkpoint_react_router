import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddMovie = ({ addMovie }) => {
  // Initialize the state for the input values
  const [inputValues, setInputValues] = useState({
    title: "",
    rating: "",
    posterUrl: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(inputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Movie</h1>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={inputValues.title}
          onChange={(e) => {
            setInputValues({ ...inputValues, title: e.target.value });
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
            setInputValues({ ...inputValues, rating: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Poster URL</label>
        <input
          type="text"
          value={inputValues.posterUrl}
          onChange={(e) => {
            setInputValues({ ...inputValues, posterUrl: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={inputValues.description}
          onChange={(e) => {
            setInputValues({ ...inputValues, description: e.target.value });
          }}
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddMovie;
