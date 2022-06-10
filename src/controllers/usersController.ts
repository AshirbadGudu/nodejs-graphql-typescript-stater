import { Request, Response } from "express";
import { User } from "../types";

let users: User[] = [];

const getAllUsers = async (req: Request, res: Response) => {
  res.status(200).json({
    data: { users },
    message: "Users fetched successfully",
  });
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    users.push(user);
    res.status(200).json({
      data: { user },
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error creating user",
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUserData: User = req.body;
    const updatedUsers = users.map((user) => {
      if (user._id === updatedUserData._id)
        return { ...user, ...updatedUserData };
      return user;
    });
    users = updatedUsers;
    res.status(200).json({
      data: { updatedUserData },
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error updating user",
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUserId = req.params._id;
    const updatedUsers = users.filter((user) => user._id !== deletedUserId);
    users = updatedUsers;
    res.status(200).json({
      data: { deletedUserId },
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: { error },
      message: "Error deleting user",
    });
  }
};

export default { getAllUsers, createUser, updateUser, deleteUser };
