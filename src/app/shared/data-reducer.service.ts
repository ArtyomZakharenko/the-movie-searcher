import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {MovieCollection, MovieCollectionDto} from "../movies/models/movie-collection.model";
import {Entity, EntityStatus} from "./entity.model";
import {MovieCollectionConverter} from "./data.converter";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class DataReducerService {
  private MovieData = new BehaviorSubject<Entity<MovieCollection>>(null);
  private baseUrl: string = 'https://api.themoviedb.org/3/';

  constructor(
    private http: HttpClient
  ) { }

  private fetchMoviesData(url: string): void {
    this.setMoviesData({status: EntityStatus.Pending});
    this.http.get<MovieCollectionDto>(url)
      .pipe(
      map(data => new MovieCollectionConverter(data))
    ).subscribe({
      next: (value) => this.setMoviesData({status: EntityStatus.Success, value}),
      error: (error) => this.setMoviesData({status: EntityStatus.Error, error})
    })
  }

  private setMoviesData(data: Entity<MovieCollection>) {
    this.MovieData.next(data);
  }

  fetchPopularMovies(): void {
    const url: string = `${this.baseUrl}discover/movie?api_key=${environment.API_KEY}&sort_by=popularity.desc`;
    this.fetchMoviesData(url);
  }

  fetchSearchMovies(query: string, page: number): void {
    const url: string = `${this.baseUrl}search/movie?api_key=${environment.API_KEY}&query=${query}&page=${page}`;
    this.fetchMoviesData(url);
  }

  getMoviesData(): Observable<Entity<MovieCollection>> {
    return this.MovieData.asObservable();
  }
}
