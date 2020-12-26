import React, { useState } from 'react';
import DateFormat from 'dateformat';

import { Button, Modal, Slide, IconButton } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import axios from '../axios.js';
import { Container, Row, Col } from 'react-bootstrap';
import TriangleTop from '../resources/triangle_top.svg';
import TriangleBottom from '../resources/triangle_bottom.svg';

import '../App.css';
import '../stylesheets/Post.css';


function Events({events}) {
    const [ mode, setMode ] = useState(true);           // true = upcoming, false = past
    const [ isOpen, setIsOpen ] = useState(false);      // modal switch
    const [ selected, setSelected ] = useState('');     // selected event

    const upcoming = events.filter((content) => {
        return content.completed === false;
    });

    const past = events.filter((content) => {
        return content.completed === true;
    });

    const handleOpen = (event) => {
        async function load() {
            await axios.get(`/events/${event.currentTarget.getAttribute('name')}`).then(response => {
                setSelected(response.data[0]);
            });
        }

        load();
        setIsOpen(true);
    }

    const handleClose = () => {
        setSelected('');
        setIsOpen(false);
    }

    return (
        <Container fluid>
            <Row>
                <Col className='hero'><h1>Events</h1></Col>
            </Row>
            <Row>
                <Col className='triangle'><img src={TriangleTop} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
            <Row className='grey-background post__subheader'>
                <Col xs={{ span: 8,  offset: 3 }} sm={{ span: 5,  offset: 6 }} md={{ span: 4,  offset: 7 }} lg={{ span: 3,  offset: 8 }} >
                    <h2 className={`mode-button ${!mode && 'mode-button-off'}`} onClick={() => setMode(true)}>UPCOMING</h2>
                    <h2 className={`mode-button ${mode && 'mode-button-off'}`} onClick={() => setMode(false)}>PAST</h2>
                </Col>
            </Row>
            <Row className='justify-content-sm-center grey-background post__body'>
                {mode && <>
                    {upcoming.map((content) => (
                        <Col key={content._id} className='post__card' md={5}>
                            <h3 style={{ padding: '0% 10%' }}>{content.title}</h3>

                            <p> Date: {DateFormat(new Date(content.date), 'ddd, mmmm dS yyyy')} <br />
                                Time: {content.time} <br />
                                Venue: {content.venue} </p>
                            <p>{content.description}</p>

                            <Row className='justify-content-md-center'>
                                <Col sm={6}><Button name={content.slug} onClick={(event) => handleOpen(event)} variant='outlined' color='primary' style={{ marginTop: '20px' }} fullWidth>Read more</Button></Col>
                                <Col sm={6}><Button variant='contained' color='primary' style={{ marginTop: '20px' }} fullWidth>
                                    <a href='https://dsc.community.dev/the-hong-kong-polytechnic-university/' className='post__button'>Register</a>
                                </Button></Col>
                            </Row>
                        </Col>
                    ))}
                </>}
                {!mode && <>
                    {past.map((content) => (
                        <Col key={content._id} className='post__card' md={5}>
                            <h3 style={{ padding: '0% 10%' }}>{content.title}</h3>

                            <p> Date: {DateFormat(new Date(content.date), 'ddd, mmmm dS yyyy')} <br />
                                Time: {content.time} <br />
                                Venue: {content.venue} </p>
                            <p>{content.description}</p>
                        
                            <Row className='justify-content-sm-center'>
                                <Col sm={6}><Button name={content.slug} onClick={(event) => handleOpen(event)} variant='outlined' color='primary' style={{ marginTop: '20px' }} value={content.slug} fullWidth>Read more</Button></Col>
                            </Row>
                        </Col>
                    ))}
                </>}
            </Row>
            <Row>
                <Col  className='triangle'><img src={TriangleBottom} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
            <Row>
                {selected && <Modal open={isOpen} onClose={handleClose}> 
                    <Slide direction='up' in={isOpen}>
                        <Container className='post__modal'>
                            <Row style={{ marginBottom: '40px' }}>
                                <Col xs={{ span: 1, offset: 10}} sm={{ span: 1, offset: 10}} lg={{ span: 1, offset: 11}}>
                                    <IconButton onClick={handleClose}><CloseRoundedIcon /></IconButton>
                                </Col>
                            </Row>
                            <Row className='justify-content-sm-center post__modal-content'>
                                <h2>{selected.title}</h2>
                            </Row>
                            <Row className='justify-content-sm-center post__modal-line post__modal-content'>
                                <p> Date: {DateFormat(new Date(selected.date), 'ddd, mmmm dS yyyy')} <br />
                                    Time: {selected.time} <br />
                                    Venue: {selected.venue} </p>
                            </Row>
                            <Row className='justify-content-sm-center post__modal-line post__modal-content'>
                                <p>{selected.description}</p>
                            </Row>
                            <Row className='justify-content-sm-center post__modal-line post__modal-content'>
                                <h5>Agenda</h5>
                            </Row>
                            <Row className='justify-content-sm-center post__modal-content'>
                                {selected.agenda.map((line) => (
                                    <Col key={line} sm={12}>
                                        <Row className='justify-content-sm-center'><p>{line}</p></Row>
                                    </Col>
                                ))}
                            </Row>
                            <Row className='justify-content-sm-center post__modal-line post__modal-content'>
                                {!selected.completed && <Col sm={6}><Button variant='contained' color='primary' style={{ margin: '20px 0px' }} fullWidth>
                                    <a href='https://dsc.community.dev/the-hong-kong-polytechnic-university/' className='post__button'>Register</a>
                                </Button></Col>}
                            </Row>
                        </Container>
                    </Slide>
                </Modal>}
            </Row>
        </Container>
    );
}

export default Events;
