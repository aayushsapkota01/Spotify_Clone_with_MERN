import { Song } from "../models/song.models.js";
import { User } from "../models/user.models.js";
import { Album } from "../models/album.models.js";

export const getStats = async (req, res) => {
  try {
    const [totalSongs, totalUsers, totalAlbums, uniqueArtists] =
      await Promise.all([
        Song.countDocuments(),
        User.countDocuments(),
        Album.countDocuments(),
      ]);

    Song.aggregate([
      {
        $unionWith: {
          coll: "Album",
          pipeline: [],
        },
      },
      {
        $group: {
          _id: "$artist",
        },
      },
      {
        $count: "count",
      },
    ]);

    res.status(200).json({
      totalSongs,
      totalUsers,
      totalAlbums,
      uniqueArtists: uniqueArtists[0]?.$count || 0,
    });
  } catch (error) {
    console.log("Error getting stats", error);
    next(error);
  }
};
