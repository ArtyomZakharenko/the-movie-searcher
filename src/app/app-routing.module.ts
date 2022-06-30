import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesListComponent} from "./movies/movies-list/movies-list.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MoviesListComponent },
  { path: 'favorites', component: MoviesListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'search', component: MoviesListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
