import React from 'react';

const Contact = () => {
    return (
        <div className='lg:mx-32 mt-32 pb-32'>
            <div className="flex flex-wrap lg:flex-nowrap gap-x-10">
                <div className='w-full'>
                    <h2 className='text-3xl inline-block lg:text-5xl text-white mb-5 font-semibold'>Get In Touch</h2>
                    <p className='text-green-400 mb-5 font-semibold text-base'>I am interested in working with your company if you think my skill will be helpful for you. If you are looking for me, please let me know. Or you can just 'say hi' to me.</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className='w-full p-5 bg-slate-900 rounded-md space-y-5 shadow-inner'>
                    <div className="form-control">
                        <label className='text-white'>Name</label>
                        <input type="text" className='input input-success' />
                    </div>
                    <div className="form-control">
                        <label className='text-white'>Email</label>
                        <input type="email" className='input input-success' />
                    </div>
                    <div className="form-control">
                        <label className='text-white'>Message</label>
                        <textarea className='textarea textarea-success' cols="30" rows="10"></textarea>
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