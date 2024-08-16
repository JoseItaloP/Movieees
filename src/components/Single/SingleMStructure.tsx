import { FaCalendarAlt, FaGlobeAmericas, FaStar } from "react-icons/fa";
import Head from "../../helper/head";
import { Tmovie } from "../../types/TypeMovieCard";
import { SecH1 } from "./SecH1";
import SectImg from "./SecImg";
import { SecP } from "./SecP";
import { SecTitTag } from "./SecTitTag";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";

const SingleMStructure = ({
  origin_country,
    original_language,
    original_title,
    title,
    tagline,
    overview,
    runtime,
    poster_path,
    budget,
    revenue,
    popularity,
    release_date,
}: Tmovie) => {
  return (
    <div className=" h-[94.6vh] phone:min-h-screen">
      <div className="h-full phone:h-auto bg-darkPink-100  dark:bg-darkPink-950 transition-all duration-500 flex flex-col items-center ">
        <Head tittle={`Page for: ${title}`} />
        <section className="w-9/12 mt-12 ">
          <SecH1 Tittle={title} />
          <div className="flex  phone:flex-col justify-between w-full fadeInFwd ">
            <SectImg
              MoviePost={poster_path}
              MovieTittle={title}
            />
            <section className="flex flex-col phone:mb-5">
              <SecTitTag Tittle={original_title} Tag={tagline} />

              <SecP
                Type={1}
                Name="From"
                Icon={ FaGlobeAmericas }
                element1={origin_country}
                element2={original_language}
              />

              <SecP
                Type={2}
                Name="Release Date"
                Icon={FaCalendarAlt}
                element1={release_date}
              />

              <SecP
                Type={4}
                Name="Popularity"
                Icon={FaStar}
                element1={popularity}
              />

              <SecP
                Type={3}
                Name="Budget"
                Icon={GiPayMoney}
                element1={budget}
              />

              <SecP
                Type={3}
                Name="Revenue"
                Icon={GiReceiveMoney}
                element1={revenue}
              />

              <SecP
                Type={4}
                Name="Runtime"
                Icon={IoTimeOutline}
                element1={runtime}
                SecondT="minutes"
              />

              <SecP
                Type={4}
                Name="Overview"
                Icon={IoIosPaper}
                element1={overview}
                BR={true}
              />
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleMStructure;
