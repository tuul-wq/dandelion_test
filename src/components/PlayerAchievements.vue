<script setup lang="ts">
import { ref } from 'vue';
import { useAchievementsSystem } from '@/composables';
import { UISkeleton } from '@/shared/ui-kit';

const { earnedAchievements } = useAchievementsSystem();

const hovered = ref<string | null>(null);
</script>

<template>
  <ul v-if="earnedAchievements.length > 0" class="achievement-list">
    <li v-for="achievement in earnedAchievements" :key="achievement.id" class="achievement-item">
      <div
        :tabindex="0"
        class="achievement-icon"
        @mouseenter="hovered = achievement.id"
        @mouseleave="hovered = null"
        @focusin="hovered = achievement.id"
        @focusout="hovered = null"
      >
        {{ achievement.icon }}
      </div>

      <Transition name="tooltip-tilt">
        <div v-if="hovered === achievement.id" class="tooltip">
          <span class="tooltip-title">{{ achievement.title }}</span>
          <span class="tooltip-description">{{ achievement.description }}</span>
        </div>
      </Transition>
    </li>
  </ul>

  <ul v-else class="achievement-list">
    <li v-for="skeleton in 3" :key="'skeleton' + skeleton">
      <UISkeleton :width="54" :height="54" />
    </li>
  </ul>
</template>

<style scoped>
.achievement-list {
  display: flex;
  flex-wrap: wrap;
  height: max-content;
  gap: 20px;
}

.achievement-item {
  position: relative;
}

.achievement-item::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #495d72;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.10), 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  border-radius: 50%;
}

.achievement-icon {
  position: relative;
  text-align: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s ease;
  font-size: 26px;
  border-radius: 50%;
  outline-offset: -6px;
}

.achievement-icon:hover,
.achievement-icon:focus-visible {
  transform: scale(1.2);
}

.tooltip {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: white;
  text-align: center;
  padding: 6px 10px;
  border-radius: 6px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.tooltip-title {
  font-weight: bold;
  font-size: 14px;
}

.tooltip-description {
  font-size: 12px;
}

.tooltip-tilt-enter-active {
  animation: tilt-in-out 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes tilt-in-out {
  0% {
    transform: rotateY(20deg) rotateX(-35deg) translate(50px, 50px) skew(35deg, -10deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0) rotateX(0deg) translate(-50%, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}

.tooltip-tilt-leave-active {
  animation: tilt-out 0.15s ease-in both;
}

@keyframes tilt-out {
  0% {
    transform: rotateY(0) rotateX(0deg) translate(-50%, 0) skew(0deg, 0deg);
    opacity: 1;
  }
  100% {
    transform: rotateY(-10deg) rotateX(5deg) translate(-80px, 40px) skew(-5deg, 5deg);
    opacity: 0;
  }
}

@media (min-width: 768px) {
  .achievement-icon {
    width: 54px;
    height: 54px;
    font-size: 36px;
  }
}
</style>
