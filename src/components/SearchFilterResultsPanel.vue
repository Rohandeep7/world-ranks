<template>
  <div
    class="absolute sm:top-1/2 sm:left-1/2 w-full sm:max-w-[90vw] bg-black-pearl sm:border-2 sm:border-[#282B30] rounded-lg sm:-translate-x-1/2 sm:-translate-y-[15%]"
  >
    <div class="m-6">
      <section class="search-area">
        <SearchArea />
      </section>
    </div>
  </div>
</template>

<script setup>
import SearchArea from "./SearchArea.vue";
</script>

<style lang="scss" scoped></style>
