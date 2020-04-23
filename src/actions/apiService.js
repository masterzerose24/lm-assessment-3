import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    common: {
      Accept: 'application/json, *.*', 'Content-Type': 'application/json',
    }
  }
});