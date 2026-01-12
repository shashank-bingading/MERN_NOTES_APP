import express from "express";
import {
  getNote,
  createNote,
  updateNote,
  deleteNote,
  getANote,
} from "../controllers/Notes_Controller.js";

const router = express.Router();

router.get("/", getNote);

router.get("/:id", getANote);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;

// mongodb+srv://shashanksinghwork88_db_user:keBekjld7A6At0AO@cluster2.g2ll8f8.mongodb.net/
