import { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomjokes",
      );
      const data = await res.json();
      const jokes = data.data.data;
      console.log(jokes);
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      setJoke(randomJoke);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Random Joke</h1>
  {joke && (
      <div className="jokes-grid">
          <div key={joke.id} className="joke-card">
            <p className="joke-text">{joke.content}</p>
            <p className="joke-categories">
              {joke.categories?.[0] || 'General'}
            </p>
          </div>
      </div>
)}
      <button className="refresh-button" onClick={getData}>
        Get Another Joke
      </button>
    </div>
  );
}

export default App;
