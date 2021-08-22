const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pet Name is Required"],
      unique: true,
      minLength: [3, "A Pet Name must be at least 3 characters"],
    },
    type: {
      type: String,
      required: [true, "Pet Type is Required"],
      minLength: [3, "A Pet Type must be at least 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
      minLength: [3, "A description must be at least 3 characters"],
    },
    skill1: {
      type: String,
      required: [false],
    },
    skill2: {
      type: String,
      required: [false],
    },
    skill3: {
      type: String,
      required: [false],
    },
  },
  { timestamps: true }
);
PetSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Pet", PetSchema);
