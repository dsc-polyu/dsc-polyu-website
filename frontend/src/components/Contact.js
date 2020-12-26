import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { TextField, Button } from '@material-ui/core';

import { Container, Row, Col } from 'react-bootstrap';
import TriangleTop from '../resources/triangle_top.svg';
import TriangleBottom from '../resources/triangle_bottom.svg';

import '../App.css';
import '../stylesheets/Contact.css';


function Contact() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const template = {
            user_name: name,
            user_email: email,
            subject: subject,
            message: message,
        }

        await emailjs.send('[param_1]', '[param_2]', template, '[param_4]');

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <Container className='contact' fluid>
            <Row>
                <Col className='hero'><h1>Contact</h1></Col>
            </Row>
            <Row>
                <Col className='triangle'><img src={TriangleTop} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
            <Row className='grey-background'>
                <Col className='contact__subheader' sm={{ span: 9,  offset: 3 }} lg={{ span: 7, offset: 5 }}>
                    <p>We're absolutely delighted to hear from you! We will do our best to answer any 
                        of your questions and help you with any of your concerns. Our support team will contact 
                        you back within 48 working hours.</p>
                </Col>
            </Row>
            <Row className='grey-background'>
                <Col className='contact__body' xs={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                    <form onSubmit={(event) => handleSubmit(event)} method='POST' action='send'>
                        <TextField  label='Name' 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    color='primary' 
                                    variant='outlined' 
                                    style={{ marginTop: '25px' }}
                                    fullWidth 
                                    required
                        />
                        <TextField  label='Email' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    color='primary' 
                                    variant='outlined' 
                                    style={{ marginTop: '25px' }}
                                    fullWidth 
                                    required
                        />
                        <TextField  label='Subject' 
                                    value={subject} 
                                    onChange={(e) => setSubject(e.target.value)}
                                    color='primary' 
                                    variant='outlined' 
                                    style={{ marginTop: '25px' }}
                                    fullWidth 
                                    required
                        />
                        <TextField  label='Message' 
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)} 
                                    color='primary' 
                                    variant='outlined' 
                                    style={{ marginTop: '25px' }}
                                    multiline 
                                    rows={15}
                                    fullWidth
                                    required
                        />
                        <Button type='submit' variant='contained' color='primary' style={{ marginTop: '25px', width: '20%' }}>SEND</Button>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col className='triangle'><img src={TriangleBottom} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
        </Container>
    );
}

export default Contact;
