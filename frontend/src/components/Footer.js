import React from 'react';
import { Link } from 'react-router-dom';

import { TextField, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Container, Row, Col } from 'react-bootstrap';

import '../stylesheets/Footer.css';

function Footer() {
    return (
        <Container className='footer' fluid>
            <Row>
                <Col className='footer__section' sm={6} md={3}>
                    <h5>NAVITAION</h5>
                    <Link to='/projects' onClick={() => window.scrollTo(0, 0)}><p>Projects</p></Link>
                    <Link to='/events' onClick={() => window.scrollTo(0, 0)}><p>Events</p></Link>
                    <Link to='/contact' onClick={() => window.scrollTo(0, 0)}><p>Contact</p></Link>
                    <Link to='/faq' onClick={() => window.scrollTo(0, 0)}><p>FAQ</p></Link>
                </Col>
                <Col className='footer__section' sm={6} md={3}>
                    <h5>INFORMATION</h5>
                    <a href='https://developers.google.com'><p>Google Developers</p></a>
                    <a href='https://developers.google.com/community/dsc/'><p>DSC Community</p></a>
                    <a href='https://dsc.community.dev/the-hong-kong-polytechnic-university/'><p>DSC Platform</p></a>
                </Col>
                <Col className='footer__section' sm={6} md={3}>
                    <h5>POLICIES</h5>
                    <p>Privacy Policy</p>
                    <p>Terms &#38; Condition</p>
                </Col>
                <Col className='footer__section' sm={6} md={3}>
                    <script src='[convertkit_url_1]'></script>
                    <form action='[convertkit_url_2]' method='post' data-sv-form='1895794' data-uid='d9757f81f0' data-format='inline' data-version='5' data-options='{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}' min-width='400 500 600 700 800'>
                        <div data-style='clean'>
                            <div data-element='fields' data-stacked='false'>
                                <h5>SUBSCRIBE</h5>
                                <p>Get notifications on events we host before anyone!</p>
                                <TextField name='email_address' type='email' label='Email' size='small' variant='outlined' color='secondary' required fullWidth/>
                                <Button data-element='submit' type='submit' variant='contained' color='secondary' style={{ marginTop: '10px' }} fullWidth>Subscribe</Button>
                            </div>
                        </div>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col className='footer__line' />
            </Row>
            <Row>
                <Col className='footer__social'>
                    <div className='spacer' />
                    <a href='https://www.instagram.com/dsc_polyu/' className='footer__icon'><InstagramIcon /></a>
                    <a href='https://github.com/dsc-polyu' className='footer__icon'><GitHubIcon /></a>
                    <div className='spacer' />
                </Col>
            </Row>
            <Row>
                <Col className='footer__copyright'>
                    <div className='spacer' />
                    <p>DSC X POLYU <span>&#169;</span> 2020. All Rights Reserved.</p>
                    <div className='spacer' />
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
