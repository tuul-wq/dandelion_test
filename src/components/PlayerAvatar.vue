<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/users';
import { UISkeleton } from '@/shared/ui-kit';
import { useXpSystem } from '@/composables';

const { user } = storeToRefs(useUserStore());
const { calculatedLevel } = useXpSystem();

const isImageLoaded = ref(false);
</script>

<template>
  <div v-if="user" class="player-avatar">
    <span v-show="isImageLoaded" class="glow"></span>
    <img :src="user.avatar" :alt="`${user.name} avatar`" class="avatar-image" @load="isImageLoaded = true" />
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

.glow {
  content: '';
  position: absolute;
  width: 90px;
  height: 90px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  box-shadow:
    0 0 6px rgba(255, 255, 255, 0.3),
    0 0 10px rgba(255, 255, 255, 0.4),
    0 0 14px rgba(108, 218, 127, 0.6),
    0 0 18px rgba(48, 222, 72, 0.75);
  animation: pulsate-fwd 1s ease-in-out infinite both;
}

@keyframes pulsate-fwd {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

.avatar-image {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
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
