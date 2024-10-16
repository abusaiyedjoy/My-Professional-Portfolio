/* eslint-disable react/no-unescaped-entities */
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
    return (
        <section className="my-3 rounded-xl">
            <div className="container px-6 py-12 mx-auto">
                <div>
                    <h1 className="mt-2 text-2xl font-semibold md:text-3xl max-w-[420px] sofia text-white">It's high time to talk about your project.</h1>
                    <p className="mt-3 max-w-lg sofadi">Let’s embark on creative journey together by shaping a visual narrative of your brand in the crowded digital space.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                        {/* Email Contact */}
                        <div className="flex justify-start items-center gap-5">
                            <span className="inline-block p-3  rounded-full bg-neutral-800 cursor-pointer">
                                <HiOutlineMail className="w-5 h-5" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="mt-4 text-base font-medium roboto text-gray-500">Email Us</h2>
                                <a href="#" className="mt-2 text-sm hover:text-primary hover:underline text-gray-200 sofia">abusaiyedjoy1@gmail.com</a>
                                <a href="#" className="mt-2 text-sm hover:text-primary hover:underline text-gray-200 sofia">arafatshabbir8@gmail.com</a>
                            </div>
                        </div>
                        {/* Phone Contact */}
                        <div className="flex justify-start items-center gap-5">
                            <span className="inline-block p-3  rounded-full bg-neutral-800 cursor-pointer">
                                <HiOutlinePhone className="w-5 h-5" />
                            </span>
                            <div className="">
                                <h2 className="mt-4 text-base font-medium roboto text-gray-500">Contact Us</h2>
                                <p className="mt-2 text-sm text-gray-200 hover:underline cursor-pointer hover:text-primary sofia">+8801823567254</p>
                                <p className="mt-2 text-sm text-gray-200 hover:underline cursor-pointer hover:text-primary sofia">+8801988084185</p>
                            </div>
                        </div>
                        {/* Office Contact */}
                        <div className="flex justify-start items-center gap-5">
                            <span className="inline-block p-3  rounded-full bg-neutral-800 cursor-pointer">
                                <HiOutlineLocationMarker className="w-5 h-5" />
                            </span>
                            <div className="">
                                <h2 className="mt-4 text-base font-medium roboto text-gray-500">Location</h2>
                                <p className="mt-2 text-sm text-gray-200 sofia">Jakir Hossain Socity</p>
                                <p className="mt-2 text-sm text-gray-200 sofia">Khulshi, Chattogram</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;