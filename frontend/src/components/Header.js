import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IconButton, Modal, Slide } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import { Container, Row, Col } from 'react-bootstrap';
import logo from '../resources/logo.svg';

import '../App.css'
import '../stylesheets/Header.css';

function Header() {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className='header'>
            <Modal open={isOpen} onClose={(e) => setIsOpen(false)}>
                <Slide direction='left' in={isOpen} mountOnEnter unmountOnExit>
                    <div className='header__hamburger-menu'>
                        <Link to='/projects' onClick={() => setIsOpen(false)} className='header__menu-item'><h6>Projects</h6></Link>  <br />
                        <Link to='/events' onClick={() => setIsOpen(false)} className='header__menu-item'><h6>Events</h6></Link> <br />
                        <Link to='/contact' onClick={() => setIsOpen(false)} className='header__menu-item'><h6>Contact</h6></Link> <br />
                        <Link to='/faq' onClick={() => setIsOpen(false)} className='header__menu-item'><h6>FAQ</h6></Link> <br />
                    </div>
                </Slide>
            </Modal>

            <Container fluid>
                <Row>
                    <Col className='header__logo' xs='auto' sm='auto'>
                        <Link to='/'><img src={logo} alt='polyu-dsc-logo' style={{ width: '100%', height: '100%' }} /></Link>
                    </Col>
                    <Col className='header__hamburger'>
                        <div className='spacer' />
                        <IconButton onClick={() => setIsOpen(true)}><MenuRoundedIcon color='secondary' /></IconButton>
                    </Col>
                    <Col className='header__menu'>
                        <div className='spacer' />
                        <Link to='/projects' className='header__menu-item'><h6>Projects</h6></Link> 
                        <Link to='/events' className='header__menu-item'><h6>Events</h6></Link>
                        <Link to='/contact' className='header__menu-item'><h6>Contact</h6></Link>
                        <Link to='/faq' className='header__menu-item'><h6>FAQ</h6></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
