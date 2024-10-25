import { useState, useEffect } from "react";

const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllPeople = async () => {
    setLoading(true);
    let url = "https://swapi.dev/api/people/";
    let allPeople = [];

    try {
      while (url) {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        allPeople = [...allPeople, ...data.results];
        url = data.next;
      }

      setPeople(allPeople);
    } catch (error) {
      console.error("Error fetching people:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPeople();
  }, []);

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="row">
        {people.map((person, index) => (
          <div className="col-md-4" key={`${person.url}-${index}`}>
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">Height: {person.height}</p>
                <p className="card-text">Mass: {person.mass}</p>
                <p className="card-text">Hair Color: {person.hair_color}</p>
                <p className="card-text">Skin Color: {person.skin_color}</p>
                <p className="card-text">Eye Color: {person.eye_color}</p>
                <p className="card-text">Birth Year: {person.birth_year}</p>
                <p className="card-text">Gender: {person.gender}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
