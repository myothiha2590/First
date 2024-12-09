import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Results } from '../results';
import { MovieResponse } from '../movie-response';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  movieId?: MovieResponse | any;
  movieDetail?: Results | any;
  loading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    if (this.movieId) {
      this.getMovieDetail(this.movieId);
    }
  }

  getMovieDetail(id: MovieResponse) {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=98863c71672e2e163b0977b9d86551dc&language=en-US`
      )
      .subscribe((response: MovieResponse) => {
        this.movieDetail = response;
        this.loading = false;
      });
  }
}
