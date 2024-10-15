import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const DescriptionPage = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);
  return (
    <div>
      <Link to="/">
        <IoMdArrowRoundBack />
      </Link>
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} />
      <h3>Movie Description</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default DescriptionPage;
