
import Conversations from "../model/Conversations.js";
export const newConversation = async(request,response)=>
{
    try{
        const senderId = request.body.senderId;
        const recerverId = request.body.receiverId;
        const exist = await Conversations.findOne({members:{$all:[recerverId,senderId]}})
        if(exist)
            {
                return response.status(200).json('conversation exist');
            }
            const newConversation = new Conversations({
                members:[senderId,recerverId]
            })
            try{
            const savedConversation = await newConversation.save(savedConversation);
             response.status(200).json(savedConversation);
            }
            catch(error)
            {
                response.status(500).json(error);
            }
    }
    catch (error){
       return response.status(500).json(error.message);
    }
}
export const getConversation = async(request,response)=>
{
    try{
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
      let conversation=  await Conversations.findOne({memebers:{$all:[receiverId,senderId]}});
      response.status(200).json(conversation);
    }
    catch(error)
    {
     response.status(500).json(error.message);
    }
}