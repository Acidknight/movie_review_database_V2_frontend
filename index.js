const endPoint = "http://localhost:3000/api/v1/movies"

document.addEventListener('DOMContentLoaded', () => {
    getMovies()
})

function getMovies() {
    fetch(endPoint)
    .then(response => response.json())
    .then(movies => {
        console.log(movies);
    })
}
