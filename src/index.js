const endPoint = "http://127.0.0.1:3000/api/v1/movies"

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.attachEventListeners();

    getMovies()

    const createMovieForm = document.querySelector("#create-movie-form")

    createMovieForm.addEventListener("submit", (e) => createFormHandler(e))
    
})
  
function getMovies() {
    fetch(endPoint)
    .then(response => response.json())
    .then(movies => {
        movies.data.forEach(movie => {

            const newMovie = new Movie(movie.id, movie.attributes)

            document.querySelector('#movie-container').innerHTML += newMovie.renderMovieCard();
            
        })
    })
}
    

function createFormHandler(e){
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const releaseYearInput = document.querySelector('#input-release_year').value
    const descriptionInput = document.querySelector('#input-description').value
    const imageInput = document.querySelector('#input-url').value
    const actorsInput = document.querySelector('#input-starring_actors').value
    const genreID = parseInt(document.querySelector('#genres').value)
    postFetch(titleInput, releaseYearInput, descriptionInput, imageInput, actorsInput, genreID)
}

function postFetch(title, release_year, description, image_url, starring_actors, genre_id) {
    const bodyData = {title, release_year, description, image_url, starring_actors, genre_id}
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(movie => {

        const newMovie = new Movie(movie.data.id, movie.data.attributes)

        document.querySelector('#movie-container').innerHTML += newMovie.renderMovieCard()
    })
}

function updateFormHandler(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const movie = Movie.findById(id);
    const title = e.target.querySelector('#input-title').value;
    const description = e.target.querySelector('#input-description').value;
    const release_year = e.target.querySelector('#release+year').value;
    const starring_actors = e.target.querySelector('#starring_actors').value;
    const image_url = e.target.querySelector('#input-url').value;
    const genre_id = parseInt(e.target.querySelector('#genres').value);
    patchMovie(movie, title, description, release_year, starring_actors, image_url, genre_id)
  }

  function patchMovie(movie, title, description, release_year, starring_actors, image_url, genre_id) {
    const bodyJSON = {title, description, release_year, starring_actors, image_url, genre_id}
    fetch(`http://localhost:3000/api/v1/movies/${movie.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bodyJSON),
    })
      .then(res => res.json())
      // our backend responds with the updated syllabus instance represented as JSON
      .then(updatedNote => console.log(updatedNote));
  }
