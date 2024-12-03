import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  link?: string;
  title: string;
  desc: string;
  color?: string;
  children: ReactNode;
}
export default function LinkMenuItem({ link, title, desc, color, children }: Props) {
  return (
    <Link to={link || "/digimovie"}>
      <div className="flex justify-center items-center gap-x-1 group">
        <div className={`w-5 h-5 md:w-7 md:h-7 ${color === "green" ? "text-teal-400 group-hover:scale-125 transition-transform duration-300" : "text-orange-400"}`}>
          {children}
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-sm ms:text-base">{title}</p>
          <p className="text-xs text-orange-400 hidden -translate-y-1 xl:translate-y-0 md:inline-block">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
