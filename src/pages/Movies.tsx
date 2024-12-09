import DisplayMovies from "../components/DisplayMovies";
import SideBar from "../components/SideBar";

export default function Movies() {
  return (
    <div className="HomePageMain flex justify-between items-start gap-x-5 w-full lg:w-250 xl:w-300 mx-auto px-3 md:px-5">
      
      <div className="hidden lg:inline-block"><SideBar /></div>
      <DisplayMovies />
      
    </div>
  );
}
