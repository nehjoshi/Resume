import styled from 'styled-components';

export const Slide1Wrapper = styled.div`
    height: 450vh;
    z-index: 300;
    width: 100%;
    background-color:  #141414;
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
    top: 100vh;
    font-family: 'Lucida Sans';
    width: 100%;
    width: 80%;
    margin: 0 auto;
    opacity: 1;
`;
export const Slide1Heading = styled.h1`
    color: white;
    top: 60vh;
    width: 100%;
    position: absolute;
    @media screen and (max-width: 600px){
        display: block;
        margin: 0 auto;
    }
`;
export const ItemWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 30px auto;
    top: 70vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    
`;
export const Row = styled.div `
    display: flex;
    justify-content: space-between;
    height: fit-content;
    
    
`;
export const RowItem = styled.img `
    height: 200px;
    @media screen and (max-width: 600px){
        width: 20vw;
        height: auto;
        margin: 0 auto;
    }
    opacity: 1   
`;
export const Underline = styled.hr `
    position: absolute;
    top: 150vh;
    border: 0.7px solid white;
    width: 100%;
    @media screen and (max-width: 600px) {
        position: relative;
        top: 70vh;
        
    }
`
export const Slide1Heading2 = styled.h1 `
    position: absolute; 
    top: 170vh;
    color: white;
`;
export const GifWrapper = styled.div `
    position: absolute;
    top: 180vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Vid = styled.img `
    margin: 40px auto;
    display: block;
    height: 400px;
    @media screen and (max-width: 480px){
        height: 300px !important;
        margin: 40px auto;
    }
    @media screen and (max-width: 360px){
        height: 220px !important;
        margin: 40px auto;
    }
`;
export const Slide1Heading3 = styled.h1 `
    text-align: center;
    font-size: 2.5rem;
    position: relative;
    top: 350vh;
    color: white;
`;
export const Section2 = styled.div `
@media screen and (max-width: 600px) {
        position: relative;
        top: -300px;
        
    }

`