import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-70f44-default-rtdb.firebaseio.com/'
});

export default instance;