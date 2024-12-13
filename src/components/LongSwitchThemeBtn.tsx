import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function Theme() {
  window.addEventListener("load", () => {
    if (localStorage.theme) {
      if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else if (localStorage.theme === "light") {
        document.documentElement.classList.remove("dark");
      }
    } else {
      localStorage.setItem("theme", "dark");
    }
  });

  function changetheme() {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");

    if (localStorage.theme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (localStorage.theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <button className="Theme relative flex justify-between items-center gap-x-1 sm:gap-x-2" onClick={changetheme}>
      <HiOutlineMoon className="moon w-5 h-5 sm450:w-6 sm450:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
      <HiOutlineSun className="sun w-5 h-5 sm450:w-6 sm450:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
      <div className="absolute left-0 dark:left-full dark:-translate-x-full w-5 h-5 sm450:w-6 sm450:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 bg-white rounded-full transition-all duration-500"></div>
    </button>
  );
}
