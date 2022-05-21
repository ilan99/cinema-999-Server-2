const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: { type: String, required: "Member name is required" },
  email: {
    type: String,
    required: "Email address is invalid",
    match: /.+\@.+\..+/,
    unique: true,
  },
  city: { type: String, required: "City is required" },
});

module.exports = mongoose.model("member", memberSchema);
