class Movie {

    constructor(movie, movieAttributes) {
        this.id = movie.id
        this.title = movieAttributes.title
        this.release_year = movieAttributes.release_year
        this.description = movieAttributes.description
        this.image_url = movieAttributes.image_url
        this.starring_actors = movieAttributes.starring_actors
        this.genre = movieAttributes.genre
        Movie.all.push(this)
    }

    renderMovieCard(){
        return `
            <div data-id=${this.id}>
            <img src=${this.image_url}
            height="200" width="250"
            <br></br>
            <h3>Title: ${this.title}</h3>
            <p>Description: ${this.description}</p>
            <p>Release Year: ${this.release_year}</p>
            <p>Starring Actors: ${this.starring_actors}</p>
            <p>Genre: ${this.genre.name}</p>
            <button data-id-${this.id}>edit</button>
            <button data-id="${this.id}" class="delete-movie-button">Delete Movie?</button>
        </div>
        <br></br>` ;
    
    
        document.querySelector('#movie-container').innerHTML += movieMarkup
    }

}

function deleteMovie(movie, movieAttributes) {
    debugger
    let movieId = movie.id
    fetch(`http://localhost:3000/movies/${movieId}`,{
      method: 'DELETE'
      })
        .then(resp => resp.json())
        .then(json => {
        let selectedMovie = document.querySelector(`.card[id="${movieId}"]`)
        selectedMovie.remove()
    })
  }

  function addCategoriesClickListeners() {
    document.querySelectorAll('.delete-movie-button').forEach(element => {
        element.addEventListener("click", deleteMovie)
    })
}

Movie.all = [];