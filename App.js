import { useEffect, useRef, useState } from "react";

export default function App() {
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

  const downloadMovies = () => {
    const blob = new Blob([JSON.stringify(movies, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "movies.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="w-full bg-blue-800 p-4">
        <form className="flex justify-between items-center" onSubmit={handleSubmit}>
          <input
            ref={inputEl}
            className="w-3/4 h-14 text-zinc-200 px-4"
            type="text"
            placeholder="Type a movie's name..."
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
            <a
              href={`https://www.youtube.com/results?search_query=${movie.Title}+trailer`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2"
            >
              Watch Trailer
            </a>
          </div>
        ))}
      </div>
      {movies.length > 0 && (
        <div className="w-full flex justify-center p-4">
          <button
            className="bg-sky-400 text-white px-4 py-2 rounded"
            onClick={downloadMovies}
          >
            Download Movies
          </button>
        </div>
      )}
    </>
  );
}
// import { useEffect, useRef, useState } from "react";

// export default function App() {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   );
// }

// function Navbar() {
//   const inputEl = useRef(null);
//   useEffect(() => {
//     inputEl.current.focus();
//   }, []);
//   const [searchValue, setSearchValue] = useState("");
//   const [movies, setMovies] = useState([]);

//   const handleSearchChange = (e) => {
//     setSearchValue(e.target.value);
//   };
//   function handleSubmit(e) {
//     e.preventDefault();
//   }

//   const fetchMovies = async () => {
//     try {
//       const res = await fetch(
//         `http://www.omdbapi.com/?apikey=fdd512b0&s=${searchValue}`
//       );
//       const data = await res.json();
//       setMovies(data.Search.slice(0, 5));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <>
//       <div className="w-full bg-blue-800 p-4">
//         <form className="flex justify-between items-center" onSubmit={handleSubmit}>
//           <input
//             ref={inputEl}
//             className="w-3/4 h-14 text-zinc-200 px-4"
//             type="text"
//             placeholder="Type a movies name....."
//             value={searchValue}
//             onChange={handleSearchChange}
//           />
//           <button
//             className="w-1/4 h-14 border-2 bg-sky-400 px-4"
//             onClick={fetchMovies}
//           >
//             Search
//           </button>
//         </form>
//       </div>
//       <div className="w-full h-auto bg-blue-950 flex flex-wrap p-4">
//         {movies.map((movie, index) => (
//           <div
//             key={index}
//             className="w-1/5 h-auto bg-sky-400 rounded-2xl p-4 m-2 flex flex-col items-center transition transform hover:scale-105"
//           >
//             <img
//               src={movie.Poster}
//               alt={movie.Title}
//               className="w-full h-3/4 object-cover mb-4"
//             />
//             <p className="text-lg font-semibold">{movie.Title}</p>
//             <p>Type: {movie.Type}</p>
//             <p>Year: {movie.Year}</p>
//             <p>ID: {movie.imdbID}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }