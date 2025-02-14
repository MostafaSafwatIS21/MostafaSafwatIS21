const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name of the template"],
    unique: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      "resume",
      "cover letter",
      "job tracker",
      "personal website",
      "email signature",
    ],
    required: [true, "Please provide the type of the template"],
  },
  cover: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isFree: {
    type: Boolean,
    default: false,
    required: true,
  },
  classifed: {
    type: String,
    required: true,
    enum: ["modern", "classic", "creative", "professional"],
    required: [true, "Please provide the classification of the template"],
  },
});

const Template = mongoose.model("Template", templateSchema);
module.exports = Template;
