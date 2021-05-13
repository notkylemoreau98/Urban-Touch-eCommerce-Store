import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-e-store-3df82.cloudfunctions.net/api' //API URL (Cloud Function)
});

export default instance;
