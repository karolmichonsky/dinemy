import React from 'react';
import pasta from '../Assets/pasta.png';


const Banner = () => {
    return (
        <div className='px-72 py-16 flex'>
            <div>
                <img src={pasta} alt="" className=' w-5/6' />
            </div>
            <div className='text-center'>
                <h1 className=' text-3xl font-bold'>Lorem ipsum dolor sit</h1>
                <h3 className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore, error tenetur beatae possimus ducimus dolorem maiores non?</h3>
                <h3 className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure debitis tempora enim, nisi repellat blanditiis provident accusamus iusto rem labore natus ipsam eligendi numquam. Suscipit sequi temporibus delectus aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae minima tempora. Excepturi ipsam libero vero nobis quam earum. Asperiores totam sequi accusamus aspernatur molestiae, similique molestias saepe id voluptatum.</h3>
            </div>
        </div>
    );
};

export default Banner;