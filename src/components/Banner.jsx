import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='mt-20 lg:ml-20 pb-20'>
            {/* social links */}
            <div className='text-green-400 flex items-center text-5xl gap-5 mb-10'>
                <FaFacebook className='cursor-pointer'></FaFacebook>
                <FaGithub className='cursor-pointer'></FaGithub>
            </div>
            <h1 className='text-4xl lg:text-7xl text-white font-bold mb-5'>Abdur Rahman</h1>
            <h2 className='text-4xl lg:text-7xl text-gray-400 font-bold capitalize mb-10'>i love exploring new things!</h2>
            <p className='text-slate-500 text-xl lg:text-2xl max-w-3xl text-justify mb-5'>I'm currently studying in Intermediate 1st year in Business Studies at Principal Kazi Faruky School & College. Interested to discover and learn new skills everyday.</p>
            <p className='text-slate-500 text-xl lg:text-2xl max-w-3xl text-justify mb-10'>Always try to learn new skills to become the better version of myself.</p>

            <div className='lg:space-x-5 sm:space-x-5 space-y-5'>
                <button className='py-2 px-10 border-2 text-2xl font-semibold border-green-400 rounded-md text-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-100'>Get In Touch</button>
                <button className='py-2 px-10 border-2 text-2xl font-semibold border-green-400 rounded-md text-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-100'>Resume</button>
            </div>
        </div>
    );
};

export default Banner;