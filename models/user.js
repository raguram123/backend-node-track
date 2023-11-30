import { ObjectId } from "bson";
import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type : String,
      
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    user : {
      type : ObjectId
    }
 
  },
 
);

const User = mongoose.model("user", userSchema);
 export default User ;