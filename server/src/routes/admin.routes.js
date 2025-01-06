import { Router } from "express";
import { getAdmin } from "../controllers/admin.controllers.js";
import { protectRoute, requireAdmin } from "../middlewares/auth.middlewares.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, createSong);

export default router;
