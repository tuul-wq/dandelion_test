<script setup lang="ts">
import { computed } from 'vue';
import { UISkeleton } from '@/shared/ui-kit';
import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';

const { user } = storeToRefs(useUserStore());

const progressPercentage = computed(() => {
  if (!user.value) return 0;

  return Math.min(100, (user.value.xp / user.value.nextLevelXp) * 100);
});
</script>

<template>
  <div v-if="user" class="progress-container">
    <span class="level-display">Level {{ user.level }}</span>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
      <div class="progress-text">{{ user.xp }} / {{ user.nextLevelXp }} XP</div>
    </div>
  </div>

  <div v-else class="skeleton-container">
    <UISkeleton :width="80" :height="20" />
    <UISkeleton :width="300" :height="20" />
  </div>
</template>

<style scoped>
.progress-container {
  display: grid;
  grid-row-gap: 8px;
  width: 100%;
  max-width: 300px;
  font-family: system-ui;
}

.level-display {
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  color: #333;
}

.progress-bar {
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(to right, #4caf50, #8bc34a);
  border-radius: 8px;
  transition: width 0.3s ease;
  position: relative;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 12px;
}

.skeleton-container {
  display: grid;
  grid-row-gap: 8px;
}
</style>
