import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import members from './schemas/memberSchema.js';
import projects from './schemas/projectSchema.js';
import events from './schemas/eventSchema.js';
import faqs from './schemas/faqSchema.js';

// app config ----------------------------------------------------------
const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
    origin: 'https://dsc-polyu-website.firebaseapp.com',  //'http://localhost:3000',
    methods: ['GET'],
    allowedHeaders: 'Content-Type'
}));


// middleware ----------------------------------------------------------
app.use(express.json());


// mongoDB config  -----------------------------------------------------
const connectionURL = '[database_url]';
mongoose.connect(connectionURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const database = mongoose.connection;
database.on('error', () => console.log('Error: database connection failed'));
database.once('open', () => console.log('Success: database connnected'));


// members API --------------------------------------------------------
app.get('/members', (request, response) => {
    members.find({}, (error, data) => {
        if (error) {
            response.status(500).send(error);
        }
        else {
            response.status(200).send(data);
        }
    });
});

app.get('/members/:nickname', (request, response) => {
    members.find({ 'nickname' : request.params.nickname }, (error, data) => {
        if (error) {
            response.status(500).send(error);
        }
        else {
            response.status(200).send(data);
        }
    });
});


// projects API --------------------------------------------------------
app.get('/projects', (request, response) => {
    projects.find({}, (error, data) => {
        if (error) {
            response.status(500).send(error);
        }
        else {
            response.status(200).send(data);
        }
    });
});

app.get('/projects/:slug', (request, response) => {
    projects.find({ 'slug' : request.params.slug }, (error, data) => {
        if (error) {
            response.status(500).send(error);
        }
        else {
            response.status(200).send(data);
        }
    });
});


// events API ----------------------------------------------------------
app.get('/events', (request, response) => {
    events.find({}, (error, data) => {
        if (error) {
            response.status(500).send(error);
        }
        else {
            response.status(200).send(data);
        }
    });
});

app.get('/events/:slug', (request, response) => {
    events.find({ 'slug' : request.params.slug }, (error, data) => {
        if (error) {
            response.status(500).send(error);
        }
        else {
            response.status(200).send(data);
        }
    });
});


// faqs API ----------------------------------------------------------
app.get('/faqs', (request, response) => {
    faqs.find({}, (error, data) => {
        if (error) {
            response.status(500).send(error);
        }
        else {
            response.status(200).send(data);
        }
    });
});


// listener ------------------------------------------------------------
app.listen(port, () => console.log(`Listening to port: ${port}`));
