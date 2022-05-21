const Movie = require("../models/movieModel");

// Get
const getAllMovies = () => {
  return new Promise((res, rej) => {
    Movie.find({}, (err, movies) => {
      if (err) {
        rej(err);
      } else {
        res(movies);
      }
    });
  });
};

const getMovieById = (id) => {
  return new Promise((res, rej) => {
    Movie.findById(id, (err, movie) => {
      if (err) {
        rej(err);
      } else {
        res(movie);
      }
    });
  });
};

// Post
const addMovie = (newMovie) => {
  return new Promise((res, rej) => {
    const movie = new Movie(newMovie);
    movie.save((err) => {
      if (err) {
        rej(err);
      } else {
        res("movie added successfully");
      }
    });
  });
};

// Put
const updateMovie = (id, changeMovie) => {
  return new Promise((res, rej) => {
    Movie.findByIdAndUpdate(id, changeMovie, { runValidators: true }, (err) => {
      if (err) {
        rej(err);
      } else {
        res("movie updated successfully");
      }
    });
  });
};

// Delete
const deleteMovie = (id) => {
  return new Promise((res, rej) => {
    Movie.findByIdAndDelete(id, (err) => {
      if (err) {
        rej(err);
      } else {
        res("movie deleted successfully");
      }
    });
  });
};

const deleteAllMovies = () => {
  return new Promise((res, rej) => {
    Movie.deleteMany({}, (err) => {
      if (err) {
        rej(err);
      } else {
        res("all movies deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
  deleteAllMovies,
};
