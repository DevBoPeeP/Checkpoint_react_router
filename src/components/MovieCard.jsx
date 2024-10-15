import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ posterUrl, title, rating, description }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={posterUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{rating}</Card.Text>

          <Link to={`/description/${title}`}>View Description</Link>
          <Link to={`/trailer/${title}`}>View Trailer</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
