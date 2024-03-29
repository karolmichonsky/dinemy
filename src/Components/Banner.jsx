import React from 'react';
import shrimps from '../Assets/shrimps.png';


const Banner = () => {
    return (
        <div className='p-8  flex flex-col lg:py-16'>
            <div className='mx-auto lg:py-8'>
                <img src={shrimps} alt="" className='' />
            </div>
            <div className='text-center px-20'>
                <h1 className=' text-4xl font-bold py-4'>Lorem ipsum dolor sit</h1>
                <h3 className='text-lg text-gray-400  lg:px-56'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore, error tenetur beatae possimus ducimus dolorem maiores non?</h3>
                <h3 className='text-lg text-gray-400 hidden lg:block lg:px-56 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure debitis tempora enim, nisi repellat blanditiis provident accusamus iusto rem labore natus ipsam eligendi numquam. Suscipit sequi temporibus delectus aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae minima tempora. Excepturi ipsam libero vero nobis quam earum. Asperiores totam sequi accusamus aspernatur molestiae, similique molestias saepe id voluptatum.</h3>
            </div>
        </div>
    );
};

export default Banner;