<script setup lang="ts">
import AppHeader from "~/components/molecules/app-header.vue";
import { useNotes } from "~/stores/notes";
import { storeToRefs } from "pinia";
import SideNavigation from "~/components/molecules/side-navigation.vue";
import TextEditor from "~/components/molecules/text-editor.vue";
import AppButton from "~/components/atoms/app-button.vue";
import ArchiveIcon from "~/components/atoms/icons/archive-icon.vue";
import DeleteIcon from "~/components/atoms/icons/delete-icon.vue";
import { useResponsiveness } from "~/composable/responsiveness";
import { useUi } from "~/stores/ui";
const { notes } = storeToRefs(useNotes());
const { isTablet } = useResponsiveness();
const uiStore = useUi();
</script>
<template>
  <div class="w-full relative left-0 md:rounded-0">
    <AppHeader title="All Notes" />
     <!-- Tablet and Mobile Rendering -->
    <main v-if="isTablet"
      class="relative top-[74px] md:top-[81px] h-full flex left-0 !rounded-2xl bg-white w-full "
    >
    <SideNavigation :show-title="true":notes="notes" />
    <TextEditor v-if="uiStore.showEditor" />
  </main>
    <!-- Desktop rendering -->
    <main v-else
      class="hidden relative top-[74px] md:top-[81px] md:flex left-0 !rounded-2xl md:rounded-0 bg-white"
    >
      <SideNavigation :notes="notes" />
      <TextEditor />
      <aside
        class="hidden md:flex grow-1 basis-72 h-[calc(100vh_-_81px)] py-250 px-200 flex-col gap-150"
      >
        <div class="w-full flex flex-col gap-150">
          <AppButton
            value="Archive Note"
            variant="border"
            class-name="w-full !h-fit"
          >
            <ArchiveIcon />
          </AppButton>
          <AppButton
            value="Delete Note"
            variant="border"
            class-name="w-full !h-fit"
          >
            <DeleteIcon />
          </AppButton>
        </div>
      </aside>
    </main>
   
  </div>
</template>

<style scoped></style>
