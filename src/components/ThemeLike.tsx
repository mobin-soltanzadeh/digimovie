import { isLogin } from "../services/functions";

import SwitchThemeBtn from "./SwitchThemeBtn"
import LongSwitchThemeBtn from "./LongSwitchThemeBtn"

import { IoMdHeartEmpty } from "react-icons/io";


export default function ThemeLike() {
  let login = isLogin();  

  if (login === false)
    return (
      <div className="flex justify-center items-center p-2 bg-zinc-400/70 dark:bg-zinc-800 rounded-full"><LongSwitchThemeBtn /></div>
    );
  return (
    <div className="flex justify-center items-center gap-2 px-2 py-1 bg-zinc-400/70 dark:bg-zinc-800 rounded-full">
      <SwitchThemeBtn />
      <div className="relative w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-zinc-800 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300 cursor-pointer">
        <IoMdHeartEmpty size={"100%"} />
        <div className="absolute top-0 right-0 -translate-y-1 translate-x-1 flex justify-center items-center w-4 h-4 bg-orange-400 rounded-full">
          {" "}
          <span className="text-sm text-gray-100 text-center">3</span>{" "}
        </div>
      </div>
    </div>
  );
}
