import React from 'react';
import Recommend from '../Components/Recommend';
import Banner from '../Components/Banner';
import Store from '../Components/Store';
import Home from '../Components/Home';

const Main = () => {
    return (
        <div>
            <Home />
            <Recommend />
            <Banner />
            <Store />
        </div>
    );
};

export default Main;