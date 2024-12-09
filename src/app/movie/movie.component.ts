import { Component, OnInit } from '@angular/core';
import { Results } from '../results';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../movie-response';
import { MyServicesService } from '../my-services.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  movieListResultt?: Results[];
  loading = true;

  constructor(private service: MyServicesService) {}

  ngOnInit(): void {
    this.movieListResultt = this.service.getMovies();
    this.loading = false;
  }
  gettMovies() {
   
  }
}
