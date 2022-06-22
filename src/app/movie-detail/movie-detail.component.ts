import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Entity, EntityStatus} from "../shared/entity.model";
import {MovieDetail} from "./movie-detail.model";
import {MovieDetailService} from "./movie-detail.service";
import {ActivatedRoute} from "@angular/router";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {HttpErrorResponse} from "@angular/common/http";
import {SimilarMoviesService} from "./similar-movies.service";
import {RecommendedMoviesService} from "./recommended-movies.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movieDetails$: Observable<Entity<MovieDetail>> = this.movieDetailService.getMovieDetail();
  public detailValue$: Observable<MovieDetail> = this.movieDetails$.pipe(
    map((entity) => entity.value)
  );
  public detailStatus$: Observable<EntityStatus> = this.movieDetails$.pipe(
    map((entity) => entity.status)
  );
  public detailError$: Observable<HttpErrorResponse> = this.movieDetails$.pipe(
    map((entity) => entity.error)
  );
  public faLink = faLink;

  constructor(
    private route: ActivatedRoute,
    private movieDetailService: MovieDetailService,
    public similarMoviesService: SimilarMoviesService,
    public recommendedMoviesService: RecommendedMoviesService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.movieDetailService.fetchMovieDetail(id);
      this.similarMoviesService.fetchSimilarMovies(id);
      this.recommendedMoviesService.fetchRecommendedMovies(id);
    });
  }
}
