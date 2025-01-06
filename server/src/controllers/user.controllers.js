import { User } from "../models/user.models.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const currentUserId = req.auth.userId;
    const users = await User.find({ clerkId: { $ne: currentUserId } }); //exclude current user
    res.status(200).json(users);
  } catch (error) {
    console.log("Error getting all users", error);
    next(error);
  }
};
