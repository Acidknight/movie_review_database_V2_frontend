const endPoint = "http://localhost:3000/api/v1/movies"

document.addEventListener('DOMContentLoaded', () => {
    getMovies()

    const createMovieForm = document.querySelector("#create-movie-form")

    createMovieForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getMovies() {
    fetch(endPoint)
    .then(response => response.json())
    .then(movies => {
        movies.data.forEach(movie => {

            let newMovie = new Movie(movie, movie.attributes)

            document.querySelector('#movie-container').innerHTML += newMovie.renderMovieCard()
            newMovie.renderMovieCard()
            
            //render(movie) 
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
        const movieData = movie.data
        let newMovie = new Movie(movieData, movieData.attributes)

        document.querySelector('#movie-container').innerHTML += newMovie.renderMovieCard()
        newMovie.renderMovieCard()
    })
}
