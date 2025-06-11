import express from "express";
import taskRoutes from "./routes/route.js";
import connect from "./db/db.js";
import cors from "cors";
connect();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // <-- your frontend URL
    credentials: true, // <-- allow cookies/auth headers
  })
);

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
