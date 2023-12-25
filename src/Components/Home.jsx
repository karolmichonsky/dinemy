import React from 'react';
import pasta from '../Assets/pasta.png';

const Home = () => {
    return (
        <div className='w-screen h-[800px] flex mx-20 py-64 font-sans'>
            <div className=' w-1/2 text-center text-3xl py-52'>
                <h1 className=' '>Order your favorite food with Dinemy. </h1>
                <p>All restaurants in your area in one place</p>
            </div>
            <div>
                <img src={pasta} alt="" />
            </div>
        </div>
    );
};

export default Home;