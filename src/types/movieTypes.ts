export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieListResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export type MovieInfo = Pick<MovieDetail, 'Director' | 'Actors' | 'Awards' | 'Plot'>;

export type MovieDetail = Pick<
  MovieDetailResponse,
  'Title' | 'Poster' | 'Released' | 'Genre' | 'Director' | 'Actors' | 'Awards' | 'Plot' | 'Ratings'
>;

export interface Rating {
  Source: string;
  Value: string;
}

export interface MovieDetailResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface MovieListPayload {
  keyword: string;
  page?: number;
}

export interface MovieDetailPayload {
  id: string;
}

export interface MovieAtomType {
  keyword: string;
  page: number;
  isLoading: boolean;
  isScrollEnd: boolean;
  movieList: Movie[];
  movieDetail: MovieDetailResponse | null;
  movieInfo: MovieInfo | null;
}
