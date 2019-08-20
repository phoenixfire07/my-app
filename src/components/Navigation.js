import React, {Fragment} from 'react';
import {MenuRounded} from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import {Close} from '@material-ui/icons';



export default function Navigation() {
  const [state, setState] = React.useState({
    left: false
  });

  function toggleDrawer(side, open){
    setState({ ...state, [side]: open });
  };

  return (
    <Fragment>
      <div className="pt-5"></div>
      <div onClick={() => toggleDrawer('left', true)} className="navigation-bar d-flex align-items-center justify-content-center">
        <MenuRounded className="burger-menu"></MenuRounded>
      </div>
      <Drawer open={state.left} onClose={() => toggleDrawer('left', false)}>
      <Close className="burger-menu ml-auto pr-1 pt-1" onClick={() => toggleDrawer('left', false)}></Close>
        <div className="d-flex h-100 align-items-center justify-content-center flex-column p-5">
          <h3 className="pt-4 menu-option" onClick={() => { toggleDrawer('left', false); document.getElementById("about-section").scrollIntoView(); }}>About</h3>
          <h3 className="pt-4 menu-option" onClick={() => { toggleDrawer('left', false); document.getElementById("experience-section").scrollIntoView();}}>Experience</h3>
          <h3 className="pt-4 menu-option" onClick={() => { toggleDrawer('left', false); document.getElementById("skillset-section").scrollIntoView();}}>Skillset</h3>
          <h3 className="pt-4 menu-option" onClick={() => { toggleDrawer('left', false); document.getElementById("contact-section").scrollIntoView();}}>Contact</h3>
       </div>
      </Drawer>
    </Fragment>
  );
}