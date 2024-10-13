import Banner from '../Pages/Banner/Banner';
import Protfolio from '../Protfolio';
import {
    createBrowserRouter,
  } from "react-router-dom";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Protfolio />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Banner />,
        },
      ],
    },
  ]);

export default Router;