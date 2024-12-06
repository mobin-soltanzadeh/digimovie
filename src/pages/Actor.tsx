import { Link, useLocation } from "react-router-dom";

import { maleActors, femaleActors, directors } from "../services/Datas";
import { TiLocation } from "react-icons/ti";
import { SlArrowRight } from "react-icons/sl";

export default function Actor() {
  let actor;
  let actorName = useLocation().pathname.slice(22).replace("%20", " ").replace("%20", " ");


  actor = maleActors.find(user => user.name === actorName)
  actor = actor || femaleActors.find(user => user.name === actorName)
  actor = actor || directors.find(user => user.name === actorName)
  

  return (
    <div className="Actor flex flex-col gap-y-3">

      <div className="flex justify-start items-center gap-x-1 text-sm sm500:text-base w-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0">
        <TiLocation color="#fb923c" size={"18px"} />
        <Link to="/digimovie/" className="hover:text-orange-400 transition-colors duration-300">Digimovie</Link>
        <SlArrowRight className="mt-1" size={"12px"} />
        <p>Top 250 movies</p>
      </div>

      <div className="w-full bg-gray-300 dark:bg-neutral-800">
        <div className="flex justify-start items-start gap-x-3 w-full lg:w-250 xl:w-300 mx-auto px-3 py-4 lg:px-0">
          <img src={actor?.poster} alt="artist-image" className="h-72 aspect-[4/5] object-cover rounded-lg" />

          <div className="flex flex-col gap-y-3">
            <p>Name : {actor?.name}</p>
            <p>Career : {actor?.career}</p>
            <p>Born : {actor?.birthDate.replace("-", "/").replace("-", "/")}</p>
            <p>Height : {actor?.height}</p>
          </div>

        </div>
      </div>

    </div>
  );
}

// w-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0