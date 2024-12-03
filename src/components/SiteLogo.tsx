import { Link } from "react-router-dom";

export default function SiteLogo() {
  return (
    <Link to="/digimovie/" className="cursor-pointer">
      <img className="hidden dark:inline-block w-64" src="https://shahindb.lol/wp-content/uploads/2023/09/logo-light.png" alt="site-logo" />
      <img className="inline-block dark:hidden w-64" src="https://shahindb.lol/wp-content/uploads/2023/09/logo-dark.png" alt="site-logo" />
    </Link>
  );
}
