<script setup lang="ts">
import { PlayerAchievements, PlayerActivity, PlayerAvatar, PlayerProgressBar } from '@/components';
import { useUserStore } from '@/stores/users';
import { useActivityStore } from '@/stores/activity';

const { requestUser } = useUserStore();
const { requestActivities } = useActivityStore();

requestUser();
requestActivities();
</script>

<template>
  <div class="container">
    <PlayerAvatar />
    <PlayerProgressBar />

    <PlayerAchievements />
    <PlayerActivity />
  </div>
</template>

<style scoped>
.container {
  display: block;
}
</style>
