import { Request, Response } from "express";
import { getUserById, updateUserById } from "../repository/userCollection";

export const fetchUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    await updateUserById(userId, updateData);

    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
