import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";

import '../../node_modules/swiper/swiper-bundle.css';

import { preferredMovies } from "../services/Datas";
import { useState } from "react";


export default function Slider() {  
  const [isLoading, setLoading] = useState<boolean>(true)
  const [smallScreen, setSmallScreen] = useState(false)

  window.addEventListener("load", () => {
    if(window.innerWidth < 780 && !smallScreen) setSmallScreen(true);
    else if (window.innerWidth > 780 && smallScreen) setSmallScreen(false);
  })
  window.addEventListener("resize", () => {
    if(window.innerWidth < 780 && !smallScreen) setSmallScreen(true);
    else if (window.innerWidth > 780 && smallScreen) setSmallScreen(false);
  })

  if (smallScreen)
    return (
      <div className="px-5">
        <Swiper
          centeredSlides={true}
          speed={700}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 50000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          modules={[ Keyboard, Navigation, Autoplay ]}
        >
        {
          preferredMovies.map(movie => (
            <SwiperSlide key={movie.Title}>
              <div className="slider flex justify-center items-center z-50">
                <Link to={"movies/" + movie.Title}>
                  <div className="relative slide-active w-50 h-64 sm250:w-64 sm400:w-96 sm400:h-80 sm-[5500px] sm:w-[600px] sm:h-[500px] bg-gray-700 rounded-2xl overflow-hidden">
                    <img className="absolute top-0 -translate-y-" src={movie.Poster} alt="" onLoad={() => setLoading(false)} />
                    <p className="absolute top-5 left-12 text-yellow-500 font-semibold">{movie.Resolution}</p>
                    <svg className="absolute top-5 left-5 w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -36 512 512" id="quality_hd"> <path d="M452 0H60C26.914 0 0 26.914 0 60v240c0 33.086 26.914 60 60 60h176v40H132v40h248v-40H276v-40h176c33.086 0 60-26.914 60-60V60c0-33.086-26.914-60-60-60zm20 300c0 11.027-8.973 20-20 20H60c-11.027 0-20-8.973-20-20V60c0-11.027 8.973-20 20-20h392c11.027 0 20 8.973 20 20zM196 100.121h40v160h-40v-60h-40v60h-40v-160h40v60h40zm140 0h-60v160h60c33.086 0 60-26.914 60-60v-40c0-33.082-26.914-60-60-60zm20 100c0 11.027-8.973 20-20 20h-20v-80h20c11.027 0 20 8.973 20 20zm0 0"></path>   </svg>
                    <div className="absolute bottom-2 left-7 flex flex-col justify-start items-start">
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-sm"><span className="text-2xl text-yellow-500 font-bold">{movie.imdbRating}</span>/10</p>
                        <svg className="-translate-y-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667" id="imdb"> <path d="M53.333 138.667h384c29.455 0 53.333 23.878 53.333 53.333v106.667c0 29.455-23.878 53.333-53.333 53.333h-384C23.878 352 0 328.122 0 298.667V192c0-29.455 23.878-53.333 53.333-53.333z" fill="#ffc107"></path> <g fill="#000"> <path d="M96 309.333c-5.891 0-10.667-4.776-10.667-10.667V192c0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667v106.667c0 5.891-4.776 10.666-10.667 10.666zm128 0c-5.891 0-10.667-4.776-10.667-10.667v-96h-1.92L191.787 300.8c-1.172 5.773-6.803 9.503-12.576 8.331a10.667 10.667 0 01-8.331-8.331l-19.627-98.133h-1.92v96c0 5.891-4.776 10.667-10.667 10.667S128 304.558 128 298.667V192c0-5.891 4.776-10.667 10.667-10.667H160a10.666 10.666 0 0110.453 8.533l10.88 54.4 10.88-54.4a10.667 10.667 0 0110.453-8.533H224c5.891 0 10.667 4.776 10.667 10.667v106.667c0 5.891-4.776 10.666-10.667 10.666zm64 0h-21.333c-5.891 0-10.667-4.776-10.667-10.667V192c0-5.891 4.776-10.667 10.667-10.667H288c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zM277.333 288H288c5.891 0 10.667-4.776 10.667-10.667v-64c0-5.891-4.776-10.667-10.667-10.667h-10.667V288zM352 309.333c-5.891 0-10.667-4.776-10.667-10.667V192c0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667v106.667c0 5.891-4.776 10.666-10.667 10.666z"></path> <path d="M373.333 309.333c-17.673 0-32-14.327-32-32v-42.667c0-17.673 14.327-32 32-32s32 14.327 32 32v42.667c0 17.673-14.327 32-32 32zm0-85.333c-5.891 0-10.667 4.776-10.667 10.667v42.667c0 5.891 4.776 10.667 10.667 10.667S384 283.224 384 277.333v-42.667c0-5.89-4.776-10.666-10.667-10.666z"></path> </g> </svg>
                      </div>
                      <p className="text-2xl text-white font-bold -translate-y-7">{movie.Title + " " + movie.Year}</p>
                    </div>
                    {isLoading &&
                      <div className="animate-[pulse_1s_ease-in-out_infinite] flex justify-center items-center w-full h-full bg-gray-300">
                        <svg className="animate-wiggle w-20 h-20 lg:w-24 lg:h-24 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
                        </svg>
                      </div>
                    }
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))
        }          
        </Swiper>
      </div>
    )

  return (
    <>
    <div className="px-5 lg:px-20">      
      <Swiper
        centeredSlides={true}
        speed={700}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[ Keyboard, Navigation, Autoplay ]}
      >
        
        {
          preferredMovies.map((movie, index) => (
            <SwiperSlide key={movie.Title}>
              <div className="slider flex justify-center items-center z-50">
                <Link to={`movies/${index === 0 ? preferredMovies[preferredMovies.length-1].Title : preferredMovies[index-1].Title}`}>
                <div className="slider-prev w-44 xl:w-[250px] h-[250px] xl:h-[300px] bg-gray-400 rounded-l-2xl overflow-hidden"> 
                  <img className="w-full" src={ index === 0 ? preferredMovies[preferredMovies.length-1].Poster : preferredMovies[index-1].Poster } alt="" onLoad={() => setLoading(false)} />
                  {isLoading &&
                    <div className="animate-[pulse_1s_ease-in-out_infinite] flex justify-center items-center w-full h-full bg-gray-300">
                      <svg className="animate-wiggle w-16 h-16 lg:w-20 lg:h-20 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
                      </svg>
                    </div>
                  }
                </div>
                </Link>

                <Link to={"movies/" + movie.Title}>
                  <div className="relative slide-active w-96 h-[450px] lg:w-[450px] lg:h-[550px] xl:w-[550px] xl:h-[550px] bg-gray-700 rounded-2xl overflow-hidden">
                    <img className="absolute top-0 w-full -translate-y-7" src={movie.Poster} alt="" onLoad={() => setLoading(false)} />
                    <p className="absolute top-5 left-12 text-yellow-500 font-semibold">{movie.Resolution}</p>
                    <svg className="absolute top-5 left-5 w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -36 512 512" id="quality_hd"> <path d="M452 0H60C26.914 0 0 26.914 0 60v240c0 33.086 26.914 60 60 60h176v40H132v40h248v-40H276v-40h176c33.086 0 60-26.914 60-60V60c0-33.086-26.914-60-60-60zm20 300c0 11.027-8.973 20-20 20H60c-11.027 0-20-8.973-20-20V60c0-11.027 8.973-20 20-20h392c11.027 0 20 8.973 20 20zM196 100.121h40v160h-40v-60h-40v60h-40v-160h40v60h40zm140 0h-60v160h60c33.086 0 60-26.914 60-60v-40c0-33.082-26.914-60-60-60zm20 100c0 11.027-8.973 20-20 20h-20v-80h20c11.027 0 20 8.973 20 20zm0 0"></path>   </svg>
                    <div className="absolute bottom-2 left-7 flex flex-col justify-start items-start">
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-sm"><span className="text-2xl text-yellow-500 font-bold">{movie.imdbRating}</span>/10</p>
                        <svg className="-translate-y-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667" id="imdb"> <path d="M53.333 138.667h384c29.455 0 53.333 23.878 53.333 53.333v106.667c0 29.455-23.878 53.333-53.333 53.333h-384C23.878 352 0 328.122 0 298.667V192c0-29.455 23.878-53.333 53.333-53.333z" fill="#ffc107"></path> <g fill="#000"> <path d="M96 309.333c-5.891 0-10.667-4.776-10.667-10.667V192c0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667v106.667c0 5.891-4.776 10.666-10.667 10.666zm128 0c-5.891 0-10.667-4.776-10.667-10.667v-96h-1.92L191.787 300.8c-1.172 5.773-6.803 9.503-12.576 8.331a10.667 10.667 0 01-8.331-8.331l-19.627-98.133h-1.92v96c0 5.891-4.776 10.667-10.667 10.667S128 304.558 128 298.667V192c0-5.891 4.776-10.667 10.667-10.667H160a10.666 10.666 0 0110.453 8.533l10.88 54.4 10.88-54.4a10.667 10.667 0 0110.453-8.533H224c5.891 0 10.667 4.776 10.667 10.667v106.667c0 5.891-4.776 10.666-10.667 10.666zm64 0h-21.333c-5.891 0-10.667-4.776-10.667-10.667V192c0-5.891 4.776-10.667 10.667-10.667H288c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zM277.333 288H288c5.891 0 10.667-4.776 10.667-10.667v-64c0-5.891-4.776-10.667-10.667-10.667h-10.667V288zM352 309.333c-5.891 0-10.667-4.776-10.667-10.667V192c0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667v106.667c0 5.891-4.776 10.666-10.667 10.666z"></path> <path d="M373.333 309.333c-17.673 0-32-14.327-32-32v-42.667c0-17.673 14.327-32 32-32s32 14.327 32 32v42.667c0 17.673-14.327 32-32 32zm0-85.333c-5.891 0-10.667 4.776-10.667 10.667v42.667c0 5.891 4.776 10.667 10.667 10.667S384 283.224 384 277.333v-42.667c0-5.89-4.776-10.666-10.667-10.666z"></path> </g> </svg>
                      </div>
                      <p className="text-2xl text-white font-bold -translate-y-7">{movie.Title + " " + movie.Year}</p>
                    </div>
                    {isLoading &&
                      <div className="animate-[pulse_1s_ease-in-out_infinite] flex justify-center items-center w-full h-full bg-gray-300">
                        <svg className="animate-wiggle w-20 h-20 lg:w-24 lg:h-24 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
                        </svg>
                      </div>
                    }
                  </div>
                </Link>

                <Link to={`movies/${index === preferredMovies.length-1 ? preferredMovies[0].Title : preferredMovies[index+1].Title}`}>
                  <div className="slide-next w-44 xl:w-[250px] h-[250px] xl:h-[300px] bg-gray-400 rounded-r-2xl overflow-hidden z-50">
                    <img className="w-full" src={ index === preferredMovies.length-1 ? preferredMovies[0].Poster : preferredMovies[index+1].Poster } alt="" onLoad={() => setLoading(false)} />
                    {isLoading &&
                      <div className="animate-[pulse_1s_ease-in-out_infinite] flex justify-center items-center w-full h-full bg-gray-300">
                        <svg className="animate-wiggle w-16 h-16 lg:w-20 lg:h-20 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
                        </svg>
                      </div>
                    }
                  </div>
                </Link>

              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>

    </>
  );
}