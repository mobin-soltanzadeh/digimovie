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
  <div className="FavoritMovieCard flex justify-between items-center gap-x-1 text-lg w-full px-10 py-4 bg-gray-200 dark:bg-zinc-900 rounded-xl">
      <Link to={"/digimovie/movie/"+movieName} className="flex justify-center items-center gap-x-2 text-lg font-serif hover:text-orange-400 line-clamp-1"><BiCameraMovie size={"25px"} color="#fb923c" /> {movieName}</Link>
      <div className="w-6 h-6 hover:text-orange-400 cursor-pointer" onClick={clickHandler} ><IoTrashOutline size={"100%"} /> </div>
    </div>
  );
}
