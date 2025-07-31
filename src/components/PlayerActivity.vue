<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useActivityStore } from '@/stores/activity';
import { UISkeleton } from '@/shared/ui-kit';

const { activities } = storeToRefs(useActivityStore());

const emit = defineEmits<{ 'earn-xp': [number] }>();

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
      <button type="button" class="action-card" @click="emit('earn-xp', activity.xp)">
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
      <UISkeleton :width="220" :height="90" />
    </li>
  </ul>
</template>

<style scoped>
.actions-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.action-card {
  width: 100%;
  height: 90px;
  background: linear-gradient(135deg, #099b09, #495d72);
  color: white;
  padding: 1.2rem;
  border-radius: 16px;
  border: none;
  text-align: left;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  cursor: pointer;
  outline-offset: 2px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.action-card:hover,
.action-card:focus-visible {
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
}

.action-card:active {
  transform: translateY(2px) scale(98%);
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
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-weight: bold;
  font-size: 0.9rem;
}

.date {
  display: inline-block;
  margin-top: 10px;
  font-size: 13px;
  opacity: 0.8;
}
</style>
