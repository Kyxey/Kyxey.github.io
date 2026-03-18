<template>
  <div
    :class="[
      positionClass,
      directionClasses[direction],
      sideClasses[side],
      colorClasses[color][direction],
      'w-0 h-0 border-solid border-r-transparent border-l-transparent',
    ]"
  />
</template>

<script setup lang="ts">
  type Props = {
    color: 'light' | 'white' | 'dark';
    direction: 'up' | 'down';
    side: 'left' | 'right';
    isAbsolute?: boolean;
  };

  const { direction, side, color, isAbsolute } = defineProps<Props>();

  const directionClasses = {
    up: 'border-b-0 border-t-[100px]',
    down: 'border-t-0 border-b-[100px]',
  };
  const sideClasses = {
    left: 'border-r-[100vw] border-l-0',
    right: 'border-l-[100vw] border-r-0',
  };
  const colorClasses = {
    light: {
      up: 'border-b-transparent border-t-light dark:border-t-navy',
      down: 'border-t-transparent border-b-light dark:border-b-navy',
    },
    white: {
      up: 'border-b-transparent border-t-white dark:border-t-slate/10',
      down: 'border-t-transparent border-b-white dark:border-b-slate/10',
    },
    dark: {
      up: 'border-b-transparent border-t-navy dark:border-t-black',
      down: 'border-t-transparent border-b-navy dark:border-b-black',
    },
  };
  const positionClass = isAbsolute ? 'absolute bottom-0' : 'relative';
</script>
