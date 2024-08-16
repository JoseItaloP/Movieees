import { linksUrl } from '../../types/urlFetchs';
const Urls = () => {
    const urlTopedMovies = `${linksUrl.movie}top_rated?${linksUrl.key}`;
  const urlPopularMovies = `${linksUrl.movie}popular?${linksUrl.key}`;
  const urlNowPlayingMovies = `${linksUrl.movie}now_playing?${linksUrl.key}`;
  const urlPopularTV = `${linksUrl.tv}popular?${linksUrl.key}`;
  const urlTopedTV = `${linksUrl.tv}top_rated?${linksUrl.key}`;
  const urlOnAirTV = `${linksUrl.tv}on_the_air?${linksUrl.key}`;
  return {
    urlTopedMovies,
    urlPopularMovies,
    urlNowPlayingMovies,
    urlPopularTV,
    urlTopedTV,
    urlOnAirTV,
  }
}

export default Urls
