import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer";
import Common from "./Common/Common";

const Protfolio = () => {
    return (
        <div className="bg-black px-5 min-h-screen">
            <div className=" h-[74px]">
                <Navbar></Navbar>
            </div>
            <div className=" mt-3 flex justify-center items-center h-full max-w-7xl mx-auto">
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