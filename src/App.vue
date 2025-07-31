<script setup lang="ts">
import { GosuAchievement, PlayerActivity, PlayerAvatar, PlayerProgressBar } from '@/components';
import { useUserStore } from '@/stores/users';
import { useActivityStore } from '@/stores/activity';

const { requestUser, earnXp } = useUserStore();
const { requestActivities } = useActivityStore();

requestUser();
requestActivities();
</script>

<template>
  <div class="container">
    <PlayerAvatar />
    <PlayerProgressBar />

    <GosuAchievement />
    <PlayerActivity @earn-xp="earnXp" />
  </div>
</template>

<style scoped>
.container {
  display: block;
}
</style>
