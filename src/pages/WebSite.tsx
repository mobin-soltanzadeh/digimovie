import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function WebSite() {
  const [reset, setReset] = useState(true);

  const resetlogin = () => {
    setReset(!reset)
  }

  // localStorage.setItem("isLogin", "true")

  return (
    <div className="WebSite h-full">
      <Header onLogInOut={resetlogin} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default WebSite;