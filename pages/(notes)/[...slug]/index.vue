<script setup lang="ts">
import { useNotes } from "~/stores/notes";
import SideNavigation from "~/components/molecules/side-navigation.vue";
import AppHeader from "~/components/molecules/app-header.vue";
definePageMeta({
  layout: "slug",
});
const route = useRoute();
const { notes, getAllTags } = storeToRefs(useNotes());
const slug = computed(() => route.params.slug);
const getNotes = computed(() => {
  if (slug.value.length === 0) return notes.value || [];
  if (slug.value.length === 1) {
    const tag = slug.value[0];
    return notes.value
      ? notes.value.filter(
          (note) =>
            note.tags.some((t) => slugify(t) === tag) ||
            slugify(note.title) === tag
        )
      : [];
  }
  if (slug.value.length === 2) {
    const tag = slug.value[0];
    const title = slug.value[1];
    return notes.value
      ? notes.value.filter(
          (note) =>
            note.tags.some((t) => slugify(t) === tag) &&
            slugify(note.title) === title
        )
      : [];
  }
  return [];
});
const tagExists = computed(() => {
  return (
    getAllTags.value.filter((tag) => slugify(tag) === slug.value[0]).length >= 1
  );
});
const getNotesByTag = computed(() => {
    if (slug.value.length === 0) return notes.value || [];
    if (slug.value.length >= 1) {
      const tag = slug.value[0];
      return notes.value
        ? notes.value.filter(
            (note) =>
              note.tags.some((t) => slugify(t) === tag) ||
              slugify(note.title) === tag
          )
        : [];
    }
    return [];
})
</script>
<template>
  <AppHeader :title="slug.length >= 1 && tagExists ? '' : 'All Notes'">
    <h1
      v-if="slug.length >= 1 && tagExists"
      class="text-text-preset-1 text-neutral-600 capitalize"
    >
      Note Tagged:<span
        v-for="tag in getAllTags.filter((tag) => slugify(tag) === slug[0])"
        :key="tag"
        class="!text-neutral-950 ml-1"
        >{{ tag }}</span
      >
    </h1>
  </AppHeader>
  <main class="relative top-[81px]">
    <SideNavigation :notes="getNotesByTag" />
    {{ getNotes.length }}
  </main>
</template>

<style scoped></style>
