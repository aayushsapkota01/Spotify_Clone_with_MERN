import { User } from "../models/user.models.js";

export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    //   check if user already exist
    const user = await User.findOne({ cleckId: id });

    if (!user) {
      //signup
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth callback", error);
    res
      .status(500)
      .json({ message: "Internal Server Error!" }, { success: true });
  }
};
