import { ref, onMounted, onUnmounted } from "vue";

export const useResponsiveness = () => {
  const isMobile = ref(false);
  const isTablet = ref(false);

  const updateBreakpoints = () => {
    isMobile.value = window.matchMedia("(max-width: 640px)").matches;
    isTablet.value = window.matchMedia("(max-width: 768px)").matches;
  };

  onMounted(() => {
    updateBreakpoints();
    window
      .matchMedia("(max-width: 640px)")
      .addEventListener("change", updateBreakpoints);
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", updateBreakpoints);
  });

  onUnmounted(() => {
    window
      .matchMedia("(max-width: 640px)")
      .removeEventListener("change", updateBreakpoints);
    window
      .matchMedia("(max-width: 768px)")
      .removeEventListener("change", updateBreakpoints);
  });

  return { isMobile, isTablet };
};
