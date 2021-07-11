import axios from 'axios';

const { API_BASE  } = process.env;

const api = axios.create({
  baseURL: API_BASE
});

export { api }