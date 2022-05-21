const mongoose = require("mongoose");
const Member = require("../models/memberModel");
const Movie = require("../models/movieModel");

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  memberId: { type: Schema.Types.ObjectId, ref: Member },
  movies: [
    {
      movieId: { type: Schema.Types.ObjectId, ref: Movie },
      date: { type: Date, required: "Watched date is required" },
    },
  ],
});

module.exports = mongoose.model("subscription", subscriptionSchema);
