<script setup lang="ts">
import AppSide from "~/components/molecules/app-side.vue";
import { useResponsiveness } from "~/composable/responsiveness";
import AppFooter from "~/components/molecules/app-footer.vue";
const { isTablet } = useResponsiveness();
import { useUi } from "~/stores/ui";
const uiStore = useUi();

</script>
<template>
  <div class="flex w-full bg-neutral-100 md:bg-white self-stretch">
    <AppSide />

    <div
      :class="[
        'relative w-full left-0 md:!left-[272px] md:!w-[calc(100%_-_272px)]',
        !isTablet ? 'left-[272px] w-[calc(100%_-_272px)] ' : '',
      ]"
      class="relative flex"
    >
      <slot />
    </div>
    <button 
      @click="uiStore.toggleEditor()"
      class="fixed w-16 h-16 bg-blue-500 rounded-full right-[35px] bottom-[104px] flex items-center justify-center shadow-[0px_7px_11px_0px_rgba(202,_207,_216,_0.70)] md:hidden z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16 6.66663C16.5521 6.66663 17 7.11439 17 7.66663V14.6666H24C24.5521 14.6666 25 15.1144 25 15.6666C25 15.9688 24.8659 16.2396 24.6543 16.4228C24.4792 16.5746 24.25 16.6666 24 16.6666H17V23.6666C17 24.2189 16.5521 24.6666 16 24.6666C15.4479 24.6666 15 24.2189 15 23.6666V16.6666H8C7.44792 16.6666 7 16.2189 7 15.6666C7 15.1144 7.44792 14.6666 8 14.6666H15V7.66663C15 7.11439 15.4479 6.66663 16 6.66663Z"
          fill="white"
        />
      </svg>
    </button>
    <AppFooter />
  </div>
</template>

<style scoped></style>
