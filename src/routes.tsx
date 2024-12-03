import { RouteObject } from "react-router-dom"
import HomePage from "./pages/HomePage";

let routes: RouteObject[] = [
  {path: "/digimovie/", element: <HomePage />, children: [
    {path: "actors", element: <h1>actors</h1>},
  ]}
]

export default routes;