import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RelatedMoviesComponent} from "./movie-detail/related-movies/related-movies.component";
import { ErrorMessageComponent } from './shared/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailComponent,
    LoadingSpinnerComponent,
    RelatedMoviesComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
