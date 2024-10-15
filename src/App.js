import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import { movies } from "./movies";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DescriptionPage from "./pages/DescriptionPage";
import TrailerPage from "./pages/TrailerPage";

function App() {
  const [originalMovies, setOriginalMovies] = useState(movies);
  const [filteredMovies, setFilteredMovies] = useState(originalMovies);

  const handleFilterChange = (title, rating) => {
    let filtered = originalMovies;
    if (title && !rating) {
      filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating && !title) {
      filtered = movies.filter(
        (movie) => parseFloat(movie.rating) >= parseFloat(rating)
      );
    }
    if (title && rating) {
      filtered = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          parseFloat(movie.rating) >= parseFloat(rating)
      );
    }
    setFilteredMovies(filtered);
  };

  const addMovieHandler = (inputValues) => {
    setOriginalMovies([...originalMovies, inputValues]);
    setFilteredMovies([...filteredMovies, inputValues]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <div className="d-flex justify-content-around">
                <Filter onFilterChange={handleFilterChange} />
                <AddMovie addMovie={addMovieHandler} />
              </div>
              <MovieList movies={filteredMovies} />
            </Container>
          }
        ></Route>
        <Route
          path="/description/:title"
          element={<DescriptionPage movies={filteredMovies} />}
        />
        <Route
          path="/trailer/:title"
          element={<TrailerPage movies={filteredMovies} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
