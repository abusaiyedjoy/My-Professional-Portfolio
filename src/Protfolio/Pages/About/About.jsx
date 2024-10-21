/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import { FaCode } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";


const About = () => {
    return (
        <section className="">
            <Helmet>
                <title>Abu Saiyed | About</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <div
                     data-aos="fade-right" data-aos-duration="2000"
                    className="cursor-pointer group overflow-hidden px-2 pt-2 border-b-4 border-secondary duration-1000 hover:duration-1000 relative w-full h-full sm:w-[350px] bg-neutral-800 rounded-xl"
                >
                    <div
                        className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"
                    ></div>
                    <div
                        className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"
                    ></div>
                    <div
                        className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"
                    ></div>
                    <div
                        className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"
                    ></div>
                    <div
                        className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"
                    ></div>
                    <div
                        className="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"
                    ></div>
                    <div
                        className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"
                    ></div>
                    <div className="flex justify-center">
                        <img
                            className="h-60"
                            src="https://i.ibb.co.com/fHMDdq7/Whats-App-Image-2024-08-25-at-15-28-48-dae0f1e5-removebg-preview.png"
                            alt="Profile"
                        />
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className="w-full mx-auto bg-neutral-800 p-8 rounded-xl space-y-8 shadow text-start">
                    <h1 className="flex justify-start gap-2 text-2xl font-medium text-primary items-center relative w-36">About me...! <span className="mt-2 absolute left-0 bottom-0 h-[4px] z-10 rounded-full bg-primary w-[30%]"></span></h1>
                    <div className="space-y-3 lg:space-y-5">
                        <p className="text-gray-300 sofia ">I am a passionate MERN stack developer with a keen eye for design and functionality. With experience in both front-end and back-end technologies, I build seamless, responsive, and efficient web applications.

                        </p>
                        <p className="text-gray-300 sofia">My expertise spans across building dynamic user interfaces with React, managing databases with MongoDB, and handling server-side logic with Node.js and Express.
                        </p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
                <div data-aos="zoom-in" data-aos-duration="2000" className="w-full px-6 bg-secondary rounded-2xl py-5">
                    <h1 className="text-2xl pl-4 font-semibold text-gray-300 roboto">Education</h1>
                    <div className="">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                            <div className="flex justify-start items-center gap-5">
                                <span className="inline-block p-3  rounded-full bg-neutral-800 cursor-pointer">
                                    <PiStudentBold  className="w-5 h-5" />
                                </span>
                                <div className="flex flex-col">
                                    <h2 className="mt-4 text-base font-medium roboto text-gray-200">Diploma in CST</h2>
                                    <p className="mt-2 text-sm text-gray-500 sofia">2022 - 2023</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-5">
                                <span className="inline-block p-3  rounded-full bg-neutral-800 cursor-pointer">
                                    <PiStudentBold  className="w-5 h-5" />
                                </span>
                                <div className="w-full">
                                    <h2 className="mt-4 text-base font-medium roboto text-gray-200">SSC (Secondary School Certificate)</h2>
                                    <p className="mt-2 text-sm text-gray-500 sofia">2021</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-5">
                                <span className="inline-block p-3  rounded-full bg-neutral-800 cursor-pointer">
                                    <PiStudentBold className="w-5 h-5" />
                                </span>
                                <div className="w-full">
                                    <h2 className="mt-4 text-base font-medium roboto text-gray-200">Web development</h2>
                                    <p className="mt-2 text-sm text-gray-500 sofia">2023 - 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000" className="w-full px-6 bg-secondary rounded-2xl py-5">
                    <h1 className="text-2xl pl-4 font-semibold text-gray-300 roboto">Experience</h1>
                    <div className="">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                            <div className="flex justify-start items-center gap-5">
                                <span className="inline-block p-3  rounded-full bg-neutral-800 cursor-pointer">
                                    <FaCode className="w-5 h-5" />
                                </span>
                                <div className="flex flex-col">
                                <h2 className="mt-4 text-base font-medium roboto text-gray-200">Web developer</h2>
                                <p className="mt-2 text-sm text-gray-500 sofia">2023 - present</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-5">
                                <span className="inline-block p-3  rounded-full bg-neutral-800 cursor-pointer">
                                    <FaCode className="w-5 h-5" />
                                </span>
                                <div className="">
                                <h2 className="mt-4 text-base font-medium roboto text-gray-200">MERN Stack developer</h2>
                                <p className="mt-2 text-sm text-gray-500 sofia">2023 - present</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-5">
                                <span className="inline-block p-3  rounded-full bg-neutral-800 cursor-pointer">
                                    <FaCode className="w-5 h-5" />
                                </span>
                                <div className="w-full">
                                <h2 className="mt-4 text-base font-medium roboto text-gray-200">Frontend developer</h2>
                                <p className="mt-2 text-sm text-gray-500 sofia">2023 - present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;