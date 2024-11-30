<script setup lang="ts">
import { useNotes } from "~/stores/notes";
import { storeToRefs } from "pinia";
import SideNavigation from "~/components/molecules/side-navigation.vue";
import AppHeader from "~/components/molecules/app-header.vue";
const { getArchivedNotes } = storeToRefs(useNotes());
</script>
<template>
  <AppHeader title="Archived Notes" />
  <main class="relative top-[81px]">
    <SideNavigation :notes="getArchivedNotes" />
  </main>
</template>
<style scoped></style>
