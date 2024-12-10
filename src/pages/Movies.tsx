import { useOutletContext } from "react-router-dom";

import DisplayMovies from "../components/DisplayMovies";
import SideBar from "../components/SideBar";


export default function Movies() {
  let [reset, setReset] = useOutletContext<any>()
  return (
    <div className="HomePageMain flex justify-between items-start gap-x-5 w-full lg:w-250 xl:w-300 mx-auto px-3 md:px-0 overflow-hidden">
      
      <div className="hidden lg:inline-block"><SideBar /></div>
      <DisplayMovies reset={reset} setReset={setReset} type="normal" />
      
    </div>
  );
}
