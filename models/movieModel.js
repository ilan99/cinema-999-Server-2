const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: { type: String, required: "Movie name is required" },
  genres: [{ type: String, default: undefined }],
  image: { type: String, required: false },
  premiered: { type: Date, required: "Premiered date is required" },
});

module.exports = mongoose.model("movie", movieSchema);
