import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());  //jo bhi data hum body s e bhejre hai usko body se parse karna parega

dotenv.config(); 

const PORT = process.env.PORT || 4000;
//connect to mngo db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  //defining routes
  app.use("/book",bookRoute);
  app.use("/user",userRoute);

