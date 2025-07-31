import type { User } from '@/stores/users';

const getRandomAvatar = () => {
  const randomNumber = Math.floor(Math.random() * 50) + 1;

  return `https://avatar.iran.liara.run/public/${randomNumber}`;
};

/**
 * Mocked users
 */
export const USER_MOCK: User = {
  name: 'Алексей Петров',
  avatar: getRandomAvatar(),
  level: 12,
  xp: 850,
  nextLevelXp: 1000,
  completedCourses: 7,
  skills: ['JavaScript', 'Vue.js', 'TypeScript'],
};
