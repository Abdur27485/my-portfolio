import React from 'react';

const Projects = () => {
    return (
        <div className='mt-32 lg:mx-20'>
            <h2 className='text-3xl inline-block lg:text-5xl text-white mb-10 font-semibold'>Things I've built</h2>

            <div className='grid grid-cols-1 gap-20'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                        <div className='flex gap-5 text-green-400'>
                            <p>React</p>
                            <p>ExpressJs</p>
                            <p>Firebase Authentication</p>
                            <p>MongoDb</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://dradisframework.com/images/pro/screenshots/screenshot-62_small.png" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div>
                        <h3 className='text-lg lg:text-xl text-green-400 mb-5'>2. MERN Project - <span className='text-white'>ToyGo</span></h3>
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
                        <div className='flex gap-5 text-green-400'>
                            <p>React</p>
                            <p>ExpressJs</p>
                            <p>Firebase Authentication</p>
                            <p>MongoDb</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ytimg.com/vi/wgiW1uFZYr8/maxresdefault.jpg" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div>
                        <h3 className='text-lg lg:text-xl text-green-400 mb-5'>3. MERN Project - <span className='text-white'>Recipe Hunter</span></h3>
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
                        <div className='flex gap-5 text-green-400'>
                            <p>React</p>
                            <p>ExpressJs</p>
                            <p>Firebase Authentication</p>
                            <p>MongoDb</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://dradisframework.com/images/pro/screenshots/screenshot-62_small.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;