import mongoose from "mongoose";

function connect() {
  mongoose
    .connect(
      "mongodb+srv://10crollno23gm:JiycyEiIsxzqQLC5@quicktask.ksh6cwd.mongodb.net/tasks"
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connect;
