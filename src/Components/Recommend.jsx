import React from 'react';
import pasta from '../Assets/pasta.png';
import padthai from '../Assets/padthai.png';
import panang from '../Assets/panang.png';

const RecommendData = [
    {
        id: 1,
        img: pasta,
        name: "Pasta",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 2,
        img: padthai,
        name: "Pad Thai",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 3,
        img: panang,
        name: "Panang",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
]

const Recommend = () => {
    return (
        <div className='p-8 bg-white lg:pb-4 lg:pt-16'>
            <h1 className='text-4xl font-bold text-center break-before-auto'>Recommendations</h1>
            <h3 className='text-lg text-center py-4 pt-2 mb-4 text-gray-400'>Every week we recommend 3 bestseller dishes</h3>
            <div className='flex justify-center items-center gap-20 flex-wrap'>
                {RecommendData.map((recommend) => (
                    <div className='py-12 px-8 shadow-lg rounded-xl bg-white max-w-[22rem] flex flex-col items-center group hover:bg-orange-500 duration-500'>
                        <img src={recommend.img} alt="" className=' w-72 min-w-40 flex mx-auto ease-in-out duration-500' />
                        <h1 className='text-4xl text-center py-2'>{recommend.name}</h1>
                        <p className='text-center text-xl py-2'>{recommend.description}</p>
                        <button className='bg-orange-500 rounded-xl shadow-lg text-white text-2xl p-2 group-hover:bg-amber-800 duration-500'>ADD TO CART</button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Recommend;