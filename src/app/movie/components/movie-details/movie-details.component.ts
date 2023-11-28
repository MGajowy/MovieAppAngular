import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../shared/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  id: number;
  movieDetails: Movie;
  modify: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.moviesService.getMovie(this.id).subscribe( result => {
      this.movieDetails = result;})
  }

  deleteMovie() {
    this.moviesService.deleteMovie(this.id).subscribe( result => {
      if (result.status == 200) {
        this.router.navigate(['movies/'])
        console.log('ok');
      } else {
        console.log('coś poszło nie tak :(');
      }
      
    })
    
  }

  modifyMovie() {
    this.modify = true;
  }

}
