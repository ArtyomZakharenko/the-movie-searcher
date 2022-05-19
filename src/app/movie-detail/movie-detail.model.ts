export interface MovieDetailDto {
  adult: boolean,
  backdrop_path: string | null,
  belongs_to_collection: null | object,
  budget: number,
  genres: Genres[],
  homepage: string | null,
  id: number
  imdb_id: string | null,
  original_language: string,
  original_title: string | null,
  overview: string | null,
  popularity: number,
  poster_path: string | null,
  production_companies: Companies[],
  production_countries: Countries[],
  release_date: string,
  revenue: number,
  runtime: number | null,
  spoken_languages: Languages[],
  status: string,
  tagline: string | null,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface MovieDetail {
  adult: boolean,
  backdropPath: string | null,
  belongsToCollection: null | object,
  budget: number,
  genres: Genres[],
  homepage: string | null,
  id: number
  imdbId: string | null,
  originalLanguage: string,
  originalTitle: string | null,
  overview: string | null,
  popularity: number,
  posterPath: string | null,
  productionCompanies: Companies[],
  productionCountries: Countries[],
  releaseDate: Date,
  revenue: number,
  runtime: number | null,
  spokenLanguages: Languages[],
  status: string,
  tagline: string | null,
  title: string,
  video: boolean,
  voteAverage: number,
  voteCount: number
}


export interface Genres {
  id: number,
  name: string
}

export interface Companies {
  name: string,
  id: number,
  logoPath: string | null,
  originCountry: string
}

export interface Countries {
  iso31661: string,
  name: string
}

export interface Languages {
  iso6391: string,
  name: string
}
