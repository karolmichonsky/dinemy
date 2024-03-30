import React from 'react';
import Play from '../Assets/play.png';
import Appphoto from '../Assets/appphoto.png';
import AppStore from '../Assets/appstore.png';

const Store = () => {
    return (
        <div className=' bg-slate-200 p-4 flex gap-9 items-center flex-wrap justify-center text-center'>
            <div className='flex flex-col justify-center items-center [&>*]:my-2'>
                <h1 className=' text-4xl font-bold mx-3'>You can get <span className=' text-amber-800'>Dinemy</span> for Android and IOS</h1>
                <img src={Play} alt="" className=' max-h-20'/>
                <img src={AppStore} alt="" className=' max-h-20'/>
            </div>
            <div className='pl-7 hidden sm:block'>
                <img src={Appphoto} alt="" className=' max-h-92'/>
            </div>
        </div>
    );
};

export default Store;