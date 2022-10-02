let DAO = require("../../../models/noteModel");

class Note {
    async addNote(data,userID) {
        try {
            let response = await DAO.addNote(data,userID);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async allNotes(userID) {
        try {
            let response = await DAO.allNotes(userID);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async showNote(id){
        try {
            let response = await DAO.showNote(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async editNote(id, newData) {
        try {
            let response = await DAO.editNote(id,newData);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteNote(id) {
        try {
            let response = await DAO.deleteNote(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Note();