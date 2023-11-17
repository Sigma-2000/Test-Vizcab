import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import Details from './pages/Details.jsx';
import Home from './pages/Home.jsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/details",
        element: <Details />,
    },
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <App />
    </React.StrictMode>,
);
