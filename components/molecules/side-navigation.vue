<script setup lang="ts">
import NoteItem from '../note-item.vue';
import AppButton from '../atoms/app-button.vue';
import type { Notes } from '~/types/notes';
defineProps<{
  notes: Notes;
}>();
</script>
<template>
<nav
      class="py-250 border w-72 pr-200 pl-400 hidden md:flex flex-col gap-200 shrink-0 items-start h-[calc(100vh_-_81px)] overflow-y-auto"
    >
      <AppButton
        value="+ Create New Note"
        variant="primary"
        class-name="w-full"
      />
      <div v-if="notes.length === 0"
        class="rounded-lg bg-neutral-100 border border-neutral-200 gap-[10px] p-100 flex justify-center items-center self-stretch"
      >
        <p class="text-text-preset-5 text-neutral-950">
          You don’t have any notes yet. Start a new note to capture your
          thoughts and ideas.
        </p>
      </div>
      <ul class="w-full" >
        <NoteItem
          v-for="note in notes"
          :key="note.lastEdited"
          :date="note.lastEdited"
          :tags="note.tags"
          :title="note.title"
        />
      </ul>
    </nav>
</template>



<style scoped>

::-webkit-scrollbar {
  width: 6px;
  height: 10px;
  background-color: #fff;
}

::-webkit-scrollbar-track {
  border-radius: 16px;
}

::-webkit-scrollbar-thumb {
  border-radius: 16px;
  background-color: #dfe0e3;
  height: 10px;
  background-clip: content-box;
}
</style>