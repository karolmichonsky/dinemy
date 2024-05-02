import React from 'react';
import shrimps from '../Assets/shrimps.png';


const Banner = () => {
    return (
        <div className='p-8  flex flex-col lg:py-16'>
            <div className='mx-auto lg:py-8'>
                <img src={shrimps} alt="Shrimp dish" className='' />
            </div>
            <div className='text-center px-20'>
                <h1 className=' text-4xl font-bold pt-4 pb-1'>Delicious Dishes</h1>
                <h1 className=' text-4xl font-bold pt-1 pb-4'>Delivered to Your Doorstep</h1>
                <h3 className='text-lg text-gray-400  lg:px-56'>Explore our menu and experience a culinary journey like never before. From savory pastas to mouthwatering entrees, we've got your cravings covered.</h3>
                <h3 className='text-lg text-gray-400 hidden lg:block lg:px-56 '>Whether you're in the mood for a comforting bowl of homemade soup or a sizzling plate of gourmet steak, our talented chefs prepare each dish with love and precision. Plus, our efficient delivery service ensures that your favorite meals arrive hot and ready to enjoy. Join us today and elevate your dining experience!</h3>
            </div>
        </div>
    );
};

export default Banner;