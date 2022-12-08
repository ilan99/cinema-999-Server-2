const express = require("express");
const movieServices = require("../services/movieServices");

const router = express.Router();

// Get all movies
router.route("/").get(async (req, res) => {
  console.log("New request: ", req.headers);
  const movies = await movieServices.getAllMovies();
  return res.json(movies);
});

// Get movie by Id
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const movie = await movieServices.getMovieById(id);
  return res.json(movie);
});

// Post
router.route("/").post(async (req, res) => {
  const newMovie = req.body;
  try {
    const data = await movieServices.addMovie(newMovie);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Put
router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  const changeMovie = req.body;
  try {
    const data = await movieServices.updateMovie(id, changeMovie);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Delete
router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  const data = await movieServices.deleteMovie(id);
  return res.json(data);
});

module.exports = router;
