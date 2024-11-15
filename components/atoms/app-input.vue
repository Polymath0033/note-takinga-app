<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";

const {
  variant = "primary",
  hint = false,
  type = "text",
  hasLeftIcon = false,
  hasRightIcon = false,
} = defineProps<{
  id: string;
  type?: InputHTMLAttributes["type"];
  label?: string;
  placeholder: string;
  hint?: boolean;
  hintText?: string;
  variant?: "primary" | "secondary";
  className?: string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  disabled?: boolean;
  error?: boolean;
}>();
</script>
<template>
  <label :for="id" :class="['flex flex-col gap-075 w-full', className]">
    <div class="flex justify-between">
      <span class="text-neutral-950 text-text-preset-4">{{ label }}</span>
      <slot name="label" />
    </div>

    <div class="relative w-full">
      <i class="absolute left-200 top-1/2 -translate-y-1/2 w-5 h-5">
        <slot name="left" />
      </i>
      <i class="absolute right-200 top-1/2 -translate-y-1/2 w-5 h-5">
        <slot name="right" />
      </i>
      <input
        :type="type"
        :disabled="disabled"
        :class="[
          'w-full border py-150 text-neutral-950 px-200 gap-100 flex border-neutral-300 rounded-8 bg-white outline-0 shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)] text-text-preset-5 placeholder:text-neutral-500 hover:bg-neutral-50 focus:shadow-[0px_0px_0px_2px_#FFF,_0px_0px_0px_4px_#717784] focus:border-neutral-950 peer disabled:bg-neutral-50 disabled:cursor-not-allowed disabled:!text-red-300',
          hasLeftIcon && 'pl-11',
          hasRightIcon && 'pr-11',
        ]"
        :placeholder="placeholder"
      />
    </div>
    <div
      v-if="hint"
      aria-label="hint text"
      class="flex gap-100 items-center text-neutral-600 text-sm font-normal !leading-[140%] peer-disabled:!text-red-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M2 8.5C2 11.8133 4.68605 14.5 8 14.5C11.3139 14.5 14 11.8133 14 8.5C14 5.18605 11.3139 2.5 8 2.5C4.68605 2.5 2 5.18605 2 8.5Z"
          stroke="#525866"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.0038 10.9621V8.09573V10.9621ZM8 6.06951V6.02735V6.06951Z"
          fill="#525866"
        />
        <path
          d="M8.0038 10.9621V8.09573M8 6.06951V6.02735"
          stroke="#525866"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p class="">{{ hintText }}</p>
    </div>
  </label>
</template>

<style scoped></style>
