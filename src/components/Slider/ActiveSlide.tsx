import { Link } from "react-router-dom";

import Skeleton from "../Skeleton";
import { useState } from "react";

import { TypePreferredMovie } from "../../services/Datas";

interface Props{
  movie: TypePreferredMovie;
  to?: string;
}

export default function ActiveSlide({ movie }: Props) {
  const [isLoading, setLoading] = useState<boolean>(true);
  
  return (
    <Link to={"/digimovie/movie/" + movie.Title}>
      <div className="relative slide-active w-full h-full bg-gray-700 rounded-2xl overflow-hidden">
        {/* background image */}
        <img className="absolute top-0 w-full -translate-y-7" src={movie.Poster} alt="movie-image" onLoad={() => setLoading(false)} />

        {/* resolution */}
        <p className="absolute top-5 left-12 text-yellow-500 font-semibold">{movie.Resolution}</p>
        <svg className="absolute top-5 left-5 w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -36 512 512" id="quality_hd"> <path d="M452 0H60C26.914 0 0 26.914 0 60v240c0 33.086 26.914 60 60 60h176v40H132v40h248v-40H276v-40h176c33.086 0 60-26.914 60-60V60c0-33.086-26.914-60-60-60zm20 300c0 11.027-8.973 20-20 20H60c-11.027 0-20-8.973-20-20V60c0-11.027 8.973-20 20-20h392c11.027 0 20 8.973 20 20zM196 100.121h40v160h-40v-60h-40v60h-40v-160h40v60h40zm140 0h-60v160h60c33.086 0 60-26.914 60-60v-40c0-33.082-26.914-60-60-60zm20 100c0 11.027-8.973 20-20 20h-20v-80h20c11.027 0 20 8.973 20 20zm0 0"></path>   </svg>
        
        {/* movie info */}
        <div className="absolute bottom-2 left-7 flex flex-col justify-start items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm"><span className="text-2xl text-yellow-500 font-bold">{movie.imdbRating}</span>/10</p>
            <svg className="-translate-y-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667" id="imdb"> <path d="M53.333 138.667h384c29.455 0 53.333 23.878 53.333 53.333v106.667c0 29.455-23.878 53.333-53.333 53.333h-384C23.878 352 0 328.122 0 298.667V192c0-29.455 23.878-53.333 53.333-53.333z" fill="#ffc107"></path> <g fill="#000"> <path d="M96 309.333c-5.891 0-10.667-4.776-10.667-10.667V192c0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667v106.667c0 5.891-4.776 10.666-10.667 10.666zm128 0c-5.891 0-10.667-4.776-10.667-10.667v-96h-1.92L191.787 300.8c-1.172 5.773-6.803 9.503-12.576 8.331a10.667 10.667 0 01-8.331-8.331l-19.627-98.133h-1.92v96c0 5.891-4.776 10.667-10.667 10.667S128 304.558 128 298.667V192c0-5.891 4.776-10.667 10.667-10.667H160a10.666 10.666 0 0110.453 8.533l10.88 54.4 10.88-54.4a10.667 10.667 0 0110.453-8.533H224c5.891 0 10.667 4.776 10.667 10.667v106.667c0 5.891-4.776 10.666-10.667 10.666zm64 0h-21.333c-5.891 0-10.667-4.776-10.667-10.667V192c0-5.891 4.776-10.667 10.667-10.667H288c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zM277.333 288H288c5.891 0 10.667-4.776 10.667-10.667v-64c0-5.891-4.776-10.667-10.667-10.667h-10.667V288zM352 309.333c-5.891 0-10.667-4.776-10.667-10.667V192c0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667v106.667c0 5.891-4.776 10.666-10.667 10.666z"></path> <path d="M373.333 309.333c-17.673 0-32-14.327-32-32v-42.667c0-17.673 14.327-32 32-32s32 14.327 32 32v42.667c0 17.673-14.327 32-32 32zm0-85.333c-5.891 0-10.667 4.776-10.667 10.667v42.667c0 5.891 4.776 10.667 10.667 10.667S384 283.224 384 277.333v-42.667c0-5.89-4.776-10.666-10.667-10.666z"></path> </g> </svg>
          </div>
          <p className="text-2xl text-white font-bold -translate-y-7">{movie.Title + " " + movie.Year}</p>
        </div>

        {/* loading skeleton */}
        { isLoading && <Skeleton type="movie" /> }
      </div>
    </Link>
  );
}
