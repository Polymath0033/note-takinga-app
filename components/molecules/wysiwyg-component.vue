<script setup lang="ts">
const text = ref<string>("");
const boldText = () => {
  text.value += "<b></b>";
};
const italicizeText = () => {
  text.value += "<i></i>";
};
const underlineText = () => {
  text.value += "<u></u>";
};
const strikethroughText = () => {
  text.value += "<s></s>";
};
const codeText = () => {
  text.value += "<code></code>";
};
const linkText = () => {
  text.value += "<a href=''></a>";
};
const imageText = () => {
  text.value += "<img src='' alt='' />";
};
const quoteText = () => {
  text.value += "<blockquote></blockquote>";
};
const orderedListText = () => {
  text.value += "<ol>\n<li></li>\n</ol>";
};
const unorderedListText = () => {
  text.value += "<ul>\n<li></li>\n</ul>";
};
const codeBlockText = () => {
  text.value += "<pre><code></code></pre>";
};
const h1Text = () => {
  text.value += "<h1></h1>";
};
const h2Text = () => {
  text.value += "<h2></h2>";
};
const h3Text = () => {
  text.value += "<h3></h3>";
};
const h4Text = () => {
  text.value += "<h4></h4>";
};
const h5Text = () => {
  text.value += "<h5></h5>";
};
const h6Text = () => {
  text.value += "<h6></h6>";
};

</script>
<template>
  <article class="flex flex-col h-full w-full">
    <ul class="border flex self-stretch gap-1 bg-white shadow-large">
      <li class="" ></li>
    </ul>
  </article>
  <!--<div
    class="w-full flex  border-0 outline-0"
    contenteditable="true"
    ref="text"
  ></div>
  <div class="w-full flex toolbar gap-2 bg-white ">
    <button type="button" class="text-neutral-700 text-text-preset-1" >B</button>
    <button type="button" class="italic text-text-preset-1 !font-normal text-neutral-700 ">I</button>
    
  </div>-->
</template>

<style scoped>
.toolbar {
  align-items: center;
  border: none;
  border-radius: 2px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
}
</style>
