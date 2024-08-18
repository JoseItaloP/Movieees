import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../../data/FetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { linksUrl } from "../../types/urlFetchs";
import { Link } from "react-router-dom";
// import Loading from "../Loading";
import NotFound from '../../../public/png/NotFoundImg.png'
import Loading from "../Loading";
type link = {
  url: string;
  tipo: string;
};

type elementShow = {
  id: number;
  title: string;
  poster_path: string;
};

const ShowsBar = ({ url, tipo }: link) => {
  const [TenShow, setTenShow] = useState<elementShow[]>([]);
  const [slidePreview, setSlidePreview] = useState(4);
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
    async function getData() {
      try {
        const { results } = await getTopRatedMovies(url);
        const topTen = results.slice(0, 10);
        setTenShow(topTen);
      } catch (error) {
        console.error(error);
      }
    }
    if ( url ) {getData();}
    // setLoading(false)
  }, [url]);
  

  useEffect(()=> console.log(TenShow), [TenShow])


  useEffect(() => {
    
    function handleReesize() {
      if (window.innerWidth <= 620) {
        setSlidePreview(1);
      } else if(window.innerWidth >= 620 && window.innerWidth <=  999){
        setSlidePreview(2);
      } else if(window.innerWidth >= 1000 && window.innerWidth <=  1600){
        setSlidePreview(3);
      } else if(window.innerWidth >= 1601 && window.innerWidth <= 2174){
        setSlidePreview(4)
      } else if(window.innerWidth >= 2175){
        setSlidePreview(5)
      }
    }
    handleReesize();
    window.addEventListener("resize", handleReesize);

    return () => {
      window.removeEventListener("resize", handleReesize);
    };
  }, []);

  // if(loading) return (<Loading />)
  return (
    <section className="fadeIn" >
      <div className="flex items-center justify-center">
        {TenShow && <Swiper
          slidesPerView={slidePreview}
          pagination={{ clickable: true }}
          observer
          navigation
        >
          {TenShow.map((element) => (
            <SwiperSlide
              key={element.id}
              className=""
            >
              <div className="h-72 bigSize:h-80 midize:h-80 flex items-center justify-center ">
                <Link
                  to={`/${tipo}/${element.id}`}
                  className="h-full boxShow"
                >
                  <img
                    src={element.poster_path ?  linksUrl.image + element.poster_path : NotFound}
                    alt={element.poster_path ? element.title : `Not Found Image of: ${element.title}`}
                    className="h-full w-full justify-self-center"
                  />
                </Link>
              </div>
            </SwiperSlide>
          )) || <Loading />}
        </Swiper>}
      </div>
    </section>
  );
};

export default ShowsBar;
