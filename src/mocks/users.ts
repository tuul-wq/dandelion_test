import type { User } from '@/stores/users';

/**
 * Mocked users
 */
export const USER_MOCK: User = {
  name: 'Алексей Петров',
  avatar: '/https://avatar.iran.liara.run/public/',
  level: 12,
  xp: 850,
  nextLevelXp: 1000,
  completedCourses: 7,
  skills: ['JavaScript', 'Vue.js', 'TypeScript'],
};
