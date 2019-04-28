import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const api = {
  getReposities(name) {
    return axios.get(`/users/${name}/repos`);
  }
}

export default api;