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
  <main class="container">
    <div class="player-info">
      <PlayerAvatar />
      <PlayerProgressBar />
      <PlayerAchievements />
    </div>

    <PlayerActivity />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  border-radius: 10px;
  background-color: #f3f3f3;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
}

.player-info {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 30px;
  row-gap: 10px;
}

.player-info > :nth-child(1) {
  grid-row: 1 / span 2;
  grid-column: 1;
}

.player-info > :nth-child(2) {
  grid-row: 1;
  grid-column: 2;
  justify-self: end;
}

.player-info > :nth-child(3) {
  grid-row: 2;
  grid-column: 2;
  justify-self: end;
}

@media (min-width: 768px) {
  .container {
    margin: 40px auto;
    padding: 20px;
  }

  .player-info {
    display: flex;
    justify-content: space-between;
  }

  .player-info > :nth-child(1) {
    justify-self: start;
  }

  .player-info > :nth-child(2) {
    justify-self: center;
  }

  .player-info > :nth-child(3) {
    justify-self: end;
  }
}
</style>
