import { useState, useEffect } from "react";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllPlanets = async () => {
    setLoading(true);
    let url = "https://swapi.dev/api/planets/";
    let allPlanets = [];

    try {
      while (url) {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        allPlanets = [...allPlanets, ...data.results];

        url = data.next;
      }

      setPlanets(allPlanets);
    } catch (error) {
      console.error("Error fetching planets:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPlanets();
  }, []);
  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="row">
        {planets.map((planet, index) => (
          <div className="col-md-4" key={`${planet.url}-${index}`}>
            <div className="card m-1">
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">Climate: {planet.climate}</p>
                <p className="card-text">Terrain: {planet.terrain}</p>
                <p className="card-text">Population: {planet.population}</p>
                <p className="card-text">Diameter: {planet.diameter}</p>
                <p className="card-text">Gravity: {planet.gravity}</p>
                <p className="card-text">
                  Rotation Period: {planet.rotation_period}
                </p>
                <p className="card-text">
                  Orbital Period: {planet.orbital_period}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
