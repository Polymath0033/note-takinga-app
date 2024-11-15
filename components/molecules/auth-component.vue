<script setup lang="ts">
import Logo from "../logo.vue";
defineProps<{ title: string; paragraph: string }>();
</script>
<template>
  <div class="flex items-center justify-center w-full h-screen bg-neutral-100 p-4 ">
    <form
      class="p-600 flex flex-col items-center gap-200 rounded-12 bg-white border border-neutral-200 shadow-large w-full sm:w-[522px] md:w-[540px]"
    >
      <Logo />
      <div>
        <h2 class="text-text-preset-1 text-center">{{ title }}</h2>
        <h5 class="text-text-preset-5 text-center">
          {{ paragraph }}
        </h5>
      </div>

      <slot />
    </form>
  </div>
</template>

<style scoped></style>
