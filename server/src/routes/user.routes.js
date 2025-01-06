import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middlewares.js";
import { getAllUsers } from "../controllers/user.controllers.js";

const router = Router();

router.get("/", protectRoute, getAllUsers);
// TODO: getMessages

export default router;
