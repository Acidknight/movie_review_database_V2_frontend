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
        </div>
        <br></br>` ;
    
    
                document.querySelector('#movie-container').innerHTML += movieMarkup
    }

}

Movie.all = [];