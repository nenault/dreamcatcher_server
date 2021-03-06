const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dreamSchema = new Schema({
  name: String,
  date:Date,
  feel: String,
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
      feeling: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  isProtected:{
    type: Boolean,
    default: true,
  }
});

const Dream = mongoose.model("Dream", dreamSchema);

module.exports = Dream;
