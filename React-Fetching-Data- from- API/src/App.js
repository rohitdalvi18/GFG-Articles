import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log(data);
  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=d5e44bdcd73747c3940a44bc79563c4a"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  } else if (!data) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <h1>Recipes</h1>
        <ul>
          {data.results.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <img src={item.image} alt="img" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default App;