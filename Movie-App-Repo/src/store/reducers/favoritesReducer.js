const State_Initial = {
    favorites : [],
};

export default function FavReducer(state = State_Initial,action){
    switch (action.type){
        case "ADD_FAVORITE" :
            return{
                ...state,
                favorites: action.payload,                
            };
        
        case "DELETE_FAVORITE" :
            return{
                ...state,
                favorites: action.payload
            }
        
        default :
            return state
    }
}  