import { Link } from "react-router-dom";
import { countLikedMovies, isLogin } from "../services/functions";

import SwitchThemeBtn from "./SwitchThemeBtn"
import LongSwitchThemeBtn from "./LongSwitchThemeBtn"

import { IoMdHeartEmpty } from "react-icons/io";


export default function ThemeLike() {
  let login = isLogin();  

  if (login === false) return (
    <div className="flex justify-center items-center gap-x-2">
      <div className="flex justify-center items-center p-2 w-fit bg-zinc-400/70 dark:bg-zinc-800 rounded-full"><LongSwitchThemeBtn /></div>
      <Link to="/digimovie/favorites" className="relative w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-zinc-800 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">
        <IoMdHeartEmpty size={"100%"} />

        <div className="absolute top-0 right-0 -translate-y-1.5 translate-x-1.5 sm:-translate-y-1 sm:translate-x-1 flex justify-center items-center w-4 h-4 bg-orange-400 rounded-full">
          <span className="sm:text-sm text-gray-100 text-center">{countLikedMovies()}</span>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="flex justify-center items-center gap-x-1 px-2 py-1 w-fit bg-zinc-400/70 dark:bg-zinc-800 rounded-full">
      <SwitchThemeBtn />
      <Link to="/digimovie/favorites" className="relative w-5 h-5 sm450:w-6 sm450:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-zinc-800 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">
        <IoMdHeartEmpty size={"100%"} />
        <div className="absolute top-0 right-0 -translate-y-1.5 translate-x-1.5 sm:-translate-y-1 sm:translate-x-1 flex justify-center items-center w-4 h-4 bg-orange-400 rounded-full">
          <span className="sm:text-sm text-gray-100 text-center">{countLikedMovies()}</span>
        </div>
      </Link>
    </div>
  );
}
