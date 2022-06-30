import {Movie, MovieDto} from "../movies/models/movie.model";
import {MovieCollection, MovieCollectionDto} from "../movies/models/movie-collection.model";
import {Companies, Countries, Genres, Languages, MovieDetail, MovieDetailDto} from "../movie-detail/movie-detail.model";

export class MovieCollectionConverter implements MovieCollection {
  page: number;
  results: Movie[];
  totalPages: number;
  totalResults: number;

  constructor(movCollection: MovieCollectionDto) {
    this.page = movCollection.page;
    this.results = movCollection.results.map((item) => new MovieConverter(item));
    this.totalPages = movCollection.total_pages;
    this.totalResults = movCollection.total_results;
  }
}

export class MovieConverter implements Movie {
  id: number
  image: string;
  popularity: number;
  rating: number;
  releaseDate: Date;
  title: string;
  voteCount: number;

  constructor(mov: MovieDto) {
    this.id = mov.id;
    this.title = mov.title;
    this.image = mov.poster_path ?
      `https://image.tmdb.org/t/p/w300${mov.poster_path}` :
      'https://media.istockphoto.com/vectors/no-image-available-picture-coming-soon-missing-photo-image-sign-vector-id1355064521?b=1&k=20&m=1355064521&s=170667a&w=0&h=hXfhJhcfBXQg0nHC0wnSnCb93PzA_-5SVDy1FtyI6D0=';
    this.rating = mov.vote_average;
    this.releaseDate = new Date(mov.release_date);
    this.popularity = mov.popularity;
    this.voteCount = mov.vote_count;
  }
}

export class MovieDetailConverter implements MovieDetail {
  adult: boolean;
  backdropPath: string | null;
  belongsToCollection: object | null;
  budget: number;
  genres: Genres[];
  homepage: string | null;
  id: number;
  imdbId: string | null;
  originalLanguage: string;
  originalTitle: string | null;
  overview: string | null;
  popularity: number;
  posterPath: string | null;
  productionCompanies: Companies[];
  productionCountries: Countries[];
  releaseDate: Date;
  revenue: number;
  runtime: number | null;
  spokenLanguages: Languages[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;

  constructor(movDetail: MovieDetailDto) {
    this.adult = movDetail.adult;
    this.backdropPath = movDetail.backdrop_path;
    this.belongsToCollection = movDetail.belongs_to_collection;
    this.budget = movDetail.budget;
    this.genres = movDetail.genres;
    this.homepage = movDetail.homepage;
    this.id = movDetail.id;
    this.imdbId = movDetail.imdb_id;
    this.originalLanguage = movDetail.original_language;
    this.originalTitle = movDetail.original_title;
    this.overview = movDetail.overview;
    this.popularity = movDetail.popularity;
    this.posterPath = movDetail.poster_path ?
      `https://image.tmdb.org/t/p/w500${movDetail.poster_path}` :
        'https://media.istockphoto.com/vectors/no-image-available-picture-coming-soon-missing-photo-image-sign-vector-id1355064521?b=1&k=20&m=1355064521&s=170667a&w=0&h=hXfhJhcfBXQg0nHC0wnSnCb93PzA_-5SVDy1FtyI6D0=';
    this.productionCompanies = movDetail.production_companies;
    this.productionCountries = movDetail.production_countries;
    this.releaseDate = new Date(movDetail.release_date);
    this.revenue = movDetail.revenue;
    this.runtime = movDetail.runtime;
    this.spokenLanguages = movDetail.spoken_languages;
    this.status = movDetail.status;
    this.tagline = movDetail.tagline;
    this.title = movDetail.title;
    this.video = movDetail.video;
    this.voteAverage = movDetail.vote_average;
    this.voteCount = movDetail.vote_count;
  }
}
