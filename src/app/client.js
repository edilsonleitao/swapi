/* eslint-disable class-methods-use-this */
import axios from 'axios';

class Client {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://swapi.dev/api/',
      timeout: 180000,
    });
  }

  async get(url) {
    return this.axios.get(url);
  }
}

const client = new Client();

export default client;
