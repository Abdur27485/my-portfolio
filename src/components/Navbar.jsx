import React from 'react';
import { CgMenuRight } from 'react-icons/cg'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center text-green-400 py-2 shadow-2xl'>
            <svg className='text-textColor1 w-10' id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96"><title>Logo</title><g transform="translate(-8.000000, -2.000000)"><g transform="translate(11.000000, 5.000000)"><polygon id="Shape" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon></g></g><text x="28" y="65" fill="currentColor" fontSize="50px" fontFamily="Consolas, serif">A</text></svg>
            {/* navlinks */}
            <nav>
                {/* for large devices */}
                <ul className='hidden lg:flex gap-10 items-center'>
                    <li>
                        <a className='hover:text-textColor1 transition-colors duration-100' href="#">1. Home</a>
                    </li>
                    <li>
                        <a className='hover:text-textColor1 transition-colors duration-100' href="#">2. Projects</a>
                    </li>
                    <li>
                        <a className='hover:text-textColor1 transition-colors duration-100' href="#">3. About Me</a>
                    </li>
                    <li>
                        <a className='hover:text-textColor1 transition-colors duration-100' href="#">4. Contact Me</a>
                    </li>
                    <li>
                        <a download={'MyResume'} className='inline-block rounded-sm py-1 px-5 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-100 border-green-400 border-2' href="/public/resume.pdf">Resume</a>
                    </li>
                </ul>
                {/* for mobile devices */}
                <div className='lg:hidden'>
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="">                    <CgMenuRight className='w-6 h-6'></CgMenuRight></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                            <ul className="bg-slate-800 p-10 space-y-5 lg:w-80 h-full">
                                {/* Sidebar content here */}
                                <li>
                                    <a className='hover:text-textColor1 transition-colors duration-100' href="#">1. Home</a>
                                </li>
                                <li>
                                    <a className='hover:text-textColor1 transition-colors duration-100' href="#">2. Projects</a>
                                </li>
                                <li>
                                    <a className='hover:text-textColor1 transition-colors duration-100' href="#">3. About Me</a>
                                </li>
                                <li>
                                    <a className='hover:text-textColor1 transition-colors duration-100' href="#">4. Contact Me</a>
                                </li>
                                <li>
                                    <a download={"MyResume"} className='inline-block rounded-sm py-1 px-5 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-100 border-green-400 border-2' href="/public/resume.pdf">Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;