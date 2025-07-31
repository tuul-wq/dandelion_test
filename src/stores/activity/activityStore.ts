import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Activity } from './types';

export const useActivityStore = defineStore('activity', () => {
  const activities = ref<Activity[]>([]);

  return { activities };
});
