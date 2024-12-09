import { useLocation } from "react-router-dom";

export default function MovieWithGenre() {
  let genre = useLocation().pathname.slice(17);  

  return (
    <div>
      {genre ? "founded" : "404 - not founde"}
    </div>
  );
}
