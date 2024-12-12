import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { GrLanguage } from "react-icons/gr";

interface Props{
  currentModal: any;
  setCurrentModal: any
  lang: string;
  setLang: any;
}

export default function SecondSlide({ currentModal, setCurrentModal, lang, setLang }: Props) {
  const en = ["ltr", "About this site", "This site is Developed with TypeScript & React", "Some things I used to developed this site", "Tailwindcss", "TypeScript", "React", "AOS", "Swiper"];
  const fa = ["rtl", "درمورد این سایت", "این سایت با تایپ اسکریپت و ری اکت پیاده سازی شده و صرفا برای محک زدن خودم و درست کردن یه رزومه مشتی زده شده و هیچگونه جنبه تجاری نداره", "برخی ابزارای استفاده شده", "Tailwindcss", "TypeScript", "React", "AOS", "Swiper"];
  const result = lang==="en" ? en : fa;

  return (
  <li dir={result[0]} className={`SecondSlide ${ currentModal===2 ? "opacity-100 visible w-full p-10" : "opacity-0 invisible w-0 p-0" } flex flex-col justify-start items-start font-semibold h-full transition-opacity duration-1000 mini-scroll`} >
    <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-start text-emerald-400">{result[1]} :</h1>
    <p className="text-base md:text-lg xl:text-xl text-start mb-8 lg:mb-4">{result[2]} </p>

    <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-start text-emerald-400 mb-4">{result[3]} :</h1>
    <div dir="ltr" className="flex flex-wrap justify-start items-center gap-x-6 gap-y-1 text-start w-full">
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[4]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[5]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[6]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[7]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[8]} </p>
    </div>

    <button className="absolute top-1/2 left-0 sm:left-2 -translate-y-1/2 text-white hover:text-orange-500 w-9 h-9 sm:w-11 sm:h-11 p-2 transition-colors duration-300" onClick={ () =>  setCurrentModal(currentModal-1) } > <SlArrowLeft size={"100%"} /> </button>
    <button className="absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 text-white hover:text-orange-500 w-9 h-9 sm:w-11 sm:h-11 p-2 transition-colors duration-300" onClick={ () =>  setCurrentModal(currentModal+1) } > <SlArrowRight size={"100%"} /> </button>
    <button dir="ltr" className="absolute top-4 left-4 flex justify-center items-center gap-x-1 text-white hover:text-orange-500 transition-colors duration-300 font-sans" onClick={() => setLang(lang==="en" ? "fa" : "en") } > <div className="w-4 h-4 md:w-6 md:h-6"><GrLanguage size={"100%"} /></div> {lang} </button>
  </li>
  );
}

