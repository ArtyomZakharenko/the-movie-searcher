import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Entity, EntityStatus} from "../shared/entity.model";
import {MovieCollection, MovieCollectionDto} from "../movies/models/movie-collection.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MovieCollectionConverter} from "../shared/data.converter";

@Injectable({
  providedIn: 'root'
})
export class RecommendedMoviesService {
  private recommendedMovies = new BehaviorSubject<Entity<MovieCollection>>(null);

  constructor(
    private http: HttpClient
  ) {  }

  fetchRecommendedMovies(id: number): void {
    const url: string = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${environment.API_KEY}`;
    this.recommendedMovies.next({status: EntityStatus.Pending});
    this.http.get<MovieCollectionDto>(url)
      .pipe(
        map((result) => new MovieCollectionConverter(result))
      ).subscribe({
      next: (value) => this.recommendedMovies.next({value, status: EntityStatus.Success}),
      error: (error) => this.recommendedMovies.next({status: EntityStatus.Error, error})
    });
  }

  getRecommendedMovies(): Observable<Entity<MovieCollection>> {
    return this.recommendedMovies.asObservable();
  }
}
