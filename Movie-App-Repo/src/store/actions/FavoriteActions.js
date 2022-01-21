// export const AddFavorite = (payload) => {
//     return {
//         type : "ADD_FAVORITE",
//         payload
//     };
// };

// export const DeleteFavorite = (payload) => {
//     return {
//         type : "DELETE_FAVORITE",
//         payload
//     };
// };


// Actions using Redux Thunk
export const AddFavorite = (favList) => (dispatch) => {
    return (
        dispatch({
          type: "ADD_FAVORITE",
          payload: favList,
        })
      )
  };
