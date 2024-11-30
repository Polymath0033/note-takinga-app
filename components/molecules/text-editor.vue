<script setup lang="ts">
import TagIcon from "../atoms/icons/tag-icon.vue";
import CancelIcon from "../atoms/icons/cancel-icon.vue";
import WysiwygComponent from "./wysiwyg-component.vue";
const tags: Ref<Set<string>> = ref(new Set());
const tag = ref<string>("");
const addTag = (tag: string) => {
  if (tag.trim() === "") return;
  tags.value.add(tag);
};
const tagHandler = (e: KeyboardEvent) => {
  if (e.key === "Enter" || e.key === "," || e.key === " ") {
    addTag(tag.value);
    tag.value = "";
  }
};
const removeTag = (tag: string) => {
  tags.value.delete(tag);
};


</script>
<template>
  <section
    class="md:basis-[588px] md:grow-[4] w-full md:w-fit flex flex-col gap-200 py-250 px-300 items-start shrink-0"
  >
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter a title..."
      class="w-full border-0 outline-none text-neutral-950 text-text-preset-1 placeholder:text-neutral-950 placeholder:text-text-preset-1"
    />
    <div class="flex flex-col self-stretch gap-2 items-start">
      <label for="tags" class="flex items-center self-stretch gap-100">
        <div class="text-neutral-700 flex items-center gap-1 w-[115px] pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.01055 3.9783C2.01249 3.03712 2.72405 2.19324 3.64772 2.03432C3.83712 2.00124 6.05872 2.00578 6.97787 2.00643C7.88727 2.00708 8.6624 2.33399 9.30454 2.97485C10.668 4.3357 12.0301 5.69785 13.3903 7.06132C14.1953 7.86759 14.2063 9.10519 13.4046 9.91405C12.2481 11.0816 11.0857 12.2433 9.9188 13.3999C9.1106 14.2009 7.873 14.1905 7.06607 13.3856C5.69029 12.0137 4.31452 10.6418 2.94459 9.26405C2.41465 8.73092 2.10201 8.08679 2.0326 7.33372C1.97681 6.73179 2.00925 4.49397 2.01055 3.9783Z"
              stroke="#2B303B"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.60475 5.54289C6.60215 6.12277 6.11761 6.59953 5.53189 6.59823C4.95006 6.59693 4.46552 6.11175 4.46877 5.53381C4.47266 4.93057 4.95006 4.46031 5.55719 4.4629C6.13318 4.46485 6.60734 4.95327 6.60475 5.54289Z"
              stroke="#2B303B"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          ><span class="text-text-preset-5 text-neutral-700">Tags</span>
        </div>
        <div class="flex [flex:1_0_0] w-full">
          <!-- <ul class="flex gap-2 no-scroll overflow-x-auto ">
            <li
              v-for="tag in tags"
              :key="tag"
              class="flex py-025 px-[6px] rounded-4 bg-neutral-200 items-center content-center gap-2 text-text-preset-6 text-neutral-950"
            >
              <span class="text-neutral-700 text-text-preset-5">
                {{ tag }}
              </span>
              <button
                @click="removeTag(tag)"
                class="text-neutral-700"
                aria-label="remove tag"
              >
                <CancelIcon />
              </button>
            </li>
          </ul> -->
          <!--  @keydown="tagHandler" -->
          <input
            type="text"
            name="tags"
            id="tags"
            v-model="tag"
            placeholder="Add tags separated by commas (e.g. Work, Planning)"
            :class="[
              'w-full border-0 outline-none text-neutral-950 text-text-preset-5 placeholder:text-[##99A0AE]',
            ]"
          />
        </div>
      </label>
    
      <div for="tags" class="flex items-center self-stretch gap-100">
        <div class="text-neutral-700 flex items-center gap-1 w-[115px] pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.16699 2.5C5.12919 2.5 2.66699 4.96219 2.66699 8C2.66699 11.0372 5.12923 13.5 8.16699 13.5C11.2048 13.5 13.667 11.0372 13.667 8C13.667 4.96219 11.2048 2.5 8.16699 2.5ZM1.66699 8C1.66699 4.40991 4.57691 1.5 8.16699 1.5C11.7571 1.5 14.667 4.40991 14.667 8C14.667 11.5894 11.7571 14.5 8.16699 14.5C4.57687 14.5 1.66699 11.5894 1.66699 8Z"
              fill="#2B303B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.94824 5.21777C8.22438 5.21777 8.44824 5.44163 8.44824 5.71777V8.16619L10.3212 9.28553C10.5583 9.42719 10.6356 9.73419 10.494 9.97126C10.3523 10.2083 10.0453 10.2856 9.80824 10.1439L7.69171 8.87906C7.54071 8.78879 7.44824 8.62586 7.44824 8.44986V5.71777C7.44824 5.44163 7.67211 5.21777 7.94824 5.21777Z"
              fill="#2B303B"
            />
          </svg>
          <span class="text-text-preset-5 text-neutral-700">Last edited</span>
        </div>
        <p class="flex [flex:1_0_0] w-full text-[#99A0AE] text-text-preset-4">Not yet saved</p>
      </div>
   
    </div>
    <hr class="w-full border-neutral-200" />
    <TiptapEditor />
   


  </section>
</template>

<style scoped>
.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>
