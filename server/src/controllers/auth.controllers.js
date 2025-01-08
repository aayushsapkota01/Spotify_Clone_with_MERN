import { User } from "../models/user.models.js";

export const authCallback = async (req, res, next) => {
  try {
    console.log("Received callback:", req.body);
    const { id, firstName, lastName, imageUrl } = req.body;

    // check if user already exists
    const user = await User.findOne({ clerkId: id });
    console.log(user);

    if (!user) {
      // signup
      await User.create({
        clerkId: id,
        fullName: `${firstName || ""} ${lastName || ""}`.trim(),
        imageUrl,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth callback", error);
    next(error);
  }
};
