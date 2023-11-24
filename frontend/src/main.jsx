import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import DetailsBuildings from './pages/Details';
import ErrorPage from "./pages/ErrorPage";
import Home from './pages/Home';
import './index.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/details/:buildingId",
        element: <DetailsBuildings />,
    },
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
