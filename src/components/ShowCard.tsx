import { Link } from "react-router-dom";
import { getImage } from "../data/FetchApi";
import NotFound from "../../public/png/NotFoundImg.png";
import { Card } from "../types/cardShow";
import { FaStar, FaCalendarAlt } from "react-icons/fa";

export const ShowCard = ({ card, type }: { card: Card; type: string }) => {
  const image = getImage(card.poster_path);
  const verify = card.poster_path === null ? false : true;
  
    return (
      <div
        key={card.id}
        className="w-72 h-full bg-darkPink-900 dark:bg-darkPink-300 p-5 rounded transition-all duration-500
      hover:bg-darkPink-600 dark:hover:bg-darkPink-400
      group
      appear
      "
      >
        <Link to={`/${type}/${card.id}`}>
          <img
            src={verify ? image : NotFound}
            alt={verify ? card.title : `Not Found Image of: ${card.title}`}
            className="max-w-full max-h-full"
          />
          <section>
            <h1
              className="text-darkPink-200 dark:text-darkPink-700
          group-hover:text-darkPink-800 dark:group-hover:text-darkPink-900
          transintion-all duration-500
          "
            >
              {type === 'Movie' ? card.title : card.name}
            </h1>
            <p
              className="flex items-center text-darkPink-200 dark:text-darkPink-700
          group-hover:text-darkPink-800 dark:group-hover:text-darkPink-900
          transintion-all duration-500
          "
            >
              <span
                className="dark:text-darkPink-900 text-darkPink-300 flex items-center
            group-hover:text-darkPink-900 dark:group-hover:text-darkPink-950
            transition-all duration-500
            "
              >
                <FaCalendarAlt size={18} />
                Release Date
              </span>
              :{` ${card.release_date}`}
            </p>
            <p
              className="flex items-center text-darkPink-200 dark:text-darkPink-700
          group-hover:text-darkPink-800 dark:group-hover:text-darkPink-900
          transintion-all duration-500
          "
            >
              <span
                className="dark:text-darkPink-900 text-darkPink-300 flex items-center
            group-hover:text-darkPink-900 dark:group-hover:text-darkPink-950
            transition-all duration-500
            "
              >
                <FaStar size={18} />
                Popularity
              </span>
              :{` ${card.popularity}`}
            </p>
          </section>
        </Link>
      </div>
    );
};
