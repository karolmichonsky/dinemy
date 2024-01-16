import React from 'react';
import pasta from '../Assets/pasta.png';
import hero from '../Assets/hero-background.png';

const heroImg = {
    backgroundImage: `url(${hero})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%"
}

const Home = () => {
    return (
        <div style={heroImg} className='w-screen h-[800px] gap-[500px] flex justify-center items-center font-sans'>
            <div className=' text-center max-w-[400px]'>
                <h1 className='text-5xl font-bold'>Order your favorite food with <span className=' text-amber-800'>Dinemy</span>. </h1>
                <h3 className='text-4xl'>Best dishes in <span className='font-bold'>one</span> place</h3>
            </div>
            <div className='flex justify-center items-center'>
                <img src={pasta} alt="" className=' w-[400px] mx-auto'/>
            </div>
        </div>
    );
};

export default Home;