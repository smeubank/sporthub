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
      const response = await apiClient.get('/athlete/activities');
      return response.data;
    } catch (error) {
      console.error('Error fetching activities:', error);
      return [];
    }
  }
};
