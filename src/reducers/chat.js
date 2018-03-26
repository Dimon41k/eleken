const chat = (state = [], action) => {
    switch(action.type){
        case "ADD_MESSAGE":
            return [...state, action.payload];
        case "GET_ALL_POSTS": 
            return action.payload;
        default:
            return state;
    }
 }
export default chat;