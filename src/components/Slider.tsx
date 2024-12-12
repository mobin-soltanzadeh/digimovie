import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";

import '../../node_modules/swiper/swiper-bundle.css';

import { preferredMovies } from "../services/Datas";
import { useState } from "react";
import ActiveSlide from "./Slider/ActiveSlide";
import InActiveSlide from "./Slider/InActiveSlide";
import { smallScreenHandler } from "../services/functions";


export default function Slider() {  
  const [smallScreen, setSmallScreen] = useState(false)

  smallScreenHandler(780, smallScreen, setSmallScreen);

  if (window.innerWidth < 780) return (
    <div className="slider px-5">
      <Swiper centeredSlides={true} speed={700} loop={true} navigation={true} autoplay={{ delay: 5000, disableOnInteraction: false }} keyboard={{ enabled: true }} modules={[ Keyboard, Navigation, Autoplay ]} >
      
        {/* make each slide with -> map */}
        { preferredMovies.map(movie => (
          <SwiperSlide key={movie.Title}>
              <div className="w-10/12 h-64 sm400:h-80 sm:h-[400px] mx-auto">
                <ActiveSlide movie={movie} />
              </div>
          </SwiperSlide>
        ))}          

      </Swiper>
    </div>
  )

  return (
    <>
    <div className="slider px-5 lg:px-20">      
      <Swiper centeredSlides={true} speed={700} loop={true} navigation={true} autoplay={{ delay: 5000, disableOnInteraction: false }} keyboard={{ enabled: true }} modules={[ Keyboard, Navigation, Autoplay ]} >
        
      {
        preferredMovies.map((movie, index: number) => (
          <SwiperSlide key={movie.Title}>
            <div className="slider flex justify-center items-center z-30">

              <div className="w-44 xl:w-[250px] h-[250px] xl:h-[300px]">
                <InActiveSlide movie={ index===0 ? preferredMovies[preferredMovies.length-1] : preferredMovies[index-1] } position="left" />
              </div>

              <div className="w-96 h-[450px] lg:w-[450px] lg:h-[550px] xl:w-[550px] xl:h-[550px]">
                <ActiveSlide movie={movie} />
              </div>

              <div className="w-44 xl:w-[250px] h-[250px] xl:h-[300px]">
                <InActiveSlide movie={ index===preferredMovies.length-1 ? preferredMovies[0] : preferredMovies[index+1] } position="right" />
              </div>

            </div>
          </SwiperSlide>
        ))
      }

      </Swiper>
    </div>

    </>
  );
}