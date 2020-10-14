const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conceptSchema = new Schema({
  name: String,
  image: String,
  decription: String,
  type: [
    {
      type: String,
      enum: [
        "Text",
        "Event",
        "Place",
        "Number",
        "People",
        "Color",
        "Feeling",
        "Animal",
      ],
    },
  ],
  type_value: String,
});

const Concept = mongoose.model("Concept", conceptSchema);

module.exports = Concept;
