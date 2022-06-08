//  Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//  RoutesList
import RoutesList from './RoutesList';

const Index = () => {    

    return (

        <BrowserRouter>
            <RoutesList />
        </BrowserRouter>
    )
}

export default Index