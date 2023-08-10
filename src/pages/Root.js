import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "../assets/sass/utility.scss";
import Footer from "../components/Footer/Footer";

function RootPage() {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootPage;
