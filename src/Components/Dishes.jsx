import React from 'react';
import data from '../database/data.js'
import { PlusIcon } from '@heroicons/react/24/outline'
import { cartStorage } from '../database/cartStorage.js'

const Dishes = () => {

    return (
        <div className=' flex flex-col flex-wrap justify-center items-center'>
            <div className=' flex flex-row flex-wrap mx-8 justify-center pt-20'>
                {data.map((dishes) => (
                    <div className=' bg-white p-8  drop-shadow-lg rounded-xl m-4 flex hover:bg-gray-100 max-w-2xl justify-center flex-wrap flex-col items-center sm:flex-row group'>
                        <div className='pr-4 w-3/4'>
                            <h1 className=' text-md font-bold py-1'>{dishes.title}</h1>
                            <p className='py-1'>{dishes.description}</p>
                            <p className=' py-1'>{dishes.choice}</p>
                            <h1 className=' font-bold'>{dishes.price}$</h1>
                        </div>
                        <div className='  flex md:flex-col'>
                            <div className=' flex justify-end items-center' >
                                < PlusIcon className="w-8 h-8 cursor-pointer rounded-full bg-slate-100 p-1 m-1 group-hover:bg-slate-200" onClick={()=>cartStorage.setItem(dishes)} />
                            </div>
                            <img src={dishes.img} alt="" className=' max-w-32 h-auto drop-shadow-xl' />
                            
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Dishes;