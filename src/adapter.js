class Adapter {
  constructor() {
    this.baseUrl = 'http://127.0.0.1:3000/api/v1/';
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  fetchMovies() {
    return this.get(`${this.baseUrl}/movies`);
  }

  updateMovie(title, release_year, description, image_url, starring_actors, genre_id) {
    return this.patch(`${this.baseUrl}/movies/${id}`, body);
  }

  get(url) {
    return fetch(url).then(res => res.json());
  }

  patch(url, body) {
    return fetch(url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(res => res.json());
  }
}