import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "failed", error });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content, color } = req.body;
    const note = new Note({ title, content, color });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "failed", error });
  }
};
