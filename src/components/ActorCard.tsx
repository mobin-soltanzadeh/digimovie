import { Link } from "react-router-dom";
import { TypeActor } from "../services/Datas";

interface Props{
  actor: TypeActor;
  dataAosDuration?: string;
}

export default function ActorCard({ actor, dataAosDuration }: Props) {
  return (
    <Link to={"/digimovie/actor/name="+actor.name}>
      <div data-aos="fade-up" data-aos-duration={dataAosDuration} className="ActorCard flex flex-col justify-start items-center w-30 sm400:w-32 sm500:w-40 px-1 sm500:px-2 bg-white dark:bg-neutral-800 rounded-md">
        <img className="aspect-[4/5] object-cover rounded-md -translate-y-2" src={actor.poster} alt="image" />
        <p className="text-lg font-bold text-center line-clamp-1 -translate-y-2">{actor.name}</p>
      </div>
    </Link>
  );
}