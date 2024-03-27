import React from 'react';
import fries from '../Assets/fries.png';
import hero from '../Assets/hero-background.png';
import { Link } from 'react-router-dom';
import Button1 from './Button1';

const heroImg = {
    backgroundImage: `url(${hero})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%"
}

const Home = () => {
    return (
        <div style={heroImg} className=' h-[800px]  flex flex-col justify-center items-center font-sans lg:flex-row lg:justify-around'>
            <div className=' p-7 text-center max-w-[400px] pt-20'>
                <h1 className='text-5xl font-bold'>Order your favorite food with <span className=' text-amber-800'>Dinemy</span>. </h1>
                <h3 className='text-4xl'>Best dishes in <span className='font-bold'>one</span> place</h3>
                <Link to={'/Order'}><Button1 text="ORDER NOW"></Button1></Link>
            </div>
            <div className='p-7 pb-0'>
                <img src={fries} alt="" className=' drop-shadow-2xl'/>
            </div>
        </div>
    );
};

export default Home;