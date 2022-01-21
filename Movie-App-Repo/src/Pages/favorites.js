import React, { useState } from "react";
import { useSelector } from "react-redux";
import { axiosInstance } from "../network/axiosInstance";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favList = useSelector((state) => state.favorites);
  const [movie,setMovie] = useState([])
  // var favMovies = []
  function getDetails(id){
    axiosInstance.get(`/movie/${id}`)
    .then((res) =>{
      setMovie([...movie,
        res.data])
      // favMovies.push(res.data)
    })
    .catch((err) => console.log(err));
  }
  
  favList.forEach(element => {
    getDetails(element)
  });

  return (
    <div className="container" style={{color:"#fff"}}>
      <h1 >Favorites</h1>
      <div className="row">
        {movie.map((fav) => {
          return (
            <div 
              className=" card col-3 bg-dark m-auto"
              style={{ width: "18 rem" }}
              key={fav.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`}
                className="card-img-top"
                alt={fav.title}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ color: "#fff", textAlign: "center" }}
                >
                  {fav.title}
                </h5>
                <Link to={`/details/${fav.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
