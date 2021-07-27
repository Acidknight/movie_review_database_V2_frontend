const endPoint = "http://localhost:3000/api/v1/movies"

document.addEventListener('DOMContentLoaded', () => {
    getMovies()
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
                <h3>${movie.attributes.title}</h3>
                <p>${movie.attributes.description}</p>
                <p>${movie.attributes.release_year}</p>
                <p>${movie.attributes.starring_actors}</p>
                <p>${movie.attributes.genre.name}</p>
                <button data-id-${movie.id}>edit</button>
            </div>
            <br></br>` ;
        })
    })
}

