class App {
    attachEventListeners() {
        document.querySelector('#movie-container').addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id);
            const movie = Movie.findById(id);
            document.querySelector('#update').innerHTML = movie.renderUpdateForm();
      });
    }
  }