"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
(0, dotenv_1.config)();
const PORT = process.env.PORT || 3023;
const app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
