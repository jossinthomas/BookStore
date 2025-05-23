import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.252.207.217:5000/api',
});

export default instance;