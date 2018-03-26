import socket from "../connect";


export let asyncRequest = ()=> dispatch => {
    socket.on("send all messages", function(data) {
        dispatch({type: "GET_ALL_POSTS", payload: data});
    });
    socket.emit("get all messages", null);
}

export let onSendMessage = (name, message) => dispatch => {
    dispatch({type: "ADD_MESSAGE",payload: {name, message}})
    socket.emit("create new message", {name, message} );
}