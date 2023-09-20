import { useEffect, useState } from "react";

export default function JokeApp() {
  const [jokes, setJokes] = useState("");

  async function getJokes() {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    setJokes(data.value);
  }

  useEffect(function () {
    getJokes();
  }, []);

  return (
    <div>
      <h1>{jokes}</h1>
      <button onClick={getJokes}>Generate Joke</button>
    </div>
  );
}
