import React from 'react';
import data from '../database/data.js'
import { cartStorage } from '../database/cartStorage';
import Button1 from './Button1.jsx';

const Recommend = () => {

    const filteredData = data.slice(0,3);

    return (
        <div className='p-8 bg-white lg:pb-4 lg:pt-16'>
            <h1 className='text-4xl font-bold text-center break-before-auto'>Recommendations</h1>
            <h3 className='text-lg text-center py-4 pt-2 mb-4 text-gray-400'>Every week we recommend 3 bestseller dishes</h3>
            <div className='flex justify-center items-center gap-20 flex-wrap'>
                {filteredData.map((recommend) => (
                    <div className='py-12 px-8 shadow-lg rounded-xl bg-white max-w-[22rem] flex flex-col items-center group hover:bg-orange-500 duration-500 basis-full'>
                        <img src={recommend.img} alt="" className=' w-72 min-w-40 flex mx-auto ease-in-out duration-500 drop-shadow-xl' />
                        <h1 className='text-4xl font-bold text-center py-2'>{recommend.title}</h1>
                        <p className='text-center text-xl py-2 flex-1  '>{recommend.description}</p>
                        <h1 className='text-3xl font-bold text-center py-2 pb-4'>{recommend.price}$</h1>
                        <Button1 text="ADD TO CART" onClick={()=>cartStorage.setItem(recommend)} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Recommend;