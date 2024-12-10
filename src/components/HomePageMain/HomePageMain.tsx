import SideBar from "../SideBar";
import DisplayMovies from "../DisplayMovies";

interface Props{
  reset: any;
  setReset: any;
}

export default function HomePageMain({ reset, setReset}: Props) {
  return (
    <div className="HomePageMain flex justify-start items-start gap-x-5 w-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0 overflow-hidden">

      <div className="hidden lg:inline-block"><SideBar /></div>
      <DisplayMovies reset={reset} setReset={setReset} />

    </div>
  );
}
