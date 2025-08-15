import { createBrowserRouter } from "react-router-dom";
import Home from './../pages/Home';
import Root from "../Root/Root";
import AllPlants from './../pages/AllPlants';
import AddPlant from './../pages/AddPlant';
import MyPlants from './../pages/MyPlants';
import Login from './../pages/Login';
import Register from './../pages/Register';

import UpdatePlant from './../pages/UpdatePlant';
import PlantDetails from './../pages/PlantDetails';
import NotFound from './../pages/NotFound';
import PrivateRoute from './../Provider/PrivateRoute';
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs ";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/allPlants",
                element: <AllPlants />,
            },
            {
                path: "/add-plant",
                element: (
                    <PrivateRoute>
                        <AddPlant />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-plants",
                element: (
                    <PrivateRoute>
                        <MyPlants />
                    </PrivateRoute>
                ),
            },
            {
                path: "/plant-details",
                element: <PlantDetails />,
            },

            {
                path: "/updatePlant/:id",
                element: (
                    <PrivateRoute>
                        <UpdatePlant />
                    </PrivateRoute>
                ),
            },
            {
                path: "/plants/:id",
                element: (
                    <PrivateRoute>
                        <PlantDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
        ],
    },
]);

export default router;
