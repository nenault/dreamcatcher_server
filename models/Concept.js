const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conceptSchema = new Schema({
  name: String,
  image: {
    type: String,
    default:
      "https://i.pinimg.com/originals/84/1a/35/841a358c13ca7366dd313f86b0c357e6.jpg",
  },
});

const Concept = mongoose.model("Concept", conceptSchema);

module.exports = Concept;
