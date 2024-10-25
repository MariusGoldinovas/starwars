import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Films = () => {
  const [data, setData] = useState([]); // Correct syntax
  const [loading, setLoading] = useState(true); // Correct useState syntax with parentheses

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        {loading ? (
          <div className="loading text-center">
            <h1>Loading...</h1>
            <p>We downloading it from out of space, it takes some time</p>
          </div>
        ) : (
          data.map((film) => (
            <div className="col-4" key={film.episode_id}>
              <div className="title d-flex justify-content-between px-1">
                <Link to={`/results/${film.episode_id}`}>
                  <h3>{film.title}</h3>
                </Link>
                <h3>Part:{film.episode_id}</h3>
              </div>
              <div className="details py-2">
                <h6>Director: {film.director}</h6>
                <h6>Producer: {film.producer}</h6>
                <h6>Release Date: {film.release_date}</h6>
              </div>
              <p className="fw-medium">{film.opening_crawl}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Films;
