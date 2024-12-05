import SideBarSeries from "./SideBarSeries";
import SideBarGenres from "./SideBarGenres";

export default function SideBar() {
  return (
    <div className="hidden md:flex flex-col gap-y-4 w-72">
      <SideBarSeries />
      <SideBarGenres type="movie"/>
      <SideBarGenres type="serie"/>
    </div>
  );
}
