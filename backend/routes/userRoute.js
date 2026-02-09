const express = require("express");
const route = express.Router();
const {create , getUser, getUserbyId, updateUser, deleteUser} = require("../Controller/userController")

route.post('/user',create);
route.get('/users',getUser);
route.get('/user/:id',getUserbyId);
route.put('/update/user/:id',updateUser);
route.delete('/delete/user/:id', deleteUser);

exports.route = route;