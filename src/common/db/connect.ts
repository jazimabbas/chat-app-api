import mongoose from "mongoose";
import { envVars } from "../utils/env-vars";

export default async function dbConnect() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(envVars.mongoURI);
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.log("MongoDB Connection Error: ", err);
    throw err;
  }
}
