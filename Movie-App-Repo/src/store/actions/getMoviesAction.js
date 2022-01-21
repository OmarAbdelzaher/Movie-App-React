import { axiosInstance } from "../../network/axiosInstance";

// Actions using Redux Thunk
export const getMoviesList = () => (dispatch) => {
    return axiosInstance
      .get("/movie/popular")
      .then((res) =>
        dispatch({
          type: "GET_MOVIES_LIST",
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };