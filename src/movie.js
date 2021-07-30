class Movie {

    constructor(movie, movieAttributes) {
        this.id = movie.id
        this.title = movieAttributes.title
        this.release_year = movieAttributes.release_year
        this.description = movieAttributes.description
        this.image_url = movieAttributes.image_url
        this.starring_actors = movieAttributes.starring_actors
        Movie.all.push(this)
    }

}

Movie.all = [];