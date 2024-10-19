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
    <section id="project" className="pt-20 px-4 overflow-hidden">
      <div>
        <h2 data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500" className={`text-white font-black md:text-[55px] sm:text-[45px] xs:text-[35px] text-[25px] text-center`}>
          My Projects
        </h2>
      </div>
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
            <a href="https://flavor-fleet.web.app/" target="_blank" className="tooltip tooltip-bottom absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full text-white bg-gradient-to-tr from-primary  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
              <SiLivewire />
            </a>
            <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-primary/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
            <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-primary/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
          </span>
        </div>
        <div className="w-[80vw] md:w-[550px] space-y-12 rounded-br-lg rounded-tr-lg p-10 text-center  bg-[#18181B]  shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
          <div className="text-white text-center mt-4 space-y-4">
            <h1 className="text-4xl font-medium  text-main">Flavor Fleet</h1>
            <h4 className="text-xl font-medium lg:w-[500px] w-[250px]  mx-auto sm:w-[300px] md:w-[400px] text-gray-200 text-center pr-3 sm:pr-0">"**Flavor Fleet** is a MERN stack website dedicated to selling healthy food. It offers a wide range of nutritious options, making it easy for customers to choose and purchase meals that align with a healthy lifestyle."</h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2  justify-center py-1">
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                React
              </h1>
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                Tailwind
              </h1>
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                Node JS
              </h1>
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                Express JS
              </h1>
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                Axios
              </h1>
            </div>
            <div className="flex justify-center items-center ">
              <button className="rounded-full border-2 border-primary px-3 py-1 text-lg font-medium hover:underline  duration-200 hover:bg-transparent hover:text-primary">
                <a
                  href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-abusaiyedjoy"
                  className="p-2 flex gap-2 hover:text-main  duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-2xl font-semibold text-main">
                    <VscGithubAlt />
                  </span>
                  See Code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
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
            <a href="https://mern-stack-project-f5505.web.app/" target="_blank" className="tooltip tooltip-bottom absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full text-white bg-gradient-to-tr from-primary  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
              <SiLivewire />
            </a>
            <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-primary/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
            <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-primary/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
          </span>
        </div>
        <div className="w-[80vw] md:w-[550px] space-y-12 rounded-br-lg rounded-tr-lg p-10 text-center bg-[#18181B]  shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
          <div className="text-white text-center mt-4 space-y-4">
            <h1 className="text-4xl font-medium  text-main">Pet Haven BD</h1>
            <h3 className="text-2xl font-semibold ">MERN Stack Website</h3>
            <p className="text-xl font-medium lg:w-[500px] w-[250px]  mx-auto sm:w-[300px] md:w-[400px] text-gray-200 text-center pr-3 sm:pr-0">"**Pet Haven BD** is a MERN stack project focused on pet adoption, offering a platform where users can find and adopt pets. It connects pet lovers with animals in need of a home, providing a seamless experience for both adopters and pet owners."</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2  justify-center py-1">
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                React JS
              </h1>
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                Tailwind
              </h1>
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                Node JS
              </h1>
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                Express JS
              </h1>
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                Axios
              </h1>
              <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
                JWT 
              </h1>
            </div>
            <div className="flex justify-center items-center ">
              <button className="rounded-full border-2 border-primary px-3 py-1 text-lg font-medium hover:underline  duration-200 hover:bg-transparent hover:text-primary">
                <a
                  href="https://github.com/programming-hero-web-course1/b9a12-client-side-abusaiyedjoy"
                  className="p-2 flex gap-2 hover:text-main  duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-2xl font-semibold text-main">
                    <VscGithubAlt />
                  </span>
                  See Code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Projects;