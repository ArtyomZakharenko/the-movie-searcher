import {Component, OnInit} from '@angular/core';
import {DataReducerService} from "../../shared/data-reducer.service";
import {map, Observable} from "rxjs";
import {MovieCollection} from "../models/movie-collection.model";
import {Entity, EntityStatus} from "../../shared/entity.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  private movies$: Observable<Entity<MovieCollection>> = this.dataReducer.getMoviesData();
  public value$: Observable<MovieCollection> = this.movies$.pipe(
    map((entity) => entity.value)
  );
  public status$: Observable<EntityStatus> = this.movies$.pipe(
    map((entity) => entity.status)
  );
  public error$: Observable<HttpErrorResponse> = this.movies$.pipe(
    map((entity) => entity.error)
  );

  constructor(
    private route: ActivatedRoute,
    private dataReducer: DataReducerService,
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe((value) => {
      if (value[0].path === 'search') {
        const query = this.route.snapshot.queryParamMap.get('q');
        const page = this.route.snapshot.queryParamMap.get('page');
        this.dataReducer.fetchSearchMovies(query, +page);
      } else {
       this.dataReducer.fetchPopularMovies();
      }
    });
  }
}
