import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import DisplayMovies from "../components/DisplayMovies";
import SideBar from "../components/SideBar";

export default function Movies3D() {
  let [reset, setReset] = useOutletContext<any>()
  
  // change Title 
  useEffect(() => { document.title = "DigiMovie - All Movies" }, [])

  return (
    <div className="3DMovies flex justify-between items-start gap-x-5 w-full lg:w-250 xl:w-300 mx-auto px-3 md:px-5">
      
      <div className="hidden lg:inline-block"><SideBar /></div>
      <DisplayMovies reset={reset} setReset={setReset} type="3d" />
      
    </div>
  );
}