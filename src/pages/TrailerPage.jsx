import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const TrailerPage = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);
  return (
    <Container>
      <Link to="/">
        <IoMdArrowRoundBack />
      </Link>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Container>
  );
};

export default TrailerPage;
