import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useSearchParams } from "react-router-dom";
import { linksUrl } from "../types/urlFetchs";
import { Card } from "../types/cardShow";
import data from "../types/data";
import useSetMax from "../helper/useSetMax";
import Head from "../helper/head";
import TopOfSearch from "../components/Search/TopOfSearch";
import BodyOfSearch from "../components/Search/BodyOfSearch";
import { FooterOfSearch } from "../components/Search/FooterOfSearch";

const Search = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Card[]>([]);
  const [type, setType] = useState("");
  const { key, searchMovie, searchTv } = linksUrl;
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({
    q: "",
    t: "",
    page: "",
  });
  const query = searchParams.get("q");
  const t = searchParams.get("t");
  const [positionPage, setPositionPage] = useState<number[]>([]);
  const page = searchParams.get("page");
  const [url, setUrl] = useState("");
  const { max, getMax } = useSetMax();

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0)
    
    if (query && page) {
      if (t === "Movie") {
        setUrl(`${searchMovie}?${key}&query=${query}&page=${page}`);
        setType(t);
        let nowPageNumber = page !== null ? +page : pageNumber;
        setPageNumber(nowPageNumber);
        console.log('query ou page alterado')
      } else if (t === "TV") {
        setUrl(`${searchTv}?${key}&query=${query}&page=${page}`);
        setType(t);
        let nowPageNumber = page !== null ? +page : pageNumber;
        setPageNumber(nowPageNumber);
      }
    }
  }, [query, page]);

  useEffect(()=> console.log(query),[query])

  useEffect(() => {
    if (max > 0) {
      let arrayResult: number[] = [];
      for (let i = 0; i < 5; i++) {
        const currentPage = pageNumber + i;
        if (currentPage <= max) {
          arrayResult.push(currentPage);
        } else {
          break;
        }
      }
      setPositionPage(arrayResult);
      console.log('max foi pego', max)
      setLoading(false);
    }
  }, [pageNumber, max]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data: data = await res.json();
      const resultt = data.results;
      setResults(resultt);
      console.log('url alterado')
      getMax({ key, query, searchMovie, searchTv, t, pageNumber });
    }
    if (url) getData();
  }, [url]);

  function previusPage() {
    if (pageNumber === 1) return;
    const result = pageNumber - 1;
    setPageNumber(result);
    setSearchParams({ q: `${query}`, t: `${t}`, page: `${result}` });
  }

  function nextPage() {
    if (pageNumber + 1 > max) return; // Verifique se não ultrapassa o máximo
    const result = pageNumber + 1;
    setPageNumber(result);
    setSearchParams({ q: `${query}`, t: `${t}`, page: `${result}` });
  }

  function JumpPage(element: number) {
    setPageNumber(element);
    setSearchParams({ q: `${query}`, t: `${t}`, page: `${element}` });
  }

  if (loading) return <Loading />;

  return (
    <div className="bg-darkPink-100  dark:bg-darkPink-950  transition-all duration-500 min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <Head tittle={`Search for "${query}"`} />
        {results.length ? <TopOfSearch query={query} /> : ''}
        {results.length ? (
          <BodyOfSearch
            results={results}
            type={type}
            previusPage={previusPage}
            positionPage={positionPage}
            pageNumber={pageNumber}
            max={max}
            nextPage={nextPage}
            JumptoPage={JumpPage}
          />
        ) : (
          <FooterOfSearch type={t} />
        )}
      </div>
    </div>
  );
};

export default Search;
