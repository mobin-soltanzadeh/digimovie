import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { GrLanguage } from "react-icons/gr";

interface Props {
  currentModal: any;
  setCurrentModal: any;
  lang: string;
  setLang: any;
}

export default function ForthSlide({ currentModal, setCurrentModal, lang, setLang }: Props) {
  const en = ["ltr", "Things i've learned", "Tailwindcss", "Bootstrap", "JavaScript / TypeScript", "React", "Swiper", "ReCharts", "AOS", "Python", "C++", "Teamwork skills", "Languages i speak", "English", "Türkçe", "فارسی"];
  const fa = ["rtl", "چیزایی که یاد دارم", "Tailwindcss", "Bootstrap", "JavaScript / TypeScript", "React", "Swiper", "ReCharts", "AOS", "Python", "C++", "کار گروهی", "زبان ها", "English", "Türkçe", "فارسی"];
  const result = lang==="en" ? en : fa;

  return (
  <li dir={result[0]} className={`ForthSlide ${ currentModal===4 ? "opacity-100 visible w-full p-10" : "opacity-0 invisible w-0 p-0" } flex flex-col justify-start items-start h-full transition-opacity duration-1000 mini-scroll`} >
    
    <h1 className="text-lg md:text-xl xl:text-2xl text-start text-nowrap text-emerald-400 mb-3">{result[1]} :</h1>
    <div dir="ltr" className="flex flex-wrap justify-start items-center gap-x-3 md:gap-x-6 gap-y-2">
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[2]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[3]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[4]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[5]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[6]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[7]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[8]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[9]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[10]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[11]} </p>
    </div>

    <h1 className="text-lg md:text-xl xl:text-2xl text-start text-nowrap text-emerald-400 mt-5 mb-3">{result[12]} :</h1>
    <div dir="ltr" className="flex flex-wrap justify-start items-center gap-x-3 md:gap-x-6 gap-y-2">
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[13]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[14]} </p>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-start text-nowrap border border-gray-100 hover:bg-gray-100 hover:text-zinc-900 px-2 sm:px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer">{result[15]} </p>
    </div>


    <button className="absolute top-1/2 left-0 sm:left-2 -translate-y-1/2 text-white hover:text-orange-500 w-9 h-9 sm:w-11 sm:h-11 p-2 transition-colors duration-300" onClick={ () =>  setCurrentModal(currentModal-1) } > <SlArrowLeft size={"100%"} /> </button>
    <button className="absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 text-white hover:text-orange-500 w-9 h-9 sm:w-11 sm:h-11 p-2 transition-colors duration-300" onClick={ () =>  setCurrentModal(currentModal+1) } > <SlArrowRight size={"100%"} /> </button>
    <button dir="ltr" className="absolute top-4 left-4 flex justify-center items-center gap-x-1 text-white hover:text-orange-500 transition-colors duration-300 font-sans" onClick={() => setLang(lang==="en" ? "fa" : "en") } > <div className="w-4 h-4 md:w-6 md:h-6"><GrLanguage size={"100%"} /></div> {lang} </button>
  </li>
  );
}