import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {MovieCollection} from "../movies/models/movie-collection.model";
import {Entity} from "./entity.model";


@Injectable({
  providedIn: 'root'
})
export class DataReducerService {
  private MovieData = new BehaviorSubject<Entity<MovieCollection>>(null);

  constructor() { }

  setMoviesData(data: Entity<MovieCollection>) {
    this.MovieData.next(data);
  }

  getMoviesData(): Observable<Entity<MovieCollection>> {
    return this.MovieData.asObservable();
  }
}
