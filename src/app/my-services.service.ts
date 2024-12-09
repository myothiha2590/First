import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from './movie-response';
import { Results } from './results';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class MyServicesService {
  movieListResult?: Results[];
  popularMovieList?: Results[];
  simpleNowPlaying?: Results[];
  simple1?: Results[];

  constructor(private http: HttpClient) {}
  getMovieList() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=98863c71672e2e163b0977b9d86551dc&language=en-US&page=1`
    );
  }

  getMovies() {
    this.getMovieList().subscribe((response: MovieResponse) => {
      this.movieListResult = response.results?.slice(0, 18);
    });
    return this.movieListResult;
  }

  getPopularList() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=98863c71672e2e163b0977b9d86551dc&language=en-US&page=1`
    );
  }
  getPopular() {
    this.getPopularList().subscribe((response1: MovieResponse) => {
      this.popularMovieList = response1.results?.slice(0, 18);
    });
    return this.popularMovieList;
  }
  simpleNowplaying() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=98863c71672e2e163b0977b9d86551dc&language=en-US&page=1`
    );
  }
  getSimpleNow() {
    this.simpleNowplaying().subscribe((response: MovieResponse) => {
      this.simpleNowPlaying = response.results?.slice(0, 6);
    });
    return this.simpleNowPlaying;
  }
  simplePopularPlaying() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=98863c71672e2e163b0977b9d86551dc&language=en-US&page=1`
    );
  }
  getSimplePopular() {
    this.simplePopularPlaying().subscribe((response: MovieResponse) => {
      this.simple1 = response.results?.slice(0, 6);
    });
    return this.simple1;
  }
}
