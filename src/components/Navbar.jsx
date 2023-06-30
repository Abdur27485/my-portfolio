import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center text-green-400 py-2 shadow-2xl'>
            <svg className='text-textColor1 w-10' id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96"><title>Logo</title><g transform="translate(-8.000000, -2.000000)"><g transform="translate(11.000000, 5.000000)"><polygon id="Shape" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon></g></g><text x="28" y="65" fill="currentColor" font-size="50px" font-family="Consolas, serif">A</text></svg>
            {/* navlinks */}
            <nav>
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
                        <a className='inline-block rounded-sm py-1 px-5 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-100 border-green-400 border-2' href="#">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;