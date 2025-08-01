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
  <div class="skeleton" :class="{ rounded: isRounded }" :style="skeletonStyle"></div>
</template>

<style scoped>
.skeleton {
  position: relative;
  background-color: #e3e3e3;
  overflow: hidden;
}

.skeleton::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, #d2d2d2, transparent);
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
