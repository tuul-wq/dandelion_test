import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';
import type { User } from './types';
import { delayed } from '../utils/delayed';
import { USER_MOCK } from '@/mocks/users';

function getNextLevelXp(currentXp: number, earnedXp: number, nextLevelXp: number) {
  const overflownXp = currentXp + earnedXp - nextLevelXp;

  if (overflownXp >= 0) {
    return Math.ceil(overflownXp / 100) * 100 + nextLevelXp;
  }

  return nextLevelXp;
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  function requestUser() {
    delayed(() => USER_MOCK, 2000).then((data) => {
      user.value = data;
    });
  }

  function earnXp(xp: number) {
    if (!user.value) return;

    user.value = {
      ...user.value,
      xp: user.value.xp + xp,
      nextLevelXp: getNextLevelXp(user.value.xp, xp, user.value.nextLevelXp),
    };
  }

  return { user: readonly(user), requestUser, earnXp };
});
