import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const userName = process.env.DB_USERNAME;
const passWord = process.env.DB_PASSWORD; 
const URL = `mongodb+srv://${userName}:${passWord}@chatapplication.ne7tr5g.mongodb.net/?retryWrites=true&w=majority`;

const Connection = async ()=>{
    try{
      await   mongoose.connect(URL,{useUnifiedTopology:true});
      console.log("connected to db");
    }
    catch(error)
    {
        console.log(error,'bhai');
    }
}
export default Connection;