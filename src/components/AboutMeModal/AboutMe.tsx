import { useEffect, useState } from "react";
import FirstSlid from "./FirstSlid";

import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import ForthSlide from "./ForthSlide";
import FifthSlide from "./FifthSlide";

export default function AboutMe() {
  const [lang, setLang] = useState<"en" | "fa">("en");
  const [firstVisit, setFirstVisit] = useState<boolean>((localStorage.getItem("firstVisit") || "") === "true" ? true : false);

  const [modalNum, setModalNum] = useState<number>(1);

  useEffect(() => { localStorage.setItem("firstVisit", "true")}, [])
  
  if (firstVisit === true) return <div className="hidden w-0 h-0"></div>;
  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-screen h-screen z-[60]'>
      <div className='fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm'></div>

      <ul className={`relative flex justify-center items-center w-4/5 max-w-250 h-[500px] mx-auto px-3 py-10 sm:p-10 -translate-x-3 text-gray-100 bg-zinc-900 rounded-lg z-[70] ${lang==="en" ? "" : "font-dana-medium"}`}>
        {/* first slide */}
        <FirstSlid currentModal={modalNum} setCurrentModal={setModalNum} setLang={setLang} />

        {/* second slide */}
        <SecondSlide currentModal={modalNum} setCurrentModal={setModalNum} lang={lang} setLang={setLang} />

        {/* third slide */}
        <ThirdSlide currentModal={modalNum} setCurrentModal={setModalNum} lang={lang} setLang={setLang} />

        {/* forth slide */}
        <ForthSlide currentModal={modalNum} setCurrentModal={setModalNum} lang={lang} setLang={setLang} />

        {/* fifth slide */}
        <FifthSlide currentModal={modalNum} setCurrentModal={setModalNum} setFirstVisit={setFirstVisit} lang={lang} setLang={setLang} />
      </ul>
      
    </div>
  );
}
