import React from 'react';
import data from '../database/data.js'

const Dishes = () => {
    return (
        <div className=' '>
            {data.map((dishes) => (
                <div className=' bg-white p-8  drop-shadow-lg rounded-xl m-4 flex'>
                    <div className='pr-4 w-3/4'>
                        <h1 className=' text-md font-bold py-1'>{dishes.title}</h1>
                        <p className='py-1'>{dishes.description}</p>
                        <p className=' py-1'>{dishes.choice}</p>
                        <h1 className=' font-bold'>{dishes.price}$</h1>
                    </div>
                    <div className=' w-1/4'>
                        <img src={dishes.img} alt="" className='  flex items-center justify-center' />
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Dishes;