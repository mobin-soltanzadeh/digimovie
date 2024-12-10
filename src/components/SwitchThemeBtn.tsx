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
    <button className={`Theme relative w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 hover:text-orange-500`} onClick={changetheme} >
      <HiOutlineMoon className="moon absolute left-0 top-0 w-full h-full scale-100 dark:scale-0 dark:rotate-[360deg] transition-all duration-300" />
      <HiOutlineSun className="sun absolute left-0 top-0 w-full h-full scale-0 dark:scale-100 dark:rotate-[360deg] transition-all duration-300" />
    </button>
  );
}
