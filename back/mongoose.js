const mongoose = require("mongoose");
const password = process.env.PASSWORD

const uri = `mongodb+srv://${process.env.NOME}:${process.env.PASSWORD}@cluster0.swcrutq.mongodb.net/${process.env.NAME_PROJECT}`;

mongoose.connect(uri)
  .then(() => console.log("Connesso al database in modo corretto"))
  .catch((err) => console.error("Errore durante la connessione al problema:", err));


const userSchema = new mongoose.Schema({
    email : String,
    password : String
})

const User = mongoose.model("User", userSchema)

module.exports = {mongoose , User}