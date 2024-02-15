import React from 'react';
import padthai from '../Assets/padthai.png'

const Dishes = () => {
    return (
        <div className=' bg-white p-8 border-solid border-2 rounded-xl m-2 flex'>
            <div className='pr-4'>
                <h1 className=' text-md font-bold py-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                <p className='py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum, ullam facilis quae repellat pariatur qui dicta, accusantium ex, </p>
                <p className=' py-1'>Chicken, tofu, beef</p>
                <h1 className=' font-bold'>12.50$</h1>
            </div>
            <img src={padthai} alt="padthai" className=' w-1/4 h-1/4'/>
        </div>
    );
};

export default Dishes;