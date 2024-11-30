import { defineStore } from "pinia";
export const useUi = defineStore("ui", () => {
  const showEditor = ref(false);
  const toggleEditor = () => (showEditor.value = !showEditor.value);
  return { showEditor, toggleEditor };
});
