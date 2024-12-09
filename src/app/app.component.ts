import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Results } from './results';
import { MovieResponse } from './movie-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // movieListResult?: Results[];
  // loading = true;

  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {
      
  // }

  // getMovieList() {
  //   return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=98863c71672e2e163b0977b9d86551dc&language=en-US&page=1`);
  // }

  // getMovies(){
  //   this.getMovieList()
  //     .subscribe((response: MovieResponse) => {
  //       this.movieListResult = response.results?.slice(0,9);
  //       this.loading = false;
  //     })
  // }
}
