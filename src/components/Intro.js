import React, {Fragment} from 'react';
import Typist from 'react-typist';
import {KeyboardArrowDownOutlined} from '@material-ui/icons';

export default function Intro() {

  return (
    <Fragment>
        <div className="app-intro-container d-flex justify-content-center flex-column align-items-center w-100">
            <div className="d-flex justify-content-center flex-column align-items-center ">
                <img className="phoebe-home-image" alt="phoebe"></img>
                <Typist className="home-name-role-container" avgTypingDelay={100}>
                    <Typist.Delay ms={900} />
                    <h1 className="name-heading">Phoebe Staab</h1>
                    <Typist.Delay ms={500} />
                    <h6 className="role-heading">Full Stack Web Developer</h6>   
                </Typist>
            </div>
        </div>
        <div class="stage">
            <KeyboardArrowDownOutlined className="down-arrow-bounce bounce-animation"></KeyboardArrowDownOutlined>
        </div>
    </Fragment>
  );
}