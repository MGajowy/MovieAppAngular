import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../shared/Movie';
import { Router } from '@angular/router';
import { Director } from './../../../director/shared/Director';
import { DirectorsService } from 'src/app/director/services/directors.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {


  selectedDirector: Director;
  description: string = '';
  title: string = '';
  movie: Movie;
  directorId: number;
  directorList: Director[] = [];

  constructor(
    private moviesService: MoviesService,
    private directorServieces: DirectorsService,
    private router: Router) { }

  ngOnInit() {
    this.getDirectorList()
    this.title = '';
    this.description = '';
  }

  addNewMovie() {
    this.movie = {
      title: this.title,
      description: this.description,
      directorId: this.selectedDirector.id
    }

    this.moviesService.createMovie(this.movie).subscribe(reslut => {
      if (reslut.status == 200) {
        this.router.navigate(['movies/'])
        console.log('Ok');
      }

    })

  }

  getDirectorList() {
    this.directorServieces.getAllDirector().subscribe(result => {
      this.directorList = result;
      console.log(this.directorList);
    })
  }

  addNewDirector() {
    this.router.navigate(['addDirector'])
  }

}
