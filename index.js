const endPoint = "http://localhost:3000/api/v1/movies"

document.addEventListener('DOMContentLoaded', () => {
    getMovies()

    const createMovieForm = document.querySelector("create-movie-form")

    createMovieForm.addEventListener("submit", (e) => createFormHandler())
})

function getMovies() {
    fetch(endPoint)
    .then(response => response.json())
    .then(movies => {
        movies.data.forEach(movie => {
            const movieMarkup = `
                <div data-id=${movie.id}>
                <img src=${movie.attributes.image_url}
                height="200" width="250"
                <br></br>
                <h3>Title: ${movie.attributes.title}</h3>
                <p>Description: ${movie.attributes.description}</p>
                <p>Release Year: ${movie.attributes.release_year}</p>
                <p>Starring Actors: ${movie.attributes.starring_actors}</p>
                <p>Genre: ${movie.attributes.genre.name}</p>
                <button data-id-${movie.id}>edit</button>
            </div>
            <br></br>` ;

            document.querySelector('#movie-container').innerHTML += movieMarkup
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
    const genreInput = document.querySelector('#genres').value
}

