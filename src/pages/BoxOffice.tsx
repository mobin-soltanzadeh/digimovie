import { Link } from "react-router-dom";
import { boxOffice } from "../services/Datas";

export default function BoxOffice() {
  return (
    <table className="boxoffice flex flex-col justify-start items-start gap-y-3 w-full lg:w-250 xl:w-300 mx-auto px-3 md:px-0 rounded-lg  overflow-hidden">

        <thead className="w-full text-sm md:text-base lg:text-lg xl:text-xl font-bold">
          <tr className="flex justify-center items-center gap-x-4 sm450:gap-x-2 sm:gap-x-4 w-full p-2 sm:p-3">
            <td className="basis-1/12 shrink text-center md:mr-5">Rank</td>
            <td className="basis-32 grow text-nowrap">Caption</td>
            <td className="hidden sm450:inline-block basis-1/6 shrink text-center text-nowrap">Weekend Gross</td>
            <td className="hidden sm450:inline-block basis-1/6 shrink text-center text-nowrap">Total Gross</td>
            <td className="hidden sm:inline-block basis-1/6 shrink text-center text-nowrap">Weeks Released</td> 
          </tr>
        </thead>

        <tbody className="w-full rounded-lg overflow-hidden text-xs md:text-sm lg:text-base">
        {boxOffice.map((movie, index) => (
          <tr className={`flex justify-center items-center gap-x-4 sm450:gap-x-2 sm:gap-x-4 w-full p-2 sm:p-3 ${index%2===0 ? "bg-gray-100 dark:bg-zinc-800" : "bg-gray-300 dark:bg-zinc-900/80"}`}>
            <td className="basis-1/12 shrink text-center md:mr-5">{index+1}</td>
            <Link to={"/digimovie/movie/"+movie.Title} className="basis-1/6 grow flex justify-start items-center gap-x-2 text-nowrap line-clamp-1"><img src={movie.Poster} alt={movie.Title} className="h-28 aspect-[4/5] object-cover rounded-xl" /> <span className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">{movie.Title}</span></Link>
            <td className="hidden sm450:inline-block basis-1/6 shrink text-center text-nowrap">{movie["Weekend Gross"]}</td>
            <td className="hidden sm450:inline-block basis-1/6 shrink text-center text-nowrap">{movie["Total Gross"]}</td>
            <td className="hidden sm:inline-block basis-1/6 shrink text-center text-nowrap">{movie["Weeks Released"]}</td>
          </tr>
        ))}
        </tbody>
    </table>
  );
}