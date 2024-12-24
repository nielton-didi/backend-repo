import { Router } from "express";
import { fetchUserData, updateUserData } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/:id", authMiddleware, fetchUserData);
router.put("/:id", authMiddleware, updateUserData);

export default router;
