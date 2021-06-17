import styled from 'styled-components';

export const MainWrapper = styled.div `
    height: 100vh;
    background-color: rgb(20, 20, 20);
    overflow: hidden;
    font-family: 'Lucida Sans';
    position: fixed;
    width: 100%;
    opacity: 1;
`;
export const MainHeading1 = styled.h1 `
    font-size: 5rem;
    font-family: 'Lucida Sans';
    color: whitesmoke;
    text-align: center;
    position: relative;
    top: 35vh;
    white-space: nowrap;
    @media screen and (max-width: 600px){
        font-size: 4rem;
    }
    @media screen and (max-width: 480px){
        font-size: 3rem;
    }
    @media screen and (max-width: 360px){
        font-size: 2.3rem;
    }
`;
export const MainProno = styled.p `
    font-size: 1.2rem;
    color: whitesmoke;
    text-align: center;
    top: 40vh;
    position: relative;
    text-align: center;
`
export const Underline = styled.hr `
    position: relative;
    top: 50vh;
    width: 50%;
    margin: 0 auto;
    border: 0.7px solid white;
`;
export const TextWrapper = styled.div `
    width: 70%;
    margin: 0 auto;
    display: block;
    
    height: 10vh;
    position: relative;
    top: 45vh;
    text-align: center;
`
export const MainHeading2 = styled.span `
    font-size: 2.5rem;
    font-family: 'Lucida Sans';
    color: whitesmoke;
    ;
    @media screen and (max-width: 600px){
        font-size: 1rem;
    }
    
    
`;
export const MainHeading3 = styled.span `
    font-size: 2.5rem;
    font-family: 'Lucida Sans';
    color: whitesmoke;

    
 

`;
export const MainHeading4 = styled.h1 `
    font-size: 2.5rem;
    font-family: 'Lucida Sans';
    color: whitesmoke;
    text-align: center;
    position: relative;
    top: 45vh;
    opacity: 0;
    display: none;
`;
