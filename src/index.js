import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("ERROR: ", error);
      process.exit(1);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server started on: http://localhost:${process.env.PORT || 8000}`
      );
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed!!! ", error);
  });
