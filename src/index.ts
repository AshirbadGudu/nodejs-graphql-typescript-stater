import { config } from "dotenv";
import express from "express";
config();

const PORT = process.env.PORT || 3023;

const app = express();

app.get("/", (_, res) => res.send("Node JS Express Typescript Server Running"));

/**
 * Create REST API server
 * */

app.get("/users/", (req, res) => {
  res.status(200).json({
    data: [],
    message: "Users fetched successfully",
  });
});

app.post("/users/create", (req, res) => {
  res.status(200).json({
    data: {},
    message: "User created successfully",
  });
});

app.put("/users/update", (req, res) => {
  res.status(200).json({
    data: {},
    message: "User updated successfully",
  });
});

app.delete("/users/delete/:_id", (req, res) => {
  res.status(200).json({
    data: {},
    message: "User deleted successfully",
  });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
