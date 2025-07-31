<script setup lang="ts">
import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';
import { UISkeleton } from '@/shared/ui-kit';
import { useXpSystem } from '@/composables';

const { user } = storeToRefs(useUserStore());
const { calculatedLevel } = useXpSystem();
</script>

<template>
  <div v-if="user" class="player-avatar">
    <img :src="user.avatar" :alt="`${user.name} avatar`" class="avatar-image" />
    <div class="level-badge">
      {{ calculatedLevel }}
    </div>
  </div>

  <UISkeleton v-else :width="100" :height="100" />
</template>

<style scoped>
.player-avatar {
  width: 100px;
  height: 100px;
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
  width: 30px;
  height: 30px;
  background-color: #099b09;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid white;
}
</style>
