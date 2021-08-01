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
            <div data-id=${this.id}>
            <img src=${this.image_url}
            height="200" width="250"
            <br></br>
            <h3>${this.title}</h3>
            <p>${this.description}</p>
            <p>${this.release_year}</p>
            <p>${this.starring_actors}</p>
            <p>${this.genre.name}</p>
            <button data-id-${this.id}>edit</button>
        </div>
        <br></br>` ;
    
    
        document.querySelector('#movie-container').innerHTML += movieMarkup
    }

    renderUpdateForm() {
        
        return `
        <form data-id=${this.id}>
          <h3>Edit a Movie!</h3>
    
          <label>Title</label>
          <input id='input-title' type="text" name="title" value="${this.title}" class="input-text">
          <br><br>

          <label>Description</label>
          <textarea id='input-description' name="description" rows="8" cols="80" value="">${this.description}</textarea>
          <br><br>
    
          <label>Release Year</label>
          <input id='input-release_year' type="text" name="release_year" value="${this.release_year}" class="input-text">
          <br><br>

          <label>Starring Actors</label>
          <input id='input-starring_actors' type="text" name="starring_factors" value="${this.starring_actors}" class="input-text">
          <br><br>
    
          <label>Image URL</label>
          <input id='input-url' type="text" name="image" value="${this.image_url}" class="input-text">
          <br><br>
    
          <label>Genre</label>
          <select id="genres" name="genres" value="${this.genre.name}">
            <option value="1">Comedy</option>
            <option value="2">Horror</option>
            <option value="3">Action</option>
            <option value="4">Romance</option>
            <option value="5">Sci-fi</option>
            <option value="6">Mystery</option>
            <option value="7">Suspense</option>
          </select>
          <br><br>
    
          <input id='edit-button' type="submit" name="submit" value="Edit Syllabus" class="submit">
        </form>
      `;
      }
      static findById(id) {
        return this.all.find(movie => movie.id === id);
        }
    }

Movie.all = [];