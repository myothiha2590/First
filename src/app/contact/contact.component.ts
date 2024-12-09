import { Component } from '@angular/core';
import { MyServicesService } from '../my-services.service';
import { MovieResponse } from '../movie-response';
import { Results } from '../results';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  movieListResultt?: Results[];
  loading = true;

  constructor(private service: MyServicesService) {}

  ngOnInit(): void {
    this.movieListResultt = this.service.getPopular();
    this.loading = false;
  }
  gettMovies() {
    
  }
}
