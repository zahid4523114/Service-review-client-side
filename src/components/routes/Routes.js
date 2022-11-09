import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../addService/AddService";
import Blog from "../blog/Blog";
import Home from "../home/Home";
import Login from "../login/Login";
import MyReview from "../myReview/MyReview";
import PrivateRoute from "../privateRoute/PrivateRoute";
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
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
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
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReview",
        element: <MyReview></MyReview>,
      },
    ],
  },
]);
