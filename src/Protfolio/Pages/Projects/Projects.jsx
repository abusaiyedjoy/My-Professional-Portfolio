/* eslint-disable react/no-unescaped-entities */
import { VscGithubAlt } from "react-icons/vsc";
import image from "./../../../assets/ProjectsImage/Projects1.jpeg";
import image2 from "./../../../assets/ProjectsImage/Projects2.jpeg";
import { SiLivewire } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Projects = () => {
    return (
        <section id="project" className="px-4 overflow-hidden">
            <div>
                <h2 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500" className={`text-white roboto font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] text-center`}>
                    My Projects
                </h2>
            </div>
            {/* Projects 1 */}
            <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col items-center justify-center lg:flex-row w-full my-12">
                <div className="relative w-full h-[350px] sm:w-[350px] sm:h-[400px] md:h-[500px] md:w-[500px]">
                    <div
                        className="bg-black  mx-auto lg:h-full w-full h-full  rounded-xl ease-in-out duration-[6000ms] bg-cover bg-top hover:bg-bottom"
                        style={{
                            backgroundImage:
                                `url("${image}")`
                        }}
                    ></div>
                    <span className="group absolute bottom-0 left-[50%] cursor-pointer">
                        <a href="https://flavor-fleet.web.app/" target="_blank" className="tooltip tooltip-bottom absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full text-white bg-gradient-to-tr from-primary  to-secondary duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#1e1e1e]">
                            <SiLivewire />
                        </a>
                        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-primary/80 to-secondary/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
                        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-primary/50 to-secondary/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
                    </span>
                </div>
                <div className="w-[80vw] md:w-[550px] space-y-12 rounded-br-lg rounded-tr-lg p-10 text-center  bg-secondary  shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                    <div className="text-white text-center mt-4 space-y-4">
                        <h1 className="text-4xl font-medium sofadi text-main">Flavor Fleet</h1>
                        <h4 className="text-xl sofia font-medium lg:w-[500px] w-[250px]  mx-auto sm:w-[300px] md:w-[400px] text-gray-200 text-center pr-3 sm:pr-0">"**Flavor Fleet** is a MERN stack website dedicated to selling healthy food. It offers a wide range of nutritious options, making it easy for customers to choose and purchase meals that align with a healthy lifestyle."</h4>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2  justify-center py-1">
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
                                            href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-abusaiyedjoy"
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

            {/* Projects 2 */}
            <div data-aos="fade-left" data-aos-duration="1000" className="flex flex-col items-center justify-center lg:flex-row-reverse w-full my-12">
                <div className="relative w-full h-[350px] sm:w-[350px] sm:h-[400px] md:h-[500px] md:w-[500px]">
                    <div
                        className="bg-black  mx-auto w-full h-full  rounded-xl ease-in-out duration-[6000ms] bg-cover bg-top hover:bg-bottom"
                        style={{
                            backgroundImage:
                                `url("${image2}")`
                        }}
                    ></div>
                    <span className="group absolute bottom-0 left-[50%] cursor-pointer">
                        <a href="https://mern-stack-project-f5505.web.app/" target="_blank" className="tooltip tooltip-bottom absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full text-white bg-gradient-to-tr from-primary  to-secondary duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#1e1e1e]">
                            <SiLivewire />
                        </a>
                        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-primary/80 to-secondary/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
                        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-primary/50 to-secondary/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
                    </span>
                </div>
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
        </section>
    )
};

export default Projects;