import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Skeleton from "./Skeleton";
import ImdbLogo from "./ImdbLogo";
import { Top250, TypeMovie } from "../services/Datas";
import { addLikedMovies, deleteLikedMovies, isMovieLiked, votesConverter } from "../services/functions";


import { MdLanguage } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { LuAlarmClock } from "react-icons/lu";
import { PiFolderOpen } from "react-icons/pi";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import LikedModal from "./LikedModal";

interface Props{
  movie: TypeMovie,
  type?: "best";
  dataAos?: string;
  dataAosDuration?: string;

  reset?: boolean;
  setReset?: any;
}

export default function MovieCard({ movie, type, dataAos, dataAosDuration, reset, setReset }: Props) {
  const [isLoading, setLoading] = useState<Boolean>(true)
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [displayLikedModal, setLikedModal] = useState<boolean>(false)

  let index = Top250.findIndex(bestMovie => bestMovie.Title === movie.Title ) + 1;
  const [isLike, setLike] = useState<boolean>(isMovieLiked(movie.Title));

  const like = () => {
    isLike ? deleteLikedMovies(movie.Title) : addLikedMovies(movie.Title);
    setLike(!isLike);
    setReset(!reset)
  }

    useEffect(() => {
      if (isFirstRender) {
        setIsFirstRender(false);
        return;
      }
  
      setLikedModal(true)
    }, [isLike])
 
  if(type) return (
    <div data-aos={dataAos || ""} data-aos-duration={dataAosDuration || "2000"} className="relative asfgdsb flex justify-start items-center w-4/5 mx-auto sm500:w-full sm500:h-56 bg-white dark:bg-neutral-800 rounded-lg">
      
      <div className="flex flex-col sm500:flex-row h-full justify-between items-start gap-x-3 sm500:p-3 lg:p-5 group">

        <Link to={"/digimovie/movie/title="+movie.Title} className="h-full aspect-[6/8]" >
          <img src={movie.Poster} alt="movie-image" className="w-full h-full rounded-t-lg sm500:rounded-lg" />
        </Link>
        
        <div className="flex flex-col justify-center gap-y-2 w-full h-full p-3 sm500:p-0">
          <Link to={"/digimovie/movie/title="+movie.Title}><h2 className="font-semibold text-base sm:text-xl">{movie.Title} {movie.Year}</h2></Link>

          <div className="flex justify-start items-center text-orange-400">
            <ImdbLogo imdb={movie.imdbID} />
            <span> <span className="text-lg font-semibold">{movie.imdbRating}</span>/10</span> 
          </div>
        
          <div className="flex flex-col justify-center gap-y-1">
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><LuCalendarClock color="#fb923c" size={"18px"} /> Released : {movie.Released}</span>
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><LuAlarmClock color="#fb923c" size={"18px"}/> Duration : {movie.Runtime}</span>
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><svg className="w-4 h-4 ml-0.5 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.978 162.978" id="circular_age"> <path d="M162.978 101.101l-19.611-39.224-19.611 39.224h13.209c-8.315 25.958-32.633 44.826-61.324 44.826-35.529 0-64.438-28.908-64.438-64.438 0-35.529 28.909-64.438 64.438-64.438 27.376 0 50.764 17.19 60.077 41.325l6.44-12.882c-12.813-23.595-37.82-39.649-66.512-39.649C33.936 5.844 0 39.778 0 81.489c0 41.708 33.936 75.645 75.645 75.645 34.924 0 64.331-23.809 72.997-56.032h14.336z"></path> <path d="M35.486 96.582h7.084l2.15-7.749h8.645l2.332 7.749h7.345L53.68 66.39h-8.96l-9.234 30.192zM47.494 77.32c.493-1.749.941-4.034 1.39-5.823h.088c.449 1.789.988 4.036 1.527 5.823l1.882 6.413h-6.675l1.788-6.413zm34.243-5.598c3.311 0 5.371.583 7.029 1.294l1.436-5.466c-1.479-.715-4.482-1.48-8.377-1.48-9.901 0-17.2 5.731-17.253 15.769-.042 4.434 1.48 8.372 4.26 10.978 2.778 2.688 6.763 4.076 12.277 4.076 3.98 0 7.975-.985 10.075-1.701V79.289H79.943v5.331h4.665v6.313c-.542.274-1.798.449-3.365.449-5.604 0-9.497-3.677-9.497-9.904 0-6.534 4.296-9.756 9.991-9.756zm33.438.271v-5.598H96.539v30.187h19.265v-5.593h-12.41v-7.168h11.113v-5.56h-11.113v-6.268z"></path> </svg> Rating : {movie.Rated}</span>
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><PiFolderOpen color="#fb923c" size={"18px"}/> Genre : {movie.Genre}</span>
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><MdLanguage color="#fb923c" size={"18px"} /> Country : {movie.Country}</span>
          </div>
        </div>
        
      </div>

      <div className="absolute top-0 right-0 flex justify-center items-center w-8 h-8">
        <svg className="absolute top-0 right-0 w-14 h-14 fill-orange-400 text-white rounded-tr-lg" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 56,56 56,0" />
        </svg>
        <span className="text-xl font-sans font-semibold text-white z-10">{index}</span>
      </div>
    </div>
  )

  return (
    <>
    <div data-aos={dataAos || ""} data-aos-duration={dataAosDuration || "2000"} className="relative flex justify-start items-center w-full sm500:h-auto bg-white dark:bg-neutral-800 rounded-lg">
        
      <div className="flex flex-col sm500:flex-row h-full justify-between items-start gap-3 p-4 lg:p-5 group">

        <Link to={"/digimovie/movie/"+movie.Title} className="cover h-80 sm400:h-auto aspect-[4/6] mx-auto my-auto md:mx-0 border-x-[2px] border-t-[3px] border-b border-orange-400 border-b-orange-400/80 rounded-lg">
          <img src={movie?.Poster} alt={movie?.Title} style={{width: isLoading ? "0px" : "100%", height: isLoading ? "0px" : "100%"}} className="object-cover rounded-lg" onLoad={() => setLoading(false)} /> 
          { isLoading && <Skeleton type="movie" /> }
        </Link>
        
          <div className="meta flex flex-col justify-between items-start gap-y-5 w-full overflow-hidden">
          
            <div className="meta-head flex justify-between items-center gap-x-4 w-full">
              <Link to={"/digimovie/movie/"+movie.Title} className="leftSide text-base md:text-lg xl:text-xl line-clamp-1">{movie?.Title} {movie?.Year}</Link>
          
              <div className="rightSide flex justify-center items-center gap-x-1 xl:gap-x-4">
                <div onClick={like}>
                  <div className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer">{isLike ? <IoMdHeart size={"100%"} color="#e11d48" /> : <IoMdHeartEmpty size={"100%"} />}</div>
                </div>

                <div className="hidden sm:flex flex-col justify-center items-center gap-y-1">
                  <span><span className="text-xl text-orange-400 font-semibold">{movie?.imdbRating}</span>/10</span>
                  <span className="w-full h-0.5 bg-orange-500 dark:bg-orange-400"></span>
                  <span className="text-nowrap text-center">{votesConverter(movie?.imdbVotes)}</span>
                </div>
              </div>

            </div>
          
            <div className="meta-main w-full">
              <ul className="flex flex-wrap gap-y-3 text-sm md:text-base">
                { movie?.Genre !== "N/A" && <li className="w-full flex justify-start items-center gap-x-2 line-clamp-1"> <div className="w-5 h-5 text-orange-400"> <PiFolderOpen size={"100%"} /> </div> Genre : {movie?.Genre}</li> }
                { movie?.Runtime !== "N/A" && <li className="w-full flex justify-start items-center gap-x-2 line-clamp-1"> <div className="w-5 h-5 text-orange-400"> <LuAlarmClock size={"100%"} /> </div> Duration : {movie?.Runtime}</li> }
                { movie?.Director !== "N/A" && <li className="w-full flex justify-start items-center gap-x-2 line-clamp-1"><svg className="w-5 h-5 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" id="actor"> <path d="M475.847 494.853l-15.333-106a15 15 0 00-13.08-12.748l-101.432-12.024v-2.282c0-7.646-5.834-14.745-15-15.007v-42.106c28.821-23.154 45.252-57.559 44.985-94.552 5.83-2.057 10.015-7.6 10.015-14.134v-75c0-6.244-3.818-11.594-9.245-13.852l-.755-42.291C375.923 29.082 346.794 0 311.001 0h-190c-8.284 0-15 6.716-15 15v29c0 25.152 10.149 47.975 26.563 64.6-3.961 2.7-6.563 7.245-6.563 12.4v75c0 6.529 4.179 12.068 10.002 14.129-.288 37.538 16.581 71.729 44.997 94.558v42.105c-9.14.261-15 7.338-15 15.007v2.47L64.124 377.118a14.999 14.999 0 00-12.972 12.761l-15 105c-1.172 8.201 4.527 15.799 12.728 16.971 8.209 1.17 15.799-4.534 16.97-12.729l13.382-93.671 86.769-10.944v41.767c0 8.284 6.716 15 15 15 23.04 0 56.744-5.569 75-21.558 18.358 16.077 52.256 21.558 75 21.558 8.284 0 15-6.716 15-15V394.29l86.469 10.251 13.685 94.606c1.188 8.212 8.81 13.884 16.993 12.698 8.199-1.186 13.885-8.793 12.699-16.992zM158.343 181a14.986 14.986 0 00-2.342-.833V136h200v45h-66.097l-.832-3.564C285.44 161.871 271.741 151 255.758 151c-15.474 0-29.066 10.442-33.053 25.394L221.477 181zM136.001 30h175c18.109 0 34.653 14.068 35.002 35.268l.728 40.732h-148.73c-34.187 0-62-27.813-62-62zm30.011 181h66.989a15 15 0 0014.494-11.135l4.198-15.741c1.12-4.202 7.169-4.141 8.165.128l3.537 15.156A15 15 0 00278.002 211h67.988c-.033 48.673-38.813 89.737-90.061 89.998-49.593-.039-89.899-40.111-89.917-89.998zm134.989 111.304v26.383c-15.25 2.273-32.902 7.125-45 17.356-12.098-10.23-29.75-15.083-45-17.355v-26.383c28.693 11.595 61.286 11.604 90-.001zm-105 98.015v-43.104c62.041 4.908 58.749 36.372 0 43.104zm120 0c-59.368-6.803-61.423-38.444 0-43.145z"></path> <path d="M241.001 270.343h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15z"></path> </svg> Director : {movie?.Director}</li> }
                { movie?.Rated !== "N/A" && <li className="w-full flex justify-start items-center gap-x-2 line-clamp-1"><svg className="w-5 h-5 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.978 162.978" id="circular_age"> <path d="M162.978 101.101l-19.611-39.224-19.611 39.224h13.209c-8.315 25.958-32.633 44.826-61.324 44.826-35.529 0-64.438-28.908-64.438-64.438 0-35.529 28.909-64.438 64.438-64.438 27.376 0 50.764 17.19 60.077 41.325l6.44-12.882c-12.813-23.595-37.82-39.649-66.512-39.649C33.936 5.844 0 39.778 0 81.489c0 41.708 33.936 75.645 75.645 75.645 34.924 0 64.331-23.809 72.997-56.032h14.336z"></path> <path d="M35.486 96.582h7.084l2.15-7.749h8.645l2.332 7.749h7.345L53.68 66.39h-8.96l-9.234 30.192zM47.494 77.32c.493-1.749.941-4.034 1.39-5.823h.088c.449 1.789.988 4.036 1.527 5.823l1.882 6.413h-6.675l1.788-6.413zm34.243-5.598c3.311 0 5.371.583 7.029 1.294l1.436-5.466c-1.479-.715-4.482-1.48-8.377-1.48-9.901 0-17.2 5.731-17.253 15.769-.042 4.434 1.48 8.372 4.26 10.978 2.778 2.688 6.763 4.076 12.277 4.076 3.98 0 7.975-.985 10.075-1.701V79.289H79.943v5.331h4.665v6.313c-.542.274-1.798.449-3.365.449-5.604 0-9.497-3.677-9.497-9.904 0-6.534 4.296-9.756 9.991-9.756zm33.438.271v-5.598H96.539v30.187h19.265v-5.593h-12.41v-7.168h11.113v-5.56h-11.113v-6.268z"></path> </svg> Rating : {movie?.Rated}</li> }
                { movie?.Country !== "N/A" && <li className="w-full flex justify-start items-center gap-x-2 line-clamp-1"> <div className="w-5 h-5 text-orange-400"> <MdLanguage size={"100%"} /> </div> Country : {movie?.Country}</li> }
                { movie?.Actors !== "N/A" && <li className="w-full flex justify-start items-center gap-x-2 line-clamp-1"> <div className="w-5 h-5 text-orange-400"> <LiaTheaterMasksSolid size={"100%"} /> </div> Stars : {movie?.Actors}</li> }
              </ul>
            </div>

            <div className="meta-footer flex flex-col gap-y-3 w-full">
              <p className="line-clamp-1">{movie?.Plot}</p>
              <div className="flex justify-between items-center">
                <div className="metaScore leftside flex justify-center items-center gap-x-1.5">
                  <div className={`flex justify-center items-center w-6 h-6 ${Number(movie?.Metascore) >= 80 ? "bg-emerald-400 dark:bg-green-500" : "bg-orange-400"} rounded-md`} >{movie?.Metascore === "N/A" ? movie?.Title.charCodeAt(0) : movie?.Metascore}</div>
                  <svg className="w-5 h-5 rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.4 29.7" id="metacritic"><title>Page 1</title> <path d="M29.4 14.8c0 8.2-6.7 14.9-14.9 14.9S-.3 23-.3 14.8C-.3 6.7 6.3 0 14.5 0s14.9 6.7 14.9 14.8" fill="#ffcc34"></path> <path d="M26.5 14.8c0 6.6-5.3 11.9-11.9 11.9S2.7 21.4 2.7 14.8 8 2.9 14.6 2.9c6.5 0 11.9 5.3 11.9 11.9" fill="#333"></path> <path d="M6.8 18.9c-1-1-1.9-1.9-2.7-2.6l2.2-2.2 1.2 1 .1-.1c-.2-.8-.3-2.3 1.1-3.7 1.1-1.1 2.5-1.4 3.7-.8-.1-.8-.1-1.5.1-2.1.2-.7.6-1.4 1.2-2 1.6-1.6 3.9-1.7 6.4.8l4.9 4.9-2.5 2.5-4.5-4.5c-1.2-1.2-2.3-1.5-3.1-.7-.6.6-.6 1.4-.3 2.1.1.2.4.5.6.7l4.9 4.9-2.5 2.5L13 15c-1-1-2.1-1.4-3-.5-.7.7-.5 1.6-.3 2.1.1.3.3.5.6.8l4.8 4.8-2.5 2.5-5.8-5.8z" fill="#fefefe"></path> <path d="M34.8 13.2c0-1.3 0-2.5-.1-3.4h2.8l.1 1.5h.1c.5-.7 1.4-1.7 3.2-1.7 1.4 0 2.5.7 2.9 1.8.4-.6.9-1 1.4-1.3.6-.3 1.3-.5 2-.5 2.1 0 3.6 1.4 3.6 4.7v6.3h-3.2v-5.9c0-1.6-.5-2.5-1.6-2.5-.8 0-1.3.5-1.6 1.2-.1.2-.1.6-.1.8v6.3h-3.2v-6c0-1.3-.5-2.3-1.6-2.3-.9 0-1.4.7-1.6 1.2-.1.3-.1.6-.1.9v6.2h-3.2v-7.3h.2zm25.4.7c0-.8-.4-2.2-1.9-2.2-1.4 0-2 1.3-2.1 2.2h4zm-3.9 2.3c.1 1.4 1.5 2.1 3 2.1 1.1 0 2.1-.2 3-.5l.4 2.3c-1.1.5-2.4.7-3.9.7-3.6 0-5.7-2.1-5.7-5.5 0-2.7 1.7-5.7 5.4-5.7 3.5 0 4.8 2.7 4.8 5.4 0 .6-.1 1.1-.1 1.3l-6.9-.1zM69 6.9v2.9h2.4v2.5H69v3.9c0 1.3.3 1.9 1.3 1.9.5 0 .7 0 1-.1v2.5c-.4.2-1.2.3-2.2.3-1.1 0-2-.4-2.5-.9-.6-.7-.9-1.7-.9-3.2v-4.4h-1.4V9.8h1.4v-2l3.3-.9zm10 8.6c-1.8 0-3.1.4-3.1 1.7 0 .9.6 1.3 1.3 1.3.8 0 1.5-.5 1.7-1.2 0-.2.1-.4.1-.6v-1.2zm3.3 2.5c0 1 0 2 .2 2.6h-3l-.2-1.1h-.1c-.7.9-1.8 1.3-3.1 1.3-2.2 0-3.5-1.6-3.5-3.3 0-2.8 2.5-4.1 6.3-4.1v-.1c0-.6-.3-1.4-2-1.4-1.1 0-2.3.4-3 .8l-.6-2.1c.7-.4 2.2-1 4.2-1 3.6 0 4.7 2.1 4.7 4.6l.1 3.8zM93 20.3c-.6.3-1.7.5-3 .5-3.5 0-5.7-2.1-5.7-5.5 0-3.1 2.2-5.7 6.1-5.7.9 0 1.8.2 2.5.4l-.5 2.5c-.4-.2-1-.3-1.9-.3-1.8 0-2.9 1.3-2.9 3 0 2 1.3 3 2.9 3 .8 0 1.4-.1 1.9-.4l.6 2.5zm1.8-7c0-1.6 0-2.6-.1-3.5h2.9l.1 2h.1c.5-1.6 1.8-2.2 2.9-2.2.3 0 .5 0 .7.1v3.1c-.3 0-.5-.1-.9-.1-1.2 0-2.1.6-2.3 1.7 0 .2-.1.5-.1.7v5.4h-3.3v-7.2zm8.3 7.2h3.3V9.8h-3.3v10.7zm1.7-12.1c-1.1 0-1.8-.8-1.8-1.8s.7-1.8 1.9-1.8c1.1 0 1.8.8 1.9 1.8-.1 1-.9 1.8-2 1.8zm8.1-1.5v2.9h2.4v2.5h-2.4v3.9c0 1.3.3 1.9 1.3 1.9.5 0 .7 0 1-.1v2.5c-.4.2-1.2.3-2.2.3-1.1 0-2-.4-2.5-.9-.6-.6-.9-1.7-.9-3.2v-4.4h-1.4V9.8h1.4v-2l3.3-.9zm4.3 13.6h3.3V9.8h-3.3v10.7zm1.6-12.1c-1.1 0-1.8-.8-1.8-1.8s.7-1.8 1.9-1.8c1.1 0 1.8.8 1.9 1.8-.1 1-.8 1.8-2 1.8zm12.4 11.9c-.6.3-1.7.5-3 .5-3.5 0-5.7-2.1-5.7-5.5 0-3.1 2.2-5.7 6.1-5.7.9 0 1.8.2 2.5.4l-.5 2.5c-.4-.2-1-.3-1.9-.3-1.8 0-2.9 1.3-2.9 3 0 2 1.3 3 2.9 3 .8 0 1.4-.1 1.9-.4l.6 2.5z"></path> </svg>
                  <span>MetaScore</span>
                </div>
              </div>
            </div>
            
          </div>

       
          {/* <div className="flex flex-col justify-center gap-y-1">
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><LuCalendarClock color="#fb923c" size={"18px"} /> Released : {movie.Released}</span>
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><LuAlarmClock color="#fb923c" size={"18px"}/> Duration : {movie.Runtime}</span>
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><svg className="w-4 h-4 ml-0.5 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.978 162.978" id="circular_age"> <path d="M162.978 101.101l-19.611-39.224-19.611 39.224h13.209c-8.315 25.958-32.633 44.826-61.324 44.826-35.529 0-64.438-28.908-64.438-64.438 0-35.529 28.909-64.438 64.438-64.438 27.376 0 50.764 17.19 60.077 41.325l6.44-12.882c-12.813-23.595-37.82-39.649-66.512-39.649C33.936 5.844 0 39.778 0 81.489c0 41.708 33.936 75.645 75.645 75.645 34.924 0 64.331-23.809 72.997-56.032h14.336z"></path> <path d="M35.486 96.582h7.084l2.15-7.749h8.645l2.332 7.749h7.345L53.68 66.39h-8.96l-9.234 30.192zM47.494 77.32c.493-1.749.941-4.034 1.39-5.823h.088c.449 1.789.988 4.036 1.527 5.823l1.882 6.413h-6.675l1.788-6.413zm34.243-5.598c3.311 0 5.371.583 7.029 1.294l1.436-5.466c-1.479-.715-4.482-1.48-8.377-1.48-9.901 0-17.2 5.731-17.253 15.769-.042 4.434 1.48 8.372 4.26 10.978 2.778 2.688 6.763 4.076 12.277 4.076 3.98 0 7.975-.985 10.075-1.701V79.289H79.943v5.331h4.665v6.313c-.542.274-1.798.449-3.365.449-5.604 0-9.497-3.677-9.497-9.904 0-6.534 4.296-9.756 9.991-9.756zm33.438.271v-5.598H96.539v30.187h19.265v-5.593h-12.41v-7.168h11.113v-5.56h-11.113v-6.268z"></path> </svg> Rating : {movie.Rated}</span>
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><PiFolderOpen color="#fb923c" size={"18px"}/> Genre : {movie.Genre}</span>
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><MdLanguage color="#fb923c" size={"18px"} /> Country : {movie.Country}</span>
          </div> */}
                
      </div>
    </div>

    { displayLikedModal && isLike && <LikedModal type="like"/> }
    { displayLikedModal && !isLike && <LikedModal type="dislike"/> }
    </>
  );
}
