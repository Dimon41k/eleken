const googleAPI = require("../lib/google-image-api");
const UsMes = require("../models/UsersMessages");

module.exports = function(io){
  io.on('connection', function (socket) {

    socket.on('send url for google api', function(url) {
      googleAPI(url, function(images) {
        socket.emit('recive data from google api', { images });
      });
    });

    socket.on("create new message", function(data){
      UsMes.createMessageByUser(data.name,data.message);
    });

    socket.on("get all messages", function(){
      UsMes.getAllMessagesByAllUsers().then(function(res){
        socket.emit("send all messages", res);
      })
    });
    
    console.log("connected new device");

    socket.on('disconnect', function () {
      console.log("Disconnected");
    });

  });
}
