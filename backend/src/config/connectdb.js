import mongoose from "mongoose";


export const connectDB = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL);
       console.log("Conection successful");
    } catch (error) {
        console.error("Couldn't connect with the DB",error);
        process.exit(1); //This is for exiting with failure
    }
}