import {Movie, MovieDto} from "./movie.model";

export interface MovieCollectionDto {
  page: number,
  results: MovieDto[],
  total_pages: number,
  total_results: number
}

export interface MovieCollection {
  page: number,
  results: Movie[],
  totalPages: number,
  totalResults: number
}
