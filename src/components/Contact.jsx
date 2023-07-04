import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7roprbt', 'template_2ttcg1j', form.current, 'PEJVawtqkH5FhecuB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='lg:mx-32 mt-32 pb-32'>
            <div className="flex flex-wrap lg:flex-nowrap gap-x-10">
                <div className='w-full'>
                    <h2 className='text-3xl inline-block lg:text-5xl text-white mb-5 font-semibold'>Get In Touch</h2>
                    <p className='text-green-400 mb-2 font-semibold text-base'>
                        <span className='font-bold'>Email - </span>
                        abdurrahman27485@gmail.com
                        <span className='text-white'> ( Recommended )</span>
                    </p>
                    <p className='text-green-400 mb-2 font-semibold text-base'>
                        <span className='font-bold'>Phone - </span>
                        +880 01728913008
                        <span className='text-white'> ( Not always available )</span>
                    </p>
                    <p className='text-green-400 mb-10 font-semibold text-base'>
                        <span className='font-bold'>Facebook - </span>
                        fb.com/AR27485
                        <span className='text-white'> ( Slow response )</span>
                    </p>
                </div>
                <form ref={form} onSubmit={sendEmail} className='w-full p-5 bg-slate-900 rounded-md space-y-5 shadow-inner'>
                    <h2 className='text-white text-center font-semibold text-xl lg:text-2xl'>Direct Message</h2>
                    <div className="form-control">
                        <label className='text-white mb-2'>Name</label>
                        <input type="text" name='name' className='input input-success border-none' />
                    </div>
                    <div className="form-control">
                        <label className='text-white mb-2'>Email</label>
                        <input type="email" name='email' className='input input-success border-none' />
                    </div>
                    <div className="form-control">
                        <label className='text-white mb-2'>Message</label>
                        <textarea name='message' className='textarea textarea-success border-none' rows="5"></textarea>
                    </div>
                    <button type='submit' className="relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span class="w-48 h-48 rounded rotate-[-40deg] bg-green-400 glass absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Send Message</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;