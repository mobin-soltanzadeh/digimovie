import { Link } from "react-router-dom";

import { preferredSeries } from "../services/Datas";

export default function SideBarSeries() {
  return (
    <div className="SideBarSeries flex flex-col gap-y-3 w-full p-3 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
      {/* title */}
      <div className="flex justify-center items-center gap-x-1.5 -translate-x-2">
        <div className="w-6 h-6"> <svg className="fill-orange-400 group-hover:scale-125 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="tv"> <path d="M512 416.33V95H273.152l73.787-73.787L325.727 0 256 69.727 186.273 0 165.06 21.213 238.848 95H0v321.33h180.75V482h-46.819v30h241v-30H331.25v-65.67zm-482-30V125h452v261.33H180.75zM301.25 482h-90.5v-65.67h90.5z"></path> <path d="M455.67 144.74H56.33v219.19h399.34zm-30 189.19H86.33V174.74h339.34z"></path> <path d="M218.4 190.18v128.3l108.17-64.15zm30 52.67l19.36 11.48-19.36 11.48z"></path> </svg> </div>
        <h1 className="text-center">Updated Series</h1>
      </div>

      <Link  to={"/digimovie/serial/"+preferredSeries[0].Title} className="flex flex-col justify-center items-center w-full h-64 rounded-lg overflow-hidden">
        <div className="w-full h-[90%]"><img src={preferredSeries[0].Poster} className="w-full h-full object-cover"/></div>
        <h3 className="text-center w-full h-10 bg-zinc-400/70 dark:bg-neutral-700">{preferredSeries[0].Title}</h3>
      </Link>
      <Link to={"/digimovie/serial/"+preferredSeries[1].Title} className="flex flex-col justify-center items-center w-full h-36 rounded-lg overflow-hidden">
        <div className="w-full h-5/6"><img src={preferredSeries[1].Poster} className="w-full h-full object-cover"/></div>
        <h3 className="text-center w-full h-10 bg-zinc-400/70 dark:bg-neutral-700">{preferredSeries[1].Title.slice(0, 8)}</h3>
      </Link>
      
      {
        preferredSeries.slice(2).map(movie => (
          <Link key={movie.Title} to={"/digimovie/serial/"+movie.Title} className="flex flex-col justify-center items-center w-full h-12 lg:h-16 xl:h-20 rounded-lg overflow-hidden">
            <div className="w-full h-2/3"><img src={movie.Poster} className="w-full h-full object-cover"/></div>
            <h3 className="text-center w-full bg-zinc-400/70 dark:bg-neutral-700">{movie.Title}</h3>
          </Link>
        ))
      }
  </div>
  );
}
