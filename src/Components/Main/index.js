import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import { MainWrapper, MainHeading1, MainProno, MainHeading2, Underline, MainHeading3, TextWrapper } from './MainElements';
import gsap, { Power2 } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";

const Main = (props) => {

    const MainWrapperRef = useRef(null);
    const MainHeading1Ref = useRef(null);
    const UnderlineRef = useRef(null);
    const MainHeading2Ref = useRef(null);
    const MainHeading3Ref = useRef(null);
    const MainHeading4Ref = useRef(null);
    const MainPronoRef = useRef(null);
    const tl = gsap.timeline();
    gsap.registerPlugin(scrollTrigger);
    gsap.registerPlugin(TextPlugin, RoughEase);

    const phrases = ["I'm a Frontend Web Developer.", "I create websites and web apps.", "Scroll Down To See Magic."];

    useEffect(() => {

        gsap.from(UnderlineRef.current, {
            width: '0%',
            duration: 0.5,
            ease: Power2.easeIn,
        })
        gsap.to([MainHeading1Ref.current, MainHeading2Ref.current, MainHeading3Ref.current, MainHeading4Ref.current, MainPronoRef.current], {
            scrollTrigger: {
                trigger: MainWrapperRef.current,
                start: 'top -10px',
                toggleActions: 'play none none reverse',
                scrub: true
            },
            color: 'rgb(20, 20, 20)'
        })
        gsap.to(UnderlineRef.current, {
            scrollTrigger: {
                trigger: MainWrapperRef.current,
                start: 'top -10px',
                toggleActions: 'play none none reverse',
                scrub: true
            },
            border: '0.7px solid rgb(20,20,20)'
        })
        gsap.to(MainHeading3Ref.current, {
            repeat: -1,
            opacity: 0,
            ease: Power2.easeInOut
        })
        const master = gsap.timeline({ repeat: -1 });

        phrases.forEach(phrase => {
            const tl = gsap.timeline({ repeat: 1, yoyo: true })
                .to(MainHeading2Ref.current, {
                    duration: 4,
                    text: phrase,
                    ease: Power2.easeInOut
                })
            master.add(tl)
        })

    }, [])

    return (
        <>
            <Navbar />
            <MainWrapper ref={MainWrapperRef}>
                <MainHeading1 ref={MainHeading1Ref}>Hello. I'm Neh.</MainHeading1>
                <MainProno ref={MainPronoRef}>(Pronounced: Nay)</MainProno>
                {/* <MainHeading2 ref={MainHeading2Ref}>I'm a Frontend Web Developer.</MainHeading2>
                <MainHeading3 ref={MainHeading3Ref}>I create websites and web apps.</MainHeading3>
                <MainHeading4 ref={MainHeading4Ref}>Scroll Down To See Magic.</MainHeading4> */}
                <TextWrapper>
                    <MainHeading2 ref={MainHeading2Ref}></MainHeading2>
                    <MainHeading3 ref={MainHeading3Ref}>_</MainHeading3>
                </TextWrapper>
                <Underline ref={UnderlineRef} />
            </MainWrapper>
        </>
    )
}
export default Main