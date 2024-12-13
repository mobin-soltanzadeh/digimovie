import { comments } from "../services/Datas";

import { BiLike, BiDislike } from "react-icons/bi";
import { GoPerson } from "react-icons/go";


interface Props{
  commentCount?: number;
  modal: any;
  clickHandler: any;
}

export default function Comment({ commentCount=10, modal, clickHandler }: Props) {
  return (
    <div className="comments flex flex-col justify-start items-start w-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0 bg-gray-300 dark:bg-zinc-800 rounded-lg  cursor-pointer" onClick={clickHandler} >
      <div className="comments flex justify-between items-center w-full px-6 py-4">
        <h1 className="comments text-base lg:text-lg">Comments</h1>
        <span className="comments"> <svg className={`comments w-4 h-4 ${modal ? "rotate-0" : "-rotate-90"} fill-zinc-900 dark:fill-gray-100 transition-transform duration-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12" id="arrow"> <path fillRule="evenodd" fill="#EB8307" d="M9.894 5.147L5.007 8.75.119 5.147v3.056l4.888 3.603 4.887-3.603V5.147z"></path> <path fillRule="evenodd" d="M9.894.665L5.007 4.268.119.665v3.056l4.888 3.603 4.887-3.603V.665z"></path> </svg> </span>
      </div>

      <ul className={`comments flex flex-col justify-start items-start gap-y-4 w-11/12 mx-auto ${modal ? "h-[500px] mb-4 mini-scroll" : "h-0 m-0 overflow-hidden"}  p-0 transition-[height] duration-500`}> 
        
        { [...Array(commentCount).keys()].map(index => (
        <li key={index} className="flex flex-col sm:flex-row justify-start items-center gap-x-5 gap-y-2 w-full p-4 bg-gray-100 dark:bg-neutral-900 rounded-lg">
            <div className="flex justify-center items-center gap-x-2">
              <BiLike color="#10b981" size={"25px"} />
              <BiDislike color="#f43f5e" size={"25px"} />
              <div className="w-12 h-12 ml-2 border-2 border-black/50 dark:border-gray-400/30 rounded-2xl rotate-45"> <GoPerson className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-orange-500 dark:text-orange-400 -rotate-45" /> </div>
            </div>

            <div className="flex flex-col justify-start items-start">
              <h1 className="text-xl text-orange-500 dark:text-orange-400">{comments[index].from}</h1>
              <p className="line-clamp-5">{comments[index].body}</p>
            </div>
        </li>
        ))}

      </ul>
  </div>
  );
}
