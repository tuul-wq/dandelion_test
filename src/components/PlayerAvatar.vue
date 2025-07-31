<script setup lang="ts">
import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';
import { UISkeleton } from '@/shared/ui-kit';

const { user } = storeToRefs(useUserStore());
</script>

<template>
  <div v-if="user" class="player-avatar">
    <img :src="user.avatar" :alt="`${user.name} avatar`" class="avatar-image" />
    <div class="level-badge">
      {{ user.level }}
    </div>
  </div>

  <UISkeleton v-else :width="80" :height="80" />
</template>

<style scoped>
.player-avatar {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.level-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background-color: #099b09;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid white;
}
</style>
