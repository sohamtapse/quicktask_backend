import express from "express";
import taskRoutes from "./routes/route.js";
import connect from "./db/db.js";
connect();
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
