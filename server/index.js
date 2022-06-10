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
app.delete("/users/delete/", (req, res) => {
    res.status(200).json({
        data: {},
        message: "User deleted successfully",
    });
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
