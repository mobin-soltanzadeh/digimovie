import { Link } from "react-router-dom";
import { Top250, TypeMovie } from "../services/Datas";

import { HiOutlineDownload } from "react-icons/hi";

interface Props {
  movieIndex: number;
}

export default function DemoMovieCard({ movieIndex }: Props) {
  let movie: TypeMovie = Top250[movieIndex];

  return (
    <Link to={"/digimovie/movie/title="+movie.Title} className="DemoMovieCard relative flex flex-col justify-center gap-y-1 items-center group overflow-hidden">
      <img src={movie.Poster} alt="movie-image" className="rounded-lg h-64 aspect-[4/5] object-cover" />
      <h2 className="text-xs text-nowrap">{movie.Title}</h2>

      <div className="absolute -top-[20%] -left-64 group-hover:left-0 w-10 lg:w-12 xl:w-14 h-20 transition-[left]">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 68 341"><path fillRule="evenodd" opacity="0.851" fill="rgb(0, 0, 0)" d="M0.005,-0.011 C0.041,1.280 0.072,2.584 0.072,4.005 C0.072,36.067 8.486,60.983 15.910,76.735 L57.177,133.667 C70.853,152.534 70.853,183.123 57.177,201.990 L26.908,243.749 L27.010,244.013 C27.010,244.013 0.072,278.915 0.072,336.920 C0.072,338.357 0.041,339.675 0.005,340.981 L0.005,-0.011 Z"></path> </svg>
          <span className="absolute top-[47%] -left-4 rotate-90 text-xs md:text-sm text-gray-400">Download</span>
        </div>
      </div>

      <div className="absolute top-2/3 -right-64 group-hover:right-5 w-6 h-6 lg:w-8 lg:h-8 transition-[right]">
        <HiOutlineDownload color="#fb923c" size={"100%"} />
      </div>
    </Link>
  );
}
