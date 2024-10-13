import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Protfolio = () => {
    return (
        <div className="bg-[#212121]">
            <div className=" h-[64px]">
                <Navbar></Navbar>
            </div>
            <div className="flex justify-center items-center min-h-[calc(100vh-192px)]">
                <Outlet></Outlet>
            </div>
            <div className=" h-[128px]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Protfolio;