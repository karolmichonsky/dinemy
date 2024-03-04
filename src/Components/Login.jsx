import React from 'react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import data from '../database/account.js'

const Login = ({ closeLogin, userLogged}) => {

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const [register, setRegister] = useState(false);
    const [confirmText, setConfirmText] = useState('Login');
    const [registerText, setRegisterText] = useState("Don't have an account? Create one");

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const [loginText, setLoginText] = useState('');

    const mailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$");
    const passwordRegex = new RegExp("^(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$");

    const loginHandle = (event) => {
        setLoginValue(event.target.value);
    };

    const passwordHandle = (event) => {
        setPasswordValue(event.target.value);
    };

    const confirmPasswordHandle = (event) => {
        setConfirmPasswordValue(event.target.value);
    };

    const checkAccount = () => {
        if (!register) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].email === loginValue && data[i].password === passwordValue) {
                    userLogged();
                    break;
                }
                else {
                    setLoginText("Incorrect email or password. Please try again.");
                }
            }

        }
        else {
            if (passwordValue === confirmPasswordValue) {
                if (mailRegex.test(loginValue)) {
                    if (passwordRegex.test(passwordValue)) {
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].email === loginValue) {
                                setLoginText("There is already an account signed to this e-mail.");
                                break;
                            }
                            else {
                                setLoginText("Account creation is currently disabled. This website is for portfolio display only.")
                            }
                        }
                    }
                    else {
                        if (passwordValue.length < 8) {
                            setLoginText("Password must be at least 8 characters long.");
                        }
                        else if (!/[A-Z]/.test(passwordValue)) {
                            setLoginText("Password must contain at least 1 uppercase letter.");
                        }
                        else if (!/\d/.test(passwordValue)) {
                            setLoginText("Password must contain at least 1 number.");
                        }
                    }
                }
                else {
                    setLoginText("Email must be in the correct format (example@example.com)");
                }
            }
            else {
                setLoginText("Passwords doesn't match.");
            }
        }

    }

    const toggleRegister = () => {
        setLoginText(" ");

        if (register) {
            setConfirmText('Login');
            setRegisterText("Don't have an account? Create one");
        }
        else {
            setConfirmText('Sign Up');
            setRegisterText("You already have an account? Login");
        }
        setRegister(register => !register);

    };

    return (
        <div className={'z-[1] bg-white pt-0 min-w-full min-h-screen lg:bg-opacity-80 lg:bg-black drop-shadow-md flex justify-center items-center absolute lg:top-0 duration-300'} onClick={closeLogin} >
            <div className='flex flex-col justify-center mx-auto ' onClick={stopPropagation}>
                <div className='flex flex-col justify-center items-center mx-auto lg:bg-white lg:h-[400px] lg:w-[450px] lg:rounded-lg'>
                    <h1 className=' text-4xl text-center font-bold lg:pb-4 drop-shadow-lg'>{confirmText}</h1>
                    <div className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-72 h-10 my-2'>
                        <EnvelopeIcon className='w-8' />
                        <input type="email" name="" id="" placeholder='E-Mail' onChange={loginHandle} className='bg-orange-500 w-full px-3 focus:outline-none text-white placeholder:text-gray-300 ' />
                    </div>

                    <div className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-72 h-10 my-2'>
                        <LockClosedIcon className='w-8 ' />
                        <input type="password" name="" id="" placeholder='Password' onChange={passwordHandle} className='bg-orange-500 w-full px-3 focus:outline-none text-white placeholder:text-gray-300 ' />
                    </div>
                    {register && <div className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-72 h-10 my-2 '>
                        <LockClosedIcon className=' w-8' />
                        <input type="password" name="" id="" placeholder='Confirm Password' onChange={confirmPasswordHandle} className='bg-orange-500 w-full px-3 focus:outline-none text-white placeholder:text-gray-300 ' />
                    </div>}
                    <p className='cursor-pointer pt-2 underline' onClick={toggleRegister}>{registerText}</p>
                    <button onClick={checkAccount} className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-18 h-10 my-2 text-white items-center text-2xl mx-2 w-28 justify-center hover:bg-amber-800 duration-500'>{confirmText}</button>
                    <p className=' text-red-600 px-12 text-center'>{loginText}</p>
                </div>

            </div>
        </div>
    );
};

export default Login;