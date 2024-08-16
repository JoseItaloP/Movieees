import { useState } from 'react'
import data from '../types/data';

type forMax = {
  key: string,
  searchMovie: string,
  searchTv: string,
  t: string | null,
  query: string | null,
  pageNumber: number,
}

type tabMax = {
  LinkMovieTv: string,
  LinkKey: string,
  pageNumber: number
}

const useSetMax = () => {

    const [max, setMax] = useState(0)

    async function getMax({key, query, searchMovie, searchTv, t, pageNumber}: forMax){
      let maxPage = pageNumber;
      for(let i = 0; i <= 4; i++) {
        let nextUrl = "";

        if (t === "Movie") {
          nextUrl = `${searchMovie}?${key}&query=${query}&page=${maxPage}`;
        } else if (t === "TV") {
          nextUrl = `${searchTv}?${key}&query=${query}&page=${maxPage}`;
        }

        const nextRes = await fetch(nextUrl);
        const nextData: data = await nextRes.json();
        const nextResults = nextData.results;

        if (!nextResults || nextResults.length < 20) {
          break;
        } else {
          maxPage++;
        }
      }
      setMax(maxPage);
    }

    async function getMaxTab({LinkMovieTv, LinkKey, pageNumber}: tabMax){

      let maxPage = pageNumber;
      for(let i = 0; i <= 4; i++) {
        let nextUrl = `${LinkMovieTv}top_rated?${LinkKey}&page=${maxPage}`;

        const nextRes = await fetch(nextUrl);
        const nextData: data = await nextRes.json();
        const nextResults = nextData.results;

        if (!nextResults || nextResults.length < 20) {
          break;
        } else {
          maxPage++;
        }
      }
      setMax(maxPage);
    }

  return {
    max,
    setMax,
    getMax,
    getMaxTab
  }
}

export default useSetMax
