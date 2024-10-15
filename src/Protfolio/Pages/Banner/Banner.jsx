import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoHandLeftSharp } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";

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
        <section className="w-full flex justify-between items-start gap-8">
            <div
                className="cursor-pointer group overflow-hidden p-8 duration-1000 hover:duration-1000 relative w-full h-full sm:w-[350px] py-8 bg-neutral-800 rounded-xl"
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
                <div className="flex justify-center mb-4">
                    <img
                        className="w-32 h-32 rounded-2xl border-4 border-white"
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                    />
                </div>
                <div
                    className="w-full h-full p-3 flex-col gap-2 flex justify-center"
                >
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-white">Abu Saiyed Joy</h2>
                        <p className="text-white">Web Developer</p>
                    </div>
                    <div className="mt-4 text-center text-white">
                        <h3 className="text-lg font-semibold">Connect with me:</h3>
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
                </div>
                <button
                    className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group flex justify-center mx-auto mt-4 transition-all duration-300 overflow-visible p-2 rounded-full"
                >
                    <div
                        className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300"
                    >
                        <div
                            className="w-full h-full text-2xl justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center font-bold inline-flex px-8 py-2 rounded-full group-hover:text-[#d39e4f]"
                        >
                            <span className="">Download CV</span>
                        </div>
                    </div>
                </button>
            </div>
            <div className="space-y-8 w-[calc(100%-350px)]">
                <div className="w-full mx-auto bg-neutral-800 p-6 rounded-xl space-y-4 shadow text-start">
                    <h1 className="flex justify-start gap-1 text-lg font-medium text-white items-center">Hey <IoHandLeftSharp className=" animate-hiWiggle text-[#f79c13]" /> I am <span className="text-[#f79c13]">Abu Saiyed</span></h1>
                    <h5 className="mb-2 text-4xl max-w-2xl font-bold tracking-tight text-white">
                        I'm a web developer based on React JS!
                    </h5>
                    <p className="mb-3 font-medium text-lg text-gray-400 flex justify-start items-center gap-1">
                        <RiVerifiedBadgeFill className="text-green-500 " /> Available for Freelancing.
                    </p>

                </div>
                <div className="w-full mx-auto bg-neutral-800 p-6 rounded-xl space-y-4 shadow text-start">
                    <h1 className="flex justify-start gap-1 text-lg font-medium text-white items-center">Hey <IoHandLeftSharp className=" animate-hiWiggle text-[#f79c13]" /> I am <span className="text-[#f79c13]">Abu Saiyed</span></h1>
                    <h5 className="mb-2 text-4xl max-w-2xl font-bold tracking-tight text-white">
                        I'm a web developer based on React JS!
                    </h5>
                    <p className="mb-3 font-medium text-lg text-gray-400 flex justify-start items-center gap-1">
                        <RiVerifiedBadgeFill className="text-green-500 " /> Available for Freelancing.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Banner;