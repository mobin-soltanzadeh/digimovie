import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { deleteLikedMovies } from "../services/functions";
import { BiCameraMovie } from "react-icons/bi";

interface Props {
  movieName: string;
  status: any;
  setStatus: any;
}

export default function FavoritMovieCard({ movieName, status, setStatus }: Props) {
  // handle delete favorite movie
  const clickHandler = () => {
    deleteLikedMovies(movieName);
    setStatus(!status)
  }

  return (
    <div className="FavoritMovieCard flex justify-between items-center gap-x-4 text-xs sm400:text-sm lg:text-lg w-11/12 sm450:w-96 px-2 md:px-4 lg:px-10 py-4 bg-gray-200 dark:bg-zinc-900 rounded-xl">
      <Link to={"/digimovie/movie/"+movieName} className="flex justify-center items-center gap-x-2 text-sm lg:text-lg font-serif hover:text-orange-400 line-clamp-1"><BiCameraMovie size={"25px"} color="#fb923c" /> {movieName}</Link>
      <div className="w-5 h-5 lg:w-6 lg:h-6 mb-0.5 hover:text-orange-400 cursor-pointer" onClick={clickHandler} ><IoTrashOutline size={"100%"} /> </div>
    </div>
  );
}