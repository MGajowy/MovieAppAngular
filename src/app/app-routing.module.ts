import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movie/components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie/components/movie-details/movie-details.component';
import { AddMovieComponent } from './movie/components/add-movie/add-movie.component';
import { ModifyMovieComponent } from './movie/components/modify-movie/modify-movie.component';


const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'addMovie', component: AddMovieComponent },
  { path: 'modifyMovie', component: ModifyMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
