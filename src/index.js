const endPoint = "http://127.0.0.1:3000/api/v1/movies"

function pageReload() {
  window.location.reload(true);
}


document.addEventListener("DOMContentLoaded", () => {
  getMovies()

  const createMovieForm = document.querySelector('#create-movie-form')

  createMovieForm.addEventListener('submit', (e) => createFormHandler(e) )


  const deleteMovieTrigger = document.querySelector('#movie-container')
  
  deleteMovieTrigger.addEventListener("click", (e) => deleteMovie(e))

});

function getMovies() {
  fetch(endPoint)
    .then(res => res.json())
    .then(movies => {
       movies.data.forEach(movie => {

        const newMovie = new Movie(movie.id, movie.attributes)
 
        document.querySelector("#movie-container").innerHTML += newMovie.renderMovieCard();
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
    postMovie(titleInput, releaseYearInput, descriptionInput, imageInput, actorsInput, genreID)
}


function postMovie(title, release_year, description, image_url, starring_actors, genre_id) {
  
  const bodyData = {title, release_year, description, image_url, starring_actors, genre_id};

   fetch("http://127.0.0.1:3000/api/v1/movies", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(bodyData),
   })
     .then((response) => response.json())
     .then((movie) => {
       const newMovie = new Movie(movie.data.id, movie.data.attributes);

       document.querySelector(
         "#movie-container"
       ).innerHTML += newMovie.renderMovieCard();
     });
   document.getElementById("create-movie-form").reset();
  }
    

function deleteMovie(e) {

    const id = parseInt(e.target.dataset.id);
    const movie = Movie.findById(id);
      
    fetch(`http://127.0.0.1:3000/api/v1/movies/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      function deleteCard() {
      let elem = document.getElementById(id);
      elem.parentNode.removeChild(elem);
      }
      deleteCard();
     
      
     })

  }
     