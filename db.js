import mongoose from "mongoose";

export function dataBaseConnection() {
   const params = (
    {
        UnifiedTopology :true,
    }
   )
    try {
        mongoose.connect(process.env.MONGO_URL );
        console.log("Mongodb Connected" , params);
        
    } catch (error) {
        console.log("Mongodb Disconnected", error)
        
    }
}