import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <Outlet />
    </div>
  );
}
