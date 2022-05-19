import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DataReducerService} from "../shared/data-reducer.service";
import {EntityStatus} from "../shared/entity.model";
import {MovieCollectionDto} from "./models/movie-collection.model";
import {map} from "rxjs";
import {MovieCollectionConverter} from "../shared/data.converter";

@Injectable({
  providedIn: 'root'
})
export class PopularMoviesService {

  constructor(
    private http: HttpClient,
    private dataReducer: DataReducerService
  ) {
  }

  fetchPopularMovies(): void {
    const url: string = `https://api.themoviedb.org/3/discover/movie?api_key=${environment.API_KEY}&sort_by=popularity.desc`;
    this.dataReducer.setMoviesData({status: EntityStatus.Pending});
    this.http.get<MovieCollectionDto>(url).pipe(
      map(data => new MovieCollectionConverter(data))
    ).subscribe({
      next: (value) => this.dataReducer.setMoviesData({status: EntityStatus.Success, value}),
      error: (error) => this.dataReducer.setMoviesData({status: EntityStatus.Error, error})
    })
  }
}
