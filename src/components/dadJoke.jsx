import { useEffect, useState } from "react";

function DadJoke() {
  const [joke, setJoke] = useState("jokes here");

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setJoke(data.joke);
  };

  return (
    <div className="container">
      <h1>Dad Joke</h1>
      <p className="joke">{joke}</p>
      <button type="button" className="btn" onClick={getJoke}>
        Get Another Joke
      </button>
    </div>
  );
}

export default DadJoke;