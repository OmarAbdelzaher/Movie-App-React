import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../network/axiosInstance";
import favIcon from "../../assets/love.png";
import { useSelector, useDispatch } from "react-redux";
import { AddFavorite } from "../../store/actions/FavoriteActions";

import "./list.css";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  let fav = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

    useEffect(() => {
        axiosInstance
            .get("/movie/popular")
            .then((res) => {
                setMovies(res.data.results)
            })
            .catch((err) => {
            console.log("error",err)
            })
    }, []);
  
  const Add_Remove_Fav = (Allmovie) => {

    const index = fav.indexOf(Allmovie);
    console.log(index,"index")
    console.log(fav,"fav")
    if ( index === -1 ){
      fav.push(Allmovie);
      console.log(fav,"new")
      dispatch(AddFavorite(fav));
      // console.log(fav,"fav after") 
    }
    else{
      fav.splice(index,1)
      console.log(fav,"existed")    
    }
  };
  return (
      <div className="container">
          
          <h1 style={{color: "#fff"}}>Movies</h1>
          <div className="row">
              {movies.map((movie) => {
                  return (
                      <div className=" card col-3 bg-dark m-auto" style={{ width: "18 rem"}} key={movie.id}>
                          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                          <div className="card-body">
                              <h5 className="card-title" style={{color: "#fff", textAlign:"center"}}>{movie.title}</h5>
                              <Link to={`/details/${movie.id}`} className="btn btn-primary">Details</Link>
                              <img onClick={() => Add_Remove_Fav(movie)} className="fav" src={favIcon} alt="fav-icon"/>
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>
  );
}

