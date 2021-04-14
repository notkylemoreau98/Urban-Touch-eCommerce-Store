// npm i axios
// Popular fetching library
import axios from 'axios';

const instance = axios.create({
	// Replace baseURL
	baseURL: 'http://localhost:5001/e-store-3df82/us-central1/api' //API URL (Cloud Function)
});

export default instance;

// How to deploy cloud function
// firebase deploy --only functions
// Grab link from functions tab on firebase and replace localhost URL above
// Review 8:21:00 for deployment help