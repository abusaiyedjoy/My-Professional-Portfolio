import Banner from '../Pages/Banner/Banner.jsx';
import NotFound from '../Pages/ErrorPage/NotFound';
import Service from '../Pages/Service/Service';
import Protfolio from '../Protfolio';
import About from './../Pages/About/About';
import Contact from './../Pages/Contact/Contact';
import Projects from './../Pages/Projects/Projects';
import {createBrowserRouter} from "react-router-dom";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Protfolio />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Banner />,
        },
        {
          path: "/home",
          element: <Banner />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "project",
          element: <Projects />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

export default Router;