import Banner from '../Pages/Banner/Banner';
import NotFound from '../Pages/ErrorPage/NotFound';
import Protfolio from '../Protfolio';
import {
    createBrowserRouter,
  } from "react-router-dom";


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
      ],
    },
  ]);

export default Router;