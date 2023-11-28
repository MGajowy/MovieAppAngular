import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FilmAppAngular';

  constructor(
    private router: Router,
    ) { }

listMovies() {
  this.router.navigate(['movies'])
}

addMovie() {
  this.router.navigate(['addMovie'])
}

}
