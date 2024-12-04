import movieRoll from "../assets/movie-roll.svg"

import { GoPersonFill } from "react-icons/go";

interface Props {
  type?: "movie" | "actor";
}

export default function Skeleton({ type }: Props) {
  if(type === "actor") return (
    <div className="actorSkeleton w-full h-full">
        <div className="animate-[pulse_1s_ease-in-out_infinite] flex justify-center items-center w-full h-full bg-gray-300">
          <div className="animate-[pulse_.5s_ease-in-out_infinite] w-7/12 h-7/12 stroke-gray-400"> <GoPersonFill size={"100%"} /> </div>
        </div>
    </div>
  )
  
  else if(type === "movie") return (
    <div className="movieSkeleton w-full h-full">
      <div className="animate-[pulse_1s_ease-in-out_infinite] flex justify-center items-center w-full h-full bg-gray-300">
        <div className="animate-[spin_1.5s_linear_infinite] w-20 h-20 lg:w-24 lg:h-24 stroke-gray-400"><img className="w-full" src={movieRoll} alt="loading" /></div>
      </div>
    </div>
  );

  return (
    <div className="Skeleton">
      
    </div>
  );
}
