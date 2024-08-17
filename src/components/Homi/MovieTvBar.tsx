import { Link } from "react-router-dom";
import { MovieTv } from "../../types/TypeMovieTv";
import ShowsBar from "./ShowsBar";

const MovieTvBar = ({ UrlLink, toPage, Tittle, typeOf }: MovieTv) => {
  return (
    <article className="max-w-full flex flex-col mb-5 appear z-0 ">
      <h3 className="ml-5 mt-5 z-0 phone:text-center ">
        <Link
          className="text-4xl text-darkPink-900 dark:text-darkPink-300 font-Rubik
          transition-all duration-300
          hover:text-darkPink-500 hover:decoration-solid hover:underline
          hover:dark:text-darkPink-600
          z-0
          "
          to={`${toPage}`}
        >
          {Tittle}
        </Link>
      </h3>
      <section className="max-w-full mt-5  z-0">
        <ShowsBar url={UrlLink} tipo={typeOf} />
      </section>
    </article>
  );
};

export default MovieTvBar;
