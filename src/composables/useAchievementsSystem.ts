import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { type User, useUserStore } from '@/stores/users';

type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const ACHIEVEMENTS: (Achievement & { check: (user: User) => boolean })[] = [
  {
    id: 'newbie',
    title: 'Новичок',
    description: 'Добро пожаловать в платформу!',
    icon: '🐣',
    check: (_: User) => true,
  },
  {
    id: 'tryhard',
    title: 'Упорный',
    description: 'Пройдено 5 и более курсов',
    icon: '🔥',
    check: (user: User) => user.completedCourses >= 5,
  },
  {
    id: 'gosu',
    title: 'Эксперт',
    description: 'Освоено 10 и более навыков',
    icon: '🧠',
    check: (user: User) => user.skills.length >= 10,
  },
];

export default function useAchievementsSystem() {
  const { user } = storeToRefs(useUserStore());

  const earnedAchievements = computed(() => {
    if (!user.value) return [];

    return ACHIEVEMENTS.filter((a) => a.check(user.value));
  });

  return { earnedAchievements };
}
