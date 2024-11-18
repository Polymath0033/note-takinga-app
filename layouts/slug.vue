<script setup lang="ts">
import AppSide from "~/components/molecules/app-side.vue";
import { useResponsiveness } from "~/composable/responsiveness";
const { isTablet } = useResponsiveness();
</script>
<template>
  <div class="flex">
    <AppSide />
    <div
      :class="[
        'relative left-0 md:left-[272px] ',
        !isTablet ? 'left-[272px]' : '',
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped></style>