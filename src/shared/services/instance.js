import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://deliveryfoodsevice.onrender.com/api',
});

export default instance;
