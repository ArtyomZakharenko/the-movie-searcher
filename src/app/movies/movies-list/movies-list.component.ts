import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopularMoviesService} from "../popular-movies.service";
import {DataReducerService} from "../../shared/data-reducer.service";
import {map, Observable, Subscription} from "rxjs";
import {Movie} from "../models/movie.model";
import {MovieCollection} from "../models/movie-collection.model";
import {Entity} from "../../shared/entity.model";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit{
  private movies$: Observable<Entity<MovieCollection>> = this.dataReducer.getMoviesData();
  public value$ = this.movies$.pipe(
    map((entity) => entity.value)
  );
  public status$ = this.movies$.pipe(
    map((entity) => entity.status)
  );
  public error$ = this.movies$.pipe(
    map((entity) => entity.error)
  );

  constructor(
    private dataReducer: DataReducerService,
    private popularMoviesService: PopularMoviesService
  ) { }

  ngOnInit(): void {
    this.popularMoviesService.fetchPopularMovies();
  }

}
