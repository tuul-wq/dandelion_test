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
  xp: 850,
  nextLevelXp: 900,
  completedCourses: 7,
  skills: ['JavaScript', 'Vue.js', 'TypeScript'],
};
