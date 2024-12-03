import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const router = useRoutes(routes);

  return(
    <div className="App w-screen min-h-screen text-zinc-800 dark:text-gray-100 bg-gray-200 dark:bg-zinc-950 transition-colors duration-1000">
      {router}
    </div>
  );
}

export default App;