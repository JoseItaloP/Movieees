import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { linksUrl } from "../types/urlFetchs";
import Loading from "../components/Loading";
import { TTv } from "../types/TypeTVCard";
import SingleTStructure from "../components/Single/SingleTStructure";

const defaultTV: TTv = {
  origin_country: [],
  original_language: "",
  original_name: "",
  name: "",
  tagline: "",
  overview: "",
  episode_run_time: [0],
  poster_path: "",
  popularity: 0,
  first_air_date: "",
  last_air_date: "",
  number_of_episodes: 0,
  number_of_seasons: 0,
  status: "",
  in_production: false,
};

const SingleTV = () => {
  const { id } = useParams();
  const [Tv, setTv] = useState<TTv>(defaultTV);
  const { tv, key } = linksUrl;
  const [loading, setLoading] = useState(false);

  useEffect(()=>window.scrollTo(0,0), [])

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const url = `${tv}${id}?${key}`;
        const res = await fetch(url);
        const data: TTv = await res.json();
        console.log(data);
        if (data) {
          setTv(data);
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
      <SingleTStructure
        origin_country={Tv.origin_country}
        original_language={Tv.original_language}
        original_name={Tv.original_name}
        name={Tv.name}
        tagline={Tv.tagline}
        overview={Tv.overview}
        episode_run_time={Tv.episode_run_time}
        poster_path={Tv.poster_path}
        popularity={Tv.popularity}
        first_air_date={Tv.first_air_date}
        last_air_date={Tv.last_air_date}
        number_of_episodes={Tv.number_of_episodes}
        number_of_seasons={Tv.number_of_seasons}
        status={Tv.status}
        in_production={Tv.in_production}
      />
    </>
  );
};

export default SingleTV;
