import {
  MovieDetail,
  MovieDetailPayload,
  MovieDetailResponse,
  MovieListPayload,
  MovieListResponse,
} from '@/types/movieTypes';

import apiClient from './apiClient';
import { API_KEY } from './config';

export const fetchMovieList = async ({
  keyword,
  page = 1,
}: MovieListPayload): Promise<MovieListResponse> => {
  try {
    const response: MovieListResponse = await apiClient
      .get('', { params: { apikey: API_KEY, s: keyword, page } })
      .then((res) => res.data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchMoreMovieList = ({
  keyword,
  page,
}: {
  keyword: string;
  page: number;
}): Promise<MovieListResponse> => {
  return fetchMovieList({ keyword, page });
};

export const fetchMovieDetail = async ({ id }: MovieDetailPayload): Promise<MovieDetail> => {
  try {
    const response: MovieDetailResponse = await apiClient
      .get('', { params: { apikey: API_KEY, i: id } })
      .then((res) => res.data);

    const movieDetail: MovieDetail = {
      Title: response.Title,
      Poster: response.Poster,
      Released: response.Released,
      Genre: response.Genre,
      Director: response.Director,
      Awards: response.Awards,
      Actors: response.Actors,
      Plot: response.Plot,
      Ratings: response.Ratings,
    };

    return movieDetail;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
