import { Component, OnInit } from '@angular/core';
import { DirectorsService } from '../../services/directors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-director',
  templateUrl: './add-director.component.html',
  styleUrls: ['./add-director.component.scss']
})
export class AddDirectorComponent implements OnInit {

  surname: string;
  name: string;
  director: any;

  constructor(
    private directorServiece: DirectorsService,
    private router: Router) { }

  ngOnInit() {
    this.name = '';
    this.surname = '';
  }

  addNewDirector() {
    this.director = {
      name: this.name,
      surname: this.surname
    }

    this.directorServiece.createDirector(this.director).subscribe(result => {
      if (result.status == 200) {
        this.router.navigate(['addMovie']);
      }
    })
  }

}
