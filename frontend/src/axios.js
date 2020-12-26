import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dsc-polyu-website.herokuapp.com/'     //'http://localhost:8080/'
});

export default instance;