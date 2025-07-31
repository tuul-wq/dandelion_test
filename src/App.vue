<script setup lang="ts">
import { GosuAchievement, PlayerActivity, PlayerAvatar, PlayerProgressBar } from '@/components';
import { useUserStore } from '@/stores/users';

const { requestUser } = useUserStore();

requestUser();
</script>

<template>
  <div class="container">
    <PlayerAvatar />
    <PlayerProgressBar />

    <GosuAchievement />
    <PlayerActivity />
  </div>
</template>

<style scoped>
.container {
  display: block;
}
</style>
