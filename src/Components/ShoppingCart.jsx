import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import cart from '../Assets/cart.png';


const ShoppingCart = ({ closeCart }) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <div className={'z-[1] bg-white pt-0 min-w-full min-h-screen lg:bg-opacity-80 lg:bg-black drop-shadow-md flex justify-center lg:justify-end items-center absolute lg:top-0'} onClick={closeCart} >
            <div className='flex flex-col p-2 lg:bg-white' onClick={stopPropagation} >
                <XMarkIcon className=' w-12 text-orange-500 cursor-pointer' onClick={closeCart}/>
                <div className='flex flex-col justify-center items-center mx-auto  lg:h-screen lg:w-[450px] lg:rounded-lg p-8' >
                    <img src={cart} alt="" />
                    <h1 className='text-2xl font-bold'>Your cart is empty</h1>
                    <p className='text-xl text-center'>Please browse our menu to add items to your cart</p>
                    <button className='bg-orange-500 rounded-xl shadow-lg text-white text-2xl p-2 group-hover:bg-amber-800 duration-500 my-2' onClick={closeCart}>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;