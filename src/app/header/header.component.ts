import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {DataReducerService} from "../shared/data-reducer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private dataReducerService: DataReducerService
  ) { }

  onHome() {
    this.router.navigate(['home']);
  }

  onFavorites() {
    this.router.navigate(['favorites']);
  }

  onSubmit(form: NgForm) {
    if (!form.valid || !form.value.search.replace(/\s/g, '').length) {
      form.reset();
      return;
    }
    this.router.navigate(['search'], { queryParams: { q: form.value.search, page: "1"} });
    this.dataReducerService.fetchSearchMovies(form.value.search, 1);
    form.reset();
  }
}
