class Movie {

    constructor(id, movieAttributes) {
        this.id = id;
        this.title = movieAttributes.title;
        this.release_year = movieAttributes.release_year;
        this.description = movieAttributes.description;
        this.image_url = movieAttributes.image_url;
        this.starring_actors = movieAttributes.starring_actors;
        this.genre = movieAttributes.genre;
        Movie.all.push(this)
    }


    renderMovieCard(){
        return `
            <div id=${this.id}>
            <img src=${this.image_url}
            height="200" width="250"
            <br></br>
            <h3>${this.title}</h3>
            <p>${this.description}</p>
            <p>${this.release_year}</p>
            <p>${this.starring_actors}</p>
            <p>${this.genre.name}</p>
            <button type="button" class="btn btn-primary" data-id=${this.id}>Delete</button>
        </div>
        <br></br>` ;
        }  
        
      static findById(id) {
          return this.all.find(movie => movie.id === id);
      }
    }
Movie.all = [];