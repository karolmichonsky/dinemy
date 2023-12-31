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
        <div className=' px-72 py-16'>
            <h1 style={recommendedBackground} className='text-5xl font-bold text-center py-2'>Recommendations</h1>
            <h2 className='text-4xl text-center py-2'>Every week we recommend 3 bestsellers dishes</h2>
            <div className='flex justify-center items-center gap-32 flex-wrap'>
                <div className='py-16'>
                    <img src={pasta} alt="" className=' w-72 min-w-40' />
                </div>
                <div>
                    <img src={pasta} alt="" className=' w-72 min-w-40' />
                </div>
                <div>
                    <img src={pasta} alt="" className=' w-72 min-w-40' />
                </div>
            </div>

        </div>
    );
};

export default Recommend;