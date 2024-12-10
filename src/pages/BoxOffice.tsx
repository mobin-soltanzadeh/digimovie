import { boxOffice } from "../services/Datas";

export default function BoxOffice() {
  return (
    <div className="boxoffice flex flex-col justify-center items-start gap-x-5 w-full lg:w-250 xl:w-300 mx-auto px-3 md:px-5 overflow-hidden">

        {boxOffice.map(movie => (
          <div className="flex justify-center items-center">
            <img src={movie.Poster} alt={movie.Title} className="h-64 aspect-[4/5]" />
            <h1>{movie.Title}</h1>
          </div>
        ))}
    </div>
  );
}