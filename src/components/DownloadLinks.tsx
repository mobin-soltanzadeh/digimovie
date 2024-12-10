interface Props {
  modal: any;
  clickHandler: any;
}

export default function DownloadLinks({ modal, clickHandler }: Props) {
  return (
    <div className="link flex flex-col justify-start items-start w-full lg:w-250 xl:w-300 mx-auto px-3 lg:px-0 mt-10 bg-gray-300 dark:bg-zinc-800 rounded-lg overflow- cursor-pointer" onClick={clickHandler} >
      <div className="link flex justify-between items-center w-full px-6 py-4">
        <h1 className="link text-base lg:text-lg">Direct Download Links</h1>
        <span className="link"> <svg className={`link w-4 h-4 ${modal ? "rotate-0" : "-rotate-90"} fill-zinc-900 dark:fill-gray-100 transition-transform duration-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12" id="arrow"> <path fillRule="evenodd" fill="#EB8307" d="M9.894 5.147L5.007 8.75.119 5.147v3.056l4.888 3.603 4.887-3.603V5.147z"></path> <path fillRule="evenodd" d="M9.894.665L5.007 4.268.119.665v3.056l4.888 3.603 4.887-3.603V.665z"></path> </svg> </span>
      </div>

      <ul className={`link flex flex-col justify-start items-start gap-y-4 w-11/12 mx-auto ${modal ? "h-[800px] sm500:h-[550px] mb-4" : "h-0 m-0"} p-0 overflow-hidden transition-[height] duration-500`}>
        
        <li className="flex flex-col sm500:flex-row justify-between items-center gap-y-3 w-full h-1/4 px-4 py-2 bg-gray-100 dark:bg-neutral-900 rounded-lg">
          <div className="flex flex-col justify-start items-start">
            <span className="text-sm md:text-base lg:text-xl text-orange-500 dark:text-orange-400">1080p Full HD WEB-DL SoftSub</span>
            <div className="flex justify-start items-center gap-x-3 sm:gap-x-5 lg:gap-x-10">
              <span>Encoder : FLUX</span>
              <span>GB 5.95</span>  
              <span>Mkv</span>
            </div>
          </div>

          <button className="px-4 py-2 bg-gray-300 dark:bg-zinc-800 hover:bg-orange-400 dark:hover:bg-orange-400 rounded-full transition-colors duration-300">download</button>
        </li>

        <li className="flex flex-col sm500:flex-row justify-between items-center gap-y-3 w-full h-1/4 px-4 py-2 bg-gray-100 dark:bg-neutral-900 rounded-lg">
          <div className="flex flex-col justify-start items-start">
            <span className="text-sm md:text-base lg:text-xl text-orange-500 dark:text-orange-400">1080p 10bit WEB-DL x265 SoftSub</span>
            <div className="flex justify-start items-center gap-x-3 sm:gap-x-5 lg:gap-x-10">
              <span className="text-sm md:textbase">Encoder : PSA</span>
              <span className="text-sm md:textbase">GB 1.72</span>  
              <span className="text-sm md:textbase">Mkv</span>
            </div>
          </div>

          <button className="px-4 py-2 bg-gray-300 dark:bg-zinc-800 hover:bg-orange-400 dark:hover:bg-orange-400 rounded-full transition-colors duration-300">download</button>
        </li>

        <li className="flex flex-col sm500:flex-row justify-between items-center gap-y-3 w-full h-1/4 px-4 py-2 bg-gray-100 dark:bg-neutral-900 rounded-lg">
          <div className="flex flex-col justify-start items-start">
            <span className="text-sm md:text-base lg:text-xl text-orange-500 dark:text-orange-400">720p WEB-DL HardSub</span>
            <div className="flex justify-start items-center gap-x-3 sm:gap-x-5 lg:gap-x-10">
              <span>Encoder : Digimovie</span>
              <span>GB 1.01</span>  
              <span>Mp4</span>
            </div>
          </div>

          <button className="px-4 py-2 bg-gray-300 dark:bg-zinc-800 hover:bg-orange-400 dark:hover:bg-orange-400 rounded-full transition-colors duration-300">download</button>
        </li>

        <li className="flex flex-col sm500:flex-row justify-between items-center gap-y-3 w-full h-1/4 px-4 py-2 bg-gray-100 dark:bg-neutral-900 rounded-lg">
          <div className="flex flex-col justify-start items-start">
            <span className="text-sm md:text-base lg:text-xl text-orange-500 dark:text-orange-400">720p WEB-DL SoftSub</span>
            <div className="flex justify-start items-center gap-x-3 sm:gap-x-5 lg:gap-x-10">
              <span>Encoder : Pahe</span>
              <span>MB 949</span>  
              <span>Mp4</span>
            </div>
          </div>

          <button className="px-4 py-2 bg-gray-300 dark:bg-zinc-800 hover:bg-orange-400 dark:hover:bg-orange-400 rounded-full transition-colors duration-300">download</button>
        </li>

        <li className="flex flex-col sm500:flex-row justify-between items-center gap-y-3 w-full h-1/4 px-4 py-2 bg-gray-100 dark:bg-neutral-900 rounded-lg">
          <div className="flex flex-col justify-start items-start">
            <span className="text-sm md:text-base lg:text-xl text-orange-500 dark:text-orange-400">480p WEB-DL HardSub</span>
            <div className="flex justify-start items-center gap-x-3 sm:gap-x-5 lg:gap-x-10">
              <span>Encoder : Digimovie</span>
              <span>MB 511</span>  
              <span>Mp4</span>
            </div>
          </div>

          <button className="px-4 py-2 bg-gray-300 dark:bg-zinc-800 hover:bg-orange-400 dark:hover:bg-orange-400 rounded-full transition-colors duration-300">download</button>
        </li>

        <li className="flex flex-col sm500:flex-row justify-between items-center gap-y-3 w-full h-1/4 px-4 py-2 bg-gray-100 dark:bg-neutral-900 rounded-lg">
          <div className="flex flex-col justify-start items-start">
            <span className="text-sm md:text-base lg:text-xl text-orange-500 dark:text-orange-400">480p WEB-DL SoftSub</span>
            <div className="flex justify-start items-center gap-x-3 sm:gap-x-5 lg:gap-x-10">
              <span>Encoder : Pahe</span>
              <span>MB 451</span>  
              <span>Mkv</span>
            </div>
          </div>

          <button className="px-4 py-2 bg-gray-300 dark:bg-zinc-800 hover:bg-orange-400 dark:hover:bg-orange-400 rounded-full transition-colors duration-300">download</button>
        </li>
        
      </ul>
    </div>
  );
}
