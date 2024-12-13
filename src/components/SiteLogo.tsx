import { Link } from "react-router-dom";

interface Props{
  size?: number;
}

export default function SiteLogo( { size } : Props ) {

  if (size) return (
    <Link to="/digimovie/" style={{width: `${size}px`}} className="cursor-pointer">
      <img className={`hidden dark:inline-block max-w-full`} src="https://shahindb.lol/wp-content/uploads/2023/09/logo-light.png" alt="site-logo" />
      <img className={`inline-block dark:hidden max-w-full`} src="https://shahindb.lol/wp-content/uploads/2023/09/logo-dark.png" alt="site-logo" />
    </Link>
  );
  
  return (
    <Link to="/digimovie/" className="cursor-pointer w-52 sm500:w-64">
      <img className={`hidden dark:inline-block w-full`} src="https://shahindb.lol/wp-content/uploads/2023/09/logo-light.png" alt="site-logo" />
      <img className={`inline-block dark:hidden w-full`} src="https://shahindb.lol/wp-content/uploads/2023/09/logo-dark.png" alt="site-logo" />
    </Link>
  );
}