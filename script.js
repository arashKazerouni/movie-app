"use strict";
const apiURL = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=93262f96edb7c69116089093defc17ef&page=1`;
const posterURL = "https://image.tmdb.org/t/p/original/";
/////////////////////////////////////////
/////////////////////////////////////////

const getMovies = async () => {
  const data = await fetch(apiURL);
  const response = await data.json();
  response.results.forEach((movie) => {
    const {
      overview,
      popularity,
      release_date,
      title,
      vote_average,
      poster_path,
    } = movie;
  });
};
getMovies();
