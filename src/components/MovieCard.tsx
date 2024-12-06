import { Link } from "react-router-dom";

import { Top250, TypeMovie } from "../services/Datas";

import { MdLanguage } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { LuAlarmClock } from "react-icons/lu";
import { PiFolderOpen } from "react-icons/pi";

interface Props{
  movie: TypeMovie,
  type?: any;
  dataAos?: string;
  dataAosDuration?: string;
}

export default function MovieCard({ movie, type, dataAos, dataAosDuration }: Props) {
  let resolution = null;
  
  if(+movie.imdbVotes % 5 === 0) resolution = "1080p BluRay";
  else if(+movie.imdbVotes % 2 === 0) resolution = "2160 4k BluRay";
  else if(+movie.imdbVotes % 3 === 0) resolution = "1080p WEB-DL Full Hd";
  else resolution = "2160p 4K WEB-DL";

  let index = Top250.findIndex(bestMovie => bestMovie.Title === movie.Title ) + 1;

  if(type) return (
    <div data-aos={dataAos} data-aos-duration={dataAosDuration || "2000"} className="relative flex justify-start items-center w-4/5 mx-auto sm500:w-full sm500:h-56 bg-white dark:bg-neutral-800 rounded-lg">
      
      <div className="flex flex-col sm500:flex-row h-full justify-between items-start gap-x-3 sm:500p-3 lg:p-5 group">

        <Link to={"/digimovie/movies/"+movie.Title} className="h-full aspect-[6/8]" >
          <img src={movie.Poster.replace("SX1000", "SX1000")} alt="movie-image" className="w-full h-full rounded-t-lg sm500:rounded-lg" />
        </Link>
        
        <div className="flex flex-col justify-center gap-y-2 w-full h-full p-3 sm500:p-0">
          <Link to={"/digimovie/movies/"+movie.Title}><h2 className="font-semibold text-base sm:text-xl">{movie.Title} {movie.Year}</h2></Link>

          <div className="flex justify-start items-center text-orange-400">
            <a target="_blank" href={"https://www.imdb.com/title/"+movie.imdbID}> <svg className="w-14 px-2 py-1 bg-orange-400 fill-white rounded-lg mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 921 372" id="imdb_logo"> <path d="M704.86 0h91.47c.08 39.56-.16 79.13.12 118.7 3.31-2.78 6.32-5.9 9.52-8.8 6.88-5.83 14.82-10.56 23.53-13.06 9.9-2.82 20.26-3.98 30.54-3.66 14.4.44 29.28 3.86 40.93 12.72 10.58 8.44 17.6 21.47 18.34 35.05.99 14.99.99 30.03 1 45.06v85.98c-.04 18.35.16 36.9-3.44 54.98-1.82 9.83-6.91 18.92-14.19 25.74-10.48 10.51-24.82 16.86-39.59 17.94-13.45.9-27.31-.68-39.72-6.12-10.64-4.91-19.5-12.9-27.09-21.69-2.23 7.69-3.52 15.67-6.22 23.21-28.35.35-56.73.04-85.09.15-.23-9.4-.07-18.81-.11-28.21V0m100.51 146.59c-3.9.93-6.62 4.47-7.22 8.33-1.91 10.56-1.63 21.37-1.78 32.07.03 31.67-.03 63.33.03 95 .21 8.61.11 17.31 1.79 25.79.76 4.27 3.41 8.57 7.85 9.73 5.83 1.37 12.41.33 17.35-3.15 2.68-1.87 3.29-5.29 3.58-8.32 2.15-20.27 1.68-40.68 1.72-61.03-.06-22.01.1-44.01-.09-66.02-.33-8.1-.19-16.37-2.38-24.24-.86-3.48-3.93-5.82-7.14-7.01-4.33-1.63-9.19-2.4-13.71-1.15zM127.5 3.28c41.07-.01 82.14.07 123.21-.04 6.45 39.78 11.4 79.78 17.49 119.62 2.27 15.86 4.74 31.69 6.88 47.56 1.81-.26 1.67-2.1 1.96-3.39 6.89-54.59 14.13-109.13 20.99-163.72 41.4-.04 82.8-.02 124.2-.01-.01 122.02.01 244.05-.01 366.08-27.62.04-55.24-.01-82.86.02-.07-77.77-.25-155.55-.2-233.32.02-2.91.04-5.82-.2-8.72-1.84 2.46-1.56 5.69-2.09 8.58-10.44 77.82-20.95 155.63-31.4 233.45-19.67.05-39.34-.09-59.01.07-11.19-75.41-21.93-150.89-32.94-226.32-.77-3.59-.32-7.65-2.48-10.79-.46 26.87-.06 53.76-.21 80.63l-.18 156.43c-27.7-.04-55.41-.01-83.11-.01-.03-122.04.05-244.08-.04-366.12zm328.63-.04c32.61.24 65.23-.26 97.85.31 19.11.63 38.35 1.23 57.16 4.97 15.68 3.33 31.46 9.91 42.11 22.34 7.97 9.05 13.49 20.3 15.5 32.21 1.53 9.22 2.03 18.56 2.53 27.88 1.15 29.03.84 58.09.88 87.13 0 24.98-.01 49.96 0 74.94-.1 21.28-.05 42.66-2.98 63.78-1.65 12.19-6.24 24.43-15.18 33.17-11.41 10.74-27.03 16-42.45 17.22-19.14 1.61-38.36 2.41-57.57 2.2-32.61.01-65.23-.02-97.84.02.02-122.06.05-244.11-.01-366.17m94.89 62.67v240.32c7.4-.08 15.36-.3 21.78-4.43 5.17-3.42 5.83-10.12 6.76-15.7.73-7 1.47-14.03 1.45-21.08.09-55.68.08-111.37 0-167.05 0-6.06-.45-12.14-1.37-18.13-.82-5.01-4.14-9.66-8.91-11.57-6.27-2.4-13.1-2.34-19.71-2.36zM.85 5.68c31.65-.11 63.3.02 94.95-.07 0 122.13.03 244.26-.01 366.39H.87C.84 249.89.87 127.79.85 5.68z"></path> </svg></a>
            <span> <span className="text-lg font-semibold">{movie.imdbRating}</span>/10</span> 
          </div>
        
          <div className="flex flex-col justify-center gap-y-1">
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><LuCalendarClock color="#fb923c" size={"18px"} /> Released : {movie.Released}</span>
            <span className="flex justify-start items-center gap-x-1 text-xs sm:text-sm"><LuAlarmClock color="#fb923c" size={"18px"}/> Runtime : {movie.Runtime}</span>
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
    <div className="flex justify-between items-center w-full h-80 bg-zinc-700 rounded-lg">
      
      <div className="flex h-full justify-between items-start gap-x-3 p-5 group">

        <Link to={"/digimovie/movies/"+movie.Title} className="h-full aspect-[6/8]" ><img src={movie.Poster.replace("SX1000", "SX1000")} alt="movie-image" className="w-full h-full rounded-lg" /></Link>
        
        <div className="flex flex-col justify-between gap-y-4 w-full h-full">
          <h2 className="font-semibold text-xl">{movie.Title} {movie.Year}</h2>

          <div className="flex flex-col">
            <span>Resolution : {resolution}</span>
            <span>Runtime : {movie.Runtime}</span>
            <span>Genre : {movie.Director}</span>
            <span>Actors : {movie.Actors}</span>
            <span>Country : {movie.Country}</span>
            <span>Language : {movie.Language}</span>
            <span>imdbRating : {movie.imdbRating}</span>
            <span>Released : {movie.Released}</span>
          </div>

          <h3 className="text-sm line-clamp-2">{movie.Plot}</h3>
        </div>

      </div>
    </div>
  );
}
