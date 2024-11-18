import { defineStore } from "pinia";
import data from "~/lib/data.json";
import type { Notes } from "~/types/notes";
export const useNotes = defineStore({
  id: "notes",
  state: () => ({
    notes: data.notes as Notes,
  }),
  getters: {
    getArchivedNotes: (state) => {
      return state.notes.filter((note) => note.isArchived);
    },
    getAllTags: (state) => {
      const tags = new Set<string>();
      state.notes.forEach((note) => {
        note.tags.forEach((tag) => tags.add(tag));
      });
      return Array.from(tags);
    },
    getArchivedTags: (state) => {
      const tags = new Set<string>();
      state.notes
        .filter((note) => note.isArchived)
        .forEach((note) => {
          note.tags.forEach((tag) => tags.add(tag));
        });
      return Array.from(tags);
    },
  },
});
