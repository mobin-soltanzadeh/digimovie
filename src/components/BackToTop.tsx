import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

interface Props{
  showAfterScrollY?: number
}

export default function BackToTop({ showAfterScrollY=500 }: Props) {
  const [show, setShow] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if(window.scrollY > showAfterScrollY && !show) setShow(true);
    if(window.scrollY < showAfterScrollY && show) setShow(false);      
  })
  
  return (
    <div style={{display: show ? "inline-block" : "none"}} className="BackToTop fixed bottom-4 right-6 w-10 h-10 p-2 rounded-full animate-bounce border-2 border-black/50 dark:border-white/80 cursor-pointer z-50" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} >
      <FaArrowUp size={"100%"} />
    </div>
  );
}
