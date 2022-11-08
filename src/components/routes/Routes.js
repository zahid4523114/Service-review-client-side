import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import ServiceDetails from "../serviceDetrails/ServiceDetails";
import Services from "../services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: async () => fetch(`http://localhost:5000/photographs`),
        element: <Services></Services>,
      },
      {
        path: "/service/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/photographs/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
    ],
  },
]);
