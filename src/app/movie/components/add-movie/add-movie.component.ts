import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../shared/Movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  description: string = '';
  title: string = '';
  date: number
  movie: Movie;

  constructor(
    private moviesService: MoviesService,
    private router: Router) { }

  ngOnInit() {

    this.title = '';
    this.description = '';
  }

  addNewMovie() {
    this.movie = {
      title: this.title,
      description: this.description
    }

    this.moviesService.createMovie(this.movie).subscribe(reslut => {
      if (reslut.status == 200) {
        this.router.navigate(['movies/'])
        console.log('Ok');
      }

    })

  }

}
