import { Component, OnInit } from '@angular/core';
import { DirectorsService } from '../../services/directors.service';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-directors-list',
  templateUrl: './directors-list.component.html',
  // styleUrls: ['./directors-list.component.scss']
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class DirectorsListComponent implements OnInit {

  directors: any[];

  constructor(
    private directorServiece: DirectorsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.directorServiece.getAllDirector().subscribe(result => {
      this.directors = result;
      console.log(this.directors);

    })
  }


}
