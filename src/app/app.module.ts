import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './movie/components/add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie/components/movie-details/movie-details.component';
import { MoviesListComponent } from './movie/components/movies-list/movies-list.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import {HttpClientModule } from '@angular/common/http';
import {ModifyMovieComponent} from './movie/components/modify-movie/modify-movie.component';
import { AddDirectorComponent } from './director/components/add-director/add-director.component';
import { DirectorsListComponent } from './director/components/directors-list/directors-list.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    ModifyMovieComponent,
    AddDirectorComponent,
    DirectorsListComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    InputTextareaModule,
    InputTextModule, 
    ButtonModule, 
    TableModule, 
    HttpClientModule, 
    DropdownModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
