import SideBar from "../components/SideBar";

import { TypeActor, maleActors, femaleActors, directors } from "../services/Datas";
import ActorCard from "../components/ActorCard";

interface Props {
  type: "all" | "male" | "female" | "directors";
}

export default function Artists({ type }: Props) {
  let results: TypeActor[] = [];
  let title = "All Best"

  if (type === "all") {
    results = [...maleActors, ...femaleActors].sort((a, b) => a.name.localeCompare(b.name));
    title = "Best Artists";

  } else if (type === "male") {
    results = maleActors.sort((a, b) => a.name.localeCompare(b.name));
    title = "Best Actors";

  } else if (type === "female") {
    results = femaleActors.sort((a, b) => a.name.localeCompare(b.name))
    title = "Best Actress";

  } else if (type === "directors") {
    results = directors.sort((a, b) => a.name.localeCompare(b.name))
    title = "Best Directors";

  } else results = [];


  return (
    <div className="Players flex justify-center items-start gap-x-5 w-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0 mt-5">
      <SideBar />

      <div className="flex flex-col gap-y-4">
        <div className="relative flex justify-center items-center font-semibold w-full h-auto bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
            <span className="absolute top-0 left-0 flex justify-center items-center gap-x-1 text-sm sm:text-base lg:text-xl text-nowrap pl-4 pr-20 py-2 lg:py-4 bg-gradient-to-r from-zinc-400 dark:from-zinc-950 to-transparent self-start rounded-lg"><span className="text-base sm:textlg xl:text-2xl">{results.length}</span> member</span>
            <h1 className="text-sm sm:text-base lg:text-xl py-2 lg:py-4">{title}</h1>
        </div>

        <div className="grid grid-cols-1 sm250:grid-cols-2 sm500:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full mx-auto md:mx-0">
          { results.map((actor, index) => (
              <ActorCard dataAosDuration={index%2 === 0 ? "1500" : "3000"} key={actor.name} actor={actor} />
          ))}
        </div>
      </div>

    </div>
    
  );
}
