import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import BackToTop from "../components/BackToTop";

function WebSite() {
  const [reset, setReset] = useState(true);

  const resetlogin = () => {
    setReset(!reset)
  }

  return (
    <div className="WebSite flex flex-col gap-y-4">
      <Header onLogInOut={resetlogin} />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default WebSite;