import React, { useState, useRef, useEffect } from 'react';
import { NavWrapper, TopNav, AboutNav, ContactNav, NavIcon } from './NavbarElements';
import { Grid, Typography, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from '../ContactForm';
import gsap, { Power2 } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import CloseIcon from '@material-ui/icons/Close';
import './animate.css';

const useStyles = makeStyles((theme) => ({

    container: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        zIndex: '1000',
        background: 'rgb(0,0,0,0.8)',
    },
    navWrapper: {
        position: 'absolute',
        width: '50%',
        background: '#ededed',
        height: '100%',
        left: '-500'
    },
    closeIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    mainBody: {
        margin: '50px auto',
        height: '90%',
        width: '97%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    home: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    contact: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    about: {
        '&:hover': {
            cursor: 'pointer'
        }
    }

}))

const Navbar = () => {




    const [navOpen, setNavOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const navRef = useRef(null);
    const tempRef = useRef(null);
    const theme = useTheme();
    const toggleSideNav = () => {
        setNavOpen(!navOpen);
    }

    const toggleContact = () => {
        setOpen(!open);
        setNavOpen(false);
    }

    useEffect(() => {

        gsap.registerPlugin(scrollTrigger);

        gsap.to(navRef.current, {
            scrollTrigger: {
                trigger: tempRef.current,
                start: 'top -3700px',
                markers: 'true',
                toggleActions: 'play none none reverse'
            },
            boxShadow: '0 8px 6px -6px #999'

        })
    }, []);

    const navStyles = {
        position: 'absolute',
        width: '50%',
        background: '#ededed',
        height: '100%',
        left: '-500',
        
    }
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        toggleSideNav();
    }
    const ScrollToAbout = () => {
        window.scrollTo({
            top: 2000,
            behavior: 'smooth'
        });
        toggleSideNav();
    }

    console.log(open);
    return (
        <>
            <NavWrapper ref={navRef}>
                <TopNav>Home</TopNav>
                <NavIcon onClick={toggleSideNav} />
                <AboutNav>About me</AboutNav>
                <ContactNav onClick={toggleContact}>Contact me</ContactNav>
                {open ? <ContactForm toggle={toggleContact} /> : null}
            </NavWrapper>

            {navOpen ?
                <Grid container className={classes.container}>
                    <div style={{
                             position: 'absolute',
                             width: '50%',
                             background: '#ededed',
                             height: '100%',
                             left: '-500px',
                             animation: `${navOpen ? "fadeIn" : "fadeOut"} 1s`,
                             animationFillMode: 'forwards'
                    }}>
                        <Grid item className={classes.closeIcon}>
                            <CloseIcon onClick={toggleSideNav} fontSize="large" />
                        </Grid>
                        <Grid item container className={classes.mainBody}>
                            <Grid item className={classes.home} onClick={ScrollToTop}>
                                <Typography variant="h5">Home</Typography>
                            </Grid>
                            <Grid item onClick={toggleContact} className={classes.contact}>
                                <Typography variant="h5">Contact Me</Typography>
                            </Grid>
                            <Grid item onClick={ScrollToAbout} className={classes.about}>
                                <Typography variant="h5">About Me</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Grid> : null}

                    <div ref={tempRef} style={{display: 'none'}}></div>
        </>

    )
}
export default Navbar;