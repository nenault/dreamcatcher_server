const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SomeSchema = new Schema({
  value: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  concept: {
    type: Schema.Types.ObjectId,
    ref: "Concept",
  },
});

const Some = mongoose.model("Some", SomeSchema);

module.exports = Some;
