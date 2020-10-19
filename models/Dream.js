const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dreamSchema = new Schema({
  name: String,
  concepts: [
    {
      type: {
        type: Schema.Types.ObjectId,
        ref: "Concept",
      },
      some: {
        type: Schema.Types.ObjectId,
        ref: "Some",
      },
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Dream = mongoose.model("Dream", dreamSchema);

module.exports = Dream;