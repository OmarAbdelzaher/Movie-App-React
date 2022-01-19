import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params:{
      api_key:"d82b34636f65e9eb383a5d6fa40b82bb",
  }
});
