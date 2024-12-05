import SlidePage from "../components/Slider";
import HomePageMain from "../components/HomePageMain/HomePageMain";

function HomePage() {
  return (
    <>
    <div className="HomePage flex flex-col gap-y-8">
      <SlidePage />
      <HomePageMain />
    </div>
    </>
  );
}

export default HomePage;
