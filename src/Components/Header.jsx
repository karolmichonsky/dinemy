import React from 'react';
import Link from 'react-scroll';

const Header = () => {
    return (
        <div className='flex'>
            <a>DINEMY</a>
            <div>
                <Link>Home</Link>
                <Link>Menu</Link>
                <Link>Contact</Link>
                <Link>Login</Link>
            </div>
        </div>
    );
};

export default Header;