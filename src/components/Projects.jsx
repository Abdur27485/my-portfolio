import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Fade, Slide } from 'react-awesome-reveal';

const Projects = () => {
    return (
        <div id='projects' className='mt-32 lg:mx-20 scroll-m-10'>
            <h2 className='text-3xl block lg:text-5xl text-white mb-16 font-semibold text-center'><span className='text-green-500'>1. </span>My Projects</h2>

            <div className='grid grid-cols-1 gap-20'>
                <Fade >
                    <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap gap-5 bg-slate-950 p-5 rounded-md glass">
                        <div>
                            <h3 className='text-lg lg:text-xl text-green-400 mb-5'>1. MERN Project - <span className='text-white'>Triolingo</span></h3>
                            <a href="https://triolingo-27485.web.app/" className='text-white'>Live</a>
                            <span className='text-green-400 mx-5'>|</span>
                            <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Abdur27485" className='text-white'>Client Code</a>
                            <span className='text-green-400 mx-5'>|</span>
                            <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-Abdur27485" className='text-white'>Server Code</a>
                            <div className='my-5 rounded-md bg-slate-900 shadow-2xl'>
                                <ol className='list-decimal text-white pl-10 p-5 space-y-5'>
                                    <li>
                                        Login & registration using Firebase authentication.
                                    </li>
                                    <li>
                                        Dashboard for every type of user to manage their account.
                                    </li>
                                    <li>
                                        User verification using JWT
                                    </li>
                                </ol>
                            </div>
                            <div className='flex flex-wrap gap-5 text-green-400'>
                                <p>React</p>
                                <p>ExpressJs</p>
                                <p>JWT</p>
                                <p>Firebase Authentication</p>
                                <p>MongoDb</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full'>
                            <div className=" max-w-full h-96  w-full overflow-hidden">
                                <div class="h-max w-full transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-384px)]">
                                    <img src="triolingo-home.png" alt="" class="w-full object-cover object-top" /></div>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap gap-5 bg-slate-950 p-5 rounded-md glass">
                        <div>
                            <h3 className='text-lg lg:text-xl text-green-400 mb-5'>1. MERN Project - <span className='text-white'>Toygo</span></h3>
                            <a href="https://toygo-27485.web.app/" className='text-white'>Live</a>
                            <span className='text-green-400 mx-5'>|</span>
                            <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Abdur27485" className='text-white'>Client Code</a>
                            <span className='text-green-400 mx-5'>|</span>
                            <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-Abdur27485" className='text-white'>Server Code</a>
                            <div className='my-5 rounded-md bg-slate-900 shadow-2xl'>
                                <ol className='list-decimal text-white pl-10 p-5 space-y-5'>
                                    <li>
                                        Login & registration using Firebase authentication.
                                    </li>
                                    <li>
                                        Add new toys to your shop
                                    </li>
                                    <li>
                                        See your added toys in My toys page
                                    </li>
                                </ol>
                            </div>
                            <div className='flex flex-wrap gap-5 text-green-400'>
                                <p>React</p>
                                <p>TailwindCSS</p>
                                <p>DaisyUI</p>
                                <p>ExpressJs</p>
                                <p>Firebase Authentication</p>
                                <p>MongoDb</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full'>
                            <div className=" max-w-full h-96  w-full overflow-hidden">
                                <div class="h-max w-full transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-384px)]">
                                    <img src="toygo-home.png" alt="" class="w-full object-cover object-top" /></div>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade >

                    <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap gap-5 bg-slate-950 p-5 rounded-md glass">
                        <div>
                            <h3 className='text-lg lg:text-xl text-green-400 mb-5'>1. MERN Project - <span className='text-white'>Food Hunt</span></h3>
                            <a href="https://food-hunt27485.netlify.app/" className='text-white'>Live</a>
                            <span className='text-green-400 mx-5'>|</span>
                            <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Abdur27485" className='text-white'>Client Code</a>
                            <span className='text-green-400 mx-5'>|</span>
                            <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-Abdur27485" className='text-white'>Server Code</a>
                            <div className='my-5 rounded-md bg-slate-900 shadow-2xl'>
                                <ol className='list-decimal text-white pl-10 p-5 space-y-5'>
                                    <li>
                                        User can bookmark their favourite food recipes.
                                    </li>
                                    <li>
                                        Choose recipes based on your desired chefs.
                                    </li>
                                    <li>
                                        Newsletter subscription to be notified about new recipes
                                    </li>
                                </ol>
                            </div>
                            <div className='flex flex-wrap gap-5 text-green-400'>
                                <p>React</p>
                                <p>TailwindCSS</p>
                                <p>DaisyUI</p>
                                <p>ExpressJs</p>
                                <p>Firebase Authentication</p>
                                <p>MongoDb</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full'>
                            <div className=" max-w-full h-96  w-full overflow-hidden">
                                <div class="h-max w-full transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-384px)]">
                                    <img src="foodHunt-home.png" alt="" class="w-full object-cover object-top" /></div>
                            </div>
                        </div>
                    </div>
                </Fade>

            </div>
        </div>
    );
};

export default Projects;