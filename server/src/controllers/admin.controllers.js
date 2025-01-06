import { Song } from "../models/song.models.js";
import { Album } from "../models/album.models.js";
import cloudinary from "../lib/cloudinary.js";

//Helper function for cloudinary uploads
const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
    });

    return result.secure_url;
  } catch (error) {
    console.log("Error in cloudinary upload", error);
    throw new Error("Error in cloudinary upload");
  }
};

export const createSong = async (req, res, next) => {
  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json({ message: "Please upload all files." });
    }

    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const audioUrl = await uploadToCloudinary(audioFile);
    const imageUrl = await uploadToCloudinary(imageFile);

    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null,
    });

    await song.save();

    // if song belongs to an alb, update album's song array
    if (albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: { song: song._id },
      });
    }

    res.status(201).json({ message: "Song created successfully", song });
  } catch (error) {
    console.log("Error creating song", error);
    next(error);
  }
};

export const deleteSong = async (req, res, next) => {
  try {
    const { id } = req.params;

    //find song to delete
    const song = await Song.findById(id);

    // If song belongs to an album, update album's song array
    if (song.albumId) {
      await Album.findByIdAndUpdate(song.albumId, {
        $pull: { song: song._id },
      });
    }

    await Song.findByIdAndDelete(id);

    res.status(200).json({ message: "Song deleted successfully" });
  } catch (error) {
    console.log("Error deleting song", error);
    next(error);
  }
};
