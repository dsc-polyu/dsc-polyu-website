import React, { useState } from 'react';
import DateFormat from 'dateformat';

import { Button, Modal, Slide, IconButton } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import axios from '../axios.js';
import { Container, Row, Col } from 'react-bootstrap';
import TriangleTop from '../resources/triangle_top.svg';
import TriangleBottom from '../resources/triangle_bottom.svg';
import Images from './Images';

import Community from '../resources/community.svg';
import Institute from '../resources/institute.svg';
import Event from '../resources/event.svg';

import '../App.css';
import '../stylesheets/Home.css';

function Home(props) {
    const event = props.event;

    const lead = props.members.find((content) => {
        return content.role === 'Lead';
    });

    const secretary = props.members.find((content) => {
        return content.role === 'Secretary';
    });

    const members = props.members.sort(function(a, b) {
        if(a.nickname.toLowerCase() > b.nickname.toLowerCase()) 
            return 1;

        if(a.nickname.toLowerCase() < b.nickname.toLowerCase()) 
            return -1;

        return 0;
    }).filter((content) => {
        return content.role !== 'Lead' && content.role !== 'Secretary';
    });

    const [ isOpen, setIsOpen ] = useState(false);      // modal switch
    const [ selected, setSelected ] = useState('');     // selected member

    const handleOpen = (event) => {
        async function load() {
            await axios.get(`/members/${event.currentTarget.getAttribute('name')}`).then(response => {
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
                <Col className='home__hero'>
                    <Row><h1>Google Developer Student Club</h1></Row>
                    <Row><h1 className='home__subtitle'>@ Hong Kong Polytechnic Unversity</h1></Row>
                </Col>
            </Row>
            <Row>
                <Col className='triangle'><img src={TriangleTop} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
            <Row className='home__about home__about-number'>
                <Col>
                    <Row>
                        <h2 className='home__section-header'>WHO ARE WE</h2>
                    </Row>
                    <Row className='home__about-border'>
                        <Row className='justify-content-sm-center'>
                            <Col className='home__card' lg={3}>
                                <img src={Community} alt='google-dsc-community' className='home__about-icon' />
                                <h3>Campus-based Developer Community</h3>
                                <p>The Google Developer Student Club (DSC) is a campus-based community for students who are interested in becoming developers.</p>
                            </Col>
                            <Col className='home__card' lg={3}>
                                <img src={Institute} alt='google-dsc-institute' className='home__about-icon' />
                                <h3>Currently at 7 institute in Hong Kong</h3>
                                <p>This year, Hong Kong Polytechnic University joined DSC community, helping DSC grow from having 2 institutes to 7 institutes in Hong Kong.</p>
                            </Col>
                            <Col className='home__card' lg={3}>
                                <img src={Event} alt='google-dsc-event' className='home__about-icon' />
                                <h3>Organise events and workshops</h3>
                                <p>We are planning to organise competitions like hackathon and workshops for everyone who are interested to learn something new about technologies.</p>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col  className='triangle'><img src={TriangleBottom} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
            <Row className='justify-content-sm-center home__event home__event-number'>
                <Col className='home__event-before' sm={{ span: 5, offset: 5 }}>
                    <h2 className='home__section-header' style={{ textAlign: 'right' }}>UPCOMING EVENT</h2>
                </Col>
                <Col className='home__event-border' xs={{ span: 10, offset: 1 }} sm={8} lg={5}>
                    {event && <Col className='home__card home__event-card'>
                        <h3 style={{ padding: '0% 10%' }}>{event.title}</h3>

                        <p> Date: {DateFormat(new Date(event.date), 'ddd, mmmm dS yyyy')} <br />
                            Time: {event.time} <br />
                            Venue: {event.venue} </p>
                        <p>{event.description}</p>

                        <Row className='justify-content-sm-center'>
                            <Col sm={6}><Button variant='contained' color='primary' style={{ marginTop: '20px' }} fullWidth>
                                <a href='https://dsc.community.dev/the-hong-kong-polytechnic-university/' className='post__button'>Register</a>
                            </Button></Col>
                        </Row>
                    </Col>}
                </Col>
                <Col className='home__event-after' lg={{ span: 3, offset: 1 }}>
                    <h2 className='home__section-header' style={{ textAlign: 'right' }}>UPCOMING EVENT</h2>
                </Col>
            </Row>
            <Row>
                <Col className='triangle'><img src={TriangleTop} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
            <Row className='home__member home__member-number'>
                <Col>
                    <Row>
                        <h2 className='home__section-header'>MEET THE TEAM</h2>
                    </Row>
                    <Row className='justify-content-sm-center'>
                        <Col style={{ margin: '3%' }} sm={0} md={3} />

                        {lead && <Col name={lead.nickname} onClick={(event) => handleOpen(event)} className='home__card home__member-card' sm={5} md={3}>
                            <img src={Images.find((img) => { return img.id === lead.nickname }).img} alt='google-dsc-lead' className='home__member-image' />
                            <h5>{lead.nickname}</h5>
                            <p>{lead.role}</p>
                        </Col>}

                        {secretary && <Col name={secretary.nickname} onClick={(event) => handleOpen(event)} className='home__card home__member-card' sm={5} md={3}>
                            <img src={Images.find((img) => { return img.id === secretary.nickname }).img} alt='google-dsc-member' className='home__member-image' />
                            <h5>{secretary.nickname}</h5>
                            <p>{secretary.role}</p>
                        </Col>}
                    </Row>
                    <Row className='home__member-border justify-content-sm-center'>
                        {members && <>
                            {members.map((content) => (
                                <Col name={content.nickname} onClick={(event) => handleOpen(event)} key={content._id} className='home__card home__member-card' sm={5} md={3}>
                                    <img src={Images.find((img) => { return img.id === content.nickname }).img} alt='google-dsc-member' className='home__member-image' />
                                    <h5>{content.nickname}</h5>
                                    <p>{content.role}</p>
                                </Col>
                            ))}
                        </>}
                    </Row>
                </Col>
            </Row>
            <Row>
                {selected && <Modal open={isOpen} onClose={handleClose}> 
                    <Slide direction='up' in={isOpen}>
                        <Container className='home__member-modal'>
                            <Row style={{ marginBottom: '20px' }}>
                                <Col xs={{ span: 1, offset: 10}} sm={{ span: 1, offset: 10}} lg={{ span: 1, offset: 11}}>
                                    <IconButton onClick={handleClose}><CloseRoundedIcon /></IconButton>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <img src={Images.find((img) => { return img.id === selected.nickname }).img} alt='google-dsc-member' className='home__member-modal-image' />
                                </Col>
                                <Col md={6}>
                                    <h5>{selected.name} ({selected.nickname})</h5>
                                    <p>{selected.role}</p>
                                    <p> Major: {selected.major} <br />
                                        Year: {selected.year}
                                    </p>
                                    <p>{selected.introduction}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Slide>
                </Modal>}
            </Row>
            <Row>
                <Col  className='triangle'><img src={TriangleBottom} alt='' style={{ width: '100%', height: '100%' }} /></Col>
            </Row>
        </Container>
    );
}

export default Home;
