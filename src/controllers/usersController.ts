import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
  res.status(200).json({
    data: [],
    message: "Users fetched successfully",
  });
};

const createUser = async (req: Request, res: Response) => {
  res.status(200).json({
    data: {},
    message: "User created successfully",
  });
};

const updateUser = async (req: Request, res: Response) => {
  res.status(200).json({
    data: {},
    message: "User updated successfully",
  });
};

const deleteUser = async (req: Request, res: Response) => {
  res.status(200).json({
    data: {},
    message: "User deleted successfully",
  });
};

export default { getAllUsers, createUser, updateUser, deleteUser };
