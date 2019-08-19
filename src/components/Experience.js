import React, {Fragment} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import {experienceData} from '../data/experience.js';

export default function Experience() {

  return (
    <Fragment>
        {/* <Slide timeout={300} direction="up" in={true} mountOnEnter unmountOnExit> */}
        <ScrollAnimation  animateIn='fadeInRight' animateOut='fadeOutRight'>       
            <div className="row d-flex justify-content-end experience-section-title pr-5">
                Experience
            </div>
        </ScrollAnimation>
            <div className="experience-list d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3 experience-column"></div>
                    <div className="col-md-6 pl-5">
                    {experienceData.map((experience) => 
                    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>       
                        <ExpansionPanel expanded>
                            <ExpansionPanelSummary>
                                <div className="experience-step mr-2"></div>
                                <h6 className="experience-title">{experience.name} | {experience.location_city}</h6>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                <div className="mb-3 mt-3">
                                    <span className="experience-section-heading">Timeframe: </span><span>{experience.years}</span>
                                    <br></br>
                                    {experience.role_name && 
                                    <div>
                                        <span className="experience-section-heading">Role: </span><span>{experience.role_name}</span>
                                        <br></br>
                                    </div>
                                    }
                                    {experience.thesis_name && 
                                    <div>
                                        <span className="experience-section-heading">Thesis: </span><a className="experience-link"  target="_blank" href={experience.thesis_link}>{experience.thesis_name} &#x25F3;</a>
                                        <br></br>
                                    </div>
                                    }
                                    {experience.link && 
                                    <div>
                                        <span className="experience-section-heading">Application: </span><a className="experience-link" target="_blank" href={experience.link}>{experience.link_name} &#x25F3;</a>
                                        <br></br>
                                    </div>
                                    }
                                </div>
                                <div className="mb-3">
                                    {experience.responsibilities} 
                                </div>
                                </Typography> 
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </ScrollAnimation>
                    )}   
                    </div>
                </div>
            </div>
        {/* </Slide> */}
    </Fragment>
  );
  
}
