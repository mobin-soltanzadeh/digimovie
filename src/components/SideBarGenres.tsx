import { Link } from "react-router-dom";
import { MovieGenres, SerieGenres } from "../services/Datas";

import { SlArrowRight } from "react-icons/sl";
import { RiMovie2Line } from "react-icons/ri";

export default function SideBarGenres({ type }: {type: "movie"|"serie"} ) {
  return (
    <div className="SideBarMovieGenres flex flex-col gap-y-3 w-full p-3 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
      <div className="flex justify-center items-center gap-x-1.5 -translate-x-2">
        <div className="w-6 h-6 text-orange-400"> <RiMovie2Line size={"100%"} /> </div>
        <h1 className="text-center">{type === "movie" ? "Movie Genres" : "Serie Genres"}</h1>
      </div>

      <div className="flex flex-col gap-y-1 w-full">
        {
          (type==="movie" ? MovieGenres : SerieGenres).map(genre => (
            <Link to={type==="movie" ? "/digimovie/genre/"+genre.genre.toLowerCase() : ""} key={genre.genre} data-aos="fade-in-up" data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom" className="flex justify-between items-center w-full text-sm">
              <div className="flex justify-center items-center gap-x-1">
                  <SlArrowRight size={"8px"} />
                  <span className="hover:text-orange-400 cursor-pointer transition-colors duration-300">{genre.genre}</span>
              </div>
              <span className="text-xs">({genre.count})</span>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
