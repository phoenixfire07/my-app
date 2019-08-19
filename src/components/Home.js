import React, {Fragment} from 'react';
import About from './About';
import Experience from './Experience';
import Skillset from './Skillset';
import Slide from '@material-ui/core/Slide';
import Intro from './Intro';
import Navigation from './Navigation';
import Contact from './Contact';


export default function Home() {

    return (
        <Slide timeout={600} direction="up" in={true} mountOnEnter unmountOnExit>
            <div className="d-flex justify-content-center flex-column align-items-center landing-page h-auto">
                <Navigation></Navigation>
                <Intro></Intro>
                <About></About>
                <Experience></Experience>
                <Skillset></Skillset>
                <Contact></Contact>
            </div>
        </Slide>
    );
  
}



