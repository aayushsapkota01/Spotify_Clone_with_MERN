import { Router } from "express";

import { protectRoute, requireAdmin } from "../middlewares/auth.middlewares.js";
import { getStats } from "../controllers/stats.controllers.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, getStats);

export default router;
