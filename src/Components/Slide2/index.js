import React, { useRef, useEffect } from 'react';
import { Slide2Wrapper, Slide2Heading1, Num3, NehImg, Slide2Text, FinalWrapper, Slide2Text2, TextWrapper, Button } from './Slide2Elements';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import Neh from '../../media/neh.jpg';


const Slide2 = () => {

    const wrapperRef = useRef(null);
    const heading1Ref = useRef(null);
    const num1ref = useRef(null);
    const num2ref = useRef(null);
    const num3ref = useRef(null);
    const imgref = useRef(null);
    const text1ref = useRef(null);
    const text2ref = useRef(null);
    const finalWrapperRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(scrollTrigger);

        // gsap.to(wrapperRef.current, {
        //     scrollTrigger: {
        //         trigger: heading1Ref.current, 
        //         start: 'top 25%',
        //         scrub: true,
        //         markers: true
        //     },
        //     background: ' #e0e0d1'
        // })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heading1Ref.current,
                start: 'top 25%'
            }
        })
            .from(num3ref.current, {
                opacity: 0,
                x: '-20px'
            })
            .from(num2ref.current, {
                opacity: 0,
                x: '-20px',
                delay: 1
            })
            .from(num1ref.current, {
                opacity: 0,
                x: '-20px',
                delay: 1
            })
            .to(wrapperRef.current, {
                background: '#e0e0d1',
                delay: 1,
            })
            .to([num1ref.current, num2ref.current, num3ref.current, heading1Ref.current], {
                display: 'none',
                delay: 1
            })
            .to(finalWrapperRef.current, {
                opacity: 1
            })
            .to(finalWrapperRef.current, {
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                delay: 2
            })
            .to(imgref.current, {
                height: '250px'
            })
            .to([text1ref.current, text2ref.current], {
                opacity: 1
            })
            .to(wrapperRef.current, {
                height: 'fit-content'
            })
            .to(buttonRef.current, {
                autoAlpha: 1
            })

    }, [])

    const ScrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Slide2Wrapper ref={wrapperRef}>
            <Slide2Heading1 ref={heading1Ref}>Switching to Light Mode in...</Slide2Heading1>
            <Num3 ref={num3ref}>3</Num3>
            <Num3 ref={num2ref}>2</Num3>
            <Num3 ref={num1ref}>1</Num3>

            {/* <NehImg src={Neh} ref={imgref}></NehImg>
                <TextWrapper>
                    <Slide2Text ref={text1ref}>Developing interactive, animated and responsive websites is my passion.</Slide2Text>
                    <Slide2Text2 ref={text2ref}>Wanna contact me? Click on the button on the top right or contact me on 9664025398.</Slide2Text2>
                </TextWrapper> */}

            <FinalWrapper ref={finalWrapperRef}>
                <NehImg src={Neh} ref={imgref}></NehImg>
                <TextWrapper>
                    <Slide2Text ref={text1ref}>Developing interactive, animated and responsive websites is my passion.</Slide2Text>
                    <Slide2Text2 ref={text2ref}>Wanna contact me? Click on the button on the top right or find me on social media platforms.</Slide2Text2>
                </TextWrapper>
            </FinalWrapper>

                <Button onClick={ScrollTo} ref={buttonRef}>Back to top</Button>

        </Slide2Wrapper>
    )
}
export default Slide2;