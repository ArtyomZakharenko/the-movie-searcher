import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MovieDetail, MovieDetailDto} from "./movie-detail.model";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Entity, EntityStatus} from "../shared/entity.model";
import {MovieDetailConverter} from "../shared/data.converter";

@Injectable(
  {providedIn: 'root'}
)
export class MovieDetailService {
  private MovieDetail = new BehaviorSubject<Entity<MovieDetail>>(null);

  constructor(
    private http: HttpClient
  ) {
  }

  fetchMovieDetail(id: number): void {
    const url: string = `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.API_KEY}`;
    this.MovieDetail.next({status: EntityStatus.Pending});
    this.http.get<MovieDetailDto>(url).pipe(
      map(data => new MovieDetailConverter(data))
    ).subscribe({
      next: (value) => this.MovieDetail.next({status: EntityStatus.Success, value}),
      error: (error) => this.MovieDetail.next({status: EntityStatus.Error, error})
    });
  }

  getMovieDetail(): Observable<Entity<MovieDetail>> {
    return this.MovieDetail.asObservable();
  }
}
