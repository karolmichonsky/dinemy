import React from 'react';
import data from '../database/data.js'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

const Dishes = () => {
    const [myCategory, setMyCategory] = useState('');

    const Cuisines = ['Pizza', 'Burgers', 'Chinese', 'Indian', 'Sushi', 'Italian', 'Polish'];

    const handleClick = (event) => {
        setMyCategory(event.target.innerText);
    };

    return (
        <div className=' flex flex-col flex-wrap'>
            <div className=' pt-20 bg-white drop-shadow-md'>
                <div className='p-4 flex items-center'>
                    <MagnifyingGlassIcon className=' w-9 rounded-2xl bg-slate-400 p-2 drop-shadow-lg mx-2' />
                    <ul className=' text-xl flex'>
                        {Cuisines.map(food => (
                            <li className='mx-2 cursor-pointer' onClick={handleClick}>{food}</li>
                        ))}
                    </ul>
                </div>
            </div>
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