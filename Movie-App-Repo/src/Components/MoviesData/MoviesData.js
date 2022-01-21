import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../network/axiosInstance";

export default function MoviesData(){
  const params = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) =>{
        setDetails(res.data)
      })
      .catch((err) => console.log(err));
  },[]);
  return (
    <div>
      <h1 style={{color: "#fff", textAlign:"center"}}>Movie Details</h1>
      <p style={{color: "#fff", textAlign:"center"}}>ID : {details.id}</p>
      <p style={{color: "#fff", textAlign:"center"}}>Name : {details.title}</p>
      <p style={{color: "#fff", textAlign:"center"}}>Overview : {details.overview}</p>
      <img style={{width:"20%"}} src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} alt={`${details.title} Poster`}/>
    </div>
  );
}
