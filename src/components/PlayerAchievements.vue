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
      <button
        type="button"
        class="achievement-icon"
        @mouseenter="hovered = achievement.id"
        @mouseleave="hovered = null"
        @focusin="hovered = achievement.id"
        @focusout="hovered = null"
      >
        <span>{{ achievement.icon }}</span>
        <Transition name="fade">
          <div v-if="hovered === achievement.id" class="tooltip">
            <strong>{{ achievement.title }}</strong>
            <br />
            <span>{{ achievement.description }}</span>
          </div>
        </Transition>
      </button>
    </li>
  </ul>

  <ul v-else class="achievement-list">
    <li v-for="skeleton in 3" :key="'skeleton' + skeleton">
      <UISkeleton :width="64" :height="64" />
    </li>
  </ul>
</template>

<style scoped>
.achievement-list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  list-style: none;
}

.achievement-item {
  position: relative;
}

.achievement-icon {
  position: relative;
  width: 54px;
  height: 54px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
  font-size: 36px;
}

.achievement-icon:hover {
  transform: scale(1.2);
}

.tooltip {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: white;
  font-size: 0.75rem;
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>
