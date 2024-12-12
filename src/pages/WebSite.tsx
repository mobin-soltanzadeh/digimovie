import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import BackToTop from "../components/BackToTop";
import AboutMe from "../components/AboutMeModal/AboutMe";

function WebSite() {
  const [reset, setReset] = useState(true);

  const resetlogin = () => {
    setReset(!reset)
  }

  return (
    <div className="WebSite flex flex-col gap-y-4">
      <Header onLogInOut={resetlogin}  />
      <Outlet context={[reset, setReset]} />
      <Footer />
      <BackToTop />
      <AboutMe />
    </div>
  );
}

export default WebSite;

// apikey = {ad6c509b, 6ff03345}