import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./db.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 5000;

//all routes middleware here
app.use("/api-v1", routes);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Internal Server Error");
});

//not found middleware
app.use((req, res) => {
  res.status(404).send("Route Not Found");
});

app.listen(PORT, async () => {
  try {
    await connectDB;
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
  console.log(`Server is running on port ${PORT}`);
});
