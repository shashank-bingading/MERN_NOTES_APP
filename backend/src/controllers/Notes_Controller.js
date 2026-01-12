import Note from "../models/Note.js";

export const getNote = async (_, res) => {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in fetching notes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getANote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json({ message: "Note found", note });
  } catch (error) {
    console.log("Error in fetching note", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newnotes = new Note({ title: title, content: content });
    const NEWNOTES = await newnotes.save();
    res.status(201).json(NEWNOTES);
  } catch (error) {
    console.log("Error in creation of note", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "note not found" });
    res.status(200).json({ message: "Note Updated" });
  } catch (error) {
    console.log("Error in updation of note", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res
        .status(404)
        .json({ message: "The node to be deleted not found" });
    res.status(200).json({ message: "Note Deleted", deletedNote });
  } catch (error) {
    console.log("Error in deletion of note", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
