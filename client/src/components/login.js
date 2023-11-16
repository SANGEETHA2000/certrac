import appLogo from '../assets/logo.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userEmail', email);
        console.log('Email stored:', email);
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-row h-full w-full">
            <div className="basis-4/6 bg-teal-600 flex flex-col items-center justify-center gap-8">
                <img src={appLogo} alt="SSL Monitor Logo" className='w-28 h-32 rounded-lg'/>
                <p className="text-white text-5xl text-center"> Monitor the expiry of all your SSL domain certificates
                <br />
                and
                <br />
                get notified!
                </p>
            </div>
            <div className="basis-2/6 flex flex-col items-center justify-center pl-10 pr-28 gap-6">
                <span className='text-2xl text-teal-900 font-semibold w-full'>Login to SSL Certificate Monitor</span>
                <div className='w-full'>
                    <form
                        id="email-form"
                        className="flex flex-row justify-between border-2 rounded border-teal-500 border-solid focus-within:border-teal-600">
                        <input
                            type="email" id="email" name="email"
                            placeholder="Enter your email address"
                            className='outline-0 w-10/12 p-2'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit" id="submit"
                            className='w-2/12 bg-teal-500 flex items-center justify-center text-white hover:bg-teal-600'
                            onClick={handleEmailSubmit}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>              
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;