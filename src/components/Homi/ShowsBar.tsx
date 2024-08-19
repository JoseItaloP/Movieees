import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { linksUrl } from "../../types/urlFetchs";
import { Link } from "react-router-dom";
import NotFound from '../../../public/png/NotFoundImg.png'
import Loading from "../Loading";


type elementShow = {
  id: number;
  title: string;
  poster_path: string;
};

type link = {
  Show: elementShow[];
  tipo: string;
};


const ShowsBar = ({ Show, tipo }: link) => {
  const [slidePreview, setSlidePreview] = useState(4);
  // const [loading, setLoading] = useState(false)

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
      {Show && <div className="flex items-center justify-center">
        <Swiper
          slidesPerView={slidePreview}
          pagination={{ clickable: true }}
          
          navigation
        >
          {Show.map((element) => (
            <SwiperSlide
              key={element.id}
              className=""
            >
              <div className="h-72 bigSize:h-80 midize:h-80 flex items-center justify-center top-0 bottom-0">
                <Link
                  to={`/${tipo}/${element.id}`}
                  className="h-full boxShow top-0 bottom-0" 
                >
                  <img
                    src={element.poster_path ?  linksUrl.image + element.poster_path : NotFound}
                    alt={element.poster_path ? element.title : `Not Found Image of: ${element.title}`}
                    className="h-full w-full justify-self-center"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>}
    </section>
  );
};

export default ShowsBar;