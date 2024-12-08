import { useEffect } from "react";
import FavoritMovieCard from "../components/FavoritMovieCard";
import { countLikedMovies, likedMovies, movieNameConverter } from "../services/functions";
import { useOutletContext } from "react-router-dom";

export default function Favorites() {
  const [reset, setReset] = useOutletContext<any>()

  let counts = countLikedMovies();
  let allLikedMovies = likedMovies();
  
  if(counts===0)  return (
    <div><h1>You add nothing to your favorits list</h1></div>
  );

  useEffect(() => {
    allLikedMovies = likedMovies();
  }, [reset])

  return (
    <div className="Favorites min-h-[55vh] w-full">
      <div className="w-full bg-gray-300 dark:bg-neutral-800 p-10">
        <ul className="flex flex-col justify-center items-center gap-y-8 w-96 mx-auto">
          { allLikedMovies.map((movie: string) => <FavoritMovieCard key={movie} movieName={movieNameConverter(movie)} status={reset} setStatus={setReset} /> ) }
        </ul>
      </div>
    </div>
  );
}