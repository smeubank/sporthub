<template>
  <div class="main-content">
    <div v-for="activity in activities" :key="activity.id" class="card">
      <div class="strava-embed-placeholder" :data-embed-id="activity.id" data-embed-type="activity" data-style="standard"></div>
    </div>
    <button id="errorBtn" @click="triggerError">Trigger Error</button>
  </div>
</template>

<script>
import stravaService from '~/services/stravaService';

export default {
  async asyncData({ $stravaService }) {
    try {
      const activities = await $stravaService.getActivities();
      return { activities };
    } catch (error) {
      console.error('Failed to fetch activities:', error);
      // Return placeholder data in case of an error
      return {
        activities: Array.from({ length: 5 }, (_, index) => ({
          id: `placeholder-${index}`,
          name: `Placeholder Activity ${index + 1}`
        }))
      };
    }
  },
  data() {
    return {
      activities: []
    };
  },
  async mounted() {
    this.activities = await stravaService.getActivities();
    this.loadStravaEmbeds();
  },
  methods: {
    loadStravaEmbeds() {
      const script = document.createElement('script');
      script.src = 'https://strava-embeds.com/embed.js';
      document.body.appendChild(script);
    },
    triggerError() {
      throw new Error("Nuxt Button Error");
    }
  }
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  background-color: #2a2a2a;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
}
</style>
