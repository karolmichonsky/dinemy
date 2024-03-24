import React from 'react';
import { useState, useEffect } from 'react';
import { XMarkIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';
import { cartStorage } from '../database/cartStorage';


const ShoppingCart = ({ closeCart }) => {

    const [cartStatus, setCartStatus] = useState(true);
    useEffect(() => {
        setCartStatus(!cartStorage.isEmpty());
    }, []);
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <div className={'z-[1] bg-white pt-0 min-w-full min-h-screen sm:bg-opacity-80 sm:bg-black drop-shadow-md flex justify-center sm:justify-end sm:items-center absolute overflow-auto sm:top-0'} onClick={closeCart} >
            <div className='flex flex-col p-2 sm:bg-white' onClick={stopPropagation} >
                <XMarkIcon className=' w-12 text-orange-500 cursor-pointer' onClick={closeCart} />
                {!cartStatus && <div className='flex flex-col justify-center items-center mx-auto  sm:h-screen sm:w-[450px] sm:rounded-lg p-8' >
                    <img src={cart} alt="" />
                    <h1 className='text-2xl font-bold'>Your cart is empty</h1>
                    <p className='text-xl text-center'>Please browse our menu to add items to your cart</p>
                    <Link to={'/Order'}><button className='bg-orange-500 rounded-xl shadow-lg text-white text-2xl p-2 group-hover:bg-amber-800 duration-500 my-2' onClick={closeCart}>ORDER NOW</button></Link>
                </div>}
                {cartStatus && <div className='flex flex-col  mx-auto  sm:h-screen sm:w-[450px] sm:rounded-lg p-8' >
                    {cartStorage.getCart().map((dishes) => (
                        <div className='flex flex-col justify-start items-start text-md'>
                            <h1 className='flex font-bold justify-between w-full'>{dishes.title} <span className=' font-normal'>{dishes.price * dishes.count}$</span></h1>
                            <div className='flex flex-row items-center mx-auto'>
                                <MinusIcon className='w-8 cursor-pointer rounded-full bg-slate-100 p-1 m-2' onClick={()=>cartStorage.minusDish(dishes)} />
                                <h1>{dishes.count}</h1>
                                <PlusIcon className='w-8 cursor-pointer rounded-full bg-slate-100 p-1 m-2' onClick={()=>cartStorage.plusDish(dishes)}/>
                            </div>
                            <hr className=" w-full my-4 bg-gray-300 border-1 " />
                        </div>
                    ))}
                    <div>
                        <h1 className='flex text-md justify-between w-full py-1/2'>Food cost: <span className=' font-bold'>{cartStorage.getPrice()}$</span></h1>
                        <h1 className='flex text-md justify-between w-full py-1/2'>Delivery: <span className=' font-bold'>0.00$</span></h1>
                        <h1 className='flex text-md justify-between w-full py-1'>Total cost: <span className=' font-bold'>{cartStorage.getPrice()}$</span></h1>
                    </div>
                    <div className='flex justify-center'>
                        <Link to={'/Order'}><button className='bg-orange-500 rounded-xl shadow-lg text-white text-2xl p-2 group-hover:bg-amber-800 duration-500 my-2' onClick={closeCart}>PAY {cartStorage.getPrice()}$</button></Link>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default ShoppingCart;