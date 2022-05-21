const axios = require("axios");
const memberServices = require("../services/memberServices");
const movieServices = require("../services/movieServices");
const subscriptionServices = require("../services/subscriptionServices");

const initData = () => {
  memberServices.deleteAllMembers();
  movieServices.deleteAllMovies();
  subscriptionServices.deleteAllSubscriptions();
};

const loadMembers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const members = (await axios.get(url)).data;

  members.forEach((obj) => {
    const member = {
      name: obj.name,
      email: obj.email,
      city: obj.address.city,
    };
    memberServices.addMember(member);
  });
};

const loadMovies = async () => {
  const url = "https://api.tvmaze.com/shows";
  const movies = (await axios.get(url)).data.slice(0, 20);

  movies.forEach((obj) => {
    const movie = {
      name: obj.name,
      genres: obj.genres,
      image: obj.image.medium,
      premiered: obj.premiered,
    };
    movieServices.addMovie(movie);
  });
};

module.exports = { initData, loadMembers, loadMovies };
