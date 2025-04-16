import mongoose from "mongoose";
const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    color: { type: String, default: null },
  },
  { timestamps: true }
);
const Note = mongoose.model("Note", noteSchema);

export default Note;
