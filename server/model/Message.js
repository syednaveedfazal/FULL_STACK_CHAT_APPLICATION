import mongoose from "mongoose";
const MessageShema = mongoose.Schema({
    conversationId:{
        type:String
    },
    senderId:{
        receiverId:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    },
},{
    timestamps:true
});
const Message = mongoose.model('Message',MessageShema);
export default Message;