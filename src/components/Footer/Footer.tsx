import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";

import "./Footer.css"


export default function Footer() {

    return (
    <div className="Footer w-full py-20  bg-white dark:bg-neutral-900 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 w-3/5 my-auto mx-auto">
            <p className="flex flex-col justify-center items-center md:inline-block text-2xl lg:text-3xl font-dana-light">Developed by <span className="text-nowrap font-mangiola font-black md:ml-1">Mobin Soltanzadeh</span></p>
            <div className="flex justify-center items-center gap-x-2">

                <a data-aos="fade-up" data-aos-duration="750" data-aos-anchor-placement="bottom-bottom" href="https://t.me/msoltani2119" target="_blank" className="w-12 h-12 xl:w-14 xl:h-14"> <button className="bg-transparent dark:bg-transparent text-zinc-800 dark:text-gray-200 hover:bg-sky-500 dark:hover:bg-sky-500 hover:text-gray-200 rounded-full transition-colors duration-300"> <FaTelegramPlane className="w-12 h-12 xl:w-14 xl:h-14 p-2 -translate-x-0.5 translate-y-px" /></button> </a>

                <button data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className="instaLogo bg-transparent dark:bg-transparent text-zinc-800 hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-200 rounded-full transition-colors duration-300"> <FaInstagram className="w-12 h-12 xl:w-14 xl:h-14 p-2" /></button>

                <a data-aos="fade-up" data-aos-duration="750" data-aos-anchor-placement="bottom-bottom" href="https://www.linkedin.com/in/mobin-soltanzadeh" target="_blank" className="w-12 h-12 xl:w-14 xl:h-14"> <button className="bg-transparent dark:bg-transparent text-zinc-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-gray-200 rounded-full transition-colors duration-300"> <FaLinkedinIn className="w-12 h-12 xl:w-14 xl:h-14 p-2 -translate-x-0.5 translate-y-px" /></button> </a>
                <a data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom" href="https://github.com/mobin-soltanzadeh" target="_blank" className="w-12 h-12 xl:w-14 xl:h-14"> <button className="bg-transparent dark:bg-transparent hover:bg-black dark:hover:bg-black dark:bg-neutral-300 text-zinc-800 hover:text-gray-200 dark:text-gray-200 rounded-full transition-colors duration-300"> <PiGithubLogoFill className="w-12 h-12 xl:w-14 xl:h-14 p-2" /></button> </a>
            </div>
        </div>
        
    </div>
    );
}