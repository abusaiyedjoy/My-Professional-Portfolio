/* eslint-disable react/no-unescaped-entities */
import { VscGithubAlt } from "react-icons/vsc";
import image from "./../../../assets/ProjectsImage/Projects1.jpeg";
import image2 from "./../../../assets/ProjectsImage/Projects2.jpeg";
import { SiLivewire } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
import { useState } from "react";
import { FiX } from "react-icons/fi";
AOS.init();

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const toggleModal2 = () => {
        setIsOpen2(!isOpen2);
    };

    return (
        <section id="project" className="px-4 w-full">
            <Helmet>
                <title>Abu Saiyed | Projects</title>
            </Helmet>
            <div>
                <h2 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500" className={`text-white roboto font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] text-center`}>
                    My Projects
                </h2>
            </div>
            <div className=" flex flex-wrap justify-center gap-4 my-3 items-center w-full">
                {/* Projects 1 */}
                <div className="">
                    <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
                        <div className="relative flex h-48 w-full justify-center lg:h-[260px] rounded-xl object-cover object-center overflow-hidden group cursor-pointer">
                            {/* Background Image */}
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                src="https://i.ibb.co.com/tzNmZvY/Project2.png"
                                alt="Background"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"></div>
                            {/* Action Button */}
                            <button
                                onClick={toggleModal2}
                                type="button"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-secondary text-white hover:text-primary py-2 px-4 rounded-lg transition-opacity duration-500 ease-in-out sofadi text-lg font-medium"
                            >
                                See Details
                            </button>
                        </div>
                        <div className="space-y-2 font-semibold">
                            <h6 className="text-lg md:text-xl lg:text-2xl text-neutral-200 roboto font-semibold">Pet Haven BD</h6>
                            <p className="text-xs font-semibold text-gray-400 md:text-sm">
                                Pet Haven is a platform where you can find the best pet care services for your pet.
                            </p>
                        </div>
                    </div>
                    {/* Modal 1 */}
                    {isOpen2 && (
                        <div
                            tabIndex="-1"
                            className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 flex overflow-hidden"
                        >
                            <div className="flex flex-col items-center justify-center lg:flex-row w-full mx-5 my-12">
                                {/* Modal Content */}
                                <div className="relative w-full h-[350px] sm:w-[350px] sm:h-[400px] md:h-[500px] md:w-[500px]">
                                    <div
                                        className="bg-black mx-auto lg:h-full w-full h-full rounded-xl ease-in-out duration-[6000ms] bg-cover bg-top hover:bg-bottom"
                                        style={{
                                            backgroundImage: `url("${image2}")`,
                                        }}
                                    >
                                        {/* Close Button */}
                                        <button
                                            onClick={toggleModal2}
                                            type="button"
                                            className="absolute top-3 right-2.5 text-gray-700 bg-transparent hover:bg-neutral-600 hover:text-neutral-200 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                                        >
                                            <FiX className="h-5 w-5" />
                                        </button>
                                    </div>

                                    {/* Action Button */}
                                    <span className="group absolute bottom-0 left-[50%] cursor-pointer">
                                        <a
                                            href="https://flavor-fleet.web.app/"
                                            target="_blank"
                                            className="tooltip tooltip-bottom absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center justify-center rounded-full text-white bg-gradient-to-tr from-primary to-secondary duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#1e1e1e]"
                                        >
                                            <SiLivewire />
                                        </a>
                                    </span>
                                </div>

                                {/* Modal Details */}
                                <div className="w-[80vw] md:w-[550px] space-y-12 rounded-bl-lg rounded-tl-lg p-10 text-center bg-secondary  shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                                    <div className="text-white text-center mt-4 space-y-4">
                                        <h1 className="text-4xl font-medium  sofadi text-main">Pet Haven BD</h1>
                                        <p className="text-xl sofia font-medium lg:w-[500px] w-[250px]  mx-auto sm:w-[300px] md:w-[400px] text-gray-200 text-center pr-3 sm:pr-0">"**Pet Haven BD** is a MERN stack project focused on pet adoption, offering a platform where users can find and adopt pets. It connects pet lovers with animals in need of a home, providing a seamless experience for both adopters and pet owners."</p>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2  justify-center py-1">
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                React JS
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Tailwind
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Node JS
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Express JS
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Axios
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                JWT
                                            </h1>
                                        </div>
                                        <div className="flex justify-center items-center ">
                                            <button
                                                className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group flex justify-center mx-auto mt-1 transition-all duration-300 overflow-visible p-2 rounded-full"
                                            >
                                                <div
                                                    className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300"
                                                >
                                                    <div
                                                        className="w-full h-full text-xl px-4 justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center font-bold inline-flex rounded-full group-hover:text-primary"
                                                    >
                                                        <a
                                                            href="https://github.com/programming-hero-web-course1/b9a12-client-side-abusaiyedjoy"
                                                            className="p-2 sofadi flex gap-2 hover:text-main  duration-300"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="text-2xl font-semibold text-main">
                                                                <VscGithubAlt />
                                                            </span>
                                                            See Code
                                                        </a>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Projects 2 */}
                <div className="">
                    <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
                        <div className="relative flex h-48 w-full justify-center lg:h-[260px] rounded-xl object-cover object-center overflow-hidden group cursor-pointer">
                            {/* Background Image */}
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                src="https://i.ibb.co.com/tzNmZvY/Project2.png"
                                alt="Background"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"></div>
                            {/* Action Button */}
                            <button
                                onClick={toggleModal2}
                                type="button"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-secondary text-white hover:text-primary py-2 px-4 rounded-lg transition-opacity duration-500 ease-in-out sofadi text-lg font-medium"
                            >
                                See Details
                            </button>
                        </div>
                        <div className="space-y-2 font-semibold">
                            <h6 className="text-lg md:text-xl lg:text-2xl text-neutral-200 roboto font-semibold">Pet Haven BD</h6>
                            <p className="text-xs font-semibold text-gray-400 md:text-sm">
                                Pet Haven is a platform where you can find the best pet care services for your pet.
                            </p>
                        </div>
                    </div>
                    {/* Modal 1 */}
                    {isOpen2 && (
                        <div
                            tabIndex="-1"
                            className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 flex overflow-hidden"
                        >
                            <div className="flex flex-col items-center justify-center lg:flex-row w-full mx-5 my-12">
                                {/* Modal Content */}
                                <div className="relative w-full h-[350px] sm:w-[350px] sm:h-[400px] md:h-[500px] md:w-[500px]">
                                    <div
                                        className="bg-black mx-auto lg:h-full w-full h-full rounded-xl ease-in-out duration-[6000ms] bg-cover bg-top hover:bg-bottom"
                                        style={{
                                            backgroundImage: `url("${image2}")`,
                                        }}
                                    >
                                        {/* Close Button */}
                                        <button
                                            onClick={toggleModal2}
                                            type="button"
                                            className="absolute top-3 right-2.5 text-gray-700 bg-transparent hover:bg-neutral-600 hover:text-neutral-200 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                                        >
                                            <FiX className="h-5 w-5" />
                                        </button>
                                    </div>

                                    {/* Action Button */}
                                    <span className="group absolute bottom-0 left-[50%] cursor-pointer">
                                        <a
                                            href="https://flavor-fleet.web.app/"
                                            target="_blank"
                                            className="tooltip tooltip-bottom absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center justify-center rounded-full text-white bg-gradient-to-tr from-primary to-secondary duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#1e1e1e]"
                                        >
                                            <SiLivewire />
                                        </a>
                                    </span>
                                </div>

                                {/* Modal Details */}
                                <div className="w-[80vw] md:w-[550px] space-y-12 rounded-bl-lg rounded-tl-lg p-10 text-center bg-secondary  shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                                    <div className="text-white text-center mt-4 space-y-4">
                                        <h1 className="text-4xl font-medium  sofadi text-main">Pet Haven BD</h1>
                                        <p className="text-xl sofia font-medium lg:w-[500px] w-[250px]  mx-auto sm:w-[300px] md:w-[400px] text-gray-200 text-center pr-3 sm:pr-0">"**Pet Haven BD** is a MERN stack project focused on pet adoption, offering a platform where users can find and adopt pets. It connects pet lovers with animals in need of a home, providing a seamless experience for both adopters and pet owners."</p>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2  justify-center py-1">
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                React JS
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Tailwind
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Node JS
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Express JS
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Axios
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                JWT
                                            </h1>
                                        </div>
                                        <div className="flex justify-center items-center ">
                                            <button
                                                className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group flex justify-center mx-auto mt-1 transition-all duration-300 overflow-visible p-2 rounded-full"
                                            >
                                                <div
                                                    className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300"
                                                >
                                                    <div
                                                        className="w-full h-full text-xl px-4 justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center font-bold inline-flex rounded-full group-hover:text-primary"
                                                    >
                                                        <a
                                                            href="https://github.com/programming-hero-web-course1/b9a12-client-side-abusaiyedjoy"
                                                            className="p-2 sofadi flex gap-2 hover:text-main  duration-300"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="text-2xl font-semibold text-main">
                                                                <VscGithubAlt />
                                                            </span>
                                                            See Code
                                                        </a>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Projects 3 */}
                <div className="">
                    <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
                        <div className="relative flex h-48 w-full justify-center lg:h-[260px] rounded-xl object-cover object-center overflow-hidden group cursor-pointer">
                            {/* Background Image */}
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                src="https://i.ibb.co.com/thNP48w/project.png"
                                alt="Background"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"></div>
                            {/* Action Button */}
                            <button
                                onClick={toggleModal}
                                type="button"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-secondary text-white hover:text-primary py-2 px-4 rounded-lg transition-opacity duration-500 ease-in-out sofadi text-lg font-medium"
                            >
                                See Details
                            </button>
                        </div>
                        <div className="space-y-2 font-semibold">
                            <h6 className="text-lg md:text-xl lg:text-2xl text-neutral-200 roboto font-semibold">Flavor Fleet</h6>
                            <p className="text-xs font-semibold text-gray-400 md:text-sm">
                                It's a restaurant website where you can order food and get the delivery.
                            </p>
                        </div>
                    </div>
                    {/* Modal 2 */}
                    {isOpen && (
                        <div
                            tabIndex="-1"
                            className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 flex overflow-hidden"
                        >
                            <div className="flex flex-col items-center justify-center lg:flex-row w-full mx-5 my-12">
                                {/* Modal Content */}
                                <div className="relative w-full h-[350px] sm:w-[350px] sm:h-[400px] md:h-[500px] md:w-[500px]">
                                    <div
                                        className="bg-black mx-auto lg:h-full w-full h-full rounded-xl ease-in-out duration-[6000ms] bg-cover bg-top hover:bg-bottom"
                                        style={{
                                            backgroundImage: `url("${image}")`,
                                        }}
                                    >
                                        {/* Close Button */}
                                        <button
                                            onClick={toggleModal}
                                            type="button"
                                            className="absolute top-3 right-2.5 text-gray-700 bg-transparent hover:bg-neutral-600 hover:text-neutral-200 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                                        >
                                            <FiX className="h-5 w-5" />
                                        </button>
                                    </div>

                                    {/* Action Button */}
                                    <span className="group absolute bottom-0 left-[50%] cursor-pointer">
                                        <a
                                            href="https://flavor-fleet.web.app/"
                                            target="_blank"
                                            className="tooltip tooltip-bottom absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center justify-center rounded-full text-white bg-gradient-to-tr from-primary to-secondary duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#1e1e1e]"
                                        >
                                            <SiLivewire />
                                        </a>
                                    </span>
                                </div>

                                {/* Modal Details */}
                                <div className="w-[80vw] md:w-[550px] space-y-12 rounded-br-lg rounded-tr-lg p-10 text-center bg-secondary shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                                    <div className="text-white text-center mt-4 space-y-4">
                                        <h1 className="text-4xl font-medium sofadi text-main">Flavor Fleet</h1>
                                        <h4 className="text-xl sofia font-medium lg:w-[500px] w-[250px] mx-auto sm:w-[300px] md:w-[400px] text-gray-200 text-center pr-3 sm:pr-0">
                                            "**Flavor Fleet** is a MERN stack website dedicated to selling healthy food. It offers a wide range of nutritious options, making it easy for customers to choose and purchase meals that align with a healthy lifestyle."
                                        </h4>

                                        {/* Tech Stack */}
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 justify-center py-1">
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                React
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Tailwind
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Node JS
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Express JS
                                            </h1>
                                            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl sofadi">
                                                Axios
                                            </h1>
                                        </div>

                                        {/* See Code Button */}
                                        <div className="flex justify-center items-center">
                                            <button className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group flex justify-center mx-auto mt-1 transition-all duration-300 overflow-visible p-2 rounded-full">
                                                <div className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300">
                                                    <div className="w-full h-full text-xl px-4 justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center font-bold inline-flex rounded-full group-hover:text-primary">
                                                        <a
                                                            href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-abusaiyedjoy"
                                                            className="p-2 sofadi flex gap-2 hover:text-main duration-300"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="text-2xl font-semibold text-main">
                                                                <VscGithubAlt />
                                                            </span>
                                                            See Code
                                                        </a>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
};

export default Projects;