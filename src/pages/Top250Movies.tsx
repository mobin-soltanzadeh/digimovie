import { useEffect, useState } from "react";

import SideBar from "../components/SideBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

import { Top250, TypeMovie } from "../services/Datas";

import { IoIosArrowDown } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function Top250Movies() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterMenu, setFilterMenu] = useState(false);
  const [filter, setFilter] = useState<"Name" | "Imdb" | "Released date">("Imdb");

  let countPerPage = 8;
  let startIndex = (currentPage-1)*countPerPage, endIndex = currentPage * countPerPage;

  const [moviesArray, setMovieArray] = useState<TypeMovie[] | any[]>([]);
  let allBestMovies = [...Top250];

  useEffect(() => {
    if (filter === "Imdb") allBestMovies.sort( (a, b) => Number(b.imdbRating) - Number(a.imdbRating) );
    else if (filter === "Name") allBestMovies.sort( (a, b) => a.Title.toUpperCase() < b.Title.toUpperCase() ? -1 : 1 );
    else if (filter === "Released date") allBestMovies.sort( (a, b) => +a.Released.split(" ")[2] > +b.Released.split(" ")[2] ? -1 : 0 );
    else allBestMovies.sort( (a, b) => Number(b.imdbRating) - Number(a.imdbRating) );
    
    setMovieArray(allBestMovies.slice(startIndex, endIndex));
  
  }, [filter])

  useEffect(() => {
    setMovieArray([...allBestMovies.slice(startIndex, endIndex)])
    
  }, [currentPage])

  // setting web title
  useEffect(() => { document.title = "Digimovie - Top250" }, [])

  return(
      <>
        <div className="HomePageMain flex flex-col gap-y-3 w-full h-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0 overflow-hidden">

          <div className="flex justify-start items-center gap-x-1 text-sm sm500:text-base">
            <TiLocation color="#fb923c" size={"18px"} />
            <Link to="/digimovie/" className="hover:text-orange-400 transition-colors duration-300">Digimovie</Link>
            <SlArrowRight className="mt-1" size={"12px"} />
            <p>Top 250 movies</p>
          </div>

          <div className="flex justify-between items-start gap-x-5">
            <SideBar />
            <div className="flex flex-col gap-y-5 w-full">
              {/* filter box */}
              <div className="flex justify-between items-center text-xl w-full p-3 bg-white dark:bg-neutral-800 rounded-lg">
                <h1 className="text-base sm500:text-xl">Top 250 Movies</h1>
                <div className="relative rounded-lg" onFocus={() => setFilterMenu(true)} onBlur={() => setTimeout(() => setFilterMenu(false), 200)}>
                  <button className="flex justify-center items-center gap-x-3 lg:gap-x-8 px-2 bg-transparent rounded-md focus:ring-4 ring-blue-400/20">
                    <span className="text-start text-sm lg:text-lg font-semibold px-1 lg:px-2 py-1 lg:py-2 text-nowrap">Sorted by: {filter}</span>
                    <div className="w-4 lg:w-6"><IoIosArrowDown size={"100%"} className="mt-1" /></div>
                  </button>
                  <ul style={{display: filterMenu ? "flex" : "none"}} className="absolute top-full translate-y-2 left-0 flex flex-col justify-center items-start w-full border-4 border-black/40 bg-gray-100 dark:bg-neutral-800 rounded-md z-50">
                    <li className="gap-x-2 py-1 text-start w-full px-3 hover:bg-zinc-700 text-nowrap" onClick={() => setFilter("Imdb")}>Imdb</li>
                    <li className="gap-x-2 py-1 text-start w-full px-3 hover:bg-zinc-700 text-nowrap" onClick={() => setFilter("Name")}>Name</li>
                    <li className="gap-x-2 py-1 text-start w-full px-3 hover:bg-zinc-700 text-nowrap" onClick={() => setFilter("Released date")}>Released date</li>
                 </ul>
                </div>
              </div>
              {/* generate each movie */}
              { moviesArray.map((movie, index) => <MovieCard key={movie.Title} movie={movie} type="best" dataAos={index%2 === 0 ? "fade-up-right": "fade-up-left"} dataAosDuration="2000" /> ) }

              {/* page botton pagination */}
              <Pagination size={Top250.length} countPerPage={countPerPage} currentPage={currentPage} setPage={setCurrentPage} />
            </div>
          </div>

        </div>
      </>
  );
}
