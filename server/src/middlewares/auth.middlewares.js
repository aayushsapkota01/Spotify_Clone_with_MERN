 import { clerkClient } from "@clerk/express";

 export const protectRoute = async (req, res, next) => {
   try {
     console.log("req.auth:", req.auth); // Debug log
     if (!req.auth || !req.auth.userId) {
       return res
         .status(401)
         .json({ message: "Unauthorized - you must be logged in" });
     }

     next();
   } catch (error) {
     console.log("Error while accessing protected route:", error);
     next(error);
   }
 };

 export const requireAdmin = async (req, res, next) => {
   try {
     console.log("req.auth:", req.auth); // Debug log
     const currentUser = await clerkClient.users.getUser(req.auth.userId);
     const email = currentUser.primaryEmailAddress?.emailAddress;

     if (!email || process.env.ADMIN_EMAIL !== email) {
       return res
         .status(403)
         .json({ message: "Unauthorized - you must be an admin" });
     }

     next();
   } catch (error) {
     console.log("Error while accessing admin route:", error);
     next(error);
   }
 };
