import { useEffect } from "react";
import FavoritMovieCard from "../components/FavoritMovieCard";
import { countLikedMovies, likedMovies, movieNameConverter } from "../services/functions";
import { useOutletContext } from "react-router-dom";
import BackToTop from "../components/BackToTop";

export default function Favorites() {
  const [reset, setReset] = useOutletContext<any>()

  let counts = countLikedMovies();
  let allLikedMovies = likedMovies();

  useEffect(() => {
    allLikedMovies = likedMovies();
  }, [reset])
  
  // change Title 
  useEffect(() => { document.title = "DigiMovie - Favorites" }, [])

  if(counts===0)  return (
    <div className="mt-20 mb-40 lg:mb-72 xl:mb-96 text-center px-20 py-5 bg-gray-300 dark:bg-zinc-800 overflow-hidden">
      <h1>Ops !</h1>
      <h1 className="">You have not added any movie to your favorites list</h1>
    </div>
  );

  return (
    <>
    <div className="Favorites min-h-[55vh] w-full mb-5 overflow-hidden">
      <div className="w-full bg-gray-300 dark:bg-neutral-800 p-10">
        <ul className="flex flex-col justify-center items-center gap-y-8">
          { allLikedMovies.map((movie: string) => <FavoritMovieCard key={movie} movieName={movieNameConverter(movie)} status={reset} setStatus={setReset} /> ) }
        </ul>
      </div>
    </div>

    <BackToTop showAfterScrollY={300} />
    </>

  );
}