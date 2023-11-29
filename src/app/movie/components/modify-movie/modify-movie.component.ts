import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/Movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Director } from 'src/app/director/shared/Director';
import { DirectorsService } from 'src/app/director/services/directors.service';

@Component({
  selector: 'app-modify-movie',
  templateUrl: './modify-movie.component.html',
  styleUrls: ['./modify-movie.component.scss']
})
export class ModifyMovieComponent implements OnInit {

  movie: Movie;
  id: number;
  selectedDirector: Director;
  directorList: Director[] = [];

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute,
    private directorServieces: DirectorsService,
  ) { }

  ngOnInit() {
    this.getDirectorList();
    this.id = this.route.snapshot.params['id'];
    this.moviesService.getMovie(this.id).subscribe(result => {
      this.movie = result;
    })
  }

  updateMovie(){
    this.movie.directorId = this.selectedDirector.id;

    this.moviesService.updateMovie(this.id, this.movie).subscribe(result => {
      console.log('OK')
      this.router.navigate(['movies']);
    } )
  }

  getDirectorList() {
    this.directorServieces.getAllDirector().subscribe(result => {
      this.directorList = result;
    })
  }

}
