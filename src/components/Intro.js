import React, {Fragment} from 'react';
import Typist from 'react-typist';
import {KeyboardArrowDownOutlined} from '@material-ui/icons';

export default function Intro() {

  return (
    <Fragment>
        <div className="app-intro-container d-flex justify-content-center flex-column align-items-center w-100">
            <div className="d-flex justify-content-center flex-column align-items-center ">
                <div className="phoebe-home-image"></div>
                <Typist className="home-name-role-container" avgTypingDelay={100}>
                    <Typist.Delay ms={900} />
                    <h1 className="name-heading">Phoebe Staab</h1>
                    <Typist.Delay ms={500} />
                    <h6 className="role-heading">HCI Researcher & Tech Lead</h6>   
                </Typist>
            </div>
        </div>
        <div class="stage">
            <KeyboardArrowDownOutlined className="down-arrow-bounce bounce-animation"></KeyboardArrowDownOutlined>
        </div>
    </Fragment>
  );
}
