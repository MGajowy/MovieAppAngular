import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { Movie } from '../../shared/Movie'; 

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];
  movieDetails: Movie;

  constructor(
    private moviesService: MoviesService,
    private router: Router,) { }

  ngOnInit() {
    this.moviesService.getAllMovie().subscribe(response => {
      this.movies = response;
    })
  }

  details(id: number) {
      this.router.navigate(['movies/'+ id])
  }

}
