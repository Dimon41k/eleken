const con = require("../db/connection");
const actions = {
    createMessageByUser: (user, message)=>con.UsersMessages.create({name: user, message}),
    getAllMessagesByAllUsers: ()=>con.UsersMessages.findAll()
}
module.exports = actions;