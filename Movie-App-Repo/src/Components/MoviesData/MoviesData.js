import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../network/axiosInstance";

export default function MoviesData() {
  const params = useParams();
  const [details, setDetails] = useState({});
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movies/${params.id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Details</h1>
      {/* <h3>usernam : {details.username}</h3>
      <h3>email : {details.email}</h3>
      <h3>phone : {details.phone}</h3> */}
      {/* <h2>Movie ID : {props.id}</h2>
      <h2>Movie Name : {props.name}</h2>
      <h3>Movie Origin Country : {props.origin_country}</h3> */}
      {/* POSTER PATH */}
      {/* <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/> */}
    </div>
  );
}
