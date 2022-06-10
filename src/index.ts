import { config } from "dotenv";
import express from "express";
import { users } from "./routers";
config();

const PORT = process.env.PORT || 3023;

const app = express();

// For parsing application/json type body add following middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => res.send("Node JS Express Typescript Server Running"));

/**
 * Create a REST API for users route
 * */

app.use("/users/", users);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
