import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';
import type { User } from './types';
import { delayed } from '../utils/delayed';
import { USER_MOCK } from '@/mocks/users';

function getNextLevelXp(totalXp: number, nextLevelXp: number) {
  const overflownXp = totalXp - nextLevelXp;

  if (overflownXp >= 0) {
    return Math.ceil(overflownXp / 100) * 100 + nextLevelXp;
  }

  return nextLevelXp;
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User>();

  function requestUser() {
    delayed(() => USER_MOCK, 2000).then((data) => {
      user.value = data;
    });
  }

  function earnXp(xp: number) {
    if (!user.value) return;

    const totalXp = user.value.xp + xp;

    user.value = {
      ...user.value,
      xp: totalXp,
      nextLevelXp: getNextLevelXp(totalXp, user.value.nextLevelXp),
    };
  }

  return { user: readonly(user), requestUser, earnXp };
});
