import mongoose from "mongoose";

export async function connect() {
  console.log(">>> Connecting to DB");
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const db = mongoose.connection;
    console.log(db.name);
    console.log(">>> DB Connected");
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
