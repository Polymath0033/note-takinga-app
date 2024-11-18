<script setup lang="ts">
import AppInput from "../atoms/app-input.vue";
import searchIcon from "../atoms/icons/search-icon.vue";
import settingsIcon from "../atoms/icons/settings-icon.vue";
defineProps<{
  title?: string;
}>();
</script>
<template>
  <header
    class="fixed top-0 left-0 md:left-[272px] z-20 w-full md:w-[calc(100%_-_272px)] h-[81px] px-400 flex items-center justify-between border border-neutral-200 bg-white"
  >
    <div>
      <h1 class="text-text-preset-1 text-neutral-950">{{ title }}</h1>
      <slot />
    </div>

    <div class="flex gap-200 items-center">
      <AppInput
        id="note-search"
        type="search"
        placeholder="Search by title, content, or tags…"
        :has-left-icon="true"
      >
        <template #left>
          <search-icon />
        </template>
      </AppInput>
      <nuxt-link to="/settings">
        <i class="flex gap-2 h-[42px] w-[42px] items-center justify-center">
          <settings-icon />
        </i>
      </nuxt-link>
    </div>
  </header>
</template>

<style scoped></style>
