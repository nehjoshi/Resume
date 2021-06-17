import styled from 'styled-components';
import {GoThreeBars} from 'react-icons/go';
export const NavWrapper = styled.div `
    width: 100%;
    position: fixed;
    height: 12vh;
    display: flex;
    align-items: center;
    z-index: 1000;
    background-color: #141414;
    /* box-shadow: 0 8px 6px -6px #999; */
    
`;
export const TopNav = styled.a `
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: white;
    padding-left: 50px;
    @media screen and (max-width: 650px){
        display: none;
    }

`;
export const AboutNav = styled.a `
    position: absolute;
    right: 0;
    padding-right: 100px;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    @media screen and (max-width: 650px){
        display: none;
    }
`;
export const ContactNav = styled.a `
    position: absolute;
    right: 0;
    margin-right: 200px;
    color: white;
    &:hover {
        cursor: pointer;
    }
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    @media screen and (max-width: 650px){
        display: none;
    }
`;
export const NavIcon = styled(GoThreeBars) `
    @media screen and (max-width: 650px){
        display: block;
        font-size: 2rem;
        cursor: pointer;
        color: white;
    padding-left: 50px;
    }
    display: none;
`;
