<script setup lang="ts">
import { formatDate } from "~/utils/format-date";
const props = defineProps<{
  title: string;
  tags: string[];
  date: string;
}>();

const route = useRoute();
const computedRoute = computed(() => {
  const previousRoute = route.path;
  const arrayRoute = previousRoute.split("/");
  if (arrayRoute.length > 2) {
    arrayRoute.pop();
  }
  const prevRoute = arrayRoute.join("/");
  const newRoute = slugify(props.title);
  return prevRoute ? `${prevRoute}/${newRoute}` : `/${newRoute}`;
});
</script>
<template>
  <li class="border-b border-neutral-200 last-of-type:border-b-0 li">
    <nuxt-link
      :to="computedRoute"
      exact-active-class="!bg-neutral-100"
      class="w-full bg-white rounded-md p-100 flex flex-col items-start gap-3 self-stretch hover:bg-neutral-100"
    >
      <h6 class="text-text-preset-3 text-neutral-950">{{ title }}</h6>
      <ul class="flex flex-wrap items-center gap-1 self-stretch content-center">
        <li
          v-for="tag in tags"
          :key="tag"
          class="flex py-025 px-[6px] rounded-4 bg-neutral-200 items-center content-center gap-1 text-text-preset-6 text-neutral-950"
        >
          {{ tag }}
        </li>
      </ul>
      <p class="text-text-preset-6 text-neutral-700">{{ formatDate(date) }}</p>
    </nuxt-link>
  </li>
</template>
<style scoped>
li {
  transition: background-color 0.2s;
}
li:hover {
  background-color: #f7fafc;
  border-bottom: none;
}
li a.link-exact-active {
  background-color: #f7fafc;
  border-bottom: none;
}
</style>
