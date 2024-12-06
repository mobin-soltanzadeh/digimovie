import { Link } from "react-router-dom";

import { TfiAndroid } from "react-icons/tfi";
import { IoTvOutline } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";
import { BiLogoWindows } from "react-icons/bi";
import { IoArrowDownOutline } from "react-icons/io5";


import BackToTop from "../components/BackToTop";

import Image1 from "../assets/application1.png";
import Image2 from "../assets/application2.png";
import Image3 from "../assets/application3.png";
import Image4 from "../assets/application4.png";

export default function Application() {
  return (
    <div className="Application flex flex-col items-center bg-gradient-to-b text-gray-100 from-zinc-900 via-stone-900 to-gray-950 min-h-screen font-dana-medium overflow-hidden">

      <div className="flex flex-col justify-center items-center my-32 lg:my-44 xl:my-64 gap-y-2 ">
        <Link to="/digimovie/"><img className="w-40" src="https://shahindb.lol/wp-content/uploads/2023/09/logo-light.png" alt="site-logo" /></Link>
        
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-mangiola text-center px-2">Watch Without any interrupt</h1>
        <h2 className="text-base sm:text-lg lg::text-2xl text-center px-2">By using our application you can have any Movie or Serial available in DigiMovie</h2>
        
        <div className="flex justify-center items-center gap-x-2 font-mangiola">
          <Link to="" className="text-center w-32 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 border-2 border-zinc-800 hover:border-zinc-700 rounded-md">Premium</Link>
          <Link to="" className="text-center w-32 px-3 py-2 border-2 border-zinc-800 hover:border-zinc-700 rounded-md">SignUp</Link>
        </div>
      </div>

     
      <div className="relative flex justify-center items-center w-20 h-20 mb-48" onClick={() => window.scrollBy({top: 600, left: 0, behavior: "smooth"})}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[78px] h-[78px] bg-amber-600 rounded-full">
          <IoArrowDownOutline color="#27272a" size={"30px"} />
        </div>

        <div className="w-20 h-20 border-2 border-amber-600 rounded-full animate-[ping_2s_infinite]"></div>
      </div>

      {/*  */}
      <div className="w-full overflow-hidden">
        <div className="flex flex-col gap-y-32 md:gap-y-20 w-11/12 mx-auto px-20 mb-10">

          <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-y-5 w-full md:h-48 lg:h-72 xl:h-96">
            <div className="order-3 md:order-1 flex flex-col justify-center items-start gap-y-3 text-xs sm450:text-sm md:text-base lg:text-xl">
              <p>Put it in your pocket!</p>
              <p className="ml-3 line-clamp-1">A world of movies and series, always in your pocket !</p>

              <div className="flex justify-center items-center gap-x-1 ml-6 px-2 py-1 hover:bg-orange-500 transition-colors duration-300 border-2 border-gray-300/20 rounded-lg group cursor-pointer">
                  <TfiAndroid className="shrink-0 text-orange-500 group-hover:text-gray-200 transition-colors duration-300 mb-1.5 w-5 h-5 lg:w-6 lg:h-6" />
                  <p className="group-hover:text-zinc-800 text-nowrap">Download for <span className="m-0 md:ml-1">android</span></p>
              </div>

            </div>
            
            <img src={Image1} alt="image" className="order-2 shrink-0 h-2/6 md:h-full max-h-96" />
          </div>

          <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-y-5 w-full md:h-48 lg:h-72 xl:h-96">
            <img src={Image2} alt="image" className="order-1 shrink-0 h-2/6 md:h-4/6 max-h-96" />

            <div className="order-3 md:order-1 flex flex-col justify-center items-start gap-y-3 text-xs sm450:text-sm md:text-base lg:text-xl">
              <p>Look on the wall of the house!</p>
              <p className="ml-3 line-clamp-1">Endless cinema at the heart of your TV !</p>

              <div className="flex justify-center items-center gap-x-1 ml-6 px-2 py-1 hover:bg-orange-500 transition-colors duration-300 border-2 border-gray-300/20 rounded-lg group cursor-pointer">
                  <IoTvOutline className="shrink-0 text-orange-500 group-hover:text-gray-200 transition-colors duration-300 mb-1 w-5 h-5 lg:w-6 lg:h-6" />
                  <p className="group-hover:text-zinc-800 text-nowrap">Download for <span className="m-0 md:ml-1">android-Tv</span></p>
              </div>

            </div>
          </div>

          <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-y-5 w-full md:h-48 lg:h-72 xl:h-96">
            <div className="order-3 md:order-1 flex flex-col justify-center items-start gap-y-3 text-xs sm450:text-sm md:text-base lg:text-xl">
              <p>Have it in your bag!</p>
              <p className="ml-3 line-clamp-1">Endless cinema on your MacBook !</p>
              
              <div className="flex justify-center items-center gap-x-1 ml-6 px-2 py-1 hover:bg-orange-500 transition-colors duration-300 border-2 border-gray-300/20 rounded-lg group cursor-pointer">
                  <IoLogoApple className="shrink-0 text-orange-500 group-hover:text-gray-200 transition-colors duration-300 mb-1.5 w-5 h-5 lg:w-6 lg:h-6" />
                  <p className="group-hover:text-zinc-800 text-nowrap">Download for <span className="m-0 md:ml-1">mac</span></p>
              </div>

            </div>

            <img src={Image3} alt="image" className="order-2 shrink-0 h-2/6 md:h-4/6 max-h-96" />
          </div>

          <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-y-5 w-full md:h-48 lg:h-72 xl:h-96">
            <img src={Image4} alt="image" className="order-1 shrink-0 h-2/6 md:h-4/6 max-h-96" />

            <div className="order-3 md:order-1 flex flex-col justify-center items-start gap-y-3 text-xs sm450:text-sm md:text-base lg:text-xl">
              <p>Watch movies on your Windows!</p>
              <p className="ml-3 line-clamp-1">The world of movies and series is just a click away from you !</p>

              <div className="flex justify-center items-center gap-x-1 ml-6 px-2 py-1 hover:bg-orange-500 transition-colors duration-300 border-2 border-gray-300/20 rounded-lg group cursor-pointer">
                  <BiLogoWindows className="shrink-0 text-orange-500 group-hover:text-gray-200 transition-colors duration-300 mb-1 w-5 h-5 lg:w-6 lg:h-6" />
                  <p className="group-hover:text-zinc-800 text-nowrap">Download for <span className="m-0 md:ml-1">windows</span></p>
              </div>

            </div>

          </div>

        </div>
      </div>

      <footer className="flex justify-center items-center w-full px-10 py-20">
          <div>made with ❤</div>
      </footer>

      <BackToTop />

    </div>
  );
}
