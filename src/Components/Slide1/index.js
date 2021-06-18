import React, { useEffect, useRef } from 'react';
import vid1 from '../../media/Vid-1.gif';
import vid2 from '../../media/Vid-2.gif';
import vid3 from '../../media/Vid-3.gif';
import { Slide1Wrapper, Slide1Heading, ItemWrapper, Row, RowItem, Slide1Heading2, Underline, GifWrapper, Vid, Slide1Heading3, Section2 } from './Slide1Elements';
import gsap, { Power2 } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import htmlLogo from '../../media/html-logo.png';
import cssLogo from '../../media/css-logo.png';
import jsLogo from '../../media/js-logo.png';
import reactLogo from '../../media/react-logo.png';
import gsapLogo from '../../media/gsap.png';
import sassLogo from '../../media/sass3.png';
import { BrowserRouter as Router } from 'react-router-dom';


const Slide1 = () => {

    const vid1ref = useRef(null);
    const vid2ref = useRef(null);
    const vid3ref = useRef(null);
    const WrapperRef = useRef(null);
    const HeadingWrapperRef = useRef(null);
    const img1 = useRef(null);
    const img2 = useRef(null);
    const img3 = useRef(null);
    const img4 = useRef(null);
    const img5 = useRef(null);
    const img6 = useRef(null);
    const itemWrapperRef = useRef(null);
    const Heading2Ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(scrollTrigger);

        gsap.from(WrapperRef.current, {
            scrollTrigger: {
                trigger: WrapperRef.current,
                start: 'top 110vh',
                end: 'top -30vh',
                scrub: true,
                toggleActions: 'play none none reverse'
            },
            opacity: 0
        })


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: WrapperRef.current,
                start: 'top -20vh',
                toggleActions: 'play none none reverse',
            }
        })
            .from(img1.current, {
                duration: 0.5,
                opacity: 0,
                x: '-20px',
                ease: Power2.easeIn
            })
            .from(img2.current, {
                duration: 0.5,
                x: '-20px',
                opacity: 0,
                ease: Power2.easeIn
            })
            .from(img3.current, {
                duration: 0.5,
                x: '-20px',
                opacity: 0,
                ease: Power2.easeIn
            })
            .from(img4.current, {
                duration: 0.5,
                x: '-20px',
                opacity: 0,
                ease: Power2.easeIn
            })
            .from(img5.current, {
                duration: 0.5,
                x: '-20px',
                opacity: 0,
                ease: Power2.easeIn
            })
            .from(img6.current, {
                duration: 0.5,
                x: '-20px',
                opacity: 0,
                ease: Power2.easeIn
            })
        gsap.to(itemWrapperRef.current, {
            scrollTrigger: {
                trigger: Heading2Ref.current,
                scrub: true,
                start: 'top 75%',
                end: 'top 60%'
            },
            autoAlpha: 0
        })
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: Heading2Ref.current,
                start: 'top 50%',
                end: 'top 35%',

            }
        })
            .from(vid1ref.current, {
                opacity: 0,
                height: 0,
                ease: Power2.easeIn
            })
            .from(vid2ref.current, {
                opacity: 0,
                height: 0,
                ease: Power2.easeIn,
                delay: 2
            })
            .from(vid3ref.current, {
                opacity: 0,
                height: 0,
                ease: Power2.easeIn,
                delay: 2
            })


    }, [])




    return (
        <Router>
            <Slide1Wrapper ref={WrapperRef}>
                <Slide1Heading ref={HeadingWrapperRef}>I excel in the following...</Slide1Heading>
                <ItemWrapper ref={itemWrapperRef}>
                    <Row>
                        <RowItem src={htmlLogo} ref={img1}></RowItem>
                        <RowItem src={cssLogo} ref={img2}></RowItem>
                        <RowItem src={jsLogo} ref={img3}></RowItem>
                    </Row><br /><br />
                    <Row>
                        <RowItem src={reactLogo} ref={img4}></RowItem>
                        <RowItem src={gsapLogo} ref={img5}></RowItem>
                        <RowItem src={sassLogo} ref={img6}></RowItem>
                    </Row>
                </ItemWrapper>
                <Underline />
                <Section2>
                    <Slide1Heading2 ref={Heading2Ref}>Wanna see some of my projects?</Slide1Heading2>
                    <GifWrapper>
                        <a href="http://blogman-blogs.netlify.app/" rel="noreferrer" target="_blank"><Vid src={vid1} ref={vid1ref}></Vid></a>
                        <a href="https://github.com/nehjoshi/Netflix-Homepage" rel="noreferrer" target="_blank"><Vid src={vid2} ref={vid2ref}></Vid></a>
                        <a href="https://github.com/nehjoshi/Miami-School-Of-Code" rel="noreferrer" target="_blank"><Vid src={vid3} ref={vid3ref}></Vid></a>
                    </GifWrapper>
                </Section2>
                <Slide1Heading3>Still not impressed?</Slide1Heading3>
            </Slide1Wrapper>
        </Router>
    );
}
export default Slide1;