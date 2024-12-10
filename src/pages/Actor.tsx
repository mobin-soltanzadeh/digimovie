import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import {  maleActors, femaleActors, directors } from "../services/Datas";
import { TiLocation } from "react-icons/ti";
import { SlArrowRight } from "react-icons/sl";
import DemoMovieCard from "../components/DemoMovieCard";

export default function Actor() {
  let actor;
  let actorName = useLocation().pathname.slice(22).replace("%20", " ").replace("%20", " ").replace("%20", " ");
  let actorMovieIndex: number[] = [];
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  actor = maleActors.find(user => user.name === actorName);
  actor = actor || femaleActors.find(user => user.name === actorName);
  actor = actor || directors.find(user => user.name === actorName);

  if ( alphabet.slice(0, 2).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121];
  else if ( alphabet.slice(2, 4).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122];
  else if ( alphabet.slice(4, 6).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [13, 23, 33, 43, 53, 63, 73, 83, 93, 103, 113, 123];
  else if ( alphabet.slice(6, 8).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [14, 24, 34, 44, 54, 64, 74, 84, 94, 104, 114, 124];
  else if ( alphabet.slice(8, 10).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125];
  else if ( alphabet.slice(10, 12).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [16, 26, 36, 46, 66, 66, 76, 86, 96, 106, 116, 126];
  else if ( alphabet.slice(12, 14).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [17, 27, 37, 47, 57, 67, 77, 87, 97, 107, 117, 127];
  else if ( alphabet.slice(14, 16).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [18, 28, 38, 48, 55, 65, 75, 85, 95, 105, 115, 125];
  else if ( alphabet.slice(16, 18).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [19, 29, 39, 49, 59, 69, 79, 89, 99, 109, 119, 129];
  else if ( alphabet.slice(18, 20).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
  else if ( alphabet.slice(20, 22).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [140, 150, 160, 170, 180, 190, 200, 210, 220, 210];
  else if ( alphabet.slice(22, 24).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex = [141, 151, 161, 171, 181, 191, 201, 211, 221, 211];
  else if ( alphabet.slice(24).includes(actorName[actorName.length-1].toLocaleLowerCase()) ) actorMovieIndex =     [142, 152, 162, 172, 182, 192, 202, 212, 222, 212];
  else actorMovieIndex = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

  // change Title 
  useEffect(() => { document.title = "DigiMovie - Artist" }, [])

  return (
    <div className="Actor flex flex-col gap-y-3 mb-14">

      <div className="flex justify-start items-center gap-x-1 text-sm sm500:text-base w-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0">
        <TiLocation color="#fb923c" size={"18px"} />
        <Link to="/digimovie/" className="hover:text-orange-400 transition-colors duration-300">Digimovie</Link>
        <SlArrowRight className="mt-1" size={"12px"} />
        <Link to="/digimovie/actors" className="hover:text-orange-400 transition-colors duration-300">Artists</Link>
        <SlArrowRight className="mt-1" size={"12px"} />
        <p>{actorName}</p>
      </div>

      <div className="w-full bg-gray-300 dark:bg-neutral-800">
        <div className="flex flex-col sm500:flex-row justify-start items-start gap-3 w-full lg:w-250 xl:w-300 mx-auto px-3 py-4 lg:px-0">
          <img src={actor?.poster} alt="artist-image" className="h-72 aspect-[4/5] mx-auto sm:mx-0 object-cover rounded-lg" />

          <div className="flex flex-col gap-y-3 text-sm font-semibold">
            <p>Name : {actor?.name}</p>
            <p>Career : {actor?.career}</p>
            <p>Born : {actor?.birthDate}</p>
            <p>Height : {actor?.height}</p>
          </div>

        </div>
      </div>

      <div className="relative mx-auto text-center group my-3 cursor-pointer">
        <span className="text-nowrap">Works by this artist</span>
        <span className="absolute top-full left-0 w-3/12 group-hover:w-full h-px bg-orange-400 rounded-full transition-[width] duration-700"></span>
      </div>

      <div className="grid grid-cols-1 sm250:grid-cols-2 sm400:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 w-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0">
        {actorMovieIndex.map(index => (
            <DemoMovieCard key={index} movieIndex={index} />
        ))}
      </div>

    </div>
  );
}

// w-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0