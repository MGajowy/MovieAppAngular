import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../shared/Movie';

import { DirectorsService } from 'src/app/director/services/directors.service';
import { Director } from './../../../director/shared/Director';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  id: number;
  movieDetails: Movie;
  modify: boolean = false;
  director: Director;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute, 
    private directorsService: DirectorsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.moviesService.getMovie(this.id).subscribe( result => {
      this.movieDetails = result;
      this.getDirectorInfo(result.directorId)
    })
  }
  getDirectorInfo(id: number) {
    this.directorsService.getDirector(id).subscribe(result => {
      this.director = result;
    })
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
