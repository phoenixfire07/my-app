import React, {Fragment} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {frontendSkillsData, backendSkillsData, otherSkillsData, dataSkillsData} from '../data/skillset';



export default function Skillset() {

  return (
    <Fragment>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>       
            <div id="skillset-section" className="app-selected-option-container about-wrapper d-flex justify-content-center mt-5">
                <div className="row w-100 about-container experience"> 
                    <div className="col-md-6 about-me-left"> 
                        <div className="w-100 skillset-section">
                            <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutDown'>       
                                <div className="skill-title d-flex justify-content-start pl-4 light">Frontend</div>  
                            </ScrollAnimation>
                            <div className="d-flex justify-content-center align-items-center flex-column h-100">
                                {frontendSkillsData.map((feSkill) =>
                                    <div className="single-skill d-flex justify-content-center align-items-center flex-column">
                                        <p className="skill-name">{feSkill.name}</p>
                                        <div className="d-flex justify-content-start align-items-start w-100 ">
                                            {feSkill.filled.map(() =>
                                                <div className="skill-circle"></div>
                                            )}
                                            {feSkill.outlined.map(() =>
                                                <div className="skill-circle outer"></div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-100 skillset-section">
                            <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutDown'>       
                                <div className="skill-title d-flex justify-content-start pl-4 light">Backend</div>  
                            </ScrollAnimation>
                            <div className="d-flex justify-content-center align-items-center flex-column h-100">
                                {backendSkillsData.map((beSkill) =>
                                    <div className="single-skill d-flex justify-content-center align-items-center flex-column">
                                        <p className="skill-name">{beSkill.name}</p>
                                        <div className="d-flex justify-content-start align-items-start w-100 ">
                                            {beSkill.filled.map(() =>
                                                <div className="skill-circle"></div>
                                            )}
                                            {beSkill.outlined.map(() =>
                                                <div className="skill-circle outer"></div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-100 skillset-section">
                            <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutDown'>       
                                <div className="skill-title d-flex justify-content-start pl-4 light">Data</div>  
                            </ScrollAnimation>
                            <div className="d-flex justify-content-center align-items-center flex-column h-100">
                                {dataSkillsData.map((dSkill) =>
                                    <div className="single-skill d-flex justify-content-center align-items-center flex-column">
                                        <p className="skill-name">{dSkill.name}</p>
                                        <div className="d-flex justify-content-start align-items-start w-100 ">
                                            {dSkill.filled.map(() =>
                                                <div className="skill-circle"></div>
                                            )}
                                            {dSkill.outlined.map(() =>
                                                <div className="skill-circle outer"></div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-100 skillset-section">
                            <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutDown'>       
                                <div className="skill-title d-flex justify-content-start pl-4 light">Other</div>  
                            </ScrollAnimation>
                            <div className="d-flex justify-content-center align-items-center flex-column h-100">
                                {otherSkillsData.map((oSkill) =>
                                    <div className="single-skill d-flex justify-content-center align-items-center flex-column">
                                        <p className="skill-name">{oSkill.name}</p>
                                        <div className="d-flex justify-content-start align-items-start w-100 ">
                                            {oSkill.filled.map(() =>
                                                <div className="skill-circle"></div>
                                            )}
                                            {oSkill.outlined.map(() =>
                                                <div className="skill-circle outer"></div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 about-me-right sticky d-flex justify-content-center align-items-center">
                        <h1 className="headings">Technical Skillset</h1>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    </Fragment>
  );
  
}
