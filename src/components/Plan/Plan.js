import React from 'react';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import RightArrow from '../../assets/rightArrow.png';
import './Plan.css'


const Plan = () => {
    return (
        <div className='plans-container'>
            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>
            <div className='programs-header' style={{ gap:'2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS </span>
            </div>

            {/* plans card */}
             <div className='plans' >
                {plansData.map(( plan, i ) => (
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span> ${plan.price} </span>

                        <div className='features'>
                            {plan.features.map((feature , i) => (
                                <div className='feature'>
                                    <img src={whiteTick} alt='whiteTick'/>
                                    <span key={i}> {feature} </span>
                                </div>
                            ))}
                        </div>

                        <div className='Arrow-more'>
                            <span> See more benefits</span>
                            <img src={RightArrow} alt='Arrow'  />
                        </div>
                        <button className='btn'>
                            <span>
                            Join now
                            </span>
                        </button>

                    </div>
                ))}

             </div>
        </div>
    );
};

export default Plan;