import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';
import { MovieResponse } from '../movie-response';
import { Results } from '../results';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movieListResultt?: Results[];
  movieListReult?: Results[];
  loading = true;

  constructor(private service: MyServicesService) {}

  ngOnInit(): void {
    this.movieListResultt = this.service.getSimpleNow();
    this.movieListReult = this.service.getSimplePopular();
    this.loading = false;
  }
}
