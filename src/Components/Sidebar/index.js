import React, {useRef, useEffect} from 'react';
import {SidebarWrapper, SidebarItemI, SidebarItemF, SidebarItemL, SidebarItemG} from './SidebarStyles';
import gsap, {Power2} from 'gsap';

const Sidebar = () => {

    const WrapperRef = useRef(null);
    const Item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item4 = useRef(null);

    useEffect(() => {
        gsap.from(Item1.current, {
            opacity: 0,
            duration: 0.7,
            ease: Power2.easeIn
        })
        gsap.from(WrapperRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: Power2.easeIn,
            x: -20
        })

        
    }, [])

    return (
        <SidebarWrapper ref={WrapperRef}>
            <a href="https://www.instagram.com/neh.joshi.98/" target="_blank"><SidebarItemI ref={Item1}></SidebarItemI></a>
            <a href="https://www.facebook.com/neh.joshi.98/" target="_blank"><SidebarItemF ref={item2}></SidebarItemF></a>
            <a href="https://www.linkedin.com/in/neh-joshi-4aab581ba/" target="_blank"><SidebarItemL ref={item3}></SidebarItemL></a>
            <a href="https://github.com/nehjoshi" target="_blank"><SidebarItemG ref={item4}></SidebarItemG></a>
        </SidebarWrapper>
    )
}
export default Sidebar;