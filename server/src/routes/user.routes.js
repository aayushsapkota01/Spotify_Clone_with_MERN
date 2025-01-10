 import { Router } from "express";
 import { protectRoute } from "../middlewares/auth.middlewares.js";
 import { getAllUsers, getMessages } from "../controllers/user.controllers.js";
 const router = Router();

 router.get("/", protectRoute, getAllUsers);
 router.get("/messages/:userId", protectRoute, getMessages);

 export default router;