<script setup lang="ts"></script>
<template>
  <div
    class="fixed bottom-[65px] right-16 z-40 flex w-[390px] items-center justify-between padding-100 h-8 gap-100 rounded-lg border border-neutral-200 shadow-[0px_16px_32px_-12px_rgba(14,_18,_27,_0.10);] p-100"
  >
    <div class="flex items-center gap-100">
      <i
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6623 6.81469L7.58366 9.89335C7.48566 9.99135 7.35833 10.04 7.23033 10.04C7.10166 10.04 6.97433 9.99135 6.87633 9.89335L5.33699 8.35402C5.14166 8.15869 5.14166 7.84202 5.33699 7.64669C5.53233 7.45135 5.84833 7.45135 6.04366 7.64669L7.23033 8.83269L9.95499 6.10735C10.1503 5.91202 10.467 5.91202 10.6623 6.10735C10.8577 6.30269 10.8577 6.61935 10.6623 6.81469ZM8.00033 1.66669C4.50833 1.66669 1.66699 4.50802 1.66699 8.00002C1.66699 11.4927 4.50833 14.3334 8.00033 14.3334C11.4923 14.3334 14.3337 11.4927 14.3337 8.00002C14.3337 4.50802 11.4923 1.66669 8.00033 1.66669Z"
            fill="#21C16B"
          /></svg
      ></i>
      <p class="text-text-preset-6 text-neutral-950">
        Note saved successfully!
      </p>
    </div>
    <div class="flex items-center gap-100" >
        <nuxt-link to="/notes" class="text-text-preset-6 text-neutral-950 underline capitalize ">View</nuxt-link>
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 4L12 12"
            stroke="#99A0AE"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 4L4 12"
            stroke="#99A0AE"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
