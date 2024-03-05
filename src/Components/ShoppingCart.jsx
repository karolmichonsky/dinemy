import React from 'react';



const ShoppingCart = ({ closeCart }) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <div className={'z-[1] bg-white pt-0 min-w-full min-h-screen lg:bg-opacity-80 lg:bg-black drop-shadow-md flex justify-center items-center absolute lg:top-0 duration-300'} onClick={closeCart} >
            <div className='flex flex-col justify-center mx-auto ' onClick={stopPropagation}>
                <div className='flex flex-col justify-center items-center mx-auto lg:bg-white lg:h-full lg:w-[450px] lg:rounded-lg'>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;