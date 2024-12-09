import SlidePage from "../components/Slider";
import HomePageMain from "../components/HomePageMain/HomePageMain";
import { useOutletContext } from "react-router-dom";

function HomePage() {
  const [reset, setReset] = useOutletContext<any>()
  
  return (
    <>
    <div className="HomePage flex flex-col gap-y-8">
      <SlidePage />
      <HomePageMain reset={reset} setReset={setReset} />
    </div>
    </>
  );
}

export default HomePage;
