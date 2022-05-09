import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onHome() {
    console.log('home');
    this.router.navigate(['home']);
  }

  onFavorites() {
    console.log('favorites');
    this.router.navigate(['favorites']);
  }
}
