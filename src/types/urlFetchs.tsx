 type urlsSerachs = {
    key: string,
    movie: string,
    searchMovie: string,
    image: string,
    searchTv: string,
    tv: string,
}

export const linksUrl: urlsSerachs = {
    key: 'api_key=a3c1e3a020bd083632f37bd2f5efb6d8',
    movie: 'https://api.themoviedb.org/3/movie/',
    tv: 'https://api.themoviedb.org/3/tv/',
    searchMovie: 'https://api.themoviedb.org/3/search/movie',
    searchTv: 'https://api.themoviedb.org/3/search/tv',
    image: 'https://image.tmdb.org/t/p/w500/',
}