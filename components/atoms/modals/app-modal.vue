<script setup lang="ts">
const props = defineProps<{ title: string; paragraph: string; show:boolean}>()
console.log(props)
</script>
<template>
  <div
    class="fixed top-0 left-0 w-full h-screen bg-neutral-950 opacity-60 z-10"
  ></div>
  <Teleport to="body">
    <dialog
      open
      class="fixed rounded-xl border border-neutral-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-fit mx-0 z-20"
    >
      <div class="px-150 flex items-start gap-200 self-stretch py-5 border-b border-b-neutral-200 ">
        <i
          class="w-10 h-10 bg-neutral-100 gap-2 flex items-center justify-center rounded-lg"
        >
        <slot name="icon"/>
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
          >
            <path
              d="M14.8521 4.37899L15.6702 6.16378H18.3097C19.1212 6.16378 19.7791 6.82166 19.7791 7.6332V8.7214C19.7791 9.27626 19.3293 9.72606 18.7745 9.72606H5.00466C4.4498 9.72606 4 9.27626 4 8.7214V7.6332C4 6.82166 4.65788 6.16378 5.46943 6.16378H8.10885L8.92705 4.37899C9.17255 3.84339 9.70775 3.5 10.2969 3.5H13.4821C14.0713 3.5 14.6065 3.84339 14.8521 4.37899Z"
              stroke="#0E121B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.24 9.80078V18.4865C18.24 20.1511 16.9073 21.5005 15.2634 21.5005H8.51661C6.8727 21.5005 5.54004 20.1511 5.54004 18.4865V9.80078"
              stroke="#0E121B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.1992 13.3164V17.8248M13.5796 13.3164V17.8248"
              stroke="#0E121B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> -->
        </i>
        <div class="flex flex-col items-start gap-[6px] [flex:1_0_0]" >
            <h6 class="text-text-preset-3 text-neutral-950 ">{{ props.title }}</h6>
            <p class="text-neutral-700 text-text-preset-5">{{ props.paragraph }}</p>
        </div>
      </div>
      <div class="flex justify-end px-5 py-4 gap-4 items-center" >
        <slot name="actions" />
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped></style>
