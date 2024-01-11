import React from 'react';
import pasta from '../Assets/pasta.png';
import recommended from '../Assets/recommended-background.png';

const recommendedBackground = {
    backgroundImage: `url(${recommended})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%"
}

const Recommend = () => {
    return (
        <div className=' px-72 py-16 bg-white'>
            <h1 style={recommendedBackground} className='text-4xl font-bold text-center'>Recommendations</h1>
            <h3 className='text-lg text-center py-4 pt-2 mb-4 text-gray-400'>Every week we recommend 3 bestseller dishes</h3>
            <div className='flex justify-center items-center gap-20 flex-wrap'>
                <div className='py-12 px-8 shadow-lg rounded-xl bg-white max-w-[22rem] flex flex-col items-center group hover:bg-orange-500 duration-500'>
                    <img src={pasta} alt="" className=' w-72 min-w-40 flex mx-auto ease-in-out duration-500' />
                    <h1 className='text-4xl text-center py-2'>Lorem ipsum</h1>
                    <p className='text-center text-xl'>Lorem ipsum dolor sit, amet consectetur</p>
                    <button className='bg-orange-500 rounded-xl shadow-lg text-white text-2xl p-2 group-hover:bg-amber-800 duration-500'>ADD TO CART</button>
                </div>
                <div className='py-12 px-8 shadow-lg rounded-xl bg-white max-w-[22rem] flex flex-col items-center group hover:bg-orange-500 duration-500'>
                    <img src={pasta} alt="" className=' w-72 min-w-40 flex mx-auto ease-in-out duration-500' />
                    <h1 className='text-4xl text-center py-2'>Lorem ipsum</h1>
                    <p className='text-center text-xl'>Lorem ipsum dolor sit, amet consectetur</p>
                    <button className='bg-orange-500 rounded-xl shadow-lg text-white text-2xl p-2 group-hover:bg-amber-800 duration-500'>ADD TO CART</button>
                </div>
                <div className='py-12 px-8 shadow-lg rounded-xl bg-white max-w-[22rem] flex flex-col items-center group hover:bg-orange-500 duration-500'>
                    <img src={pasta} alt="" className=' w-72 min-w-40 flex mx-auto  ease-in-out duration-500' />
                    <h1 className='text-4xl text-center py-2'>Lorem ipsum</h1>
                    <p className='text-center text-xl'>Lorem ipsum dolor sit, amet consectetur</p>
                    <button className='bg-orange-500 rounded-xl shadow-lg text-white text-2xl p-2 group-hover:bg-amber-800 duration-500'>ADD TO CART</button>
                </div>
            </div>

        </div>
    );
};

export default Recommend;