"use strict";
const apiKey = "93262f96edb7c69116089093defc17ef";
const apiURL = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${apiKey}&page=1`;
const searchInput = document.getElementById("search");
const container = document.querySelector(".container");
/////////////////////////////////////////
/////////////////////////////////////////
// Defind render movie Function
const renderMovie = (response) => {
  container.innerHTML = "";
  // Loop on Results
  response.results.forEach((movie) => {
    // Destructure the Object
    const { overview, title, vote_average, poster_path } = movie;
    // Change DOM
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
    container.insertAdjacentHTML("beforeend", html);
  });
};
// Get Popular Movies
const getMovies = async () => {
  // REQUEST and GET data from API
  const data = await fetch(apiURL);
  const response = await data.json();
  renderMovie(response);
};

const searchAPI = async (search) => {
  search = search.split(" ").join("+");
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
  );
  const response = await data.json();
  renderMovie(response);
};

searchInput.addEventListener("change", (e) => {
  e.preventDefault();
  searchAPI(searchInput.value);
  searchInput.value = "";
});
getMovies();
