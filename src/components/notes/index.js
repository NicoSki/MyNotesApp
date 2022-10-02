let {Router} = require("express");
let note = require("./Controller/noteController");

module.exports = (app,auth) => {
    let router = new Router();

    app.use("/allNotes",router);

    //*SHOW ALL NOTES
    router.get("/", auth,note.AllNotes);

    //*ADD NOTE
    router.get("/newNote", auth,(req,res) => res.render("notes/newNote"));
    router.post("/newNote", note.addNote);


    //*EDIT NOTE:
    router.get("/editNote/:id", auth,note.showNote);
    router.post("/editNote/:id", note.editNote);

    //*DELETE NOTE
    router.get("/deleteNote/:id", note.deleteNote);
}