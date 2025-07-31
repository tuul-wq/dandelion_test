import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';
import type { User } from './types';
import { delayed } from '../utils/delayed';
import { USER_MOCK } from '@/mocks/users.ts';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  function requestUser() {
    delayed(() => USER_MOCK, 2000).then((data) => {
      user.value = data;
    });
  }

  return { user: readonly(user), requestUser };
});
