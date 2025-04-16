import express from "express";
import { createNote, getNotes } from "../controllers/noteController.js";

const router = express.Router();

router.route("/").get(getNotes).post(createNote);

export default router;
