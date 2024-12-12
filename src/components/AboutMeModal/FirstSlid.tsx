interface Props{
  currentModal: any;
  setCurrentModal: any;
  setLang: any;
}

export default function FirstSlid({ currentModal, setCurrentModal, setLang }: Props) {
  return (
  <li className={`FirstSlid ${ currentModal===1 ? "opacity-100 visible" : "opacity-0 invisible w-0" } flex flex-col justify-center items-start gap-y-4 sm:gap-y-2 text-sm sm:text-base lg:text-xl h-full transition-opacity duration-1000`} >
    <h1>Welcome to Digimovie</h1>
    <div className="flex flex-col sm:flex-row justify-start items-start sm:justify-center sm:items-center gap-4">
      <span className="text-nowrap">Whould you like continue in English ?</span>

      <div className="flex justify-center items-center gap-x-3 text-xs md:text-base lg:text-lg sm:text-sm">
        <button className="px-3 py-1 text-gray-100 bg-transparent border border-gray-100 hover:text-zinc-900 hover:bg-gray-100 rounded-lg transition-colors duration-300" onClick={() => { setLang("en"); setCurrentModal(currentModal+1) }} >Yes</button>
        <button dir="rtl" className="px-3 py-1 text-gray-100 text-nowrap bg-transparent border border-gray-100 hover:text-zinc-900 hover:bg-gray-100 rounded-lg transition-colors duration-300 font-dana-medium" onClick={() => { setLang("fa"); setCurrentModal(currentModal+1) }} >نه فارسی بهتره</button>
      </div>
    </div>
  </li>
  );
}
