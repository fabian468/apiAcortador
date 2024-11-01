import express from "express";
import "./database.js";
import cors from "cors";

import cutRoute from "./src/routes/cutRouter.js";
import redirectRouter from "./src/routes/redirectRouter.js";

import dotenv from 'dotenv';




dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: ['http://localhost:5173', 'https://frontacortador.onrender.com'],
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['X-Requested-With', 'Content-Type'],
    credentials: true,
}));


app.use(express.json());


app.use("/", cutRoute);
app.use("/", redirectRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
