import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './stylesheets/Theme';

import axios from './axios.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Events from './components/Events';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
    const [ members, setMembers ] = useState([]);
    const [ projects, setProjects ] = useState([]);
    const [ events, setEvents ] = useState([]);
    const [ faqs, setFaqs ] = useState([]);

    useEffect(() => {
        async function load() {
            await axios.get('/members').then(response => {
                setMembers(response.data);
            });

            await axios.get('/projects').then(response => {
                setProjects(response.data);
            });

            await axios.get('/events').then(response => {
                setEvents(response.data);
            });

            await axios.get('/faqs').then(response => {
                setFaqs(response.data);
            });
        }

        load();
    }, []);


    // get nearest event
    const nearest = events.filter((content) => {
        return content.completed === false;
    }).sort(function(a, b) {
        if(a.date > b.date) 
            return 1;

        if(a.date < b.date) 
            return -1;

        return 0;
    })[0];

	return (
		<div className='app'>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Header />
                    
                    <Switch>
                        <Route exact path='/' render={() => (<Home event={nearest} members={members} />)} />
                        <Route path='/projects' render={() => (<Projects projects={projects} />)} />
                        <Route path='/events' render={() => (<Events events={events} />)} />
                        <Route path='/contact' component={Contact}/>
                        <Route path='/faq' render={() => (<Faq faqs={faqs} />)} />
                    </Switch>

                    <Footer />
                </ThemeProvider>
            </BrowserRouter>
		</div>
	);
}

export default App;
