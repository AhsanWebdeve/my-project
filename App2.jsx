import { useEffect, useRef, useState } from "react";

export default function App2() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar() {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
  }

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=fdd512b0&s=${searchValue}`
      );
      const data = await res.json();
      setMovies(data.Search.slice(0, 5));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="w-full bg-blue-800 p-4">
        <form className="flex justify-between items-center" onSubmit={handleSubmit}>
          <input
            ref={inputEl}
            className="w-3/4 h-14 text-zinc-200 px-4"
            type="text"
            placeholder="Type a movies name....."
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button
            className="w-1/4 h-14 border-2 bg-sky-400 px-4"
            onClick={fetchMovies}
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full h-auto bg-blue-950 flex flex-wrap p-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="w-1/5 h-auto bg-sky-400 rounded-2xl p-4 m-2 flex flex-col items-center transition transform hover:scale-105"
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-3/4 object-cover mb-4"
            />
            <p className="text-lg font-semibold">{movie.Title}</p>
            <p>Type: {movie.Type}</p>
            <p>Year: {movie.Year}</p>
            <p>ID: {movie.imdbID}</p>
          </div>
        ))}
      </div>
    </>
  );
}