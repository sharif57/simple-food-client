import { Outlet } from "react-router-dom";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";

const Main = () => {
    return <div className="container mx-auto font-sans">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>;
};
export default Main;