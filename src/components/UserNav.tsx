import { isLogin } from "../services/functions";
import UserLogo from "../assets/default-prof2.png";

import { IoIosArrowDown } from "react-icons/io";
import { SlLogout } from "react-icons/sl";

interface Props{
  onLogInOut: () => void;
}

export default function UserNav({ onLogInOut }: Props) {
  let login = isLogin(); 

  const logoutHandle = () => {
    localStorage.setItem("isLogin", "false")
    onLogInOut()
  }
  const loginHandle = () => {
    localStorage.setItem("isLogin", "true")
    onLogInOut()
  }

  if (login === false)
    return (
      <div className="flex justify-center items-center gap-x-1 cursor-pointer">
        <div className="flex justify-center items-center gap-x-2 px-4 py-2 bg-zinc-400/70 dark:bg-zinc-800 rounded-full" onClick={loginHandle}>
          <p>Register</p>
          <svg className="w-4 h-4 xl:w-5 xl:h-5 fill-zinc-700 dark:fill-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="add_user"> <g xmlns="http://www.w3.org/2000/svg"> <path d="M169.739 135c0-51.123 33.362-94.446 79.5-109.407a114.916 114.916 0 00-35.5-5.593c-63.513 0-115 51.487-115 115s51.487 115 115 115c12.39 0 24.318-1.968 35.5-5.593-46.138-14.961-79.5-58.284-79.5-109.407z"></path> <path d="M49.5 512c-11.046 0-20-8.954-20-20 0-100.355 81.645-182 182-182h30c20.537 0 40.703 3.4 59.937 10.105 10.43 3.636 15.938 15.04 12.301 25.469-3.636 10.43-15.04 15.938-25.469 12.301C273.278 352.65 257.543 350 241.5 350h-30c-78.299 0-142 63.701-142 142 0 11.046-8.954 20-20 20zm310-377c0-74.439-60.561-135-135-135s-135 60.561-135 135 60.561 135 135 135 135-60.561 135-135zm-40 0c0 52.383-42.617 95-95 95s-95-42.617-95-95 42.617-95 95-95 95 42.617 95 95z"></path> <path d="M462.5 392h-60v-60c0-11.046-8.954-20-20-20s-20 8.954-20 20v60h-60c-11.046 0-20 8.954-20 20s8.954 20 20 20h60v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h60c11.046 0 20-8.954 20-20s-8.954-20-20-20z" fill="#eb8307" data-original="#ff5cf3"></path> </g> </svg>
        </div>
      </div>
    );

  return (
    <div className="right-side flex justify-center items-center gap-x-6">
      {/* notification */}
      <div className="relative cursor-pointer">
        <svg className="fill-zinc-800 dark:fill-gray-100 w-6 h-6 lg:w-7 lg:h-7 xl:h-8 xl:w-8 hover:fill-orange-400 dark:hover:fill-orange-400 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M249.38 49.44c6.58-3.16 15.09-.95 19.36 4.97 2.44 2.92 3.15 6.77 3.46 10.46 30.03 3.14 58.95 15.57 82.11 34.9 25.77 21.23 44.69 50.74 52.76 83.17 3.1 11.77 4.24 23.94 4.72 36.07-.28 15.31-.25 30.64.1 45.96 1.16 16.18 7.44 31.96 17.68 44.56 3.92 5.04 9.22 8.84 12.79 14.18 9.35 12.54 11.43 29.8 6.01 44.39-6.13 17.78-23.43 31.06-42.31 31.85-23.92.22-47.85-.06-71.78.08-6.49 31.37-33.22 57.35-64.82 62.75-16.01 2.89-32.91.5-47.49-6.71-22.19-10.7-39.22-31.83-44.26-56.03-22.9-.09-45.81-.05-68.71.02-11.66.08-23.31-4.24-31.99-12.04-11.37-10.11-17.66-25.75-16.15-40.93.8-9.36 4.56-18.4 10.5-25.67 2.61-3.38 5.95-6.08 8.8-9.25 11.09-12.48 18.11-28.51 19.78-45.12.85-17.36.1-34.77.45-52.13.95-32.21 12.45-63.91 32.25-89.3 25.73-33.43 65.18-56.16 107.22-60.69-.03-6.42 3.48-12.9 9.52-15.49m-5.85 47.29c-41.34 4.24-79.34 30.84-98.01 67.88-8.85 17.32-13.45 36.83-13.04 56.28-.39 14.01.09 28.04-.16 42.04-1 26.93-11.93 53.34-30.47 72.92-3.01 3.61-7.43 6.44-8.63 11.24-2.81 9.43 4.49 21.01 14.74 20.88 98.69.03 197.39.05 296.08-.01 11.56.11 19.2-14.63 13.26-24.27-2.67-3.59-6.17-6.46-9.03-9.9-17.94-19.81-28.05-46.2-28.73-72.86.08-13.65.23-27.3-.07-40.94.76-43.81-24.94-86.18-62.79-107.68-21.92-12.75-47.93-18.42-73.15-15.58m-32.68 303.31c4.18 11.1 12.39 20.61 22.86 26.22 11.83 6.53 26.56 7.49 39.13 2.52 12.99-4.94 23.41-15.76 28.31-28.72-30.1-.07-60.2-.1-90.3-.02z"></path> </svg>
        <div className="absolute top-0 right-0 -translate-y-1 translate-x-1 flex justify-center items-center w-4 h-4 bg-orange-400 rounded-full"> <span className="text-sm text-gray-100 text-center">3</span> </div>
      </div>
      {/* user-info & user-logo */}
      <div className="flex justify-center items-stretch gap-x-3 px-3 py-2 bg-zinc-400/70 dark:bg-zinc-800 rounded-md">
        <div className="flex flex-col justify-center items-start text-sm">
          <div className="flex justify-center items-center gap-x-1">
            <p>user....</p>
            <IoIosArrowDown className="mt-1" />
          </div>
          <p className="">welcome</p>
        </div>

        <img src={UserLogo} alt="" className="w-10 h-10 rounded-full" />
      </div>

      <div className="flex justify-center items-center w-6 h-6 lg:w-7 lg:h-7 xl:h-8 xl:w-8 text-zinc-800 dark:text-gray-100 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300 cursor-pointer" onClick={logoutHandle}><SlLogout size={"100%"} /></div>
    </div>
  );
}
