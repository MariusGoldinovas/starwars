import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Results = () => {
  const { episode_id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${episode_id}/`)
      .then((response) => response.json())
      .then((data) => {
        const characterUrls = data.characters;
        return Promise.all(
          characterUrls.map((url) => fetch(url).then((res) => res.json()))
        );
      })
      .then((charactersData) => {
        setCharacters(charactersData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
        setLoading(false);
      });
  }, [episode_id]);

  return (
    <>
      <div className="container" key={episode_id}>
        <h1>Characters of Episode {episode_id}</h1>
      </div>
      <div className="container">
        {loading ? (
          <div className="loading text-center">
            <h2>Loading Characters...</h2>
          </div>
        ) : (
          <div className="row">
            {characters.map((character) => (
              <div className="col-md-4" key={character.name}>
                <div className="card m-2">
                  <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">Height: {character.height}</p>
                    <p className="card-text">Mass: {character.mass}</p>
                    <p className="card-text">
                      Hair Color: {character.hair_color}
                    </p>
                    <p className="card-text">
                      Skin Color: {character.skin_color}
                    </p>
                    <p className="card-text">
                      Eye Color: {character.eye_color}
                    </p>
                    <p className="card-text">
                      Birth Year: {character.birth_year}
                    </p>
                    <p className="card-text">Gender: {character.gender}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
