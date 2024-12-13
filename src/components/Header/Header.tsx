import { useState } from "react";
import { Link } from "react-router-dom";

import LinkMenuItem from "../LinkMenuItem";
import ThemeLike from "../ThemeLike";
import UserNav from "../UserNav";
import SiteLogo from "../SiteLogo";

import { IoSearchSharp } from "react-icons/io5";
import { TfiAndroid } from "react-icons/tfi";
import { IoIosMenu, IoIosClose } from "react-icons/io";

import movieModal from "../../assets/movieModal.png"
import serialModal from "../../assets/serialModal.png"
import actorModal from "../../assets/actorModal.png"

interface Props{
  onLogInOut: () => void;
}

export default function Header({ onLogInOut }: Props) {
  const [menu, setMenu] = useState<boolean>(false);
  const [modalA, setModalA] = useState<boolean>(false);
  const [modalB, setModalB] = useState<boolean>(false);
  const [modalC, setModalC] = useState<boolean>(false);

  const closeMenu = () => {
    setMenu(false)
    setModalA(false);
    setModalB(false);
    setModalC(false);    
  }
  return (
    // site Header
    <header className="Header flex flex-col gap-y-4 py-5 w-full">

      <section className="first-part flex justify-between items-center w-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0">
        {/* logo & theme & likes */}
        <div className="left-side flex justify-between items-center gap-x-4 lg:gap-x-8 w-full sm:w-auto">
          <SiteLogo />
          <div className="menu flex justify-center items-center gap-x-2 sm:gap-x-3">
            <ThemeLike />
            <div className="w-7 h-7 sm450:w-9 sm450:h-9 sm:hidden cursor-pointer" onClick={() => setMenu(true)}><IoIosMenu size={"100%"} /></div>
          </div>
        </div>


        {/* notification & user-info */}
        <div className="hidden sm:inline-block">
          <UserNav onLogInOut={onLogInOut} />
        </div>
      </section>

      {/* page-links & search-box */}
      <section className="second-part w-full bg-white dark:bg-neutral-800 px-3">
        <div className="flex flex-col lg:flex-row justify-between items-center sm:gap-y-3 w-full lg:w-250 xl:w-300 mx-auto py-4">

          <div className="relative flex flex-col sm450:flex-row justify-center lg:justify-center items-start sm450:items-center gap-y-3 gap-x-3 md:gap-x-6 w-full lg:w-auto px-5 lg:px-0">
            
            <div className="hidden sm:flex justify-center items-center gap-x-3 md:gap-x-6">
              
              {/* Home Link */}
              <LinkMenuItem title="Home" desc="Last movies" link="/digimovie/"><svg className="fill-orange-400 scale-95 group-hover:scale-125 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="home"> <path d="M426 495.983H86c-25.364 0-46-20.635-46-46v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 7.72 6.28 14 14 14h340c7.72 0 14-6.28 14-14v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 25.364-20.635 46-46 46z"></path> <path d="M496 263.958a15.945 15.945 0 01-11.313-4.687L285.698 60.284c-16.375-16.376-43.02-16.376-59.396 0L27.314 259.272c-6.248 6.249-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627L203.675 37.656c28.852-28.852 75.799-28.852 104.65 0l198.988 198.988c6.249 6.249 6.249 16.379 0 22.627A15.943 15.943 0 01496 263.958zM320 495.983H192c-8.837 0-16-7.164-16-16v-142c0-27.57 22.43-50 50-50h60c27.57 0 50 22.43 50 50v142c0 8.836-7.163 16-16 16zm-112-32h96v-126c0-9.925-8.075-18-18-18h-60c-9.925 0-18 8.075-18 18z"></path> </svg></LinkMenuItem>

              {/* Movies Link */}
              <div className="group">
                <LinkMenuItem title="Movies" desc="Download movies" link="/digimovie/movies"><svg className="fill-orange-400 scale-90 group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="film_reel"> <path d="M0 0v512h512V0zm482 482h-66.4v-66.4H482zM30 30h66.4v66.4H30zm355.6 162.8v128.53H126.4V190.67h259.2zm0-32.13H126.4V30h259.2zM30 126.4h66.4v66.4H30zm0 96.4h66.4v66.4H30zm0 96.4h66.4v66.4H30zm0 96.4h66.4V482H30zm96.4-64.27h259.2V482H126.4zM482 385.6h-66.4v-66.4H482zm0-96.4h-66.4v-66.4H482zm0-96.4h-66.4v-66.4H482zm0-96.4h-66.4V30H482z"></path> </svg></LinkMenuItem> 
                <div className="absolute top-full hidden group-hover:flex pt-4 left-0 w-full text-gray-100" >
                  <div className={`actorModal flex justify-between items-center w-full h-44 md:h-64 px-4 bg-transparent/60 rounded-xl z-10 backdrop-blur-sm transition-opacity duration-500`}>
                    <div className="flex flex-col justify-end items-start gap-y-2 h-full mb-8">
                      <Link to="/digimovie/movies" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>All Movies</Link>
                      <Link to="/digimovie/movies/3d" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>3D Movies</Link>
                      <Link to="/digimovie/boxoffice" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Box Office</Link>
                      <Link to="/digimovie/top-250-movies" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Top 250 Movies</Link>
                    </div>

                    <img className="h-full" src={movieModal} alt="" />
                  </div>
                </div>
              </div>

              {/* Series Link */}
              <div className="group" >
                <LinkMenuItem title="Series" desc="Download Series" link="" ><svg className="fill-orange-400 group-hover:scale-125 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="tv"> <path d="M512 416.33V95H273.152l73.787-73.787L325.727 0 256 69.727 186.273 0 165.06 21.213 238.848 95H0v321.33h180.75V482h-46.819v30h241v-30H331.25v-65.67zm-482-30V125h452v261.33H180.75zM301.25 482h-90.5v-65.67h90.5z"></path> <path d="M455.67 144.74H56.33v219.19h399.34zm-30 189.19H86.33V174.74h339.34z"></path> <path d="M218.4 190.18v128.3l108.17-64.15zm30 52.67l19.36 11.48-19.36 11.48z"></path> </svg> </LinkMenuItem> 
              
                <div className="absolute top-full hidden group-hover:flex pt-4 left-0 w-full text-gray-100" >
                  <div className={`actorModal flex justify-between items-center w-full h-44 md:h-64 px-4 bg-transparent/60 rounded-xl z-10 backdrop-blur-sm transition-opacity duration-500`}>
                    <div className="flex flex-col justify-end items-start gap-y-2 h-full mb-8">
                      <div className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap cursor-pointer" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>( soon )</div>
                      {/* <Link to="" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>All Series (soon)</Link>
                      <Link to="" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Anime (soon)</Link>
                      <Link to="" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Mini Series (soon)</Link>
                      <Link to="" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Ended Series (soon)</Link> */}
                    </div>

                    <img className="h-full" src={serialModal} alt="" />
                  </div>
                </div>

              </div>    

            </div>

            <div className="hidden sm:flex justify-center items-center gap-x-3 md:gap-x-6" >

              {/* Artists Link */}
              <div className="group" >
                <LinkMenuItem title="Artists" desc="Best actors" link="/digimovie/actors" ><svg className="fill-orange-400 group-hover:scale-125 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.41 443.41"> <path d="M112.099 226.069c-15.751 4.637-28.455 10.022-33.983 14.407a8.962 8.962 0 01-5.587 1.948 9.001 9.001 0 01-5.599-16.052c10.069-7.985 29.437-14.437 40.085-17.571 4.768-1.407 9.771 1.323 11.175 6.092a9 9 0 01-6.091 11.176zm121.879 59.266c4.62 23.725.131 45.381-12.981 62.628-11.555 15.198-28.949 25.717-48.979 29.617a86.739 86.739 0 01-16.573 1.614c-14.294 0-28.071-3.638-39.939-10.689-18.625-11.066-30.911-29.457-35.531-53.182l-.09-.465a9 9 0 015.229-9.946c6.569-2.877 14.041-5.686 22.206-8.349a9.003 9.003 0 017.677.998c31.017 20.054 58.629 14.676 79.854-15.549a9.002 9.002 0 016.741-3.807c8.564-.595 16.545-.794 23.72-.593a9 9 0 018.581 7.272l.087.445-.002.006zm-16.648 10.216a240.97 240.97 0 00-10.34.354c-15.935 20.994-35.459 31.673-56.695 31.675-13.265.001-27.193-4.163-41.341-12.584a241.974 241.974 0 00-9.716 3.552c10.232 35.639 42.378 46.613 69.339 41.365 26.964-5.25 52.636-27.48 48.753-64.362zm-46.623-80.895c16.342-1.612 30.14-1.386 36.906.603.848.25 1.702.368 2.543.368a9.002 9.002 0 002.535-17.637c-11.708-3.443-30.256-2.579-43.753-1.246-4.947.487-8.561 4.894-8.073 9.84.489 4.947 4.903 8.561 9.842 8.072zM276.633 99.828a9.003 9.003 0 009.805-8.115 9 9 0 00-8.116-9.805c-16.348-1.541-29.848-4.399-36.111-7.646a8.997 8.997 0 00-12.132 3.849 9 9 0 003.848 12.132c11.408 5.913 31.654 8.544 42.706 9.585zm62.231.041c.283 0 .568-.014.855-.041 13.505-1.272 31.877-3.969 42.709-9.587a9 9 0 10-8.287-15.979c-6.259 3.246-19.758 6.104-36.111 7.646a9 9 0 00.834 17.961zm-48.96 175.585c12.25 62.912-32.318 128.388-105.973 155.686a9.022 9.022 0 01-2.86.557c-1.989.059-3.983.089-5.955.089-75.879 0-138.752-43.317-150.691-104.636L.297 203.244c-2.399-12.318 9.67-23.655 37.983-35.68 22.997-9.767 54.217-18.759 87.911-25.319 33.694-6.561 66.005-9.957 90.988-9.517 30.755.521 46.197 6.502 48.596 18.819l24.129 123.907zm-17.668 3.44l-23.964-123.06c-2.253-1.722-12.124-5.256-36.976-5.137-22.933.153-51.936 3.426-81.664 9.215s-57.84 13.638-79.155 22.101c-23.089 9.168-30.904 16.192-32.347 18.636L42.093 323.71c10.481 53.833 67.971 91.522 136.966 90.032 64.525-24.506 103.659-81.014 93.177-134.848zM399.307 19.675c-24.438-5.191-56.802-8.05-91.129-8.05-34.328 0-66.692 2.858-91.13 8.05-30.089 6.391-44.103 15.213-44.103 27.763v55.21c0 4.971 4.029 9 9 9s9-4.029 9-9V48.3c1.882-2.123 10.895-7.524 35.312-12.11 22.539-4.233 51.633-6.564 81.921-6.564 30.288 0 59.381 2.331 81.921 6.564 24.417 4.586 33.43 9.987 35.312 12.11v125.369c0 50.539-41.096 95.27-102.263 111.308-4.808 1.261-7.684 6.181-6.423 10.988a9.004 9.004 0 008.7 6.72c.755 0 1.523-.096 2.289-.296 33.022-8.659 61.542-25.215 82.476-47.878 21.734-23.529 33.222-51.483 33.222-80.842V47.438c-.002-12.55-14.016-21.372-44.105-27.763zM350.278 229.04c.367 0 .736-.022 1.104-.068 8.523-1.054 16.394-2.383 23.394-3.951a9 9 0 007.032-8.782v-.453c0-23.62-8.223-43.713-23.779-58.105-15.934-14.743-38.334-22.171-61.438-20.366a9 9 0 00-8.274 9.671c.386 4.956 4.71 8.673 9.671 8.274 18.132-1.413 35.554 4.287 47.818 15.634 10.292 9.521 16.344 22.578 17.708 38.046a238.578 238.578 0 01-10.212 1.629c-14.331-12.815-29.478-19.938-45.078-21.183-4.95-.39-9.292 3.302-9.688 8.256a9.001 9.001 0 008.256 9.688c12.517.999 25.048 7.457 37.247 19.196a8.997 8.997 0 006.239 2.514z"></path> </svg></LinkMenuItem>
              
                <div className="absolute top-full hidden group-hover:flex pt-4 left-0 w-full text-gray-100" >
                  <div className={`actorModal flex justify-between items-center w-full h-44 md:h-64 px-4 bg-transparent/60 rounded-xl z-10 backdrop-blur-sm transition-opacity duration-500`}>
                    <div className="flex flex-col justify-end items-start gap-y-2 h-full mb-8">
                      <Link to="/digimovie/actors/male/page=1" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Best Actors</Link>
                      <Link to="/digimovie/actors/female/page=1" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Best Actress</Link>
                      <Link to="/digimovie/directors" className="flex justify-center items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 text-nowrap" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Best Directors</Link>
                    </div>

                    <img className="h-full" src={actorModal} alt="" />
                  </div>
                </div>
              
              </div>

              {/* Application Link */}
              <LinkMenuItem title="Application" desc="Download for free" color="green" link="/digimovie/application"><TfiAndroid size={"100%"} /></LinkMenuItem>
            </div>
            
          </div>

          {/* search input */}
          <div className="flex justify-center items-center w-full lg:w-auto ">
            <div className="flex justify-between items-center gap-x-4 w-full px-5 py-2 bg-zinc-400 dark:bg-zinc-950 rounded-full cursor-pointer">
              <input type="text" placeholder="search ..." className="w-full bg-transparent font-semibold placeholder:text-zinc-700 dark:placeholder:text-gray-100 outline-none cursor-pointer" />
              <IoSearchSharp className="w-5 h-5 rotate-90 text-zinc-800 dark:text-orange-400" />
            </div>
          </div>

        </div>
      </section>

      {/* backGroundBlurModal */}
      <div className={`backGroundBlurModal ${ menu ? "inline-block" : "hidden" } sm:hidden fixed top-0 right-0 w-screen h-screen backdrop-blur-md z-[60]`} onClick={closeMenu}></div>
      {/* menu */}
      <div className={`MobileItemsMenu sm:hidden fixed top-0 left-0 -translate-x-full ${menu ? "translate-x-0 rounded-r-[50px]" : "rounded-none"} w-7/12 min-w-56 h-screen bg-gray-300 dark:bg-zinc-900 transition-all duration-1000 z-[70]`}>
        
        <ul className="flex flex-col gap-y-2 w-full h-full px-2 pt-6">
          {/* Home */}
          <li className="relative flex justify-between items-center w-full mb-4 cursor-pointer">
            <div onClick={closeMenu} className="w-[150px]" > <SiteLogo size={150} /> </div>
            <div onClick={closeMenu} className="w-10 h-10 hover:rotate-[360deg] transition-transform duration-500"> <IoIosClose size={"100%"} /> </div>
          </li>

          {/* Movies */}
          <li className="flex flex-col justify-start items-start gap-y-1 w-full py-2 cursor-pointer" onClick={() => setModalA(!modalA)}>
            <div className="flex justify-between items-center w-full">
              <span className="font-semibold">Movies</span>
              <span> <svg className={`w-4 h-4 ${modalA ? "rotate-0" : "-rotate-90"} fill-zinc-900 dark:fill-gray-100 transition-transform duration-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12" id="arrow"> <path fillRule="evenodd" fill="#EB8307" d="M9.894 5.147L5.007 8.75.119 5.147v3.056l4.888 3.603 4.887-3.603V5.147z"></path> <path fillRule="evenodd" d="M9.894.665L5.007 4.268.119.665v3.056l4.888 3.603 4.887-3.603V.665z"></path> </svg> </span>
            </div>

            <ul className={`${ modalA ? "w-full h-[120px] p-3" : "w-0 h-0" } bg-gray-200 dark:bg-zinc-950 transition-all duration-500 rounded-lg overflow-hidden`}>
              <div onClick={closeMenu} ><Link to="/digimovie/movies" className="flex justify-start items-center gap-x-2 text-sm text-nowrap h-6" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>All Movies</Link> </div>
              <div onClick={closeMenu} ><Link to="/digimovie/movies/3d" className="flex justify-start items-center gap-x-2 text-sm text-nowrap h-6" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>3D Movies</Link> </div>
              <div onClick={closeMenu} ><Link to="/digimovie/boxoffice" className="flex justify-start items-center gap-x-2 text-sm text-nowrap h-6" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Box Office</Link> </div>
              <div onClick={closeMenu} ><Link to="/digimovie/top-250-movies" className="flex justify-start items-center gap-x-2 text-sm text-nowrap h-6" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Top 250 Movies</Link> </div>
            </ul>
          </li>

          {/* Series */}
          <li className="flex flex-col justify-start items-start gap-y-1 w-full py-2 cursor-pointer" onClick={() => setModalB(!modalB)}>
            <div className="flex justify-between items-center w-full">
              <span className="font-semibold">Series</span>
              <span> <svg className={`w-4 h-4 ${modalB ? "rotate-0" : "-rotate-90"} fill-zinc-900 dark:fill-gray-100 transition-transform duration-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12" id="arrow"> <path fillRule="evenodd" fill="#EB8307" d="M9.894 5.147L5.007 8.75.119 5.147v3.056l4.888 3.603 4.887-3.603V5.147z"></path> <path fillRule="evenodd" d="M9.894.665L5.007 4.268.119.665v3.056l4.888 3.603 4.887-3.603V.665z"></path> </svg> </span>
            </div>

            <ul className={`${ modalB ? "w-full h-12 p-3" : "w-0 h-0" } bg-gray-200 dark:bg-zinc-950 transition-all duration-500 rounded-lg overflow-hidden`}>
              <div className="flex justify-start items-center gap-x-2 text-sm text-nowrap h-6" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>(soon)</div>
            </ul>
          </li>
          
          {/* Artists */}
          <li className="flex flex-col justify-start items-start gap-y-1 w-full py-2 cursor-pointer" onClick={() => setModalC(!modalC)}>
            <div className="flex justify-between items-center w-full">
              <span className="font-semibold">Artists</span>
              <span> <svg className={`w-4 h-4 ${modalC ? "rotate-0" : "-rotate-90"} fill-zinc-900 dark:fill-gray-100 transition-transform duration-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12" id="arrow"> <path fillRule="evenodd" fill="#EB8307" d="M9.894 5.147L5.007 8.75.119 5.147v3.056l4.888 3.603 4.887-3.603V5.147z"></path> <path fillRule="evenodd" d="M9.894.665L5.007 4.268.119.665v3.056l4.888 3.603 4.887-3.603V.665z"></path> </svg> </span>
            </div>

            <ul className={`${ modalC ? "w-full h-24 p-3" : "w-0 h-0" } bg-gray-200 dark:bg-zinc-950 transition-all duration-500 rounded-lg overflow-hidden`}>
              <div onClick={closeMenu} ><Link to="/digimovie/actors/male/page=1" className="flex justify-start items-center gap-x-2 text-sm text-nowrap h-6" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Best Actors</Link> </div>
              <div onClick={closeMenu} ><Link to="/digimovie/actors/female/page=1" className="flex justify-start items-center gap-x-2 text-sm text-nowrap h-6" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Best Actress</Link> </div>
              <div onClick={closeMenu} ><Link to="/digimovie/directors" className="flex justify-start items-center gap-x-2 text-sm text-nowrap h-6" > <span className="w-2 h-2 bg-orange-400 rounded-full"></span>Best Directors</Link> </div>
            </ul>
          </li>

          {/* Application */}
          <Link to={"/digimovie/application"} className="flex justify-start max-w-fit items-center pr-2 py-2 cursor-pointer">
            <span className="font-semibold">Application</span>
          </Link>


          {/* Theme & likes */}
          <li className="flex justify-center items-center about w-full" onClick={closeMenu}>
            <ThemeLike />
          </li>

        </ul>
      </div>

    </header>
  );
}