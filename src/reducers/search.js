const search = (state = {}, action) => {
    switch(action.type){
        case "ADD_PARAMS":
            return Object.assign(state, action.payload);
        case "GET_IMAGES": 
            return Object.assign(state, {data: action.payload});
        default:
            return state;
    }
 }
export default search;