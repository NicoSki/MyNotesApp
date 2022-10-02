let noteService = require("../Service/noteService");

class Note {
    async addNote(req, res) {
        try {
            let data = req.body;
            const userID = req.user.id;
            await noteService.addNote(data,userID);
            req.flash("success_msg","Your Note Has Been Added 👍");
            res.redirect("/allNotes");
        } catch (error) {
            console.log(error);
        }
    }

    async AllNotes(req, res) {
        try {
            const userID = req.user.id;
            let response = await noteService.allNotes(userID);
            res.render("notes/allNotes.ejs", { response });
        } catch (error) {
            console.log(error);
        }
    }

    async showNote(req, res) {
        try {
            let { id } = req.params;
            let response = await noteService.showNote(id);
            res.render("notes/editNote.ejs", { response });
        } catch (error) {
            console.log(error);
        }
    }

    async editNote(req, res) {
        try {
            let { id } = req.params;
            let newData = req.body;
            await noteService.editNote(id, newData);
            req.flash("warning_msg","Your Note Has Been Updated Successfully ✏️");
            res.redirect("/allNotes");
        } catch (error) {
            console.log(error);
        }
    }

    async deleteNote(req,res) {
        try {
            let { id } = req.params;
            await noteService.deleteNote(id);
            req.flash("error_msg","Your Note Has Been Deleted 🗑️");
            res.redirect("/allNotes");
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Note();