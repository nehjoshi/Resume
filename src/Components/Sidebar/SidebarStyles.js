import styled from 'styled-components';
import {FaInstagram, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';
export const SidebarWrapper = styled.div `
    height: 100vh;
    background-color: transparent;
    display: flex;
    border: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100px;
    opacity: 1;
    z-index: 300;
    @media screen and (max-width: 600px){
        display: none;
    }
`;
export const SidebarItemI = styled(FaInstagram) `
    width: 30px;
    height: 30px;
    margin: 20px;
    cursor: pointer;
    color: white;
    &:hover{
        color: rgb(143, 143, 143);
    }
`;
export const SidebarItemF = styled(FaFacebook) `
    width: 30px;
    height: 30px;
    margin: 20px;
    cursor: pointer;
    color: white;
    font-size: 2rem;
    &:hover{
        font-size: 40px;
        color: rgb(143, 143, 143);
    }
`;
export const SidebarItemL = styled(FaLinkedin) `
    width: 30px;
    height: 30px;
    margin: 20px;
    cursor: pointer;
    color: white;
    font-size: 20px;
    &:hover{
        color: rgb(143, 143, 143);
    }
`;
export const SidebarItemG = styled(FaGithub) `
    width: 30px;
    height: 30px;
    margin: 20px;
    cursor: pointer;
    color: white;
    font-size: 20px;
    &:hover{
        color: rgb(143, 143, 143);
    }
`;