export const AddFavorite = (payload) => {
    return {
        type : "ADD_FAVORITE",
        payload
    };
};

export const DeleteFavorite = (payload) => {
    return {
        type : "DELETE_FAVORITE",
        payload
    };
};