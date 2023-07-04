import React from 'react';
import { Slide } from 'react-awesome-reveal';

const About = () => {
    return (
        <div id='aboutMe' className='lg:mx-20 pb-32 scroll-m-10'>
            <h2 className='text-3xl block lg:text-5xl text-white mb-16 font-semibold text-center'>
                <span className='text-green-500'>3. </span>
                About Me</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <Slide direction='left'>
                    <img className='rounded-3xl max-w-sm w-full mx-auto' src="https://scontent.fbzl4-1.fna.fbcdn.net/v/t39.30808-6/342644041_247336164486249_207232722166810107_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHzv5je70itzMTCJkdvs-wLUKfOsPlCTcFQp86w-UJNwapqzLzwBLpejKJ5yc3VgeRM2Fkxg8TTDaFMExkoJYDi&_nc_ohc=mkre0CfleqkAX-bJcPu&_nc_ht=scontent.fbzl4-1.fna&oh=00_AfBRTujp9F7zC7f-Av5J7qXT7brl6C2SeqPl6-2kPZWOJQ&oe=64A87108" alt="" />
                </Slide>
                <Slide direction='right'>
                    <div className='text-slate-300 lg:text-xl flex  flex-col justify-center bg-slate-900 p-5 rounded-md'>
                        <p>Hello! I'm Abdur Rahman, from Lakshmipur. The city is well known for Areca nut and Coconut. I'm a creative, time-punctual, goal-oriented person with decent moral values.</p>
                        <br />
                        <p>I'm currently studying in Intermediate 1st year in Business Studies at Principal Kazi Faruky College. I have completed <span className='text-green-400'>Complete Web Development Course With Jhankar Mahbub</span> from Programming Hero</p>
                        <br />
                        <p>Here are a few of the other activities that I love to do:</p>
                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-5 mt-2 text-green-400'>
                            <li>1. Cycling</li>
                            <li>2. Reading Books</li>
                            <li>3. Exploring New Technologies</li>
                            <li>4. Learning New Skills</li>
                        </ul>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default About;