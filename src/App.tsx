import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  const router = useRoutes(routes);

  useEffect(() => {
    Aos.init({duration: 2000, anchorPlacement: 'bottom-bottom'})
  }, [])

  return(
    <div className="App w-full h-full text-zinc-800 dark:text-gray-100 bg-gray-200 dark:bg-zinc-950 min-h-screen">
      {router}
    </div>
  );
}

export default App;