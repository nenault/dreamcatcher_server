const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dreamSchema = new Schema({
  name: String,
  concepts: {
    type: Schema.Types.ObjectId,
    ref: "Concept",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Dream = mongoose.model("Dream", dreamSchema);

module.exports = Dream;
