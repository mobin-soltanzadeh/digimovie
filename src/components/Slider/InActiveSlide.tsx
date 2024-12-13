import { useState } from "react";
import { Link } from "react-router-dom";

import Skeleton from "../Skeleton";
import { TypePreferredMovie } from "../../services/Datas";

interface Props{
  movie: TypePreferredMovie;
  position: "left" | "right";
}

export default function InActiveSlide({ movie, position }: Props) {
  const [isLoading, setLoading] = useState<boolean>(true)

  return (
    <Link to={"/digimovie/movie/" + movie.Title} className="InActiveSlide" >
      <div className={`slide-next w-full h-full bg-gray-400 ${position==="left" ? "rounded-l-2xl": "rounded-r-2xl"} overflow-hidden z-50`}>

        <img className="w-full" src={ movie.Poster } alt="movie-image" onLoad={() => setLoading(false)} />
        { isLoading && <Skeleton type="movie" /> }

      </div>
    </Link>
  );
}

