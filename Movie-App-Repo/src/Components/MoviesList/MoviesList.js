import { useEffect} from "react";
// import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LangContext } from "../../Context/langContext";
import { AddFavorite } from "../../store/actions/FavoriteActions";
import { getMoviesList } from "../../store/actions/getMoviesAction";
import favIcon from "../../assets/love.png";
import "./list.css";
// import { axiosInstance } from "../../network/axiosInstance";

export default function MoviesList() {
  // const [movies, setMovies] = useState([]);
  const { contextLanguage, setContextLanguage } = useContext(LangContext);
  let fav = useSelector((state) => state.favorites);
  let Movies = useSelector((state) => state.moviesList);
  const dispatch = useDispatch();

    // useEffect(() => {
    //     axiosInstance
    //         .get("/movie/popular")
    //         .then((res) => {
    //             setMovies(res.data.results)
    //         })
    //         .catch((err) => {
    //         console.log("error",err)
    //         })
    // }, []);

    useEffect(() => {
      dispatch(getMoviesList());
    }, []);


  const Add_Remove_Fav = (Allmovie) => {

    const foundMovie = fav.filter((movie)=> movie.id === Allmovie.id)
    console.log(foundMovie,"foundMovie")
        
    if ( foundMovie.length === 0 ){
      fav.push(Allmovie);
      dispatch(AddFavorite(fav));
    }
    else{
      console.log(foundMovie,"foundMovie");
      console.log(fav,"existed");
      const arr = fav.filter((movie)=> movie.id !== foundMovie[0].id)
      console.log(arr,"before disatch arr");   
      dispatch(AddFavorite(arr));
    }
  };
  

  return (
      <div className="container">
          
          <h1 style={{color: "#fff"}}>Movies</h1>
          <h1 style={{color: "#fff"}}>Context language : {contextLanguage}</h1>
          <button className="btn-primary" onClick={() => setContextLanguage("ar")}>
            Context Language
          </button>
          <div className="row">
              {Movies.map((movie) => {
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

