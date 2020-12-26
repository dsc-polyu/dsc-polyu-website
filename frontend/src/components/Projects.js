import React, { useState } from 'react';

import { Button, Modal, Slide, IconButton } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import axios from '../axios.js';
import { Container, Row, Col } from 'react-bootstrap';
import TriangleTop from '../resources/triangle_top.svg';
import TriangleBottom from '../resources/triangle_bottom.svg';

import '../App.css';
import '../stylesheets/Post.css';

function Projects({projects}) {
    const [ mode, setMode ] = useState(true);           // true = ongoing, false = completed
    const [ isOpen, setIsOpen ] = useState(false);      // modal switch
    const [ selected, setSelected ] = useState('');     // selected project

    const ongoing = projects.filter((content) => {
        return content.completed === false;
    });

    const completed = projects.filter((content) => {
        return content.completed === true;
    });

    const handleOpen = (event) => {
        async function load() {
            await axios.get(`/projects/${event.currentTarget.getAttribute('name')}`).then(response => {
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
                <Col className='hero'><h1>Projects</h1></Col>
            </Row>
            <Row>
                <Col className='triangle'><img src={TriangleTop} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
            <Row className='grey-background post__subheader'>
                <Col xs={{ span: 8,  offset: 3 }} sm={{ span: 5,  offset: 6 }} md={{ span: 4,  offset: 7 }} lg={{ span: 3,  offset: 8 }} >
                    <h2 className={`mode-button ${!mode && 'mode-button-off'}`} onClick={() => setMode(true)}>ONGOING</h2>
                    <h2 className={`mode-button ${mode && 'mode-button-off'}`} onClick={() => setMode(false)}>COMPLETED</h2>
                </Col>
            </Row>
            <Row className='justify-content-sm-center grey-background post__body'>
                {mode && <>
                    {ongoing.map((content) => (
                        <Col key={content._id} className='post__card' md={5} xl={3}>
                            <h3 style={{ padding: '0% 10%' }}>{content.title}</h3>
                            <p>{content.description}</p>
                            <Button name={content.slug} onClick={(event) => handleOpen(event)} variant='outlined' color='primary' style={{ marginTop: '15px', width: '60%' }}>Read more</Button>
                        </Col>
                    ))}
                </>}
                {!mode && <>
                    {completed.map((content) => (
                        <Col key={content._id} className='post__card' md={5} xl={3}>
                            <h3 style={{ padding: '0% 10%' }}>{content.title}</h3>
                            <p>{content.description}</p>
                            <Button name={content.slug} onClick={(event) => handleOpen(event)} variant='outlined' color='primary' style={{ marginTop: '15px', width: '60%' }}>Read more</Button>
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
                                <p> Duration: {selected.duration} <br />
                                    Topic: {selected.topic} <br />
                                    Members: {selected.members.join(', ')}
                                </p>
                            </Row>
                            <Row className='justify-content-sm-center post__modal-line post__modal-content'>
                                <p>{selected.description}</p>
                            </Row>
                            <Row className='justify-content-sm-center post__modal-line post__modal-content'>
                                {selected.body.map((paragraph) => (<p key={paragraph}>{paragraph}</p>))}
                            </Row>
                        </Container>
                    </Slide>
                </Modal>}
            </Row>
        </Container>
    );
}

export default Projects;
