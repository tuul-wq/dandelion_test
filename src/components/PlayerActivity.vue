<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useActivityStore } from '@/stores/activity';
import { UISkeleton } from '@/shared/ui-kit';
import { useUserStore } from '@/stores/users';

const { earnXp } = useUserStore();
const { activities } = storeToRefs(useActivityStore());

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
</script>

<template>
  <ul v-if="activities.length > 0" class="actions-list">
    <li v-for="activity in activities" :key="activity.id">
      <button type="button" class="action-card" @click="earnXp(activity.xp)">
        <span class="action-header">
          <span class="action-title">{{ activity.course }}</span>
          <span class="xp">+{{ activity.xp }} XP</span>
        </span>
        <span class="date">{{ formatDate(activity.date) }}</span>
      </button>
    </li>
  </ul>

  <ul v-else class="actions-list">
    <li v-for="skeleton in 10" :key="'skeleton' + skeleton">
      <UISkeleton :width="278" :height="90" />
    </li>
  </ul>
</template>

<style scoped>
.actions-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.action-card {
  width: 100%;
  height: 90px;
  color: white;
  padding: 20px;
  border-radius: 16px;
  border: none;
  text-align: left;
  transition: all 0.3s;
  cursor: pointer;
  outline-offset: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #099b09, #495d72);
}

.action-card:hover,
.action-card:focus-visible {
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
  animation: heartbeat 1.5s ease-in-out both;
}

.action-card:active {
  transform: translateY(2px) scale(96%);
}

@keyframes heartbeat {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}

.action-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.action-title {
  font-size: 16px;
  font-weight: bold;
}

.xp {
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.2);
}

.date {
  display: inline-block;
  margin-top: 10px;
  font-size: 13px;
  opacity: 0.8;
}
</style>
