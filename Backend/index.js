import dotenv from "dotenv";
dotenv.config();

// Importing packages
import express, { application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Importing files
import connectDB from "./db/conn.js";
import userRouter from "./routes/userRoute.js";
import companyRouter from "./routes/companyRoute.js";
import jobRoute from "./routes/JobRoute.js";
import applicationRoute from "./routes/applicationRoute.js";

const app = express();

//Connect with dbs
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Setting cors with react js
const corsSetting = {
  origin: ["http://localhost:5173","https://localhost:5173"],
  credentials: true,
};

// Using COrs
app.use(cors(corsSetting));

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/applications", applicationRoute);

// Starting server
const PORT = process.env.PORT | 5000;
const MODE = "Development";
app.listen(PORT, () =>
  console.log(`Your server is in ${MODE} mode is running on PORT: ${PORT}`)
);
