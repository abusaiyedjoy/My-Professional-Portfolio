/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setLoading(true);
        alert('Message sent successfully!');
        reset();
    };
    return (
        <section className="my-3 w-full">
            <div data-aos="fade-down" data-aos-duration="2000">
                <h1 className="mt-2 text-2xl font-semibold md:text-3xl max-w-[420px] sofia text-[#f3f0dc]">It's high time to talk about your project.</h1>
                <p className="mt-3 max-w-lg sofadi">Let’s embark on creative journey together by shaping a visual narrative of your brand in the crowded digital space.</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-5 w-full">
                <div data-aos="fade-right" data-aos-duration="2000" className="w-full lg:w-[35%] px-6 py-4 border-b-2 rounded-b-2xl lg:border-r-2 border-secondary lg:rounded-r-2xl">

                    <div className="flex-wrap gap-8 mt-6">
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
                                <div className="w-full">
                                    <h2 className="mt-4 text-base font-medium roboto text-gray-500">Location</h2>
                                    <p className="mt-2 text-sm text-gray-200 sofia min-w-36">Jakir Hossain Socity</p>
                                    <p className="mt-2 text-sm text-gray-200 sofia">Khulshi,Chattogram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form data-aos="zoom-in" data-aos-duration="2000" onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full lg:w-[60%] bg-neutral-900 p-8 rounded-xl">
                    {/* Name Field */}
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name*"
                            className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm bg-secondary text-gray-100  sm:text-sm focus:outline-none"
                            {...register('name', { required: 'Name is required', maxLength: 50 })}
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <input
                            type="email"
                            placeholder="Your Email*"
                            className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm bg-secondary text-gray-100  focus:outline-none sm:text-sm"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                        )}
                    </div>

                    {/* Subject Field */}
                    <div>
                        <input
                            type="text"
                            placeholder="Your Subject*"
                            className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm bg-secondary text-gray-100  focus:outline-none sm:text-sm"
                            {...register('subject', { required: 'Subject is required', maxLength: 50 })}
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>
                        <textarea

                            placeholder="Your Message*"
                            className="mt-1 block w-full h-28
                            
                            px-3 py-2 rounded-md shadow-sm bg-secondary text-gray-200  focus:outline-none sm:text-sm"
                            {...register('message', { required: 'Message is required', minLength: 20 })}
                        ></textarea>
                        {errors.message && (
                            <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group inline-flex transition-all duration-300 overflow-visible p-2 rounded-full w-full"
                        >
                            <div
                                className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300"
                            >
                                <div
                                    className="w-full h-full text-lg justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center py-1 font-medium inline-flex rounded-full group-hover:text-primary"
                                >
                                    <BsFillAirplaneEnginesFill className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150" />

                                    <span className="duration-500 text-xl">{loading ? "Sending..." : "Send Message"}</span>
                                </div>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;