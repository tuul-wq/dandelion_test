import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';
import type { Activity } from './types';
import { delayed } from '@/stores/utils/delayed.ts';
import { ACTIVITIES_MOCK } from '@/mocks/activities.ts';

export const useActivityStore = defineStore('activity', () => {
  const activities = ref<Activity[]>([]);

  function requestActivities() {
    delayed(() => ACTIVITIES_MOCK, 3000).then((data) => {
      activities.value = data;
    });
  }

  return { activities: readonly(activities), requestActivities };
});
