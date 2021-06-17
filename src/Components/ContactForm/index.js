import React, { useEffect, useRef, useState } from 'react';
import { FormWrapper, FormSection, CloseIcon, FormHeading, FormLabel1, FormInput1, FormLabel2, FormInput2, FormField, SubmitButton } from './ContactFormElements';
import gsap, { Power2 } from 'gsap';
import emailjs from 'emailjs-com';

const ContactForm = (props) => {
    console.log("Contact form!")
    const FormWrapperRef = useRef(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        gsap.from(FormWrapperRef.current, {
            opacity: 0,
            ease: Power2.easeIn,
            duration: 0.3
        })
    }, [])

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const SubmitEmail = (e) => {
        props.toggle();
        alert("Message Sent!");
        // const toSend = {
        //     "name": name,
        //     "email": email,
        //     "message": message
        // }
        // emailjs.sendForm('gmail', 'template_pjdisdq', toSend, 'user_I1lAo3mAQbKf47ojqCY5O')
        //     .then((result) => {
        //         console.log(result.text);
        //         alert(result.text);
        //         props.toggle();
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    
}


return (
    <FormWrapper ref={FormWrapperRef}>
        <FormSection>
            <CloseIcon onClick={() => props.toggle()} />
            <FormHeading>Send me a Message</FormHeading>
            <FormLabel1 onChange={handleChangeName} name="Name">Your Name</FormLabel1>
            <FormInput1 placeholder="John Smith" type="text" />
            <FormLabel2 name="email" onChange={handleChangeEmail}>Your Email</FormLabel2>
            <FormInput2 placeholder="Johnsmith@abc.com" type="email" />
            <FormField onChange={handleChangeMessage} name="message" placeholder="Your message here..."></FormField>
            <SubmitButton onClick={SubmitEmail}>Submit</SubmitButton>
        </FormSection>
    </FormWrapper>
)


}
export default ContactForm;