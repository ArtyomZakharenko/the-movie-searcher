import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0];
  constructor() { }

  ngOnInit(): void {

  }

}
