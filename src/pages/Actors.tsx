import { useParams } from "react-router-dom";

import { TypeActor, maleActors, femaleActors, directors } from "../services/Datas";

interface Props {
  type: string;
}

export default function Actors({ type }: Props) {
  let results: TypeActor[] = [];
  let x = useParams();
  console.log(x);

  if (type === "all") results = maleActors.concat(femaleActors); // safg
  else if (type === "male") results = maleActors.sort();
  else if (type === "female") results = femaleActors;
  else if (type === "directors") results = directors;
  else results = [];

  results = results.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0) )

  // let xy = maleActors.concat(femaleActors)
  // console.log(maleActors.length, femaleActors.length);
  
  // xy.forEach(val => console.log(val))
  

  return (
    <div className="grid grid-cols-5 gap-8 px-32">
      {
        results.map(actor => (

          <div>
            <div className="flex flex-col justify-start items-center w-44 bg-zinc-700 rounded-md">
              <img className="w-36 aspect-[4/5] object-cover rounded-md -translate-y-3" src={actor.poster} alt="image" />

              <p className="text-white text-lg font-bold -translate-y-2">{actor.name}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
