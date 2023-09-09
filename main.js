var elFilmsList = document.querySelector(".films-list");
var filmsFragment = document.createDocumentFragment();
for (const film of films) {

  // Creating features of films
  var elFilmItem = document.createElement("li");
  var elFilmTitile = document.createElement("h3");
  var elFilmPic = document.createElement("img");
  var elFilmOverview = document.createElement("p");
  var elFilmYear = document.createElement("time");
  var elFilmGenre = document.createElement("span");


  elFilmTitile.textContent = film.Title;
  elFilmPic.src = film.Poster;
  elFilmOverview.textContent = film.overview.split("").slice(0 ,50).join("") + "...";

  // Get time
  function getTime(format) {
    var date = new Date(format);

    var day = String( date.getDate()).padStart(2, 0);
    var month = String( date.getMonth() + 1).padStart(2, 0);
    var fullyear = String( date.getFullYear());
    return `${day}.${month}.${fullyear}`
  }
  elFilmYear.textContent = getTime(film.Year)
  

  // Genre list
  var elFilmGenreList = document.createElement("ul");
  elFilmGenreList.classList.add("film-genre-list")
  for (const genre of film.genres) {

    var elFilmGenreItem = document.createElement("li");
    elFilmGenreItem.classList.add("mt-2")
    elFilmGenreItem.textContent = genre;

    elFilmGenreList.appendChild(elFilmGenreItem);
  }


  elFilmItem.append(elFilmTitile, elFilmPic, elFilmOverview, elFilmYear, elFilmGenre, elFilmGenreList);
  filmsFragment.appendChild(elFilmItem);

  // Styling
  elFilmTitile.classList.add("fs-5", "films-overview")
  elFilmItem.classList.add("films-item");
  elFilmPic.classList.add("films-pic");
}
elFilmsList.appendChild(filmsFragment);