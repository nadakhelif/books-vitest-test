import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  async getMovies() {
    const response = await fetch('http://example.com/movies.json');
    const movies = await response.json();
    return movies;

  }
}
