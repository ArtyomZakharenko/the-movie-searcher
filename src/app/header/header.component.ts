import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) { }

  onHome() {
    console.log('home');
    this.router.navigate(['home']);
  }

  onFavorites() {
    this.router.navigate(['favorites']);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.router.navigate(['search'], {queryParams: {q: form.value.q}});
    form.reset();
  }
}
