import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { GrLanguage } from "react-icons/gr";

interface Props {
  currentModal: any;
  setCurrentModal: any;
  lang: string;
  setLang: any;
}

export default function ThirdSlide({ currentModal, setCurrentModal, lang, setLang }: Props) {
  const en = ["ltr", "About me", "I am a Junior web developer with good knowledge of", "Front-End", "development. I love discipline and i also stand for quality. I love spending time on finding little details and optimizing web apps. Also i whould like to working in a team", "Details", "Name", "Mobin Soltanzadeh", "Age", "21", "Location", "Mashhad, Iran", "Education", "Computer Engineering", ""];
  const fa = ["rtl", "مختصری از من", "عرضم به حضورتون که من یه برنامه نویس", "Junior", "هستم که علاقه شدیدی به برنامه نویسی و دنیای تکنولوژی دارم، همونطور که معلومه تو حوزه فرانت کار میکنم و سعی میکنم خودمو مدام آپدیت کنم، هم تو کار تیمی خوبم و هم قدرت حل مسئله خوبی دارم", "جزئیات", "اسم", "مبین سلطان زاده", "سن", "21", "شهر", "مشهد", "تحصیلات", "دانشجوی مهندسی کامپیوتر"];
  const result = lang==="en" ? en : fa;

  return (
  <li dir={result[0]} className={`ThirdSlide ${ currentModal===3 ? "opacity-100 visible w-full px-3 sm:px-2" : "opacity-0 invisible w-0 p-0" } flex flex-col sm:flex-row justify-start items-start sm:justify-center sm:items-center gap-x-16 xl:gap-x-28 gap-y-6 py-3 md:py-5 lg:py-10 h-full transition-opacity duration-1000 mini-scroll`} >
    <div className="basis-5/12 flex flex-col justify-start items-start gap-y-1 h-full">
      <h1 className="text-lg md:text-xl xl:text-2xl text-start text-emerald-400 sm:mb-3">{result[1]}</h1>
      <p className="text-wrap text-start">{result[2]} <span className="text-nowrap font-bold"> {result[3]} </span>{result[4]}</p>
    </div>

    <div dir={result[0]} className="basis-7/12 flex flex-col justify-start items-start gap-y-1 sm:gap-y-3 h-full">
      <h1 className="text-lg md:text-xl xl:text-2xl text-start text-emerald-400 sm:mb-3">{result[5]}</h1>
      <div className="flex flex-row sm:flex-col justify-start items-start gap-y-0 gap-x-2 sm:mb-1 text-nowrap"> <h2 className="text-sm lg:text-lg xl:text-xl text-white font-bold drop-shadow-md shadow-white">{result[6]} :</h2> <span className="text-sm lg:text-base">{result[7]}</span> </div>
      <div className="flex flex-row sm:flex-col justify-start items-start gap-y-0 gap-x-2 sm:mb-1 text-nowrap"> <h2 className="text-sm lg:text-lg xl:text-xl text-white font-bold drop-shadow-md shadow-white">{result[8]} :</h2> <span className="text-sm lg:text-base">{result[9]}</span> </div>
      <div className="flex flex-row sm:flex-col justify-start items-start gap-y-0 gap-x-2 sm:mb-1 text-nowrap"> <h2 className="text-sm lg:text-lg xl:text-xl text-white font-bold drop-shadow-md shadow-white">{result[10]} :</h2> <span className="text-sm lg:text-base">{result[11]}</span> </div>
      <div className="flex flex-row sm:flex-col justify-start items-start gap-y-0 gap-x-2 sm:mb-1 text-nowrap"> <h2 className="text-sm lg:text-lg xl:text-xl text-white font-bold drop-shadow-md shadow-white">{result[12]} :</h2> <span className="text-sm lg:text-base">{result[13]}</span> </div>
    </div>

    <button className="absolute top-1/2 left-0 sm:left-2 -translate-y-1/2 text-white hover:text-orange-500 w-9 h-9 sm:w-11 sm:h-11 p-2 transition-colors duration-300" onClick={ () =>  setCurrentModal(currentModal-1) } > <SlArrowLeft size={"100%"} /> </button>
    <button className="absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 text-white hover:text-orange-500 w-9 h-9 sm:w-11 sm:h-11 p-2 transition-colors duration-300" onClick={ () =>  setCurrentModal(currentModal+1) } > <SlArrowRight size={"100%"} /> </button>
    <button dir="ltr" className="absolute top-4 left-4 flex justify-center items-center gap-x-1 text-white hover:text-orange-500 transition-colors duration-300 font-sans" onClick={() => setLang(lang==="en" ? "fa" : "en") } > <div className="w-4 h-4 md:w-6 md:h-6"><GrLanguage size={"100%"} /></div> {lang} </button>
  </li>
  );
}