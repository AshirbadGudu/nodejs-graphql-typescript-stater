import { config } from "dotenv";
import express from "express";
config();

const PORT = process.env.PORT || 3023;

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
