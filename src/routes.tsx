import { RouteObject } from "react-router-dom";

import WebSite from "./pages/WebSite"
import HomePage from "./pages/HomePage";
import MovieWithGenre from "./pages/MovieWithGenre";
import Actors from "./pages/Actors";
import Navigator from "./pages/Navigator";

let routes: RouteObject[] = [
  {path: "/", element: <Navigator to="/digimovie/" />},
  {path: "/digimovie", element: <WebSite />, children: [
    {path: "", element: <HomePage />},
    {path: "home", element: <HomePage />},

    {path: "genre", element: <MovieWithGenre />, children: [
      {path: "*", element: <MovieWithGenre />}
    ]},

    {path: "actors", element: <Actors type="all" />},
    {path: "actors/male", element: <Navigator to="/digimovie/actors/male/page=1" />}, 
    {path: "actors/male/:page", element: <Actors type="male" />},
    {path: "actors/female", element: <Navigator to="/digimovie/actors/female/page=1" />},
    {path: "actors/female/:page", element: <Actors type="female" />},
    {path: "directors", element: <Actors type="directors" />},

    {path: "favorites", element: <h1>favorites</h1>},
    {path: "notifications", element: <h1>notifications</h1>},
  ]},
  {path: "digimovie/application", element:<h1>application</h1>},
  {path: "*", element:<h1>404</h1>},
]

export default routes;