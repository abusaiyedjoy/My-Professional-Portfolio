import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer";
import Common from "./Common/Common";

const Protfolio = () => {
    return (
        <div className="bg-black px-5">
            <div className=" h-[64px]">
                <Navbar></Navbar>
            </div>
            <div className=" mt-3 flex justify-center items-center min-h-[calc(100vh-192px)] max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <div className="mt-6">
                <Common></Common>
            </div>
            <div className=" h-[128px] bg-black">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Protfolio;