import React from 'react';
import Play from '../Assets/play.png';
import Appphoto from '../Assets/appphoto.png';
import AppStore from '../Assets/appstore.png';

const Store = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E2E8F0" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,170.7C672,192,768,224,864,213.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className=' bg-slate-200 flex gap-9 items-center flex-wrap justify-center text-center pb-6 sm:pb-12 md:pb-20'>
                <div className='flex flex-col justify-center items-center [&>*]:my-2 sm:w-1/4'>
                    <h1 className=' text-4xl font-bold mx-3'>You can get <span className=' text-amber-800'>Dinemy</span> for Android and IOS</h1>
                    <img src={Play} alt="" className=' max-h-20' />
                    <img src={AppStore} alt="" className=' max-h-20' />
                </div>
                <div className='pl-7 hidden sm:block'>
                    <img src={Appphoto} alt="" className=' max-h-92' />
                </div>
            </div>
        </div>

    );
};

export default Store;