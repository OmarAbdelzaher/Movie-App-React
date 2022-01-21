// import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { axiosInstance } from "../network/axiosInstance";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Favorites() {
  const favList = useSelector((state) => state.favorites);

  // const [movie,setMovie] = useState([])
  // var favMovies = []
  // let getDetails = (id) => {

  //   axiosInstance.get(`/movie/${id}`)
  //   .then((res) =>{
  //     setMovie([...movie,
  //       res.data])
      
    // console.log(movie,"inside getDetails")
      // favMovies.push(res.data)
  //   })
  //   .catch((err) => console.log(err));
  // }

  // getDetails(favList[1])
  // useEffect(() => {
  //     favList.forEach(element => {
  //           console.log(element)
  //           getDetails(element)
  //         });          
  //       },
  //       []);
  
  useEffect(() => {
      },
      [favList]);

  //     console.log(movie,"outside getDetails")

  // console.log(favList)

  return (
    <div className="container" style={{color:"#fff"}}>
      <h1 >Favorites</h1>
      <div className="row">
        {favList.map((fav) => {
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
