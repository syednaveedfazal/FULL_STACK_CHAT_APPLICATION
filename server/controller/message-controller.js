import Message from "../model/Message.js";
import Conversations from "../model/Conversations.js";
export const newMessage= async(request,response)=>
{
    try{
        const newMessage=new Message(request.body);
        await newMessage.save();
        await Conversations.findByIdAndUpdate(request.body.conversationId,{message:request.body.text});
        return response.status(200).json('message has been sent');
    }
    catch(error)
    {
        return response.status(500).json(error.message);
    }
}