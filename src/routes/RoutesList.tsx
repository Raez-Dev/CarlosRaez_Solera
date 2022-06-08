//  Dependencies
import React from "react";
import { useRoutes } from "react-router-dom";

//  Pages components
import { Layout } from "../pages/layout";
import { ServicesPage } from "../pages/services";

const List = () => [
{
    path: '',    
    element: <Layout />,
    name: "Home",
    children: [{
        path: '',
        element: <ServicesPage type="All" />,
        name: "All"
    },{
        path: 'cars',
        element: <ServicesPage type="Cars" />,
        name: "Cars"
    },{
        path: 'health',
        element: <ServicesPage type="Health" />,
        name: "Health"
    },{
        path: 'home',
        element: <ServicesPage type="Home" />,
        name: "Home"
    }]
}];

const RoutesList = () => {
    let element = useRoutes(List());
    return element;
}

export default RoutesList;