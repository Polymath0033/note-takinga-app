<script setup lang="ts">
import Logo from "../logo.vue";
import HomeIcon from "../atoms/icons/home-icon.vue";
import ArchiveIcon from "../atoms/icons/archive-icon.vue";
import TagIcon from "../atoms/icons/tag-icon.vue";
import { useResponsiveness } from "~/composable/responsiveness";
const { isTablet } = useResponsiveness();
import { useNotes } from "~/stores/notes";
const noteStore = useNotes();
const route = useRoute();
const tags = computed(() => route.path === "/archive" ? noteStore.getArchivedTags : noteStore.getAllTags);
const activeRoute = computed(() => route.path.split("/")[1]);
const computedRoute = computed(() => {
  const arrayRoute = route.path.split("/");
  return arrayRoute;
})
</script>
<template>
  <aside v-if="!isTablet"
    class="py-150 px-200 h-screen fixed top-0 left-0 w-[272px] bg-white hidden md:flex flex-col items-center gap-200 border-r border-r-neutral-200 z-30"
  >
    <div
      class="w-full py-3 px-0 flex justify-between items-center self-stretch"
    >
      <Logo /> 
    </div>
    <nav class="flex flex-col w-full gap-100 overflow-y-auto nav h-full">
      <ul class="flex flex-col items-start self-stretch gap-2 w-full">
        <li class="w-full">
          <nuxt-link
            to="/"
            class="w-full flex gap-2 items-center justify-between self-stretch py-[10px] px-3 text-text-preset-4 group"
            exact-active-class="active-link rounded-md bg-neutral-100"
          >
            <div class="flex items-center gap-2">
              <i class="text-neutral-700 left-icon">
                <HomeIcon />
              </i>
              <span>All Notes</span>
            </div>
            <i
              class="hidden right-icon group-hover:block group-active:block transition-display"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <g clip-path="url(#clip0_2359_17758)">
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#0E121B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2359_17758">
                    <rect width="6" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>
          </nuxt-link>
        </li>
        <li class="w-full">
          <nuxt-link
            to="/archive"
            class="w-full flex gap-2 items-center justify-between self-stretch py-[10px] px-3 text-text-preset-4 text-neutral-700 group"
            exact-active-class="active-link rounded-md bg-neutral-100"
          >
            <div class="flex items-center gap-2">
              <i class="text-neutral-700 left-icon">
                <ArchiveIcon />
              </i>
              <span>Archived Notes</span>
            </div>
            <i
              class="hidden right-icon group-hover:block group-active:block transition-display"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <g clip-path="url(#clip0_2359_17758)">
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#0E121B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2359_17758">
                    <rect width="6" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>
          </nuxt-link>
        </li>
      </ul>
      <h5 class="text-text-preset-4 text-neutral-500 w-full border-t pt-2 px-3">
        Tags 
      </h5>
      <ul class="flex flex-col items-start self-stretch gap-2 w-full">
        <li class="w-full" v-for="tag in tags" :key="tag">
          <nuxt-link
            :class="['w-full flex gap-2 items-center justify-between self-stretch py-[10px] px-3 text-text-preset-4 text-neutral-700 group', { 'active-link rounded-md bg-neutral-100': activeRoute === slugify(tag) }]"
            exact-active-class="active-link rounded-md bg-neutral-100"
            :to="`/${slugify(tag)}`"
          >
            <div class="flex items-center gap-2">
              <i class="text-neutral-700 left-icon">
                <TagIcon />
              </i>
              <span>{{ tag }}</span>
            </div>
            <i
              class="hidden right-icon group-hover:block group-active:block transition-display"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <g clip-path="url(#clip0_2359_17758)">
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#0E121B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2359_17758">
                    <rect width="6" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.active-link .left-icon {
  color: #2563eb;
}
.active-link .right-icon {
  display: block;
}
.nav::-webkit-scrollbar {
  width: 8px;
}
</style>
