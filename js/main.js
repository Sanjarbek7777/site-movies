var elMovies = document.querySelector('.movies');
var elMoviesTemplate = document.querySelector('#movies__template').content;

// var elModalInfoButton = document.querySelector('.js-info-btn');
var elMovieInfoModal = document.querySelector('.movie-info-modal');
var elMovieInfoModalTitle = elMovieInfoModal.querySelector('.movie-info-modal__title');
var elMovieInfoModalRating = elMovieInfoModal.querySelector('.movie-info-modal__rating');
var elMovieInfoModalYear = elMovieInfoModal.querySelector('.movie-info-modal__year');
var elMovieInfoModalDuration = elMovieInfoModal.querySelector('.movie-info-modal__duration');
var elMovieInfoModalIFrame = elMovieInfoModal.querySelector('.movie-info-modal__iframe');
var elMovieInfoModalCategories = elMovieInfoModal.querySelector('.movie-info-modal__categories');
var elMovieInfoModalSummary = elMovieInfoModal.querySelector('.movie-info-modal__summary');
var elMovieInfoModalImdbLink = elMovieInfoModal.querySelector('.movie-info-modal__imdb-link');



function showMovies (movies) {
  elMovies.innerHTML = '';
  var elMoviesFragment = document.createDocumentFragment();

  for (var movie of movies.slice(0,52)) {
    var elMovie = elMoviesTemplate.cloneNode(true);

    elMovie.querySelector('.movie__img').src = movie.youtubePoster;
    elMovie.querySelector('.movie__title').textContent = movie.title;
    elMovie.querySelector('.movie__rating').textContent = movie.imdbRating;
    elMovie.querySelector('.movie__year ').textContent = movie.year;
    elMovie.querySelector('.movie__hour').textContent = `${Math.floor(movie.runtime / 60)} h ${Math.floor(movie.runtime % 60)} min`;
    elMovie.querySelector('.movie__genre').textContent = movie.categories.join(', ');

    elMoviesFragment.appendChild(elMovie);
  }

  elMovies.appendChild(elMoviesFragment);
}

function updateMovieInfoModal (imdbId) {
  const movie = movies.find(function (movie) {
    return movie.imdbId === imdbId;
  });

  elMovieInfoModalTitle.textContent = movie.title;
  elMovieInfoModalRating.textContent = movie.imdbRating;
  elMovieInfoModalYear.textContent = movie.year;
  elMovieInfoModalDuration.textContent = `${Math.floor(movie.runtime / 60)} h ${Math.floor(movie.runtime % 60)} min`;
  elMovieInfoModalIFrame.src = `https://www.youtube-nocookie.com/embed/${movie.youtubeId}`;
  elMovieInfoModalCategories.textContent = movie.categories.join(', ');
  elMovieInfoModalSummary.textContent = movie.summary;
  elMovieInfoModalImdbLink.href =  `https://www.imdb.com/title/${movie.imdbId}`;
}

elMovies.addEventListener('click', evt => {
  if (evt.target.matches('.js-info-btn')) {
    updateMovieInfoModal(evt.target.dataset.imdbId);
  }
});

elMovieInfoModal.addEventListener('hidden.bs.modal', () => {
  elMovieInfoModalIFrame.src = '';
})

const elSearchForm = document.querySelector('.js-search-form');
const elSearchInput = elSearchForm.querySelector('.js-search-input');

if   (elSearchForm) {
  elSearchForm.addEventListener('submit', evt => {
    evt.preventDefault();

    var titleMovie = new RegExp(elSearchInput.value, 'gi');
    var findMovies = movies.filter(movie => movie.title.match(titleMovie));

    if (findMovies.length > 0) {
      showMovies(findMovies);
    } else {
      elMovies,innerHTML = 'Film not found';
    }
  });
}

showMovies(movies.slice(0, 52));