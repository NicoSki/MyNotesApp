const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: {type:String}
});

let noteModel = mongoose.model("note", noteSchema);

class Notes {

    async addNote(data,userID) {
        try {
            let newNote = noteModel(data);
            newNote.user = userID;
            await newNote.save();
            return newNote;
        } catch (error) {
            console.log(error);
        }
    }

    async allNotes(userID) {
        try {
            let all = await noteModel.find({user:userID});
            return all;
        } catch (error) {
            console.error(error);
        }
    }

    async showNote(id) {
        try {
            let response = await noteModel.findOne({ _id: id });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async editNote(id, newData) {
        try {
            let modified = await noteModel.updateOne({ "_id": id }, { $set: { "title": newData.title, "description": newData.description } });
            return modified;
        } catch (error) {
            console.error(error);
        }
    }

    async deleteNote(id){
        try {
            let response = await noteModel.remove({ _id: id });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new Notes();