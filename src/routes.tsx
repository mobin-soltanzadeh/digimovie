import { RouteObject } from "react-router-dom";
import WebSite from "./pages/WebSite";
import HomePage from "./pages/HomePage";
import MovieWithGenre from "./pages/MovieWithGenre";
import Actors from "./pages/Artists";
import Navigator from "./pages/Navigator";
import Top250Movies from "./pages/Top250Movies";
import Application from "./pages/Application";
import Actor from "./pages/Actor";
import Movie from "./pages/Movie";
import Serial from "./pages/Serial";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import Movies3D from "./pages/Movies3D";
import BoxOffice from "./pages/boxoffice";

let routes: RouteObject[] = [
  { path: "/", element: <Navigator to="/digimovie/" /> },
  {
    path: "/digimovie", element: <WebSite />, children: [
      { path: "", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "/digimovie/movies", element: <Movies /> },
      { path: "/digimovie/movies/3d", element: <Movies3D /> },
      { path: "movie/:title", element: <Movie /> },
      { path: "serial/:title", element: <Serial /> },

      { path: "genre", element: <MovieWithGenre />, children: [{ path: "*", element: <MovieWithGenre /> }] },

      { path: "actors", element: <Actors type="all" /> },
      { path: "actors/male", element: <Navigator to="/digimovie/actors/male/page=1" /> },
      { path: "actors/male/:page", element: <Actors type="male" /> },
      { path: "actors/female", element: <Navigator to="/digimovie/actors/female/page=1" /> },
      { path: "actors/female/:page", element: <Actors type="female" /> },
      { path: "directors", element: <Actors type="directors" /> },
      { path: "actor/:name", element: <Actor /> },

      { path: "favorites", element: <Favorites /> },
      { path: "notifications", element: <h1>notifications</h1> },
      { path: "top-250-movies", element: <Top250Movies /> },
      { path: "boxoffice", element: <BoxOffice /> },
    ],
  },
  { path: "/digimovie/application", element: <Application /> },
  { path: "*", element: <h1>404</h1> },
];

export default routes;
