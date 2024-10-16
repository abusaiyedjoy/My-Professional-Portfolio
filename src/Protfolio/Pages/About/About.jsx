/* eslint-disable react/no-unescaped-entities */

import { IoHandLeftSharp } from "react-icons/io5";

const About = () => {
    return (
        <section className="flex justify-between items-center gap-8">
            <div
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
                        className=""
                        src="https://i.ibb.co.com/fHMDdq7/Whats-App-Image-2024-08-25-at-15-28-48-dae0f1e5-removebg-preview.png"
                        alt="Profile"
                    />
                </div>
            </div>
            <div className="w-full mx-auto bg-neutral-800 p-6 rounded-xl space-y-4 shadow text-start">
                <h1 className="flex justify-start gap-1 text-lg font-medium text-white items-center">Hey <IoHandLeftSharp className=" animate-hiWiggle text-[#f79c13]" /> I am <span className="text-[#f79c13]">Abu Saiyed</span></h1>
                <h5 className="mb-2 text-4xl max-w-2xl font-bold tracking-tight roboto text-white">
                    I'm a web developer based on React JS!
                </h5>
                <p className="text-gray-300 sofia">I am a passionate MERN stack developer with a keen eye for design and functionality. With experience in both front-end and back-end technologies, I build seamless, responsive, and efficient web applications.</p>

            </div>
        </section>
    );
};

export default About;