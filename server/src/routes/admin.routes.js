import { Router } from "express";
import { createSong, deleteSong } from "../controllers/admin.controllers.js";
import { protectRoute, requireAdmin } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/songs", protectRoute, requireAdmin, createSong);
router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong);

export default router;
