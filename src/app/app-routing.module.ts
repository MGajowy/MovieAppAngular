import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movie/components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie/components/movie-details/movie-details.component';
import { AddMovieComponent } from './movie/components/add-movie/add-movie.component';
import { ModifyMovieComponent } from './movie/components/modify-movie/modify-movie.component';
import { AddDirectorComponent } from './director/components/add-director/add-director.component';
import { DirectorsListComponent } from './director/components/directors-list/directors-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'addMovie', component: AddMovieComponent },
  { path: 'modifyMovie', component: ModifyMovieComponent },
  { path: 'addDirector', component: AddDirectorComponent},
  { path: 'directors', component: DirectorsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
