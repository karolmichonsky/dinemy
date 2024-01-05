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
        <div className=' px-72 py-16 bg-slate-100'>
            <h1 style={recommendedBackground} className='text-5xl font-bold text-center py-2'>Recommendations</h1>
            <h2 className='text-4xl text-center py-4'>Every week we recommend 3 bestsellers dishes</h2>
            <div className='flex justify-center items-center gap-20 flex-wrap'>
                <div className='py-12 px-8 shadow-lg rounded-lg bg-white max-w-80 flex flex-col items-center'>
                    <img src={pasta} alt="" className=' w-72 min-w-40 flex mx-auto' />
                    <h1 className='text-4xl text-center py-2'>Lorem ipsum</h1>
                    <p className='text-center text-xl'>Lorem ipsum dolor sit, amet consectetur</p>
                    <button className='bg-orange-500 rounded-lg drop-shadow-lg text-white text-2xl p-2'>ADD TO CART</button>
                </div>
                <div className='py-12 px-8 shadow-lg rounded-lg bg-white max-w-80 flex flex-col items-center'>
                    <img src={pasta} alt="" className=' w-72 min-w-40 flex mx-auto' />
                    <h1 className='text-4xl text-center py-2'>Lorem ipsum</h1>
                    <p className='text-center text-xl'>Lorem ipsum dolor sit, amet consectetur</p>
                    <button className='bg-orange-500 rounded-lg drop-shadow-lg text-white text-2xl p-2'>ADD TO CART</button>
                </div>
                <div className='py-12 px-8 shadow-lg rounded-lg bg-white max-w-80 flex flex-col items-center'>
                    <img src={pasta} alt="" className=' w-72 min-w-40 flex mx-auto' />
                    <h1 className='text-4xl text-center py-2'>Lorem ipsum</h1>
                    <p className='text-center text-xl'>Lorem ipsum dolor sit, amet consectetur</p>
                    <button className='bg-orange-500 rounded-lg drop-shadow-lg text-white text-2xl p-2'>ADD TO CART</button>
                </div>
            </div>

        </div>
    );
};

export default Recommend;