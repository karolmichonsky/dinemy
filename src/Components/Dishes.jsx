import React from 'react';
import data from '../database/data.js'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import { cartStorage } from '../database/cartStorage.js'

const Dishes = () => {
    const [myCategory, setMyCategory] = useState('');

    const Cuisines = ['Pizza', 'Burgers', 'Chinese', 'Indian', 'Sushi', 'Italian', 'Polish'];

    const handleClick = (event) => {
        setMyCategory(event.target.innerText);
    };

    return (
        <div className=' flex flex-col flex-wrap justify-center items-center'>
            <div className=' pt-20 bg-white '>
                <div className='p-4 flex items-center'>
                    <ul className=' text-xl flex flex-wrap items-center justify-center'>
                        {Cuisines.map(food => (
                            <li className='mx-2 px-2.5 p-1.5 cursor-pointer rounded-2xl hover:bg-gray-100' onClick={handleClick}>{food}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className=' flex flex-row flex-wrap mx-12 justify-center'>
                {data.map((dishes, index) => (
                    <div className=' bg-white p-8  drop-shadow-lg rounded-xl m-4 flex hover:bg-gray-100 max-w-2xl justify-center flex-wrap flex-col items-center sm:flex-row'>
                        <div className='pr-4 w-3/4'>
                            <h1 className=' text-md font-bold py-1'>{dishes.title}</h1>
                            <p className='py-1'>{dishes.description}</p>
                            <p className=' py-1'>{dishes.choice}</p>
                            <h1 className=' font-bold'>{dishes.price}$</h1>
                        </div>
                        <div className='  flex md:flex-col'>
                            <div className=' flex justify-end' >
                                < PlusIcon className="w-8 cursor-pointer rounded-full bg-slate-100 p-1 m-1" onClick={()=>cartStorage.setItem(dishes)} />
                            </div>
                            <img src={dishes.img} alt="" className=' max-w-32 h-auto' />
                            
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Dishes;