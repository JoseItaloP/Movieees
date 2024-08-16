import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { linksUrl } from "../types/urlFetchs";
import Loading from "../components/Loading";
import { Tmovie } from "../types/TypeMovieCard";
import SingleMStructure from "../components/Single/SingleMStructure";

const defaultMovie: Tmovie = {
  origin_country: [],
  original_language: "",
  original_title: "",
  title: "",
  tagline: "",
  overview: "",
  runtime: 0,
  poster_path: "",
  budget: 0,
  revenue: 0,
  popularity: 0,
  release_date: "",
};

const SingleMovie = () => {
  const { id } = useParams();
  const [movier, setMoviee] = useState<Tmovie>(defaultMovie);
  const { movie, key } = linksUrl;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const url = `${movie}${id}?${key}`;
        const res = await fetch(url);
        const data: Tmovie = await res.json();
        if (data) {
          setMoviee(data);
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }

    if (id) {
      getData();
    }
  }, [id]);

  if (loading) return <Loading />;

  return (
    <>
      <SingleMStructure
        origin_country={movier.origin_country}
        original_language={movier.original_language}
        original_title={movier.original_title}
        title={movier.title}
        tagline={movier.tagline}
        overview={movier.overview}
        runtime={movier.runtime}
        poster_path={movier.poster_path}
        budget={movier.budget}
        revenue={movier.revenue}
        popularity={movier.popularity}
        release_date={movier.release_date}
      />
    </>
  );
};

export default SingleMovie;
