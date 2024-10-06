<template>
  <div class="sidebar" :class="{ collapsed: isCollapsed }">
    <button @click="toggleSidebar" class="hamburger">☰</button>
    <!-- Sidebar content will go here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: true
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

<style scoped>
.sidebar {
  display: none;
}

.hamburger {
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .sidebar {
    display: block;
    width: 200px;
  }
}
</style>
