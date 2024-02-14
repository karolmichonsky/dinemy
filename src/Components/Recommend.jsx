import React from 'react';
import pasta from '../Assets/pasta.png';
import padthai from '../Assets/padthai.png';
import panang from '../Assets/panang.png';

const RecommendData = [
    {
        img: padthai,
        name: "Pad Thai",
        description: "A classic Thai stir-fry dish with rice noodles, tofu, shrimp, or chicken, featuring bean sprouts, peanuts, and a tangy sauce of tamarind, fish sauce, and lime.",
        price: "17.50",
        choice: "Chicken, Shrimp, Tofu",
        rating: 4,
    },
    {
        img: panang,
        name: "Panang",
        description: "Thai dish with meat or tofu in coconut milk sauce. Balances sweet, spicy, and savory flavors with lime leaves, Thai basil, and chili peppers.",
        price: "12.99",
        choice: "Chicken, Beef, Shrimp, Tofu",
        rating: 4,
    },
    {
        img: pasta,
        name: "Red Pasta",
        description: "Traditional Italian pasta with tomato sauce, onions, garlic, ground meat, and herbs like basil and oregano, creating a savory and flavorful dish.",
        price: "13.25",
        choice: "Chicken, Vege, Whole wheat",
        rating: 3,
    },
];

const Recommend = () => {
    return (
        <div className='p-8 bg-white lg:pb-4 lg:pt-16'>
            <h1 className='text-4xl font-bold text-center break-before-auto'>Recommendations</h1>
            <h3 className='text-lg text-center py-4 pt-2 mb-4 text-gray-400'>Every week we recommend 3 bestseller dishes</h3>
            <div className='flex justify-center items-center gap-20 flex-wrap'>
                {RecommendData.map((recommend) => (
                    <div className='py-12 px-8 shadow-lg rounded-xl bg-white max-w-[22rem] flex flex-col items-center group hover:bg-orange-500 duration-500 basis-full'>
                        <img src={recommend.img} alt="" className=' w-72 min-w-40 flex mx-auto ease-in-out duration-500' />
                        <h1 className='text-4xl font-bold text-center py-2'>{recommend.name}</h1>
                        <p className='text-center text-xl py-2 flex-1  '>{recommend.description}</p>
                        <h1 className='text-3xl font-bold text-center py-2 pb-4'>{recommend.price}$</h1>
                        <button className='bg-orange-500 rounded-xl shadow-lg text-white text-2xl p-2 group-hover:bg-amber-800 duration-500'>ADD TO CART</button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Recommend;