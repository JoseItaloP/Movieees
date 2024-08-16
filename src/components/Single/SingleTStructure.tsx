import { SecH1 } from "./SecH1"
import {TTv} from '../../types/TypeTVCard'
import SecImg from "./SecImg"
import { SecTitTag } from "./SecTitTag"
import { SecP } from "./SecP"
import { FaCalendar, FaCalendarAlt, FaGlobeAmericas, FaStar } from "react-icons/fa"
import { GrStatusUnknown } from "react-icons/gr"
import { TbNumber } from "react-icons/tb"
import { MdOutlineTimer } from "react-icons/md"
import { IoIosEasel, IoIosPaper } from "react-icons/io"
import Head from "../../helper/head"

const SingleTStructure = ( { 
    origin_country,
    original_language,
    original_name,
    name,
    tagline,
    overview,
    episode_run_time,
    poster_path,
    popularity,
    first_air_date,
    last_air_date,
    number_of_episodes,
    number_of_seasons,
    status,
    in_production,
}: TTv) => {
  
  return (
    <div className=" h-[94.6vh] phone:min-h-screen">
      <div className="h-full phone:h-auto bg-darkPink-100  dark:bg-darkPink-950 transition-all duration-500 flex flex-col items-center ">
        <Head tittle={`Page for: ${name}`}/>
        <section className="w-9/12 mt-12 ">
        <SecH1 Tittle={name}/>
          <div className="flex  phone:flex-col justify-between w-full fadeInFwd ">
            <SecImg MoviePost={poster_path}  MovieTittle={name}/>
            <section className="flex flex-col phone:mb-5">

              <SecTitTag Tittle={original_name}  Tag={tagline} />

              <SecP Type={1} Icon={FaGlobeAmericas} Name="From" element1=
              {origin_country} element2={original_language}/>

              <SecP Type={4} Icon={GrStatusUnknown} Name="Status" element1={status} />

              <SecP Type={2} Icon={FaCalendarAlt} Name="Release Date" element1={first_air_date} />

              <SecP Type={2} Icon={FaCalendar} Name="Last Release Date" element1={last_air_date} />

              <SecP Type={4} Icon={FaStar} Name="Popularity" element1={popularity} />

              <SecP Type={4} Icon={TbNumber} Name="Number of Episodes" element1={number_of_episodes} />
              
              <SecP Type={4} Icon={TbNumber} Name="Number of Seasons" element1={number_of_seasons} />
              
              <SecP Type={5} Icon={IoIosEasel} Name="In Production" element1={in_production} />
              
              <SecP Type={4} Icon={MdOutlineTimer} Name="Episode Run Time" element1={episode_run_time[0]} />

              <SecP Type={4} Icon={IoIosPaper} Name="Overview" element1={overview} BR={true} />

            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SingleTStructure
