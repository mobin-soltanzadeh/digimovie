import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { Top250, TypeMovie, Movies3D } from "../services/Datas";

interface Props{
  type?: "normal" | "3d";
  reset: any;
  setReset: any;
}

export default function DisplayMovies({ reset, setReset, type }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  let countPerPage = 8;

  let allMovies = type==="3d" ? [...Movies3D] : [...Top250]
  type === "normal" && allMovies.sort( (a, b) => a.Title.toUpperCase() < b.Title.toUpperCase() ? -1 : 1 )
  const [moviesArray, setMovieArray] = useState<TypeMovie[] | any[]>([])

  useEffect(() => {
    let startIndex = (currentPage-1)*countPerPage, endIndex = currentPage * countPerPage;
    setMovieArray(allMovies.slice(startIndex, endIndex));
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})

  }, [currentPage])

  return (
    <div className="flex flex-col gap-y-5 w-full overflow-hidden">
      {/* generate each movie */}
      { moviesArray.map((movie, index) => <MovieCard key={movie.Title} movie={movie} reset={reset} setReset={setReset} dataAos={index%2 === 0 ? "fade-up-right": "fade-up-left"} dataAosDuration="2000" /> ) }

      {/* page botton pagination */}
      <Pagination size={type==="3d" ? Movies3D.length : Top250.slice.length} countPerPage={countPerPage} currentPage={currentPage} setPage={setCurrentPage} />
    </div>    
  );
}
