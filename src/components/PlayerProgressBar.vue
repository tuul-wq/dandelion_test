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
    <div class="level-display">Level {{ user.level }}</div>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercentage + '%' }" :class="{ 'level-up': true }"></div>
      <div class="progress-text">{{ user.xp }} / {{ user.nextLevelXp }} XP</div>
    </div>
  </div>

  <UISkeleton v-else :width="200" :height="20" />
</template>

<style scoped>
.progress-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
}

.level-display {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.progress-bar {
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(to right, #4caf50, #8bc34a);
  border-radius: 15px;
  transition: width 0.3s ease;
  position: relative;
}

.progress-fill.level-up {
  animation: levelUpPulse 0.5s ease infinite alternate;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333;
  font-weight: bold;
  text-shadow: 0 0 2px white;
}

@keyframes levelUpPulse {
  0% {
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    background: linear-gradient(to right, #4caf50, #8bc34a);
  }
  100% {
    box-shadow: 0 0 20px rgba(76, 175, 80, 0.8);
    background: linear-gradient(to right, #8bc34a, #cddc39);
  }
}
</style>
