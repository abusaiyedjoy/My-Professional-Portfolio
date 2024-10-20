import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoHandLeftSharp } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { technologies } from "./banner";
import title from "./../../../assets/Title.png"
import resume from "./../../../assets/Abu Saiyed Joy Protfolio.pdf"

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
    // Socila Links
    const svgArr = [
        { svg: <FaFacebook />, bgColor: 'bg-blue-600', link: 'https://www.facebook.com/profile.php?id=61556814347641' },
        { svg: <FaGithub />, bgColor: 'bg-gray-800', link: 'https://github.com/abusaiyedjoy' },
        { svg: <FaLinkedinIn />, bgColor: 'bg-blue-700', link: 'https://www.linkedin.com/in/abu-saiyed-joy' },
        { svg: <FaInstagram />, bgColor: 'bg-pink-500', link: 'https://www.instagram.com/abu_saiyed_joy/' },
    ];
    return (
        <section className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
            <div data-aos="fade-right" data-aos-duration="2000"
                className="cursor-pointer group overflow-hidden p-8 duration-1000 hover:duration-1000 relative w-full h-full sm:w-[350px] mx-auto py-8 bg-neutral-800 rounded-xl"
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
                        className="w-56 h-56"
                        src="https://i.ibb.co.com/fHMDdq7/Whats-App-Image-2024-08-25-at-15-28-48-dae0f1e5-removebg-preview.png"
                        alt="Profile"
                    />
                </div>
                <div
                    className="w-full h-full p-3 flex-col bg-neutral-700 rounded-2xl gap-2 flex justify-center roboto"
                >
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-white">Abu Saiyed Joy</h2>
                        <p className="sofia text-white">Web Developer</p>
                    </div>
                    <div className="mt-1 text-center text-white">
                        {/* Social Icons */}
                        <div className="flex justify-center items-center gap-4 py-2 mt-2">
                            {svgArr?.map((icon, index) => (
                                <a
                                    key={index}
                                    href={icon.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${icon.bgColor} p-2 rounded-full shadow-lg shadow-gray-600 duration-300 hover:scale-125 cursor-pointer z-10`}
                                >
                                    {icon?.svg}
                                </a>
                            ))}
                        </div>
                    </div>
                    <button
                        className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group flex justify-center mx-auto mt-1 transition-all duration-300 overflow-visible p-2 rounded-full"
                    >
                        <div
                            className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300"
                        >
                            <a href={resume} download={resume}
                                className="w-full h-full text-2xl justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center font-bold inline-flex px-8 py-2 rounded-full group-hover:text-primary"
                            >
                                <span className="">Download CV</span>
                            </a>
                        </div>
                    </button>
                </div>
            </div>
            <div className="space-y-10 lg:w-[calc(100%-350px)]">
                <div data-aos="zoom-in" data-aos-duration="2000" className="w-full mx-auto bg-neutral-800 p-6 rounded-xl space-y-4 shadow text-start">
                    <h1 className="flex justify-start gap-1 text-lg font-medium text-white items-center">Hey <IoHandLeftSharp className=" animate-hiWiggle text-[#f79c13]" /> I am <span className="text-[#f79c13]">Abu Saiyed</span></h1>
                    <h5 className="mb-2 text-4xl max-w-2xl font-bold tracking-tight roboto text-white">
                        I'm a web developer based on React JS!
                    </h5>
                    <p className="max-w-2xl text-gray-300 sofia">Are you looking for a MERN stack web developer to build your website and grow your business?
                    Let's shake hands with me.</p>
                    <p className="mb-3 font-medium text-lg text-gray-400 flex justify-start items-center gap-1">
                        <RiVerifiedBadgeFill className="text-green-500 " /> Available for Remote working.
                    </p>

                </div>
                <div data-aos="zoom-in" data-aos-duration="2000" className="relative w-full mx-auto bg-neutral-800 p-6 rounded-xl space-y-4 shadow text-center">
                    <div className="">
                        <img className="absolute top-0" src={title} alt="" />
                        <h5 className="mb-2 text-4xl roboto font-bold  tracking-tight text-white">
                            Technology I have learned!
                        </h5>
                        <img className="absolute top-0 right-5" src={title} alt="" />
                    </div>
                    <marquee className='flex flex-row flex-wrap justify-center gap-10'>
                        {technologies.map((technology) => (
                            <div className=' inline-flex py-5' key={technology.name}>
                                <img className="mx-5 hover:scale-125 transition-all duration-300 ease-in-out cursor-pointer" height={"25px"} width={"80px"} src={technology.icon} />
                            </div>
                        ))}
                    </marquee>
                </div>
            </div>
        </section>
    );
};

export default Banner;