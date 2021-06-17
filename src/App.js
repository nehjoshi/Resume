import React, { useRef, useState, useEffect } from 'react';
import "./styles.css";
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Slide2 from './Components/Slide2';
import gsap, { Power2 } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import Slide1 from './Components/Slide1';
import { red } from '@material-ui/core/colors';

const App = () => {
    gsap.registerPlugin(scrollTrigger);
    
   

    return (
        <>

            <Main />
            <Slide1  />
            <Slide2 />
            <Sidebar />

        </>
    );
}
export default App;