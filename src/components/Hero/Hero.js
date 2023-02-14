import React from 'react';
import Header from '../Header/Header';
import NumberCounter from 'number-counter'
import './Hero.css';
// IMAGE
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';

const Hero = () => {

    const transition ={ type:'spring' , duration: 3}
    const mobile = window.innerWidth<=768 ? true : false;


    return (
        <div className='hero' id='home'>

            <div className='blur hero-blur'></div>

            <div className='left-h'>
                <Header/>
                     
                {/* the best ad */}

                <div className='the-best-ad'>
                    <motion.div
                    initial={{ left: mobile ? '165px' : '238px'}}
                    whileInView={{left:'9px'}}
                    transition={{...transition, type:'tween'}}
                    >
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero Heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div >
                        <span>
                        In here we will help you to shape and build your ideal
                        live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* FIGURES */}

                <div className='figures'>
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix='+' />
                        </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={800} delay='4' preFix='+' />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={0} delay='4' preFix='+' />
                        </span>
                        <span> fitness programs</span>
                    </div>
                </div>

                {/* hero button */}
                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            <div className='right-h'> 
             <button className='btn join'>Join Now</button>
             <div className='responsive'>

                <motion.div 
                initial={{ right:'-1rem'}}
                transition={transition}
                whileInView={{ right:'4rem'}}
                className='heart-rate'>
                    <img src={Heart} alt='heart-img'/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero_image */}

                <img src={hero_image} alt="hero"  className='hero-image'/>
                <motion.img 
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}
                src={hero_image_back} 
                alt="hero-back"  
                className='hero-image-back'
                />

                </div>
                {/* Calories */}
                <motion.div 
                className='calories'
                initial={{ right: '37rem'}}
                whileInView={{ right:'28rem' }}
                transition={transition}
                >
                    <img src={Calories} alt="calories2" />
                    <div>
                    <span>220 Kcal</span>
                    <span>Calories Burned</span>
                    </div>

                </motion.div>

            </div>


        </div>
    );
};

export default Hero;