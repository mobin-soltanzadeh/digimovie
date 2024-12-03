import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

// import { best250Names } from "../services/Datas";
import { useState } from "react";


import SlidePage from "../components/SlidePage"

// async function getApi () {
//   let page = 1;
//   let start = 
//   console.log(best250Names.slice((page-1) *10, page*10))
// }

export default function HomePage() {
  const [reset, setReset] = useState(true);

  const resetlogin = () => {
    setReset(!reset)
  }

  // localStorage.setItem("isLogin", "true")

  return (
    <div className="HomePage w-full">
      <Header onLogInOut={resetlogin} />
      <Outlet />
      <SlidePage />
    </div>
  );
}
