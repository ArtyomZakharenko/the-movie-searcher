import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Entity, EntityStatus} from "../shared/entity.model";
import {MovieDetail} from "./movie-detail.model";
import {MovieDetailService} from "./movie-detail.service";
import {ActivatedRoute} from "@angular/router";
import {faLink} from "@fortawesome/free-solid-svg-icons";

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
  public detailError$ = this.movieDetails$.pipe(
    map((entity) => entity.error)
  );
  public faLink = faLink;

  constructor(
    private route: ActivatedRoute,
    private movieDetailService: MovieDetailService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.movieDetailService.fetchMovieDetail(id);
    });
  }
}
