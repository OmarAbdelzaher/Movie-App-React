import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../network/axiosInstance";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/movie/popular", {
        // params: {
        //   limit: 5,
        // },
        // headers: {
        //   "Accept-language": "ar",
        // },
      })
      .then((res) => {
    setMovies(res.data)
    console.log(res,"inside then")        
    }      
    )
      .catch((err) => console.log(err));
      console.log(movies,"inside catch")
  }, []);
  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie, index) => {
          return (
            <Link key={index} to={`/details/${movie.id}`}>
              <li>{movie.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

