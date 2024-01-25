import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const db = mongoose.connection;

    db.on("connected", () => {
      console.log(">>> DB is connected");
    });

    db.on("error", (err) => {
      console.log(">>> DB is NOT connected");
      console.log(err);
      process.exit(1);
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
