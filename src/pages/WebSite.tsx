import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import BackToTop from "../components/BackToTop";

import Aos from "aos";
import 'aos/dist/aos.css';

function WebSite() {
  const [reset, setReset] = useState(true);

  const resetlogin = () => {
    setReset(!reset)
  }

  useEffect(() => {
    Aos.init();
  }, [])

  // localStorage.setItem("isLogin", "true")

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