import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
    return (
        <div className='mt-32 lg:mx-20'>
            <h2 className='text-3xl block lg:text-5xl text-white mb-16 font-semibold text-center'><span className='text-green-500'>1. </span>My Projects</h2>

            <div className='grid grid-cols-1 gap-20'>
                <div className="flex flex-wrap lg:flex-nowrap gap-5">
                    <div>
                        <h3 className='text-lg lg:text-xl text-green-400 mb-5'>1. MERN Project - <span className='text-white'>Triolingo</span></h3>
                        <a href="#" className='text-white'>Live</a>
                        <span className='text-green-400 mx-5'>|</span>
                        <a href="#" className='text-white'>Client Code</a>
                        <span className='text-green-400 mx-5'>|</span>
                        <a href="#" className='text-white'>Server Code</a>
                        <div className='my-5 rounded-md bg-slate-900 shadow-2xl'>
                            <ol className='list-decimal text-white pl-10 p-5 space-y-5'>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur assumenda magnam.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur assumenda magnam.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur assumenda magnam.
                                </li>
                            </ol>
                        </div>
                        <div className='flex flex-wrap gap-5 text-green-400'>
                            <p>React</p>
                            <p>ExpressJs</p>
                            <p>Firebase Authentication</p>
                            <p>MongoDb</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <Carousel showArrows={true} className='w-full'>
                            <div>
                                <img src="https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg" />
                                <p className="legend bg-black bg-opacity-100">Legend 1</p>
                            </div>
                            <div>
                                <img src="https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg" />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-5">
                    <div>
                        <h3 className='text-lg lg:text-xl text-green-400 mb-5'>1. MERN Project - <span className='text-white'>Triolingo</span></h3>
                        <a href="#" className='text-white'>Live</a>
                        <span className='text-green-400 mx-5'>|</span>
                        <a href="#" className='text-white'>Client Code</a>
                        <span className='text-green-400 mx-5'>|</span>
                        <a href="#" className='text-white'>Server Code</a>
                        <div className='my-5 rounded-md bg-slate-900 shadow-2xl'>
                            <ol className='list-decimal text-white pl-10 p-5 space-y-5'>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur assumenda magnam.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur assumenda magnam.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur assumenda magnam.
                                </li>
                            </ol>
                        </div>
                        <div className='flex flex-wrap gap-5 text-green-400'>
                            <p>React</p>
                            <p>ExpressJs</p>
                            <p>Firebase Authentication</p>
                            <p>MongoDb</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <Carousel showArrows={true} className='w-full'>
                            <div>
                                <img src="https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg" />
                                <p className="legend bg-black bg-opacity-100">Legend 1</p>
                            </div>
                            <div>
                                <img src="https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg" />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-5">
                    <div>
                        <h3 className='text-lg lg:text-xl text-green-400 mb-5'>1. MERN Project - <span className='text-white'>Triolingo</span></h3>
                        <a href="#" className='text-white'>Live</a>
                        <span className='text-green-400 mx-5'>|</span>
                        <a href="#" className='text-white'>Client Code</a>
                        <span className='text-green-400 mx-5'>|</span>
                        <a href="#" className='text-white'>Server Code</a>
                        <div className='my-5 rounded-md bg-slate-900 shadow-2xl'>
                            <ol className='list-decimal text-white pl-10 p-5 space-y-5'>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur assumenda magnam.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur assumenda magnam.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur assumenda magnam.
                                </li>
                            </ol>
                        </div>
                        <div className='flex flex-wrap gap-5 text-green-400'>
                            <p>React</p>
                            <p>ExpressJs</p>
                            <p>Firebase Authentication</p>
                            <p>MongoDb</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <Carousel showArrows={true} className='w-full'>
                            <div>
                                <img src="https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg" />
                                <p className="legend bg-black bg-opacity-100">Legend 1</p>
                            </div>
                            <div>
                                <img src="https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg" />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;