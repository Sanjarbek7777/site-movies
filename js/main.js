var elMovies = document.querySelector('.movies');
var elMoviesTemplate = document.querySelector('#movies__template').content;

var elMovieInfoModal = document.querySelector('.movie-info-modal');
var elMovieInfoModalTitle = elMovieInfoModal.querySelector('.movie-info-modal__title');
var elMovieInfoModalRating = elMovieInfoModal.querySelector('.movie-info-modal__rating');
var elMovieInfoModalYear = elMovieInfoModal.querySelector('.movie-info-modal__year');
var elMovieInfoModalDuration = elMovieInfoModal.querySelector('.movie-info-modal__duration');
var elMovieInfoModalIFrame = elMovieInfoModal.querySelector('.movie-info-modal__iframe');
var elMovieInfoModalCategories = elMovieInfoModal.querySelector('.movie-info-modal__categories');
var elMovieInfoModalSummary = elMovieInfoModal.querySelector('.movie-info-modal__summary');
var elMovieInfoModalImdbLink = elMovieInfoModal.querySelector('.movie-info-modal__imdb-link');

var elMoviesFragment = document.createDocumentFragment();


for (var movie of movies.slice(0,52)) {
  var elMovie = elMoviesTemplate.cloneNode(true);

  elMovie.querySelector('.movie__img').src = `http://i3.ytimg.com/vi/${movie.ytid}/mqdefault.jpg`;
  elMovie.querySelector('.movie__title').textContent = movie.Title;
  elMovie.querySelector('.movie__rating').textContent = movie.imdb_rating;
  elMovie.querySelector('.movie__year').textContent = movie.movie_year;
  elMovie.querySelector('.movie__hour').textContent = `${Math.floor(movie.runtime / 60)} h ${Math.floor(movie.runtime % 60)} min`;
  elMovie.querySelector('.movie__genre').textContent = movie.Categories.split('|').join(', ');

  elMoviesFragment.appendChild(elMovie);
}

elMovies.appendChild(elMoviesFragment);
