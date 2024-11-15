<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";

const { type = "button",variant="primary" } = defineProps<{
  type?: ButtonHTMLAttributes["type"]; value: string; className?: string;variant?:"primary"|"secondary"|"border"|"error";
}>();
defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
const btnClass = computed(()=>variant === "primary" ? "bg-blue-500 text-white hover:bg-blue-700" : variant === "secondary" ? "bg-neutral-100 text-neutral-600 hover:border hover:border-neutral-300 hover:bg-white hover:shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)] hover:text-neutral-950 focus:border focus:border-neutral-950" : variant === "border" ? "bg-transparent border border-neutral-300 text-neutral-950 hover:bg-neutral-100 hover:border-0 hover:text-neutral-600 focus:text-neutral-900" : variant==="error" ? "bg-red-500 text-white hover:bg-red-700" : "");
</script>
<template>
  <button
  @click="(event) => $emit('click', event)"
    :type="type"
    :class="[
      'flex py-150 px-200 capitalize items-center justify-center rounded-8  gap-100 text-text-preset-4 focus:shadow-[0px_0px_0px_2px_#FFFF,_0px_0px_0px_4px_#99A0AE] disabled:bg-neutral-100 disabled:text-neutral-300 ',btnClass ,className
    ]"
  ><slot/>{{ value }}</button>
</template>

<style scoped></style>
