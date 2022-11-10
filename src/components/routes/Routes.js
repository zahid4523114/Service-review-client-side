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
import UpdateReview from "../updateReview/UpdateReview";

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
        loader: async () =>
          fetch(`https://b6-assignment-11-server.vercel.app/photographs`),
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        loader: async ({ params }) =>
          fetch(
            `https://b6-assignment-11-server.vercel.app/photographs/${params.id}`
          ),
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
      {
        path: "/updateReview",
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/review/:id",
        loader: async ({ params }) =>
          fetch(
            `https://b6-assignment-11-server.vercel.app/reviews/${params.id}`
          ),
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/*",
        element: (
          <div className="mx-auto">
            <h1 className="text-danger text-center">
              Enter a correct route please..!
            </h1>
          </div>
        ),
      },
    ],
  },
]);
