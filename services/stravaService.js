import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.strava.com/api/v3',
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
});

export default {
  async getActivities() {
    try {
      console.log('Fetching activities from Strava...');
      console.log('Access Token:', process.env.ACCESS_TOKEN); // Log the access token

      const response = await apiClient.get('/athlete/activities');
      
      // Log the request details
      console.log('Request URL:', response.config.url);
      console.log('Request Headers:', response.config.headers);

      // Log the response details
      console.log('Response Status:', response.status);
      console.log('Response Data:', response.data);

      return response.data;
    } catch (error) {
      if (error.response) {
        // Log the error response details
        console.error('Error Response Status:', error.response.status);
        console.error('Error Response Data:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
      return [];
    }
  }
};
