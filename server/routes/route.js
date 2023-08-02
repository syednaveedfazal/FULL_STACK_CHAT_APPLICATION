import express from 'express';
import { addUser,getUsers } from '../controller/user-controller.js';
import { newConversation } from '../controller/ConversationController.js';
import { getConversation } from '../controller/ConversationController.js';
import { newMessage } from '../controller/message-controller.js';
const Route  =  express.Router();
Route.post('/add',addUser);
Route.get('/users',getUsers);
Route.post('/conversation/add',newConversation);
Route.post('/conversation/get',getConversation);
Route.post('Message/add',newMessage);

export default Route;