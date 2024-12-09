import { TiStarFullOutline, TiStarOutline, TiStarHalfOutline } from "react-icons/ti";

interface Props {
  imdbRating: number;
  size?: string;
}

export default function StarVote({ imdbRating, size }: Props) {

  let score = Math.ceil(imdbRating) / 2  
  
  return (
    <div className="flex justify-center items-center text-orange-500">

      { [1, 2, 3, 4, 5].slice(0, score).map(num => <div key={num} className="text-yellow-500 dark:text-yellow-400"> <TiStarFullOutline size={size || "23px"} /> </div> )}

      { score-Math.floor(score)===0.5 && <div className="text-yellow-500 dark:text-yellow-400"> <TiStarHalfOutline size={size || "23px"} /> </div>}

      { [1, 2, 3, 4, 5].slice(score-Math.floor(score)===0.5 ? score+1 : score).map(num => <div key={num} className="text-yellow-500 dark:text-yellow-400"> <TiStarOutline size={size || "23px"} /> </div> )}

    </div>
  );
}
