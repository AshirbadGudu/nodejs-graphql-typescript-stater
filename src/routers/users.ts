import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    data: [],
    message: "Users fetched successfully",
  });
});

router.post("/create", (req, res) => {
  res.status(200).json({
    data: {},
    message: "User created successfully",
  });
});

router.put("/update", (req, res) => {
  res.status(200).json({
    data: {},
    message: "User updated successfully",
  });
});

router.delete("/delete/:_id", (req, res) => {
  res.status(200).json({
    data: {},
    message: "User deleted successfully",
  });
});

export default router;
