import mongoose from "mongoose";
const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    color: { type: String, default: null },
  },
  { timestamps: true }
);
noteSchema.set("toJSON", {
  transform: (doc, ret) => {
    console.log(ret.createdAt);
    if (ret.createdAt) {
      ret.date = new Date(ret.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      ret.createdAt = undefined;
    }
    return ret;
  },
});
const Note = mongoose.model("Note", noteSchema);

export default Note;
