
import Head from "../helper/head";
import Urls from "../components/Homi/Urls";
import MovieTvBar from "../components/Homi/MovieTvBar";
import { useState } from "react";
import Loading from "../components/Loading";

type urlS = {
    urlTopedMovies: string,
    urlPopularMovies: string,
    urlNowPlayingMovies: string,
    urlPopularTV: string,
    urlTopedTV: string,
    urlOnAirTV: string
}

const Home = () => {
 const { 
  urlTopedMovies,
  urlPopularMovies,
  urlNowPlayingMovies,
  urlPopularTV,
  urlTopedTV,
  urlOnAirTV, 
}: urlS = Urls()



  return (
    <>
    <Head tittle="Home"/>
      <main className="min-h-screen bg-darkPink-100  dark:bg-darkPink-950 transition-all duration-500 flex flex-col  items-center top-0">
        <section className="mt-5 text-center flex flex-col items-center">
          <h1 className="text-6xl phone:text-5xl text-darkPink-950 dark:text-darkPink-400">Welcome to Movieees</h1>
          <p className="text-xl phone:w-3/4 text-darkPink-800 dark:text-darkPink-200">A web site to search for today's best and most popular Movies and TV series.</p>
        </section>

        <MovieTvBar UrlLink={urlTopedMovies} toPage='/Tab/TopMoviesofAllTime?page=1' Tittle='Top Movies of All Time' typeOf="movie" />

        <MovieTvBar UrlLink={urlPopularMovies} toPage='/Tab/TopPopularMovies?page=1' Tittle='Top Popular Movies' typeOf="movie" />

        <MovieTvBar UrlLink={urlNowPlayingMovies} toPage='/Tab/TopNowPlayingMovies?page=1' Tittle='Top Now Playing Movies' typeOf="movie" />

        <MovieTvBar UrlLink={urlTopedTV} toPage='/Tab/TopTVSeriesofAllTime?page=1' Tittle='Top TV Series of All Time' typeOf="TV" />

        <MovieTvBar UrlLink={urlPopularTV} toPage='/Tab/TopPopularTVSeries?page=1' Tittle='Top Popular TV Series' typeOf="TV" />

        <MovieTvBar UrlLink={urlOnAirTV} toPage='/Tab/TopNowPlayingTVSeries?page=1' Tittle='Top Now Playing TV Series' typeOf="TV" />

      </main>
    </>
  );
};

export default Home;
