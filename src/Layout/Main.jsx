import { Outlet } from "react-router-dom";
import Navbar from "../Page/Navbar";

const Main = () => {
    return <div className="container mx-auto font-sans">
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>;
};
export default Main;