/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const Common = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="max-w-7xl mx-auto bg-neutral-800 p-6 rounded-xl space-y-4 shadow text-center">
            <a href="#">
                <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Let's Work <span className="text-primary">Together.</span>
                </h5>
            </a>
            <p className="mb-3 max-w-4xl mx-auto font-medium text-lg text-gray-700 dark:text-gray-200">
                Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work
            </p>
            <button
                className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group inline-flex transition-all duration-300 overflow-visible p-2 rounded-full"
            >
                <Link to={"/contact"}
                    className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300"
                >
                    <div
                        className="w-full h-full text-2xl justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center font-bold inline-flex px-8 py-2 rounded-full group-hover:text-primary"
                    >
                        <span className="">Let's  Talk</span>
                    </div>
                </Link>
            </button>

        </div>
    );
};

export default Common;