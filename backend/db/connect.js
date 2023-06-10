import mongoose from "mongoose";

const connectDB = (url) => {
  console.log("Connecting to database...");
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => console.log(err));
};

export default connectDB;
