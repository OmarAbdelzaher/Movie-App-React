//Reducer using Redux Thunk
const State_Initial = {
  moviesList: [],
};

export default function getMoviesReducer(state = State_Initial, action) {
  switch (action.type) {
    case "GET_MOVIES_LIST":
      return {
        ...state,
        moviesList: action.payload,
      };
    default:
      return state;
  }
}
