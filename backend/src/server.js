import express from "express";
import router from "./routes/Notes_Routes.js";
import { connectDB } from "./config/connectdb.js";
import dotenv from "dotenv";
import rateLimiter from "./middlewares/rateLimiter.js";
import cors from "cors"

dotenv.config();

const app = express();

const PORT = process.env.PORT;


//cors
app.use(cors({
  origin:"http://localhost:5173",
}))

//middleware
app.use(express.json());
//always add ratelimiting middleware before your routes
app.use(rateLimiter);

app.use("/api/notes", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server running on:", PORT);
  });
});
