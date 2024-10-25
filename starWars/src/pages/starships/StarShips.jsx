import { useState, useEffect } from "react";

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllStarships = async () => {
    setLoading(true);
    let url = "https://swapi.dev/api/starships/";
    let allStarships = [];

    try {
      while (url) {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        allStarships = [...allStarships, ...data.results];

        url = data.next;
      }

      setStarships(allStarships);
    } catch (error) {
      console.error("Error fetching starships:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllStarships();
  }, []);

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="row">
        {starships.map((starship, index) => (
          <div className="col-md-4" key={`${starship.url}-${index}`}>
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">{starship.name}</h5>
                <p className="card-text">Model: {starship.model}</p>
                <p className="card-text">
                  Manufacturer: {starship.manufacturer}
                </p>
                <p className="card-text">
                  Cost in Credits: {starship.cost_in_credits}
                </p>
                <p className="card-text">Length: {starship.length}</p>
                <p className="card-text">
                  Max Atmosphering Speed: {starship.max_atmosphering_speed}
                </p>
                <p className="card-text">Crew: {starship.crew}</p>
                <p className="card-text">Passengers: {starship.passengers}</p>
                <p className="card-text">
                  Cargo Capacity: {starship.cargo_capacity}
                </p>
                <p className="card-text">
                  Hyperdrive Rating: {starship.hyperdrive_rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Starships;
