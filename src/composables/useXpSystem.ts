import { computed } from 'vue';
import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';

export default function useXpSystem() {
  const { user } = storeToRefs(useUserStore());

  const calculatedLevel = computed(() => {
    if (!user.value) return 0;

    return Math.floor(user.value.xp / 100);
  });

  const progressPercentage = computed(() => {
    if (!user.value) return '0%';

    return (user.value.xp % 100) + '%';
  });

  return { calculatedLevel, progressPercentage };
}
