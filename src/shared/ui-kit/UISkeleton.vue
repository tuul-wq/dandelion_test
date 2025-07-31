<script setup lang="ts">
import { computed } from 'vue';

const { width, height } = defineProps<{
  width: number;
  height: number;
}>();

const isRounded = computed(() => width === height);

const skeletonStyle = computed(() => ({
  width: `${width}px`,
  height: `${height}px`,
  borderRadius: isRounded.value ? '50%' : '4px',
}));
</script>

<template>
  <div class="skeleton-wrapper">
    <div class="skeleton" :class="{ rounded: isRounded }" :style="skeletonStyle"></div>
  </div>
</template>

<style scoped>
.skeleton-wrapper {
  display: inline-block;
}

.skeleton {
  background-color: lightgray;
  position: relative;
  overflow: hidden;
}

.skeleton::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, darkgray, transparent);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
