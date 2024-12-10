import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { Top250, TypeMovie } from "../services/Datas";

interface Props{
  reset: any;
  setReset: any;
}

export default function DisplayMovies({ reset, setReset }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
let countPerPage = 8;

  let allMovies = [...Top250];
  allMovies.sort( (a, b) => a.Title.toUpperCase() < b.Title.toUpperCase() ? -1 : 1 )
  const [moviesArray, setMovieArray] = useState<TypeMovie[] | any[]>([])

  useEffect(() => {
    let startIndex = (currentPage-1)*countPerPage, endIndex = currentPage * countPerPage;
    setMovieArray(allMovies.slice(startIndex, endIndex));

  }, [currentPage])

  return (
    <div className="flex flex-col gap-y-5 w-full">
      {/* generate each movie */}
      { moviesArray.map((movie, index) => <MovieCard key={movie.Title} movie={movie} reset={reset} setReset={setReset} dataAos={index%2 === 0 ? "fade-up-right": "fade-up-left"} dataAosDuration="2000" /> ) }

      {/* page botton pagination */}
      <Pagination size={Top250.length} countPerPage={countPerPage} currentPage={currentPage} setPage={setCurrentPage} />
    </div>    
  );
}
