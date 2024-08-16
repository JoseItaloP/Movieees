import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { linksUrl } from "../types/urlFetchs";
import { Card } from "../types/cardShow";
import Loading from "../components/Loading";
import useSetMax from "../helper/useSetMax";
import Head from "../helper/head";
import TopOfTab from "../components/Tab/TopOfTab";
import BodyOfTab from "../components/Tab/BodyOfTab";
import FooterOfTab from "../components/Tab/FooterOfTab";

const Tab = () => {
  const { id } = useParams();
  const [url, setUrl] = useState("");
  const [tab, setTab] = useState<Card[]>([]);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({ page: "" });
  const [positionPage, setPositionPage] = useState<number[]>([]);
  const page = searchParams.get("page");
  const [loading, setLoading] = useState(false);
  const { max, getMaxTab } = useSetMax();


  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0)
    if (id) {
      switch (id) {
        case "TopMoviesofAllTime":
          setUrl(`${linksUrl.movie}top_rated?${linksUrl.key}&page=${page}`);
          setType("Movie");
          setTitle("Top Movies of All Time");
          break;
        case "TopPopularMovies":
          setUrl(`${linksUrl.movie}popular?${linksUrl.key}&page=${page}`);
          setType("Movie");
          setTitle("Top Popular Movies");
          break;
        case "TopNowPlayingMovies":
          setUrl(`${linksUrl.movie}now_playing?${linksUrl.key}&page=${page}`);
          setType("Movie");
          setTitle("Top Now Playing Movies");
          break;
        case "TopTVSeriesofAllTime":
          setUrl(`${linksUrl.tv}top_rated?${linksUrl.key}&page=${page}`);
          setType("TV");
          setTitle("Top TV Series of All Time");
          break;
        case "TopPopularTVSeries":
          setUrl(`${linksUrl.tv}popular?${linksUrl.key}&page=${page}}`);
          setType("TV");
          setTitle("Top Popular TV Series");
          break;
        case "TopNowPlayingTVSeries":
          setUrl(`${linksUrl.tv}on_the_air?${linksUrl.key}&page=${page}`);
          setType("TV");
          setTitle("Top Now Playing TV Series");
          break;
        default:
          break;
      }
    }
  }, [id, page]);

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
      console.log(arrayResult);
      setPositionPage(arrayResult);
      setLoading(false);
    }
  }, [pageNumber, max]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const resultts = data.results;
        setTab(resultts);
      } catch (err) {
        console.error(err);
      }
      let LinkMovieTv = type === "Movie" ? linksUrl.movie : linksUrl.tv;
      let LinkKey = linksUrl.key;
      getMaxTab({ LinkMovieTv, LinkKey, pageNumber });
    }
    if (url) {
      getData();
    }
  }, [url]);

  function previusPage() {
    if (pageNumber === 1) return;
    const result = pageNumber - 1;
    setPageNumber(result);
    setSearchParams({ page: `${result}` });
  }
  function nextPage() {
    if (pageNumber + 1 > max) return;
    const result = pageNumber + 1;
    setPageNumber(result);
    setSearchParams({ page: `${result}` });
  }

  function JumpPage(element: number) {
    setPageNumber(element);
    setSearchParams({ page: `${element}` });
  }
  if (loading) return <Loading />;
  if (tab.length === 0) {
    return (
      <div className="min-h-screen bg-darkPink-100  dark:bg-darkPink-950 flex flex-col  items-center top-0">
        <h1 className="text-4xl text-darkPink-800 dark:text-darkPink-300 mt-20">
          There is no query for this search.
        </h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-darkPink-100  dark:bg-darkPink-950 transition-all duration-500 flex flex-col  items-center top-0">
      <Head tittle={`${title}`} />

      <TopOfTab title={title} />

      <BodyOfTab tab={tab} type={type} />

      <FooterOfTab
        positionPage={positionPage}
        previusPage={previusPage}
        pageNumber={pageNumber}
        max={max}
        JumpPage={JumpPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default Tab;
