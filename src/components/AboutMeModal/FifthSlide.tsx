import { SlArrowLeft } from "react-icons/sl";
import { FaXmark } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";

import faCv from "../../assets/cv.pdf"
// make English cv later
import enCv from "../../assets/cv.pdf"

interface Props {
  currentModal: any;
  setCurrentModal: any;
  setFirstVisit: any;
  lang: string;
  setLang: any;
}

export default function FifthSlide({ currentModal, setCurrentModal, setFirstVisit, lang, setLang }: Props) {
  const en = ["ltr", "Contact me", "GitHub", "Telegram", "Email", ""];
  const fa = ["rtl", "راه های ارتباطی با من", "گیت هاب", "تلگرام", "ایمیل", "برای دانلود رزومه من اینجا کلیک کنید"];
  const result = lang==="en" ? en : fa;

  return (
    <li dir={result[0]} className={`FifthSlide ${ currentModal===5 ? "opacity-100 visible w-full p-10" : "opacity-0 invisible w-0 p-0" } flex flex-col justify-center items-center gap-y-6 h-full transition-opacity duration-1000 mini-scroll`} >
      
      <h1 className="text-lg md:text-xl xl:text-2xl text-start text-nowrap text-emerald-400">{result[1]} :</h1>
      <div className="flex flex-wrap justify-start items-center gap-x-3 md:gap-x-6 gap-y-2">
        <a href="https://github.com/mobin-soltanzadeh" target="_blank" className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[2]}</a>
        <a href="https://t.me/msoltani2119" target="_blank" className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[3]} </a>
        <a href="mailto:mobin.soltanzadeh.work@gmail.com" target="_blank" className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[4]} </a>
      </div>

      { lang==="fa" && <h1 className="text-xs sm:text-sm lg:text-base xl:text-lg text-start">برای دانلود رزومه <a href={faCv} download className="text-orange-400 hover:text-orange-500 hover:font-bold">اینجا</a> کلیک کنید</h1> }
      { lang==="en" && <h1 className="text-xs sm:text-sm lg:text-base xl:text-lg text-start">click <a href={enCv} className="text-orange-400 hover:text-orange-500 font-dana-medium hover:font-bold" >here</a> to get CV</h1> }
    
      <button className="absolute top-1/2 left-0 sm:left-2 -translate-y-1/2 text-white hover:text-orange-500 w-9 h-9 sm:w-11 sm:h-11 p-2 transition-colors duration-300" onClick={ () =>  setCurrentModal(currentModal-1) } > <SlArrowLeft size={"100%"} /> </button>
      <button className="absolute top-2 right-2 text-white hover:text-orange-500 w-9 h-9 md:w-11 md:h-11 p-2 hover:rotate-[360deg] hover:scale-125 transition-[transform_colors] duration-1000" onClick={() => setFirstVisit(true) } > <FaXmark size={"100%"} /> </button>
      <button dir="ltr" className="absolute top-2 left-2 flex justify-center items-center gap-x-1 p-2 text-white hover:text-orange-500 transition-colors duration-300 font-sans" onClick={() => setLang(lang==="en" ? "fa" : "en") } > <div className="w-4 h-4 md:w-6 md:h-6"><GrLanguage size={"100%"} /></div> {lang} </button>
    </li>
  );
}