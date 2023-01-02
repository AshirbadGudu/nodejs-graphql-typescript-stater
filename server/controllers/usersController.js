"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let users = [];
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({
        data: { users },
        message: "Users fetched successfully",
    });
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        users.push(user);
        res.status(200).json({
            data: { user },
            message: "User created successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            data: { error },
            message: "Error creating user",
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUserData = req.body;
        const updatedUsers = users.map((user) => {
            if (user._id === updatedUserData._id)
                return Object.assign(Object.assign({}, user), updatedUserData);
            return user;
        });
        users = updatedUsers;
        res.status(200).json({
            data: { updatedUserData },
            message: "User updated successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            data: { error },
            message: "Error updating user",
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUserId = req.params._id;
        const updatedUsers = users.filter((user) => user._id !== deletedUserId);
        users = updatedUsers;
        res.status(200).json({
            data: { deletedUserId },
            message: "User deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            data: { error },
            message: "Error deleting user",
        });
    }
});
exports.default = { getAllUsers, createUser, updateUser, deleteUser };
