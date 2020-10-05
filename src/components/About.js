import React, {Fragment} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { aboutData } from '../data/about';


export default function About() {

  return (
    <Fragment>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>       
        <div id="about-section" className="app-selected-option-container about-wrapper d-flex justify-content-center">
            <div className="row w-100 about-container"> 
                <div className="col-md-6 about-left sticky d-flex justify-content-center align-items-center">   
                    <h1 className="headings light">About Me</h1>                
                </div>
                <div className="col-md-6">
                {aboutData.map((section) =>
                <div className="about-right d-flex justify-content-center align-items-center">
                    <div className="about-section">
                        <h2 className="mb-3">{section.title}</h2>
                        <br></br>
                        <p className="about-blurb">{section.blurb}</p>
                    </div>
                </div>
                )}
                </div>
            </div>
        </div>
        </ScrollAnimation>
        <div id="experience-section"></div>
    </Fragment>
  );
}
