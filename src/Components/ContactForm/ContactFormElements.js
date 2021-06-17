import styled from 'styled-components';
import {GrClose} from 'react-icons/gr';

export const FormWrapper = styled.div `
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    font-family: 'Arial';
`;
export const FormSection = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 650px;
    height: 50vh;
    margin: 0 auto;
    position: relative;
    top: 20vh;
    background-color: rgb(233, 220, 220);   
`;
export const CloseIcon = styled(GrClose) `
    position: absolute;
    font-size: 30px;
    right: 10px;
    top: 10px;
    &:hover {
        cursor: pointer;
    }
`;
export const FormHeading = styled.h3 `
    position: absolute;
    font-size: 2rem;
    padding: 10px 10px;
`
export const FormLabel1 = styled.label `
    position: absolute;
    top: 60px;
    left: 10px;
    color: black;
    font-size: 1.2rem;
`;
export const FormInput1 = styled.input `
    position: absolute;
    top: 90px;
    left: 10px;
    height: 30px;
    width: 35%;
    background-color: rgb(240, 234, 234);
    font-size: 1.3rem;
    padding: 5px 5px;
    border-radius: 5px;
    border: 2px solid rgb(73, 71, 71);
    &:focus{
        outline: none;
        border-width: 2.5px;
        border-color: black;
    }
    &:hover {
        border-color: black;
    }
`;
export const FormLabel2 = styled.label `
    position: absolute;
    top: 60px;
    right: 200px;
    color: black;
    font-size: 1.2rem;
`;
export const FormInput2 = styled.input `
    position: absolute;
    top: 90px;
    right: 50px;
    height: 30px;
    width: 35%;
    background-color: rgb(240, 234, 234);
    font-size: 1.3rem;
    padding: 5px 5px;
    border-radius: 5px;
    border: 2px solid rgb(73, 71, 71);
    &:focus{
        outline: none;
        border-width: 2.5px;
        border-color: black;
    }
    &:hover {
        border-color: black;
    }
`;
export const FormField = styled.textarea `
    height: 120px;
    background-color: white;
    border: 2px solid rgb(73, 71, 71);
    width: 95%;
    border-radius: 5px;
    margin: 0 auto;
    display: block;
    position: relative;
    font-size: 1.2rem;
    font-family: Arial;
    resize: none;
    padding: 5px 5px;
    top: 150px;
    &:focus{
        outline: none;
        border-width: 2.5px;
        border-color: black;
    }
    &:hover {
        border-color: black;
    }
`;
export const SubmitButton = styled.button `
    margin: 0 auto;
    display: block;
    position: relative;
    font-size: 1.2rem;
    font-family: Arial;
    top: 175px;
    width: 20%;
    padding: 7px;
    background-color: #002699;
    outline: none;
    border: 2px solid transparent;
    border-radius: 6px;
    &:focus {
        outline: none;
    }
    &:hover{
        cursor: pointer;
        background-color: #001a66;
    }
`