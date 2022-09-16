"use strict";
const apiURL = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=93262f96edb7c69116089093defc17ef&page=1`;
const posterURL = "https://image.tmdb.org/t/p/original/";

const container = document.querySelector(".container");
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
    const html = `
    <article>
        <img
        src="https://image.tmdb.org/t/p/original${poster_path}"
        alt=""
        class="poster"
        />
        <div class="about-movie">

        <h3 class="title">${title}</h3>
        <span id="rating">${vote_average}</span>
        </div>

        <div class="overview">
          <h4>Overview :</h4><br/>
          <p>${overview}</p>
        </div>
    </article>
`;
    container.insertAdjacentHTML("afterbegin", html);
    // console.log(poster_path);
  });
};
getMovies();
