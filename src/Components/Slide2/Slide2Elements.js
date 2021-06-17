import styled from 'styled-components';

export const Slide2Wrapper = styled.div `
    height: 150vh;
    z-index: 300;
    width: 100%;
    background-color: #141414;
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
    top: 100vh;
    font-family: 'Lucida Sans';
    width: 100%;
    opacity: 1;
`;
export const Slide2Heading1 = styled.h1 `
    text-align: center;
    font-size: 2rem;
    color: white;
`;
export const Num3 = styled.h1 `
    font-size: 2rem;
    text-align: center;
    color: white;
    padding-top: 30vh;
`;
export const FinalWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    opacity: 0;
`
export const NehImg = styled.img `
    height: 400px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    margin-top: 20vh;
    
    @media screen and (max-width: 480px){
        height: 100px !important;
    }
`;
export const TextWrapper = styled.div `
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-style: italic;
    top: 10vh;
    line-height: 40px;
    text-align: center;
    position: relative;
    width: 75%;
`
export const Slide2Text = styled.p `
    opacity: 0;
    @media screen and (max-width: 600px){
        font-size: 1.5rem !important;
    }
`;
export const Slide2Text2 = styled.p `
    opacity: 0;
    @media screen and (max-width: 600px){
        font-size: 1.5rem !important;
    }
`;
export const Button = styled.button `
    margin: 100px auto;
    opacity: 1;
    display: block;
    width: fit-content;
    padding: 20px 40px;
    border: 2px solid black;
    color: black;
    font-family: 'Lucida Sans';
    font-size: 1.3rem;
    background-color: transparent;
    opacity: 0;
    transition-timing-function: ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: black;
        color: white;
        transition-duration: 0.3s;
        
    }
`