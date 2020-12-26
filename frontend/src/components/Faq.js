import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import TriangleTop from '../resources/triangle_top.svg';
import TriangleBottom from '../resources/triangle_bottom.svg';

import '../App.css';
import '../stylesheets/Faq.css';

function Faq({faqs}) {
    return (
        <Container className='contact' fluid>
            <Row>
                <Col className='hero'><h1>FAQ</h1></Col>
            </Row>
            <Row>
                <Col className='triangle'><img src={TriangleTop} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
            <Row className='grey-background'>
                <Col className='faq__subheader' sm={{ span: 9,  offset: 3 }} lg={{ span: 7, offset: 5 }}>
                    <p>Got a question? Here are some of the frequently asked questions we've received that might help you out.</p>
                </Col>
            </Row>
            <Row className='justify-content-sm-center grey-background faq__body'>
                {faqs.map((content) => (
                    <Col className='faq__topic' sm={12}>
                        <h3>{content.question}</h3>
                        <p>{content.answer}</p>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col className='triangle'><img src={TriangleBottom} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
        </Container>
    );
}

export default Faq;
