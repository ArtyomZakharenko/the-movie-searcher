import {Component, Input} from "@angular/core";
import {map, Observable} from "rxjs";
import {MovieCollection} from "../../movies/models/movie-collection.model";
import {Entity, EntityStatus} from "../../shared/entity.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-related-movies',
  templateUrl: './related-movies.component.html',
  styleUrls: ['./related-movies.component.scss']
})
export class RelatedMoviesComponent {
  @Input() relatedMovies$!: Observable<Entity<MovieCollection>>;
  @Input() type: string;

}
