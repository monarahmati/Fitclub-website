import React from 'react';
import './Programs.css'
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';




const Programs = () => {
    return (
        <div className="Programs" id="programs">
           <div className="programs-header">
             <span className='stroke-text'>Explore our</span>
             <span>Progranms</span>
             <span className='stroke-text'>to shape you</span>
          </div>
          <div className="programs-categories">
            { programsData.map((program) => (
               <div className="category">
                 {program.image}
                <span>{program.heading}</span>
                <span> {program.details} </span>
                <div className='Join-now'>
                    <span> Join Now</span>
                   <img src={RightArrow} alt='Arrow'  />
                </div>
              </div>
            ))}
           </div>
      </div>
    );
};

export default Programs;
